import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PaymentForm from '../screens/paymentScreen/PaymentForm';
import PaymentSucces from '../screens/paymentScreen/PaymentSucces';
import Payment from '../screens/bottomTabSceen/Payment';

const PaymentNavigator = () => {
    const Stack=createStackNavigator();
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Payment' component={Payment}/>
    <Stack.Screen name='PaymentForm' component={PaymentForm}/>
    <Stack.Screen name='PaymentSucces' component={PaymentSucces}/>
   </Stack.Navigator>
  )
}

export default PaymentNavigator

const styles = StyleSheet.create({})


