// import {StyleSheet, Text, View, ScrollView} from 'react-native';
// import React, { useState } from 'react';
// import SecondaryHeader from '../../components/SecondaryHeader';
// import {Img} from '../../utlis/ImagesPath';
// import FoodCatergory from '../../components/FoodCatergory';
// import DaySelector from '../../components/DaySelector';
// import Menu from '../../components/Menu';
// import {useNavigation} from '@react-navigation/native';
// import FoodCategory from '../../components/FoodCatergory';

// const FoodMenu = () => {
//   const navigation = useNavigation();
//   const [selectedTab, setSelectedTab] = useState('Overview');
//   return (
//     <View style={styles.container}>
//       <SecondaryHeader
//         gobackImage={Img.goback}
//         detailtxt={'Food Menu'}
//         onPress={() => navigation.goBack()}
//       />
//       <ScrollView>
//         <View style={styles.subcontainer}>
//           {/* Scrollable row for FoodCatergory */}
//           <ScrollView
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//             showsVerticalScrollIndicator={false}>
//             <View
//               style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//               <FoodCatergory />
//               <FoodCatergory
//                 imageSource={Img.lunchicon}
//                 title="Lunch"
//                 time="12:00 PM - 2:00 PM"
//               />
//               <FoodCategory
//                 imageSource={Img.snackicon}
//                 title="Snacks"
//                 time="5:00PM - 6:00PM"
//               />
//               <FoodCategory
//                 imageSource={Img.dinnericon}
//                 title="Dinner"
//                 time="7:00 PM - 9:00 PM"
//               />

//               <View style={{marginVertical: 50}}></View>
//               {/* <FoodCategory
//                 imageSource={Img.dinnericon}
//                 title="Dinner"
//                 time="7:00 PM - 9:00 PM"
//               /> */}
//             </View>
//           </ScrollView>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               paddingHorizontal: 10,
//               borderBottomWidth:3,
//               borderColor:"#F5F5F5",
//               paddingVertical:10,
//             }}>
//             <Text>Overview</Text>
//             <Text>Rooms</Text>
//             <Text>Food</Text>
//           </View>
//           <DaySelector />
//           <Menu Maintxt={'Breakfast'} />
//           <Menu Maintxt={'Lunch'} />
//           <Menu Maintxt={'Dinner'} />
//         </View>
//         <View style={{marginVertical: 50}}></View>
//       </ScrollView>
//     </View>
//   );
// };

// export default FoodMenu;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:"#FAFAFA",
//   },
//   subcontainer: {
//     paddingHorizontal: 10,
//   },
// });

// import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
// import React, { useState } from 'react';
// import SecondaryHeader from '../../components/SecondaryHeader';
// import { Img } from '../../utlis/ImagesPath';
// import FoodCatergory from '../../components/FoodCatergory';
// import DaySelector from '../../components/DaySelector';
// import Menu from '../../components/Menu';
// import { useNavigation } from '@react-navigation/native';
// import FoodCategory from '../../components/FoodCatergory';

// const FoodMenu = () => {
//   const navigation = useNavigation();
//   const [selectedTab, setSelectedTab] = useState('Overview'); // State to track selected tab

//   return (
//     <View style={styles.container}>
//       <SecondaryHeader
//         gobackImage={Img.goback}
//         detailtxt={'Food Menu'}
//         onPress={() => navigation.goBack()}
//       />
//       <ScrollView>
//         <View style={styles.subcontainer}>
//           {/* Scrollable row for FoodCatergory */}
//           <ScrollView
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//             showsVerticalScrollIndicator={false}>
//             <View
//               style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//               <FoodCatergory />
//               <FoodCatergory
//                 imageSource={Img.lunchicon}
//                 title="Lunch"
//                 time="12:00 PM - 2:00 PM"
//               />
//               <FoodCategory
//                 imageSource={Img.snackicon}
//                 title="Snacks"
//                 time="5:00PM - 6:00PM"
//               />
//               <FoodCategory
//                 imageSource={Img.dinnericon}
//                 title="Dinner"
//                 time="7:00 PM - 9:00 PM"
//               />

//               <View style={{ marginVertical: 50 }}></View>
//             </View>
//           </ScrollView>

//           {/* Tabs for Overview, Rooms, Food */}
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               paddingHorizontal: 10,
//               paddingVertical: 10,
//             }}>
//             <TouchableOpacity onPress={() => setSelectedTab('Overview')}>
//               <Text
//                 style={[
//                   styles.tabText,
//                   selectedTab === 'Overview' && styles.activeTabText,
//                 ]}>
//                 Overview
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => setSelectedTab('Rooms')}>
//               <Text
//                 style={[
//                   styles.tabText,
//                   selectedTab === 'Rooms' && styles.activeTabText,
//                 ]}>
//                 Rooms
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => setSelectedTab('Food')}>
//               <Text
//                 style={[
//                   styles.tabText,
//                   selectedTab === 'Food' && styles.activeTabText,
//                 ]}>
//                 Food
//               </Text>
//               {/* Add red borderBottom only to "Food" tab */}
//               {selectedTab === 'Food' && <View style={styles.activeTabBorder} />}
//             </TouchableOpacity>
//           </View>

//           <DaySelector />
//           <Menu Maintxt={'Breakfast'} />
//           <Menu Maintxt={'Lunch'} />
//           <Menu Maintxt={'Dinner'} />
//         </View>
//         <View style={{ marginVertical: 50 }}></View>
//       </ScrollView>
//     </View>
//   );
// };

// export default FoodMenu;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FAFAFA',
//   },
//   subcontainer: {
//     paddingHorizontal: 10,
//   },
//   tabText: {
//     fontSize: 16,
//     marginVertical:10,
//     color: '#000', // Default text color
//     fontWeight: '400',
//   },
//   activeTabText: {
//     color: '#FFB83A', // Red color for active tab text
//     fontWeight: 'bold',
//   },
//   activeTabBorder: {
//     borderBottomWidth: 3,
//     borderBottomColor: '#FFB83A', // Red border for active tab
//     width: '100%',
//     position: 'absolute',
//     bottom: 0,
//   },
// });

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {Img} from '../../utlis/ImagesPath';
import FoodCatergory from '../../components/FoodCatergory';
import DaySelector from '../../components/DaySelector';
import Menu from '../../components/Menu';
import {useNavigation} from '@react-navigation/native';
import FoodCategory from '../../components/FoodCatergory';

const FoodMenu = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Food');

  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Food Menu'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.subcontainer}>
          {/* Scrollable row for FoodCatergory */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <FoodCatergory />
              <FoodCatergory
                imageSource={Img.lunchicon}
                title="Lunch"
                time="12:00 PM - 2:00 PM"
              />
              <FoodCategory
                imageSource={Img.snackicon}
                title="Snacks"
                time="5:00PM - 6:00PM"
              />
              <FoodCategory
                imageSource={Img.dinnericon}
                title="Dinner"
                time="7:00 PM - 9:00 PM"
              />

              <View style={{marginVertical: 50}}></View>
            </View>
          </ScrollView>

         
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <TouchableOpacity onPress={() => setSelectedTab('Overview')}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === 'Overview' && styles.activeTabText,
                ]}>
                Overview
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectedTab('Rooms')}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === 'Rooms' && styles.activeTabText,
                ]}>
                Rooms
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectedTab('Food')}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === 'Food' && styles.activeTabText,
                ]}>
                Food
              </Text>
            </TouchableOpacity>
          </View> 
 


<View>
  <Text></Text>
</View>
          {/* Apply the red border to the "Rooms" and "Food" tabs when Food is selected */}
          {selectedTab === 'Food' && <View style={styles.activeTabBorder} />}

          <DaySelector />
          <Menu Maintxt={'Breakfast'} />
          <Menu Maintxt={'Lunch'} />
          <Menu Maintxt={'Dinner'} />
        </View>
        <View style={{marginVertical: 50}}></View>
      </ScrollView>
    </View>
  );
};

export default FoodMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  subcontainer: {
    paddingHorizontal: 10,
  },
  tabText: {
    fontSize: 16,
    marginVertical: 5,
    color: '#4E4B66', // Default text color
    fontWeight: '400',
  },
  activeTabText: {
    color: '#FFB83A', // Active tab text color
    fontWeight: 'bold',
  },
  activeTabBorder: {
    borderBottomWidth: 3,
    borderBottomColor: '#FFB83A', // Red border for active tab
    width: '40%', // Cover only "Rooms" and "Food" tabs
    marginLeft: '70%', // Position the border under "Rooms" and "Food" tabs
  },
});
