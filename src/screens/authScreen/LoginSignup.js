// import {
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   SafeAreaView,
// } from 'react-native';
// import React, {useState, useEffect} from 'react';
// import Toast from 'react-native-toast-message';
// import {Img} from '../../utlis/ImagesPath';
// import Otp from '../../components/Otp';
// import PrimaryBtn from '../../components/PrimaryBtn';
// import {Color} from '../../utlis/Color';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import {useSelector} from 'react-redux';

// const LoginSignup = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const {otpR} = route.params || '';
//   console.log('OTP received from the login screen:', otpR);

//   const phone = useSelector(state => state.auth.phone);
//   console.log('Phone stored in Redux:', phone);
//   const [otp, setOtp] = useState('');
//   const isExistvr = useSelector(state => state.auth.isExist);

//   useEffect(() => {
//     if (otpR) {
//       Toast.show({
//         type: 'info',
//         text1: 'Your OTP',
//         text2: `OTP: ${otpR}`,
//         position: 'bottom',
//       });
//     }
//   }, [otpR]);

//   const handleVerfiyotp = () => {
//     if (otp === otpR && isExistvr) {
//       navigation.navigate('OtpVerify');
//     } else {
//       navigation.navigate('OtpVerify');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <SafeAreaView />
//       <Toast />
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Image source={Img.goback} style={styles.arrow} />
//       </TouchableOpacity>
//       <Text style={styles.verify}>Verify your mobile number</Text>
//       <Text style={styles.sendotp}>We have sent you an OTP on your mobile</Text>
//       <Text style={styles.sendno}>number{phone}</Text>

//       <Text style={styles.enterotp}>Enter OTP here</Text>
//       <Otp setOtp={setOtp} />
//       <View style={styles.timer}>
//         <Text>00 : 29</Text>
//         <Text>Resend Code</Text>
//       </View>
//       <PrimaryBtn
//         Onpress={handleVerfiyotp}
//         txt={'Verify OTP'}
//         bgcolor={Color.primary}
//         clr={Color.white}
//         mgntop={20}
//       />
//     </View>
//   );
// };

// export default LoginSignup;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     backgroundColor: Color.white,
//   },
//   timer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 15,
//   },
//   arrow: {
//     width: 25,
//     height: 25,
//     resizeMode: 'contain',
//     marginTop: 10,
//   },
//   verify: {
//     fontSize: 18,
//     fontWeight: '700',
//     lineHeight: 22,
//     color: Color.black,
//     marginTop: 20,
//   },
//   sendotp: {
//     fontSize: 15,
//     fontWeight: '500',
//     lineHeight: 18,
//     color: '#7D7D7D',
//     marginTop: 10,
//     letterSpacing: 1,
//   },
//   sendno: {
//     fontSize: 15,
//     fontWeight: '500',
//     lineHeight: 18,
//     color: '#7D7D7D',
//   },
//   enterotp: {
//     fontSize: 16,
//     fontWeight: '500',
//     lineHeight: 20,
//     color: Color.black,
//     marginTop: 40,
//   },
// });
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {Img} from '../../utlis/ImagesPath';
import Otp from '../../components/Otp';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import {useNavigation, useRoute, useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const LoginSignup = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {otpR} = route.params || '';
  console.log('OTP received from the login screen:', otpR);

  const phone = useSelector(state => state.auth.phone);
  console.log('Phone stored in Redux:', phone);
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(29);
  const isExistvr = useSelector(state => state.auth.isExist);

  useEffect(() => {
    if (otpR) {
      Toast.show({
        type: 'info',
        text1: 'Your OTP',
        text2: `OTP: ${otpR}`,
        position: 'bottom',
      });
    }
  }, [otpR]);

  // Reset the timer when the screen is re-entered
  useFocusEffect(
    React.useCallback(() => {
      setTimer(29);
      return () => clearTimeout();
    }, [])
  );

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleVerfiyotp = () => {
    if (otp === otpR && isExistvr) {
      navigation.navigate('OtpVerify');
    } else {
      navigation.navigate('OtpVerify');
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Toast />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={Img.goback} style={styles.arrow} />
      </TouchableOpacity>
      <Text style={styles.verify}>Verify your mobile number</Text>
      <Text style={styles.sendotp}>We have sent you an OTP on your mobile</Text>
      <Text style={styles.sendno}>number {phone}</Text>

      <Text style={styles.enterotp}>Enter OTP here</Text>
      <Otp setOtp={setOtp} />
      <View style={styles.timer}>
        <Text>{timer > 0 ? `00:${timer < 10 ? '0' + timer : timer}` : 'Resend Code'}</Text>
        <TouchableOpacity onPress={() => setTimer(29)}>
          <Text style={styles.resendText}>Resend Code</Text>
        </TouchableOpacity>
      </View>
      <PrimaryBtn
        Onpress={handleVerfiyotp}
        txt={'Verify OTP'}
        bgcolor={Color.primary}
        clr={Color.white}
        mgntop={20}
      />
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
