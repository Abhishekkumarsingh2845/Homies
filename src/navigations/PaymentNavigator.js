import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PaymentForm from '../screens/paymentScreen/PaymentForm';
import PaymentSucces from '../screens/paymentScreen/PaymentSucces';

const PaymentNavigator = () => {
    const Stack=createStackNavigator();
  return (
   <Stack.Navigator>
    <Stack.Screen name='PaymentForm' component={PaymentForm}/>
    <Stack.Screen name='PaymentSucces' component={PaymentSucces}/>
   </Stack.Navigator>
  )
}

export default PaymentNavigator

const styles = StyleSheet.create({})

