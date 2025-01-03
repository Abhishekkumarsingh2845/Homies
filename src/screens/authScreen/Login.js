import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import {useNavigation} from '@react-navigation/native';
import Account from '../../components/Account';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.logIn}>Log In</Text>
      <Text style={styles.getthe}>
        Get the opportunity to stay that you dream of at an affordable price
      </Text>
      <Text style={styles.phno}>Phone number</Text>

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
    lineHeight: '28',
    color: Color.black,
    marginTop: 15,
  },
  getthe: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.6,
    color: Color.black,
    marginTop: 15,
  },
  phno: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: Color.black,
    marginTop: 15,
  },
  ss: {
    borderWidth: 1,
    borderColor: 'white',
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    color: 'black',
    paddingHorizontal: 10,
  },
});
