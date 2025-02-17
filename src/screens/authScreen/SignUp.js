import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import PrimaryTxtInp from '../../components/PrimaryTxtInp';
import PrimaryBtn from '../../components/PrimaryBtn';
import { Color } from '../../utlis/Color';
import Account from '../../components/Account';
import { post } from '../../utlis/Api';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setExist, setToken, setEmail, setName, setUser } from '../../store/AuthSlice';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';
import { Formik } from 'formik'

const SignUp = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [phonee, setPhone] = useState('');
  const [emailid, setEmailId] = useState(null);
  const [nameId, setNameId] = useState('');
  const [token, settoken] = useState(null);
  const dispatch = useDispatch();
  const emaildredux = useSelector(state => state.auth);
  const [loading , setLoading] = useState(false)

  const handleSignUp = async (values) => {
    setLoading(true)
    console.log("res-------" , values)
    const data = {
      name : values.name,
      email : values?.email,
      phone : values?.phone
    }
    try {
      const response = await post('login', data);
      if (response?.success) {
        dispatch(setUser(response));
        navigation.navigate('DrawerNavigator');
      }
    } catch (error) {
      console.log('error in sign up submit', error);
    }
    setLoading(false)

  };
  const handleEmailChange = text => {
    setEmailId(text);
    // dispatch(setEmail(text));
  };

  const handleName = text => {
    setNameId(text);
    // dispatch(setName(text));
  };

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    refCode: ''
  }

  const signUpFields = [
    {
      name: 'name',
      error: '',
      value: '',
      placeholder: 'Enter Full Name',
      keyboardType: 'default',
      label: 'Full Name*',
    },
    {
      name: 'phone',
      error: '',
      value: '',
      placeholder: 'Enter Your Phone Number',
      keyboardType: 'numeric',
      label: 'Phone number*',
    },
    {
      name: 'email',
      error: '',
      value: '',
      placeholder: 'Enter Your Email',
      label: 'Email ( Optional )',
      keyboardType: 'default',

    },

    {
      name: 'refCode',
      error: '',
      value: '',
      placeholder: 'Code',
      label: 'Referral Code',
      keyboardType: 'default',

    }
  ]

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters long'),
    email: Yup.string()
      .email('Enter a valid email address')
      .notRequired(),

    phone: Yup.string()
      .required('Phone number is required')
      .matches(
        /^[0-9]{10}$/,
        'Phone number must be exactly 10 digits'
      ),
    refCode: Yup.string()
      .notRequired(),  // Referral code is optional (not required)
  });
  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView />
      <Text style={styles.create}>Create an account</Text>
      <Text style={styles.getthe}>
        Get the opportunity to stay that you dream of at an affordable price
      </Text>
      {/* <View style={styles.fullnm}>
        <Text style={styles.txt}>Full Name*</Text>
        <PrimaryTxtInp
          plchldtxt={'Abhishek'}
          val={nameId}
          onChangeText={handleName}
          mrgtop={5}
        />
      </View>
      <View style={styles.fullnm}>
        <Text style={styles.txt}>Phone number*</Text>
        <PrimaryTxtInp
          val={phonee}
          onChangeText={setPhone}
          plchldtxt={'Enter your phone number'}
          mrgtop={5}
          maxlen={10}
          keytype={'phone-pad'}
        />
      </View>
      <View style={styles.fullnm}>
        <Text style={styles.txt}>Email ( Optional )</Text>
        <PrimaryTxtInp
          plchldtxt={'Email'}
          val={emailid}
          onChangeText={handleEmailChange}
          mrgtop={5}
          maxlen={50}
        />
      </View>
      <View style={styles.fullnm}>
        <Text style={styles.txt}>Referral Code </Text>
        <PrimaryTxtInp plchldtxt={'Code'} mrgtop={5} />
      </View>
      <PrimaryBtn
        txt={'Sign Up'}
        bgcolor={Color.primary}
        clr={Color.white}
        destination={'LoginSignup'}
        mgntop={200}
        Onpress={() => handleSignUp()}
      /> */}



      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSignUp}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {
          ({ values, errors, setFieldValue, handleSubmit }) => {


            return (
              <>
                {
                  signUpFields.map((item, index) => {

                    return (
                      <View style={styles.fullnm}>
                        <Text style={styles.txt}>{item.label}</Text>
                      <PrimaryTxtInp
                        value={values[item.name]}
                        placeholder={item.placeholder}
                        error={errors[item.name]}
                        setValue={setFieldValue}
                        name={item.name}
                        label={item.label}
                        mrgtop={5}
                        maxlen={50}
                        keyboardType={item.keyboardType}
                      />
                      </View>


                    )


                  })
                }

<PrimaryBtn
loading={loading}
        txt={'Sign Up'}
        bgcolor={Color.primary}
        clr={Color.white}
        destination={'LoginSignup'}
        mgntop={200}
        Onpress={handleSubmit}
      />
              </>
            )

          }
        }
      </Formik>

      <Account
        txt1={'Already Have an account ?'}
        txt2={'Log In'}
        dest={'Login'}
        mgntop={10}
      />
      <Toast />
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  create: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    color: Color.black,
    marginTop: 15,
  },
  getthe: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    color: '#787878',
    marginTop: 10,
  },
  fullnm: {
    marginTop: 10,
  },
  txt: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    color: Color.black,
  },
});
