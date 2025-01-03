import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/bottomTabSceen/Home';
import Payment from '../screens/bottomTabSceen/Payment';

import Cd from '../screens/bottomTabSceen/Cd';
import Store from '../screens/bottomTabSceen/Store';
import HomeIcon from 'react-native-vector-icons/Octicons';
import {Img} from '../utlis/ImagesPath';
import ChatNavigator from '../screens/bottomTabSceen/ChatNavigator';
import ComplaintForm from '../screens/c&sScreen/ComplaintForm';
import ComplaintFormFill from '../screens/c&sScreen/ComplaintFormFill';
import Disputes from '../screens/c&sScreen/Disputes';
import DisputesDetail from '../screens/c&sScreen/DisputesDetail';
import DisputesFormFill from '../screens/c&sScreen/DisputesFormFill';
import PaymentForm from '../screens/paymentScreen/PaymentForm';
import PaymentSucces from '../screens/paymentScreen/PaymentSucces';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarIcon: () => <HomeIcon name="home" size={20} />}}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentForm}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./../assets/images/wallet.png')}
              style={styles.imgstyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./../assets/images/c/d.png')}
              style={styles.imgstyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cd"
        component={DisputesFormFill}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./../assets/images/chat.png')}
              style={styles.imgstyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./../assets/images/store.png')}
              style={styles.imgstyle}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  imgstyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
