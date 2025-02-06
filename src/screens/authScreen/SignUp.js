import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import PrimaryTxtInp from '../../components/PrimaryTxtInp';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import Account from '../../components/Account';
import {post} from '../../utlis/Api';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {setExist, setToken, setEmail, setName} from '../../store/AuthSlice';
import Toast from 'react-native-toast-message';

const SignUp = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [phonee, setPhone] = useState('');
  const [emailid, setEmailId] = useState(null);
  const [nameId, setNameId] = useState('');
  const [token, settoken] = useState(null);
  const dispatch = useDispatch();
  const emaildredux = useSelector(state => state.auth);

  console.log('email id in the redux', emaildredux);
  const handleSignUp = async () => {
    try {
      const response = await post('login', {phone: phonee});
      console.log('succes in the Sign Up', response);
      if (response?.success) {
        dispatch(setToken(response.data.jwtToken));
        dispatch(setPhone(response.data.phone));
        console.log('jwt token stored in the redux->>', setToken());
      }

      dispatch(setExist(true));
      navigation.navigate('LoginSignup');
    } catch (error) {
      console.log('error in sign up submit');
    }
  };
  const handleEmailChange = text => {
    setEmailId(text);
    dispatch(setEmail(text));
  };

  const handleName = text => {
    setNameId(text);
    dispatch(setName(text));
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.create}>Create your account</Text>
      <Text style={styles.getthe}>
        Get the opportunity to stay that you dream of at an affordable price
      </Text>
      <View style={styles.fullnm}>
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
      />
      <Account
        txt1={'Already Have an account ?'}
        txt2={'Log In'}
        dest={'Login'}
        mgntop={10}
      />
      <Toast />
    </View>
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
