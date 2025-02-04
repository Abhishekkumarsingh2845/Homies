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
import {useSelector} from 'react-redux';

const AuthNavigator = () => {
  const Stack = createStackNavigator();
  const isExist = useSelector(state => state.auth.isExist);
  console.log('cureent isExits->>', isExist);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Splash'}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Intro" component={Intro} />
      {isExist ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="LoginSignup" component={LoginSignup} />
          {/* <Stack.Screen name="OtpVerify" component={OtpVerify} /> */}
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="LoginSignup" component={LoginSignup} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="OtpVerify" component={OtpVerify} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
