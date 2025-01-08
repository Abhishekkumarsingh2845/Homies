import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PrimaryTxtInp from '../../components/PrimaryTxtInp';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import Account from '../../components/Account';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView/>
      <Text style={styles.create}>Create your account</Text>
      <Text style={styles.getthe}>
        Get the opportunity to stay that you dream of at an affordable price
      </Text>
      <View style={styles.fullnm}>
        <Text style={styles.txt}>Full Name*</Text>
        <PrimaryTxtInp plchldtxt={'Abhishek'} mrgtop={5} />
      </View>
      <View style={styles.fullnm}>
        <Text style={styles.txt}>Phone number*</Text>
        <PrimaryTxtInp plchldtxt={'Enter your phone number'} mrgtop={5} />
      </View>
      <View style={styles.fullnm}>
        <Text style={styles.txt}>Email ( Optional )</Text>
        <PrimaryTxtInp plchldtxt={'Email'} mrgtop={5}/>
      </View>
      <View style={styles.fullnm}>
        <Text style={styles.txt}>Referral Code </Text>
        <PrimaryTxtInp plchldtxt={'Code'} mrgtop={5}/>
      </View>
      <PrimaryBtn
        txt={'Sign Up'}
        bgcolor={Color.primary}
        clr={Color.white}
        destination={'LoginSignup'}
        mgntop={200}
       
      />
      <Account
        txt1={'Already Have an account ?'}
        txt2={'Log In'}
        dest={'Login'}
        mgntop={10}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  create:
  {
    fontSize:24,
    fontWeight:"700",
    lineHeight:28,
    color:Color.black,marginTop:15,
    
  },
  getthe:
  {
    fontSize:14,
    fontWeight:"400",
    lineHeight:19,
    color:"#787878",marginTop:10
  },
  fullnm:
  {
      marginTop:10,
  },
  txt:
  {
    fontSize:15,
    fontWeight:"500",
    lineHeight:20,
    color:Color.black
  }
});
