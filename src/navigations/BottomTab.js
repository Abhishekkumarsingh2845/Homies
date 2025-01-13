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
import HomeTabNavigator from './HomeTabNavigator';
import ComplaintNavigator from './ComplaintNavigator';
import PaymentNavigator from './PaymentNavigator';
import Chat from '../screens/ChatScreen/Chat';
import ComplaintScr from '../screens/c&sScreen/ComplaintScr';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFB83A', // Color when tab is selected
        tabBarInactiveTintColor: '#AFAEAE',
      }}>
             {/* <Stack.Screen name="Home" component={Home} /> */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon
              name="home"
              size={20}
              color={focused ? '#FFB83A' : '#AFAEAE'}
            />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./../assets/images/wallet.png')}
              style={[
                styles.imgstyle,
                {tintColor: focused ? '#FFB83A' : '#AFAEAE'},
              ]}
            />
          ),
          tabBarLabel: 'Payment',
        }}
      />
      <Tab.Screen
        name="ComplaintNavigator"
        component={ComplaintNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./../assets/images/c/d.png')}
              style={[
                styles.imgstyle,
                {tintColor: focused ? '#FFB83A' : '#AFAEAE'},
              ]}
            />
          ),
          tabBarLabel: 'C/D',
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./../assets/images/chat.png')}
              style={[
                styles.imgstyle,
                {tintColor: focused ? '#FFB83A' : '#AFAEAE'},
              ]}
            />
          ),
          tabBarLabel: 'Chat',
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./../assets/images/store.png')}
              style={[
                styles.imgstyle,
                {tintColor: focused ? '#FFB83A' : '#AFAEAE'},
              ]}
            />
          ),
          tabBarLabel: 'Store',
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
