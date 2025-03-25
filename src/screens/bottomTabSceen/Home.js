// import {
//   Image,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import Header from '../../components/Header';
// import SecondaryHeader from '../../components/SecondaryHeader';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import {Img} from '../../utlis/ImagesPath';
// import Setting from 'react-native-vector-icons/Octicons';
// import FoodServices from '../../components/FoodServices';
// import BillBoard from '../../components/BillBoard';
// import DotindictaorImg from '../../components/DotindictaorImg';
// import {FontText} from '../../utlis/CustomFont';
// import {Color} from '../../utlis/Color';
// import {get} from '../../utlis/Api';
// import {useDispatch, useSelector} from 'react-redux';
// import {setString} from '../../store/FoodColor';

// const Home = ({route}) => {
//   const dispatch = useDispatch();
//   // const route = useRoute();
//   const {propertid} = route.params || 'no data';
//   console.log('route.params', route?.params);
//   const propertyidtaking = route.params;
//   const [data, setData] = useState({});
//   const [banner, setBanner] = useState(null);
//   console.log(
//     '----------------------------------------------------------------',
//     banner?.data[0]?.image_url,
//   );
//   const navigation = useNavigation();

//   const PropertywithFood = async () => {
//     const params = {
//       propertyId: propertyidtaking,
//     };
//     try {
//       const response = await get('propertyWithFood', params);
//       setData(response?.data[0]);
//       if (response?.data[0]?.theme?.colorValue) {
//         console.log('->>>>>color=>>>>>>', response?.data[0]?.theme?.colorValue);
//         dispatch(setString(response.data[0].theme.colorValue));
//       }
//       console.log('response of the property withFood=>>>', response?.data[0]);
//     } catch (error) {
//       console.log('error in the propertyWithFood', error.message);
//     }
//   };

//   const GetBanner = async () => {
//     try {
//       const response = await get('getBannersForProperties');
//       console.log('response of the getBannersForProperties', response.data);
//       console.log('banner detail', response?.data[0]);
//       setBanner(response.data[0]);
//     } catch (error) {
//       console.log('error in the getBannersForProperties', error.message);
//     }
//   };

//   useEffect(() => {
//     PropertywithFood();
//     GetBanner();
//   }, []);

//   const storedString = useSelector(state => state.FoodColor.value);
//   console.log('Stored Redux Value:', storedString);
//   // console.log("Property withFood->>>>>",data.foodDetails);
//   return (
//     <View style={styles.container}>
//       <SafeAreaView />
//       <SecondaryHeader
//         gobackImage={Img.draw}
//         notificationIcon={Img.bellicon}
//         onPress={() => navigation.openDrawer()}
//       />
//       <View style={styles.subcontainer}>
//         {banner?.data?.[0]?.image_url && (
//           <>
//             <Text style={styles.bannertxt}>Banner</Text>
//             <Image
//               source={{
//                 uri: banner?.data?.[0]?.image_url,
//               }}
//               style={{width: '100%', height: 120, resizeMode: 'stretch'}}
//             />
//           </>
//         )}

//         <TouchableOpacity>
//           <Text style={styles.foodservicetxt}>Food Services</Text>
//         </TouchableOpacity>

//         {!!data && (
//           <FoodServices
//             bgcolor={data?.theme?.colorValue}
//             fooddetail={data}
//             OnPress={() =>
//               navigation.navigate('HomeTabNavigator', {
//                 screen: 'FoodMenu',
//                 params: route?.params,
//               })
//             }
//           />
//         )}

//         <Text style={styles.billboardtxt}>Bill Board</Text>
//         <BillBoard />
//         <BillBoard />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },
//   subcontainer: {
//     paddingHorizontal: 20,
//   },
//   bannertxt: {
//     fontSize: 16,
//     fontFamily: FontText.medium,
//     color: Color.black,
//     marginTop: 10,
//   },
//   foodservicetxt: {
//     fontSize: 16,
//     fontFamily: FontText.medium,
//     color: Color.black,
//     // marginTop:20,
//   },
//   billboardtxt: {
//     fontSize: 16,
//     fontFamily: FontText.medium,
//     color: Color.black,
//     marginTop: 20,
//   },
// });

// export default Home;



import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {useNavigation} from '@react-navigation/native';
import {Img} from '../../utlis/ImagesPath';
import FoodServices from '../../components/FoodServices';
import BillBoard from '../../components/BillBoard';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import {get} from '../../utlis/Api';
import {useDispatch, useSelector} from 'react-redux';
import {setString} from '../../store/FoodColor';

const Home = ({route}) => {
  const dispatch = useDispatch();
  const {propertid} = route.params || 'no data';
  const propertyidtaking = route.params;
  const [data, setData] = useState({});
  const [banner, setBanner] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();

  const PropertywithFood = async () => {
    const params = {
      propertyId: propertyidtaking,
    };
    try {
      const response = await get('propertyWithFood', params);
      console.log('->>>>>>>data of the  propertyWithFood', response.data);
      setData(response?.data[0]);
      if (response?.data[0]?.theme?.colorValue) {
        dispatch(setString(response.data[0].theme.colorValue));
      }
    } catch (error) {
      console.log('error in propertyWithFood', error.message);
    }
  };

  const GetBanner = async () => {
    try {
      const response = await get('getBannersForProperties');
      setBanner(response.data[0]);
    } catch (error) {
      console.log('error in getBannersForProperties', error.message);
    }
  };

  useEffect(() => {
    PropertywithFood();
    GetBanner();
  }, []);

  // Function to handle pull-to-refresh
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await PropertywithFood();
    await GetBanner();
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SecondaryHeader
        gobackImage={Img.draw}
        notificationIcon={Img.bellicon}
        onPress={() => navigation.openDrawer()}
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.subcontainer}>
          {banner?.data?.[0]?.image_url && (
            <>
              <Text style={styles.bannertxt}>Banner</Text>
              <Image
                source={{uri: banner?.data?.[0]?.image_url}}
                style={{width: '100%', height: 120, resizeMode: 'stretch'}}
              />
            </>
          )}

          <TouchableOpacity>
            <Text style={styles.foodservicetxt}>Food Services</Text>
          </TouchableOpacity>

          {!!data && (
            <FoodServices
              bgcolor={data?.theme?.colorValue}
              fooddetail={data}
              OnPress={() =>
                navigation.navigate('HomeTabNavigator', {
                  screen: 'FoodMenu',
                  params: route?.params,
                })
              }
            />
          )}

          <Text style={styles.billboardtxt}>Bill Board</Text>
          <BillBoard />
          <BillBoard />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
  bannertxt: {
    fontSize: 16,
    fontFamily: FontText.medium,
    color: Color.black,
    marginTop: 10,
  },
  foodservicetxt: {
    fontSize: 16,
    fontFamily: FontText.medium,
    color: Color.black,
  },
  billboardtxt: {
    fontSize: 16,
    fontFamily: FontText.medium,
    color: Color.black,
    marginTop: 20,
  },
});

export default Home;
