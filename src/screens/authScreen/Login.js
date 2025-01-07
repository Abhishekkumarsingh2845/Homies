
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../utlis/Color';
import PrimaryBtn from '../../components/PrimaryBtn';
import Account from '../../components/Account';
import PrimaryTxtInp from '../../components/PrimaryTxtInp';

const Login = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView/>
      <Text style={styles.logIn}>Log In</Text>
      <Text style={styles.getthe}>
        Get the opportunity to stay that you dream of at an affordable price
      </Text>
      <Text style={styles.phno}>Phone number</Text>
      <PrimaryTxtInp plchldtxt={"Enter your phone number"} mrgtop={10}/>
      <PrimaryBtn
        txt={'Log In'}
        clr={Color.white}
        bgcolor={Color.primary}
        brdcolor={Color.primary}
        brdwdth={1.5}
        destination={'LoginSignup'}
        mgntop={430}
      />
      <PrimaryBtn
        txt={'Continue as a Guest'}
        clr={Color.primary}
        bgcolor={Color.white}
        brdcolor={Color.primary}
        brdwdth={1.5}
        destination={'LoginSignup'}
        mgntop={20}
      />
      <Account
        txt1={"Don't have an account ?"}
        txt2={'Sign Up'}
        dest={'SignUp'}
        mgntop={15}
      />
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
