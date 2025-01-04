// import {Image, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import PrivacyPolicy from '../screens/drawerScreen/PrivacyPolicy';
// import {NavigationContainer} from '@react-navigation/native';
// import TermsCondition from '../screens/drawerScreen/TermsCondition';
// import AboutUs from '../screens/drawerScreen/AboutUs';
// import Faq from '../screens/drawerScreen/Faq';
// import Refferal from '../screens/drawerScreen/Refferal';
// import RateReview from '../screens/drawerScreen/RateReview';
// import ContactUs from '../screens/drawerScreen/ContactUs';
// import Help from '../screens/drawerScreen/Help';
// import ReferEarn from '../screens/drawerScreen/ReferEarn';
// import {Img} from '../utlis/ImagesPath';
// const CustomDrawerContent = props => {
//   return (
//     <View style={{height:300}}>
//       {/* Image Section */}
//       <View style={styles.imageContainer}>
//         <Image
//           source={Img.beautyicon} // Replace with your image path
//           style={styles.drawerImage}
//         />
//         <Text style={styles.imageText}>Welcome to the App</Text>
//       </View>

//       {/* Default Drawer Items */}
//       <View style={{flex: 1}}>{props.children}</View>
//     </View>
//   );
// };

// const DrawerNavigator = () => {
//   const Drawer = createDrawerNavigator();
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <CustomDrawerContent {...props} />}>
//       {/* <Drawer.Screen
//         name="PrivacyPolicy"
//         component={PrivacyPolicy}
//         options={{headerShown: false}}
//       />
//       <Drawer.Screen
//         name="TermsCondition"
//         component={TermsCondition}
//         options={{headerShown: false}}
//       />
//       <Drawer.Screen
//         name="AboutUs"
//         component={AboutUs}
//         options={{headerShown: false}}
//       /> */}
//       <Drawer.Screen
//         name="Faq"
//         component={Faq}
//         options={{headerShown: false}}
//       />
//       <Drawer.Screen
//         name="Refferal"
//         component={Refferal}
//         options={{headerShown: false}}
//       />
//       <Drawer.Screen
//         name="RateReview"
//         component={RateReview}
//         options={{headerShown: false}}
//       />
//       <Drawer.Screen
//         name="ContactUs"
//         component={ContactUs}
//         options={{headerShown: false}}
//       />
//       <Drawer.Screen
//         name="Help"
//         component={Help}
//         options={{headerShown: false}}
//       />
//       <Drawer.Screen
//         name="ReferEarn"
//         component={ReferEarn}
//         options={{headerShown: false}}
//       />
//     </Drawer.Navigator>
//   );
// };
// export default DrawerNavigator;

// const styles = StyleSheet.create({});

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import PrivacyPolicy from '../screens/drawerScreen/PrivacyPolicy';
import TermsCondition from '../screens/drawerScreen/TermsCondition';
import AboutUs from '../screens/drawerScreen/AboutUs';
import Faq from '../screens/drawerScreen/Faq';
import Refferal from '../screens/drawerScreen/Refferal';
import RateReview from '../screens/drawerScreen/RateReview';
import ContactUs from '../screens/drawerScreen/ContactUs';
import Help from '../screens/drawerScreen/Help';
import ReferEarn from '../screens/drawerScreen/ReferEarn';
import {Img} from '../utlis/ImagesPath';
import Profile from '../screens/drawerScreen/Profile';
import {useNavigation} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      {/* Image Section */}
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate('Profile')}>
        <Image
          source={Img.beautyicon} // Replace with your image path
          style={styles.drawerImage}
        />
        <View>
          <Text style={styles.imageText}>Daniela Chikitani</Text>
          <Text style={styles.imageText}>daniela@gmail.com</Text>
          <Text style={styles.imageText}>View Profile</Text>
        </View>
      </TouchableOpacity>

      {/* Default Drawer Items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false, // To hide headers for all screens
      }}>
      <Drawer.Screen name="ReferEarn" component={ReferEarn} />
      <Drawer.Screen name="RateReview" component={RateReview} />

      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="TermsCondition" component={TermsCondition} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="Faq" component={Faq} />
      <Drawer.Screen name="Refferal" component={Refferal} />

      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
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
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },
});
