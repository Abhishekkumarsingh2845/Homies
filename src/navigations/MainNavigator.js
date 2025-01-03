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

const MainNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen
          name="ComplaintNavigator"
          component={ComplaintNavigator}
        />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
