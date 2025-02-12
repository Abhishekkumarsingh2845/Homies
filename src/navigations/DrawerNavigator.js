import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
import { Img } from '../utlis/ImagesPath';
import Profile from '../screens/drawerScreen/Profile';
import { useNavigation } from '@react-navigation/native';
import { FontText } from '../utlis/CustomFont';
import { Color } from '../utlis/Color';
import DocumentVerify from '../screens/drawerScreen/DocumentVerify';
import {useSelector} from 'react-redux';
import BottomTab from './BottomTab';
import HomeNavigator from './HomeNavigator';
import Home from '../screens/homeScreen/Home';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({navigation} ) => {
  // const navigation = useNavigation();
const user = useSelector(state => state.auth.user)
const drawerItems = [
  {
    label : 'Referral & Earn',
    screen : 'ReferEarn'
  },
  {
    label : 'Rate & Review',
    screen : 'RateReview'
  },
  {
    label : 'Contact Us',
    screen : 'ContactUs'
  },
  {
    label : 'Privacy Policy',
    screen : 'PrivacyPolicy'
  },

  {
    label : 'Terms & Conditions',
    screen : 'TermsCondition'
  },
  {
    label : 'About Us',
    screen : 'AboutUs'
  },
  {
    label : 'FAQ',
    screen : 'FAQ'
  },
  {
    label : 'Help',
    screen : 'Help'
  },
  {
    label : 'Document Verify',
    screen : 'DocumentVerify'
  }
]
  return (
    <View style={{flex : 1}}>
      {/* Image Section */}
  { user.token &&   <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate('Profile')}>
        <Image
          source={Img.profilepicicon} // Replace with your image path
          style={styles.drawerImage}
        />
        <View>
          <Text style={styles.imageText}>{user?.name}</Text>
          <Text style={styles.emailText}>{user?.email}</Text>
          <Text style={styles.viewprofileText}>View Profile</Text>
        </View>
      </TouchableOpacity>}

      {/* <DrawerItemList {...props} /> */}

      {
        drawerItems?.map((item , index) =>{
          return       <TouchableOpacity key={index} onPress={() => navigation.navigate(item.screen)}
          style={styles.drawerItem}>
          <Text style={styles.drawerLabel}>{item.label}</Text>
          <Image
            source={Img.lefticon}
            style={styles.drawerItemImage}
          />
        </TouchableOpacity>
        }) 
      }
          
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
        <Drawer.Screen name="BottomTab" component={BottomTab} />
        <Drawer.Screen name="HomeNavigator" component={HomeNavigator} />
      <Drawer.Screen name="Home" component={Home} />

      <Drawer.Screen
        name="ReferEarn"
        component={ReferEarn}
        options={{
          drawerLabel: () => (
            <View
              style={{
                borderBottomWidth: 1,
                justifyContent: 'center',
                paddingVertical: 3,
                borderColor: '#D9D9D9',
              }}>
              <Text style={styles.drawerLabel}>Referral & Earn</Text>
              <Image
                source={Img.lefticon}
                style={{
                  width: 10,
                  height: 10,
                  resizeMode: 'contain',
                  position: 'absolute',
                  right: 5,
                }}
              />
            </View>
          )
        }}
      />
      <Drawer.Screen
        name="RateReview"
        component={RateReview}
        options={{
          drawerLabel: () => (
            <View
              style={{
                borderBottomWidth: 1,
                justifyContent: 'center',
                paddingVertical: 3,
                borderColor: '#D9D9D9',
              }}>
              <Text style={styles.drawerLabel}>Rate & Review</Text>
              <Image
                source={Img.lefticon}
                style={{
                  width: 12,
                  height: 12,
                  resizeMode: 'contain',
                  position: 'absolute',
                  right: 5,
                }}
              />
            </View>
          )
        }}
      /> 
      <Drawer.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          // drawerIcon: () => (
          //   <Image
          //     source={Img.lefticon}
          //     style={{
          //       width: 15,
          //       height: 15,
          //       resizeMode: 'contain',
          //       position: 'absolute',
          //       right: 20,
          //     }}
          //   />
          // ),
          // drawerLabel: () => <Text style={styles.drawerLabel}>Contact Us</Text>
          drawerLabel: () => (
            <View
              style={{
                borderBottomWidth: 1,
                justifyContent: 'center',
                paddingVertical: 3,
                borderColor: '#D9D9D9',
              }}>
              <Text style={styles.drawerLabel}>Contact Us</Text>
              <Image
                source={Img.lefticon}
                style={{
                  width: 12,
                  height: 12,
                  resizeMode: 'contain',
                  position: 'absolute',
                  right: 5,
                }}
              />
            </View>
          )
        }}
      />
      <Drawer.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          // drawerIcon: () => (
          //   <Image
          //     source={Img.lefticon}
          //     style={{
          //       width: 15,
          //       height: 15,
          //       resizeMode: 'contain',
          //       position: 'absolute',
          //       right: 20,
          //     }}
          //   />
          // ),
          // drawerLabel: () => (
          //   <Text style={styles.drawerLabel}>Privacy Policy</Text>
          // ),
          drawerLabel: () => (
            <View
              style={{
                borderBottomWidth: 1,
                justifyContent: 'center',
                paddingVertical: 3,
                borderColor: '#D9D9D9',
              }}>
              <Text style={styles.drawerLabel}>Privacy Policy</Text>
              <Image
                source={Img.lefticon}
                style={{
                  width: 12,
                  height: 12,
                  resizeMode: 'contain',
                  position: 'absolute',
                  right: 5,
                }}
              />
            </View>
          )
        }}
      />
      <Drawer.Screen
        name="TermsCondition"
        component={TermsCondition}
        options={{
          // drawerIcon: () => (
          //   <Image
          //     source={Img.lefticon}
          //     style={{
          //       width: 15,
          //       height: 15,
          //       resizeMode: 'contain',
          //       position: 'absolute',
          //       right: 20,
          //     }}
          //   />
          // ),
          // drawerLabel: () => (
          //   <Text style={styles.drawerLabel}>Terms & Conditions</Text>
          // ),
          drawerLabel: () => (
            <View
              style={{
                borderBottomWidth: 1,
                justifyContent: 'center',
                paddingVertical: 3,
                borderColor: '#D9D9D9',
              }}>
              <Text style={styles.drawerLabel}>Terms & Conditions</Text>
              <Image
                source={Img.lefticon}
                style={{
                  width: 12,
                  height: 12,
                  resizeMode: 'contain',
                  position: 'absolute',
                  right: 5,
                }}
              />
            </View>
          )
        }}
      />
      <Drawer.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          // drawerIcon: () => (
          //   <Image
          //     source={Img.lefticon}
          //     style={{
          //       width: 15,
          //       height: 15,
          //       resizeMode: 'contain',
          //       position: 'absolute',
          //       right: 20,
          //     }}
          //   />
          // ),
          // drawerLabel: () => <Text style={styles.drawerLabel}>About us</Text>
          drawerLabel: () => (
            <View
              style={{
                borderBottomWidth: 1,
                justifyContent: 'center',
                paddingVertical: 3,
                borderColor: '#D9D9D9',
              }}>
              <Text style={styles.drawerLabel}>About us</Text>
              <Image
                source={Img.lefticon}
                style={{
                  width: 12,
                  height: 12,
                  resizeMode: 'contain',
                  position: 'absolute',
                  right: 5,
                }}
              />
            </View>
          )
        }}
      />

      <Drawer.Screen
        name="FAQ"
        component={FAQ}
        options={{
          // drawerIcon: () => (
          //   <Image
          //     source={Img.lefticon}
          //     style={{
          //       width: 15,
          //       height: 15,
          //       resizeMode: 'contain',
          //       position: 'absolute',
          //       right: 20,
          //     }}
          //   />
          // ),
          // drawerLabel: () => <Text style={styles.drawerLabel}>FAQ</Text>
          drawerLabel: () => (
            <View
              style={{
                borderBottomWidth: 1,
                justifyContent: 'center',
                paddingVertical: 3,
                borderColor: '#D9D9D9',
              }}>
              <Text style={styles.drawerLabel}>FAQ</Text>
              <Image
                source={Img.lefticon}
                style={{
                  width: 12,
                  height: 12,
                  resizeMode: 'contain',
                  position: 'absolute',
                  right: 5,
                }}
              />
            </View>
          )
        }}
      />

      <Drawer.Screen
        name="Help"
        component={Help}
        options={{
          // drawerIcon: () => (
          //   <Image
          //     source={Img.lefticon}
          //     style={{
          //       width: 15,
          //       height: 15,
          //       resizeMode: 'contain',
          //       position: 'absolute',
          //       right: 20,
          //     }}
          //   />
          // ),
          // drawerLabel: () => <Text style={styles.drawerLabel}>Help</Text>
          drawerLabel: () => (
            <View
              style={{
                borderBottomWidth: 1,
                justifyContent: 'center',
                paddingVertical: 3,
                borderColor: '#D9D9D9',
              }}>
              <Text style={styles.drawerLabel}>Help</Text>
              <Image
                source={Img.lefticon}
                style={{
                  width: 12,
                  height: 12,
                  resizeMode: 'contain',
                  position: 'absolute',
                  right: 5,
                }}
              />
            </View>
          )
        }}
      />
      <Drawer.Screen
        name="DocumentVerify"
        component={DocumentVerify}
        options={{
          // drawerIcon: () => (
          //   <Image
          //     source={Img.lefticon}
          //     style={{
          //       width: 15,
          //       height: 15,
          //       resizeMode: 'contain',
          //       position: 'absolute',
          //       right: 20,
          //     }}
          //   />
          // ),
          // drawerLabel: () => (
          //   <Text style={styles.drawerLabel}>DocumentVerify</Text>
          // ),
          drawerLabel: () => (
            <View
              style={{
                borderBottomWidth: 1,
                justifyContent: 'center',
                paddingVertical: 3,
                borderColor: '#D9D9D9',
              }}>
              <Text style={styles.drawerLabel}>Document Verify</Text>
              <Image
                source={Img.lefticon}
                style={{
                  width: 12,
                  height: 12,
                  resizeMode: 'contain',
                  position: 'absolute',
                  right: 5,
                }}
              />
            </View>
          )
        }}
      />
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

  drawerItem : {
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingVertical: 8,
    marginHorizontal : 15,
    marginVertical : 10,
    borderColor: '#D9D9D9',
  },
  drawerItemImage : {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    position: 'absolute',
    right: 5,
  }

});
