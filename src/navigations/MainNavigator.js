import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import ComplaintNavigator from './ComplaintNavigator';
import DrawerNavigator from './DrawerNavigator';
import BottomTab from './BottomTab';
import HomeTabNavigator from './HomeTabNavigator';
import Profile from '../screens/drawerScreen/Profile';
import PersonDoument from '../screens/drawerScreen/PersonDoument';
import Payment from '../screens/bottomTabSceen/Payment';
import Refferal from '../screens/drawerScreen/Refferal';
import PaymentNavigator from './PaymentNavigator';
import ChatNavigator from '../screens/bottomTabSceen/ChatNavigator';
import Notification from '../screens/homeScreen/Notification';
import {useSelector} from 'react-redux';
import Login from '../screens/authScreen/Login';
import LoginSignup from '../screens/authScreen/LoginSignup';
import SignUp from '../screens/authScreen/SignUp';
import OtpVerify from '../screens/authScreen/OtpVerify';
import Splash from '../screens/splashScreen/Splash';
import Intro from '../screens/authScreen/Intro';

const MainNavigation = () => {
  const {token} = useSelector(state => state.auth.user);
  console.log('token ---------------->>>>>>>>>', token);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={token ? 'DrawerNavigator' : 'Intro'}
        screenOptions={{headerShown: false}}>
        {!token ? (
          <>
            <Stack.Screen
              name="ComplaintNavigator"
              component={ComplaintNavigator}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="LoginSignup" component={LoginSignup} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="OtpVerify" component={OtpVerify} />

            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Intro" component={Intro} />

            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
            <Stack.Screen
              name="HomeTabNavigator"
              component={HomeTabNavigator}
            />
            <Stack.Screen name="ChatNavigator" component={ChatNavigator} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="PersonDoument" component={PersonDoument} />
            <Stack.Screen
              name="PaymentNavigator"
              component={PaymentNavigator}
            />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Referral" component={Refferal} />
            <Stack.Screen name="Notification" component={Notification} />
          </>
        ) : (
          <>
            <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen
              name="ComplaintNavigator"
              component={ComplaintNavigator}
            />
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
            <Stack.Screen
              name="HomeTabNavigator"
              component={HomeTabNavigator}

            />
            <Stack.Screen name="ChatNavigator" component={ChatNavigator} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="PersonDoument" component={PersonDoument} />
            <Stack.Screen
              name="PaymentNavigator"
              component={PaymentNavigator}
            />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Referral" component={Refferal} />
            <Stack.Screen name="Notification" component={Notification} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
