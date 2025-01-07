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
import { FontText } from '../utlis/CustomFont';
import { Color } from '../utlis/Color';

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
      <Drawer.Screen
        name="ReferEarn"
        component={ReferEarn}
        options={{
          drawerIcon: () => (
            <Image
              source={Img.lefticon}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
                position: 'absolute',
                right: 20,
              }}
            />
          ),
          drawerLabel: () => (
            <Text style={styles.drawerLabel}>Referral & Earn</Text>
          ),
        }}
      />
      <Drawer.Screen
        name="RateReview"
        component={RateReview}
        options={{
          drawerIcon: () => (
            <Image
              source={Img.lefticon}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
                position: 'absolute',
                right: 20,
              }}
            />
          ),
          drawerLabel: () => (
            <Text style={styles.drawerLabel}>Rate & Reviews</Text>
          ),
        }}
      />
      <Drawer.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          drawerIcon: () => (
            <Image
              source={Img.lefticon}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
                position: 'absolute',
                right: 20,
              }}
            />
          ),
          drawerLabel: () => (
            <Text style={styles.drawerLabel}>Contact Us</Text>
          ),
        }}
      />
      <Drawer.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          drawerIcon: () => (
            <Image
              source={Img.lefticon}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
                position: 'absolute',
                right: 20,
              }}
            />
          ),
          drawerLabel: () => (
            <Text style={styles.drawerLabel}>Privacy Policy</Text>
          ),
        }}
      />
      <Drawer.Screen
        name="TermsCondition"
        component={TermsCondition}
        options={{
          drawerIcon: () => (
            <Image
              source={Img.lefticon}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
                position: 'absolute',
                right: 20,
              }}
            />
          ),
          drawerLabel: () => (
            <Text style={styles.drawerLabel}>Terms & Conditions</Text>
          ),
        }}
      />
      <Drawer.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          drawerIcon: () => (
            <Image
              source={Img.lefticon}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
                position: 'absolute',
                right: 20,
              }}
            />
          ),
          drawerLabel: () => (
            <Text style={styles.drawerLabel}>About us</Text>
          ),
        }}
      />
      <Drawer.Screen
        name="Faq"
        component={Faq}
        options={{
          drawerIcon: () => (
            <Image
              source={Img.lefticon}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
                position: 'absolute',
                right: 20,
              }}
            />
          ),
          drawerLabel: () => (
            <Text style={styles.drawerLabel}>FAQ</Text>
          ),
        }}
      />
      <Drawer.Screen
        name="Refferal"
        component={Refferal}
        options={{
          drawerIcon: () => (
            <Image
              source={Img.lefticon}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
                position: 'absolute',
                right: 20,
              }}
            />
          ),
          drawerLabel: () => (
            <Text style={styles.drawerLabel}>Contact Us</Text>
          ),
        }}
      />

      <Drawer.Screen
        name="Help"
        component={Help}
        options={{
          drawerIcon: () => (
            <Image
              source={Img.lefticon}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
                position: 'absolute',
                right: 20,
              }}
            />
          ),
          drawerLabel: () => (
            <Text style={styles.drawerLabel}>Help</Text>
          ),
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
  drawerLabel:
  {
    fontSize:16,
    fontFamily:FontText.medium,
    color:Color.black
  }
});

// import React from 'react';
// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
// import PrivacyPolicy from '../screens/drawerScreen/PrivacyPolicy';
// import TermsCondition from '../screens/drawerScreen/TermsCondition';
// import AboutUs from '../screens/drawerScreen/AboutUs';
// import Faq from '../screens/drawerScreen/Faq';
// import Refferal from '../screens/drawerScreen/Refferal';
// import RateReview from '../screens/drawerScreen/RateReview';
// import ContactUs from '../screens/drawerScreen/ContactUs';
// import Help from '../screens/drawerScreen/Help';
// import ReferEarn from '../screens/drawerScreen/ReferEarn';
// import {Img} from '../utlis/ImagesPath';
// import Profile from '../screens/drawerScreen/Profile';
// import {useNavigation} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// const CustomDrawerContent = props => {
//   const navigation = useNavigation();

//   const menuItems = [
//     {name: 'ReferEarn', component: 'ReferEarn', icon: Img.lefticon},
//     {name: 'RateReview', component: 'RateReview', icon: Img.lefticon},
//     {name: 'ContactUs', component: 'ContactUs', icon: Img.lefticon},
//     {name: 'PrivacyPolicy', component: 'PrivacyPolicy', icon: Img.lefticon},
//     {name: 'TermsCondition', component: 'TermsCondition', icon: Img.lefticon},
//     {name: 'AboutUs', component: 'AboutUs', icon: Img.lefticon},
//     {name: 'Faq', component: 'Faq', icon: Img.lefticon},
//     {name: 'Refferal', component: 'Refferal', icon: Img.lefticon},
//     {name: 'Help', component: 'Help', icon: Img.lefticon},
//   ];

//   return (
//     <DrawerContentScrollView {...props}>
//       {/* Image Section */}
//       <TouchableOpacity
//         style={styles.imageContainer}
//         onPress={() => navigation.navigate('Profile')}>
//         <Image
//           source={Img.beautyicon} // Replace with your image path
//           style={styles.drawerImage}
//         />
//         <View>
//           <Text style={styles.imageText}>Daniela Chikitani</Text>
//           <Text style={styles.imageText}>daniela@gmail.com</Text>
//           <Text style={styles.imageText}>View Profile</Text>
//         </View>
//       </TouchableOpacity>

//       {/* Custom Drawer Items */}
//       {menuItems.map((item, index) => (
//         <DrawerItem
//           key={index}
//           label={() => (
//             <View style={styles.drawerItem}>
//               <Text style={styles.drawerLabel}>{item.name}</Text>
//               <Image source={item.icon} style={styles.drawerIcon} />
//             </View>
//           )}
//           onPress={() => navigation.navigate(item.component)}
//         />
//       ))}
//     </DrawerContentScrollView>
//   );
// };

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <CustomDrawerContent {...props} />}
//       screenOptions={{
//         headerShown: false, // To hide headers for all screens
//       }}>
//       <Drawer.Screen name="ReferEarn" component={ReferEarn} />
//       <Drawer.Screen name="RateReview" component={RateReview} />
//       <Drawer.Screen name="ContactUs" component={ContactUs} />
//       <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
//       <Drawer.Screen name="TermsCondition" component={TermsCondition} />
//       <Drawer.Screen name="AboutUs" component={AboutUs} />
//       <Drawer.Screen name="Faq" component={Faq} />
//       <Drawer.Screen name="Refferal" component={Refferal} />
//       <Drawer.Screen name="Help" component={Help} />
//     </Drawer.Navigator>
//   );
// };

// export default DrawerNavigator;

// const styles = StyleSheet.create({
//   imageContainer: {
//     alignItems: 'center',
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     flexDirection: 'row',
//   },
//   drawerImage: {
//     width: 70,
//     height: 70,
//     resizeMode: 'contain',
//     borderRadius: 50, // Makes it circular if the image is square
//   },
//   imageText: {
//     marginLeft: 10,
//     marginTop: 5,
//     fontSize: 13,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   drawerItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
//   drawerLabel: {
//     fontSize: 16,
//     color: '#333',
//   },
//   drawerIcon: {
//     width: 15,
//     height: 15,
//     resizeMode: 'contain',
//   },
// });
