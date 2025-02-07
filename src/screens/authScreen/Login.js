import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../utlis/Color';
import PrimaryBtn from '../../components/PrimaryBtn';
import Account from '../../components/Account';
import PrimaryTxtInp from '../../components/PrimaryTxtInp';
import {ScreenDimensions} from '../../utlis/DimensionApi';
import {post} from '../../utlis/Api';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setExist, setPhone} from '../../store/AuthSlice';
import Toast from 'react-native-toast-message';

const Login = () => {
  const [phoneNo, setPhone] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogIn = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await post('validate', {
        phone: phoneNo,
      });
      // dispatch(setPhone(phoneNo));
      const isExistcheck = response?.data?.isExist;
      navigation.navigate('LoginSignup', {otpR: response.data.otp , isExist : isExistcheck , phoneNo : phoneNo});
      // dispatch(setExist(isExistcheck));
      // setError('Login Failed');
    
    } catch (error) {
      console.log('Error in Logging' , error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.logIn}>Log In</Text>
      <Text style={styles.getthe}>
        Get the opportunity to stay that you dream of at an affordable price
      </Text>
      <Text style={styles.phno}>Phone number</Text>
      <PrimaryTxtInp
        plchldtxt={'Enter your phone number'}
        mrgtop={10}
        val={phoneNo} 
        onChangeText={setPhone}
      />
      <PrimaryBtn
        txt={'Log In'}
        clr={Color.white}
        bgcolor={Color.primary}
        brdcolor={Color.primary}
        brdwdth={1.5}
        destination={'LoginSignup'}
        mgntop={ScreenDimensions.screenHeight * 0.4}
        Onpress={() => handleLogIn()}
      />
      <PrimaryBtn
        txt={'Continue as a Guest'}
        Onpress={() => navigation.navigate('LoginSignup')}
        clr={Color.primary}
        bgcolor={Color.white}
        brdcolor={Color.primary}
        brdwdth={1.5}
        destination={'LoginSignup'}
        mgntop={ScreenDimensions.screenHeight * 0.03}
      />
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
