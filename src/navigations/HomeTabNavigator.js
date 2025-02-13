import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FoodMenu from '../screens/hometabScreen/FoodMenu';
import Home from '../screens/bottomTabSceen/Home';
import Notification from '../screens/homeScreen/Notification';

const HomeTabNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="FoodMenu" component={FoodMenu} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

export default HomeTabNavigator;

const styles = StyleSheet.create({});
