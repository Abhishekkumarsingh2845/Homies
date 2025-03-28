import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {Img} from '../../utlis/ImagesPath';
import Otp from '../../components/Otp';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../store/AuthSlice';
import {post} from '../../utlis/Api';

const LoginSignup = () => {
  const {fcmToken} = useSelector((state) => state?.setFcmToken)
  console.log("fcmToken--------------",fcmToken)
  const navigation = useNavigation();
  const route = useRoute();
  const {otpR, isExist, phoneNo} = route.params || '';

  const phone = useSelector(state => state.auth.phone);
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');
  const [originalOtp, setOriginalOtp] = useState();
  const [timer, setTimer] = useState(29);
  const isExistvr = useSelector(state => state.auth.isExist);

  useEffect(() => {
    setOriginalOtp(otpR);
  }, [otpR]);

  useEffect(() => {
    if (originalOtp) {
      Toast.show({
        type: 'success',
        text1: 'Your OTP',
        text2: `OTP: ${originalOtp}`,
        position: 'top',
      });
    }
  }, [originalOtp]);

  const handleVerfiyotp = async () => {
    const data = {
      phone : phoneNo ,
      userType : "User",
      deviceType : Platform?.OS,
      deviceToken : fcmToken
    }
    // / Check if OTP is blank
    if (!otp || otp.join('').trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter OTP',
        position: 'bottom',
      });
      return; // Stop further execution
    } else if (!isExist) {
      if (otp?.join('') !== originalOtp) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: `Incorrect Otp`,
          position: 'bottom',
        });
      } else {
        console.log('isExist====', isExist);
        navigation.navigate('SignUp' ,data);
        return;
      }
    } else if (otp?.join('') == originalOtp) {
      console.log('if otp=====');

      try {

        const response = await post('login', data);
        console.log("login data ----------------------" , response)
        if (response?.success) {
          // dispatch(setUser(response));
          navigation.navigate('OtpVerify', {
            isExist: isExist,
            response: response,
          });
        }
      } catch (error) {
        console.log('error in sign up submit 2', error);
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `Incorrect Otp`,
        position: 'bottom',
      });
    }
  };

  const resendOtp = async () => {
    const response = await post('validate', {
      phone: phoneNo,
    });
    let otp = response.data.otp;
    if (otp) setOriginalOtp(otp);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={Img.goback} style={styles.arrow} />
      </TouchableOpacity>
      <Text style={styles.verify}>Verify your mobile number</Text>
      <Text style={styles.sendotp}>We have sent you an OTP on your mobile</Text>
      <Text style={styles.sendno}>number {phone}</Text>

      <Text style={styles.enterotp}>Enter OTP here</Text>
      <Otp setOtp={setOtp} />
      <View style={styles.timer}>
        <Text>00 : 29</Text>

        <Text onPress={resendOtp}>Resend Code</Text>
      </View>
      <PrimaryBtn
        Onpress={handleVerfiyotp}
        txt={'Verify OTP'}
        bgcolor={Color.primary}
        clr={Color.white}
        mgntop={20}
      />
      <Toast />
    </View>
  );
};

export default LoginSignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Color.white,
  },
  timer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  resendText: {
    color: Color.primary,
    fontWeight: '600',
  },
  arrow: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginTop: 10,
  },
  verify: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    color: Color.black,
    marginTop: 20,
  },
  sendotp: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18,
    color: '#7D7D7D',
    marginTop: 10,
    letterSpacing: 1,
  },
  sendno: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18,
    color: '#7D7D7D',
  },
  enterotp: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: Color.black,
    marginTop: 40,
  },
});
