import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OtpVerify from '../screens/authScreen/OtpVerify';
import Splash from '../screens/splashScreen/Splash';
import Intro from '../screens/authScreen/Intro';
import Login from '../screens/authScreen/Login';
import LoginSignup from '../screens/authScreen/LoginSignup';
import SignUp from '../screens/authScreen/SignUp';
import Home from '../screens/homeScreen/Home';
import AllHome from '../screens/homeScreen/AllHome';
import BookMark from '../screens/homeScreen/BookMark';


const AuthNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Splash'}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Otpverify" component={OtpVerify} />
     <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginSignup" component={LoginSignup} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
