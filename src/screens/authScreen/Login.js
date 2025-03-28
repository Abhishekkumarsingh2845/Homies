import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Color } from '../../utlis/Color';
import PrimaryBtn from '../../components/PrimaryBtn';
import PrimaryTxtInp from '../../components/PrimaryTxtInp';
import { ScreenDimensions } from '../../utlis/DimensionApi';
import { post } from '../../utlis/Api';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { getToken } from '../../utlis/Notification';

const Login = () => {
  const [phoneNo, setPhone] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { latitude, longitude, name: placeName } = useSelector(state => state.location);
  const { fcmToken } = useSelector((state) => state?.setFcmToken)

  console.log("login screen--------", latitude, placeName)

  const handleLogIn = async values => {
    setLoading(true);
    setError(null);

    try {
      const response = await post('validate', {
        phone: values.phone,
      });
      // dispatch(setPhone(phoneNo));
      const isExistcheck = response?.data?.isExist;
      navigation.navigate('LoginSignup', {
        otpR: response.data.otp,
        isExist: isExistcheck,
        phoneNo: values.phone,
      });
      // dispatch(setExist(isExistcheck));
      // setError('Login Failed');
    } catch (error) {
      console.log('Error in Logging', error);
      Toast.show({
        type: 'error',
        text1: 'Error in Login',
        text2: error.message,
        position: 'bottom',
      });
    } finally {
      setLoading(false);
    }
  };

  const validationSchema = Yup.object({
    phone: Yup.string()
      .required('Phone number is required')
      .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
      .notOneOf(['0000000000'], 'Invalid Phone Number'),
  });

  useEffect(() => {
    getToken()
  }, [])


  const handleGuestFlow = async () => {
    console.log("sachin---dugeufue")
    const data = {
      userType: "Guest",
      deviceType: Platform?.OS,
      deviceToken: fcmToken

    }
    try {

      const response = await post('login', data);
      console.log("guest data ----------------------", response)
      if (response?.success) {
        navigation.navigate('DrawerNavigator');
      }
    } catch (error) {
      console.log('error in sign up submit 2', error);
    }

  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.logIn}>Log In</Text>
      <Text style={styles.getthe}>
        Get the opportunity to stay that you dream of at an affordable price
      </Text>
      {/* <Text style={styles.phno}>Phone number</Text>
      <PrimaryTxtInp
        plchldtxt={'Enter your phone number'}
        mrgtop={10}
        val={phoneNo}
        onChangeText={setPhone}
      /> */}

      <Formik
        initialValues={{ phone: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogIn}
        validateOnChange={false}
        validateOnBlur={false}>
        {({ values, errors, setFieldValue, handleSubmit }) => {
          return (
            <>
              <Text style={styles.phno}>Phone number</Text>
              <PrimaryTxtInp
                maxlen={10}
                value={values.phone}
                keyboardType={'numeric'}
                placeholder={'Enter your phone number'}
                error={errors.phone}
                setValue={setFieldValue}
                name={'phone'}
                label={'Phone number'}
                mrgtop={10}
              />

              <PrimaryBtn
                txt={'Log In'}
                clr={Color.white}
                bgcolor={Color.primary}
                brdcolor={Color.primary}
                brdwdth={1.5}
                destination={'LoginSignup'}
                mgntop={ScreenDimensions.screenHeight * 0.4}
                Onpress={handleSubmit}
                loading={loading}
              />
            </>
          );
        }}
      </Formik>
      <PrimaryBtn
        txt={'Continue as a Guest'}
        // Onpress={() => navigation.navigate('LoginSignup')}
        clr={Color.primary}
        bgcolor={Color.white}
        brdcolor={Color.primary}
        brdwdth={1.5}
        Onpress={handleGuestFlow}
        // destination={'LoginSignup'}
        mgntop={ScreenDimensions.screenHeight * 0.03}
      />
      {/* <PrimaryBtn
        txt={'Log In'}
        clr={Color.white}
        bgcolor={Color.primary}
        brdcolor={Color.primary}
        brdwdth={1.5}
        destination={'LoginSignup'}
        mgntop={ScreenDimensions.screenHeight * 0.4}
        Onpress={() => handleLogIn()}
      /> */}

      {/* <Account
        txt1={"Don't have an account ?"}
        txt2={' Sign Up'}
        dest={'SignUp'}
        mgntop={ScreenDimensions.screenHeight * 0.009}
      /> */}
      <Toast />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Color.white,
  },
  signup: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  logIn: {
    fontSize: 24,
    fontWeight: '700',
    // lineHeight: '28',
    color: Color.black,
    marginTop: 15,
  },
  getthe: {
    fontSize: 14,
    fontWeight: '400',
    // lineHeight: 19.6,
    color: Color.black,
    marginTop: 15,
  },
  phno: {
    fontSize: 14,
    fontWeight: '500',
    // lineHeight: 20,
    color: Color.black,
    marginTop: 15,
  },
});
