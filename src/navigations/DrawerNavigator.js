import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import PrivacyPolicy from '../screens/drawerScreen/PrivacyPolicy';
import TermsCondition from '../screens/drawerScreen/TermsCondition';
import AboutUs from '../screens/drawerScreen/AboutUs';
import FAQ from '../screens/drawerScreen/Faq';
import Refferal from '../screens/drawerScreen/Refferal';
import RateReview from '../screens/drawerScreen/RateReview';
import ContactUs from '../screens/drawerScreen/ContactUs';
import Help from '../screens/drawerScreen/Help';
import ReferEarn from '../screens/drawerScreen/ReferEarn';
import {Img} from '../utlis/ImagesPath';
import Profile from '../screens/drawerScreen/Profile';
import {useNavigation} from '@react-navigation/native';
import {FontText} from '../utlis/CustomFont';
import {Color} from '../utlis/Color';
import DocumentVerify from '../screens/drawerScreen/DocumentVerify';
import {useSelector} from 'react-redux';
import BottomTab from './BottomTab';
import HomeNavigator from './HomeNavigator';
import Home from '../screens/homeScreen/Home';
import AllHome from '../screens/homeScreen/AllHome';
import BookMark from '../screens/homeScreen/BookMark';
import SortbyScreen from '../screens/homeScreen/SortbyScreen';
import LocationSearch from '../screens/homeScreen/LocationSearch';
import Notification from '../screens/homeScreen/Notification';
import FilterScreen from '../screens/homeScreen/FilterScreen';
import PropertyDetail from '../screens/homeScreen/PropertyDetail';
import PaymentForm from '../screens/paymentScreen/PaymentForm';
import HostelRentOut from '../screens/homeScreen/HostelRentOut';
import PaymentHomeForm from '../screens/homeScreen/PaymentHomeForm';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({navigation}) => {
  // const navigation = useNavigation();
  const user = useSelector(state => state.auth.user);
  const drawerItems = [
    {
      label: 'Referral & Earn',
      screen: 'ReferEarn',
    },
    {
      label: 'Rate & Review',
      screen: 'RateReview',
    },
    {
      label: 'Contact Us',
      screen: 'ContactUs',
    },
    {
      label: 'Privacy Policy',
      screen: 'PrivacyPolicy',
    },

    {
      label: 'Terms & Conditions',
      screen: 'TermsCondition',
    },
    {
      label: 'About Us',
      screen: 'AboutUs',
    },
    {
      label: 'FAQ',
      screen: 'FAQ',
    },
    
    {
      label: 'Document Verify',
      screen: 'DocumentVerify',
    },
  ];
  return (
    <View style={{flex: 1}}>
      {/* Image Section */}
      {user.token && (
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            source={{ uri: user?.profileImage }} 
            style={styles.drawerImage}
          />
          <View>
            <Text style={styles.imageText}>{user?.name}</Text>
            <Text style={styles.emailText}>{user?.email}</Text>
            <Text style={styles.viewprofileText}>View Profile</Text>
          </View>
        </TouchableOpacity>
      )}

      {/* <DrawerItemList {...props} /> */}

      {drawerItems?.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.screen)}
            style={styles.drawerItem}>
            <Text style={styles.drawerLabel}>{item.label}</Text>
            <Image source={Img.lefticon} style={styles.drawerItemImage} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeNavigator"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="HomeNavigator" component={HomeNavigator} />
      <Drawer.Screen name="BottomTab" component={BottomTab} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="ReferEarn" component={ReferEarn} />
      <Drawer.Screen name="RateReview" component={RateReview} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="TermsCondition" component={TermsCondition} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="FAQ" component={FAQ} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="DocumentVerify" component={DocumentVerify} />

      <Drawer.Screen name="AllHome" component={AllHome} />
      <Drawer.Screen name="BookMark" component={BookMark} />
      <Drawer.Screen name="SortbyScreen" component={SortbyScreen} />
      <Drawer.Screen name="LocationSearch" component={LocationSearch} />
      {/* <Stack.Screen name="HostelRentOut" component={HostelRentOut} /> */}
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="FilterScreen" component={FilterScreen} />
      <Drawer.Screen name="PropertyDetail" component={PropertyDetail} />
      <Drawer.Screen name="PaymentForm" component={PaymentForm} />
      <Drawer.Screen name="HostelRentOut" component={HostelRentOut} />
      <Drawer.Screen name="PaymentHomeForm" component={PaymentHomeForm} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    padding: 20,
    // borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
  },
  drawerImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 50, // Makes it circular if the image is square
  },
  imageText: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 12,
    fontFamily: FontText.bold,
    color: Color.black,
  },
  emailText: {
    marginLeft: 10,

    fontSize: 12,
    fontFamily: FontText.light,
    color: Color.clr73,
  },
  viewprofileText: {
    marginLeft: 10,

    fontSize: 12,
    fontFamily: FontText.light,
    color: Color.black,
  },

  drawerLabel: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
  },

  drawerItem: {
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingVertical: 8,
    marginHorizontal: 15,
    marginVertical: 10,
    borderColor: '#D9D9D9',
  },
  drawerItemImage: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    position: 'absolute',
    right: 5,
  },
});
