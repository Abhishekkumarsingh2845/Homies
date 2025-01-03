import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import PrivacyPolicy from '../screens/drawerScreen/PrivacyPolicy';
import {NavigationContainer} from '@react-navigation/native';
import TermsCondition from '../screens/drawerScreen/TermsCondition';
import AboutUs from '../screens/drawerScreen/AboutUs';
import Faq from '../screens/drawerScreen/Faq';
import Refferal from '../screens/drawerScreen/Refferal';
import RateReview from '../screens/drawerScreen/RateReview';
import ContactUs from '../screens/drawerScreen/ContactUs';
import Help from '../screens/drawerScreen/Help';
import ReferEarn from '../screens/drawerScreen/ReferEarn';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="ReferEarn">
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{headerShown:false}} />
      <Drawer.Screen name="TermsCondition" component={TermsCondition} options={{headerShown:false}}  />
      <Drawer.Screen name="AboutUs" component={AboutUs} options={{headerShown:false}} />
      <Drawer.Screen name="Faq" component={Faq} options={{headerShown:false}} />
      <Drawer.Screen name="Refferal" component={Refferal} options={{headerShown:false}} />
      <Drawer.Screen name="RateReview" component={RateReview} options={{headerShown:false}} />
      <Drawer.Screen name="ContactUs" component={ContactUs} options={{headerShown:false}} />
      <Drawer.Screen name="Help" component={Help} options={{headerShown:false}} />
      <Drawer.Screen name="ReferEarn" component={ReferEarn} options={{headerShown:false}} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;

const styles = StyleSheet.create({});
