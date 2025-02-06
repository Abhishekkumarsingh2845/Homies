import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import OtpVerify from '../screens/authscreen/OtpVerify';
// import Splash from '../screens/splashscreen/Splash';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
// import BottomTab from './BottomTab';
import ComplaintNavigator from './ComplaintNavigator';
import DrawerNavigator from './DrawerNavigator';
// import HomeNavigator from './HomeNavigator';
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

// const MainNavigation = () => {
//   const Stack = createStackNavigator();
//   const token = useSelector(state => state.auth.token);
//   console.log("token at the starting at main navigation",token);
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="AuthNavigator"
//         screenOptions={{headerShown: false}}>

//         <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
//         <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
//         <Stack.Screen name="BottomTab" component={BottomTab} />
//         <Stack.Screen
//           name="ComplaintNavigator"
//           component={ComplaintNavigator}
//         />
//         <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
//         <Stack.Screen name="Home" component={DrawerNavigator} />
//         <Stack.Screen name="ChatNavigator" component={ChatNavigator} />
//         <Stack.Screen name="HomeTabNavigator" component={HomeTabNavigator} />
//         <Stack.Screen name="Profile" component={Profile} />
//         <Stack.Screen name="PersonDoument" component={PersonDoument} />
//         <Stack.Screen name="PaymentNavigator" component={PaymentNavigator} />
//         <Stack.Screen name="Payment" component={Payment} />
//         <Stack.Screen name="Referral" component={Refferal} />
//         <Stack.Screen name="Notification" component={Notification} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default MainNavigation;

const MainNavigation = () => {
  const Stack = createStackNavigator();
  const token = useSelector(state => state.auth.token);
  console.log('Token at the start of MainNavigation:', token);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={token ? 'HomeNavigator' : 'AuthNavigator'}
        screenOptions={{headerShown: false}}>
        {!token ? (
          <>
            <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
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
