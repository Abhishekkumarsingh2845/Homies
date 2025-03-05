import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ComplaintForm from '../screens/c&sScreen/ComplaintForm';
import ComplaintFormFill from '../screens/c&sScreen/ComplaintFormFill';
import Disputes from '../screens/c&sScreen/Disputes';
import DisputesDetail from '../screens/c&sScreen/DisputesDetail';
import DisputesFormFill from '../screens/c&sScreen/DisputesFormFill';
import {createStackNavigator} from '@react-navigation/stack';
import Complaint from '../components/Complaint';
import ComplaintScr from '../screens/c&sScreen/ComplaintScr';

const ComplaintNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ComplaintScr">
      <Stack.Screen name="ComplaintScr" component={ComplaintScr} />
      <Stack.Screen name="ComplaintForm" component={ComplaintForm} />
      <Stack.Screen name="ComplaintFormFill" component={ComplaintFormFill} />
      <Stack.Screen name="Disputes" component={Disputes} />
      <Stack.Screen name="DisputesFormFill" component={DisputesFormFill} />
      <Stack.Screen name="DisputesDetail" component={DisputesDetail} />
    </Stack.Navigator>
  );
};

export default ComplaintNavigator;

const styles = StyleSheet.create({});
