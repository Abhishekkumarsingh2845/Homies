import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/homeScreen/Home';
import AllHome from '../screens/homeScreen/AllHome';
import BookMark from '../screens/homeScreen/BookMark';
import SortbyScreen from '../screens/homeScreen/SortbyScreen';
import PropertyDetail from '../screens/homeScreen/PropertyDetail';
import HostelRentOut from '../screens/homeScreen/HostelRentOut';
import Notification from '../screens/homeScreen/Notification';

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AllHome" component={AllHome} />
      <Stack.Screen name="BookMark" component={BookMark} />
      <Stack.Screen name="SortbyScreen" component={SortbyScreen} />
      <Stack.Screen name="PropertyDetail" component={PropertyDetail} />
      <Stack.Screen name="HostelRentOut" component={HostelRentOut} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});