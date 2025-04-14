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
      console.log('color', response?.data[0]?.property_logo);
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

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await PropertywithFood();
    await GetBanner();
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView />

      {/* <SecondaryHeader
        gobackImage={Img.draw} 
        notificationIcon={Img.bellicon}
        onPress={() => navigation.openDrawer()}
      /> */}

      <View
        style={[
          styles.header,
          {backgroundColor: data?.theme?.colorValue || 'black'},
        ]}>
        <TouchableOpacity
          style={styles.cantocuable}
          onPress={() => navigation.openDrawer()}>
          <Image source={Img.draw} style={styles.icon} />
          <Image
            source={data.property_logo|| Img.primarylogo}
            // source={{
            //   uri: 'https://mobileapplications.s3.ap-south-1.amazonaws.com/homieWeb1742288956928-profile894.2168308620641.jpg',
            // }}
            onError={data => console.log('error in image', data.nativeEvent)}
            style={{
              width: 80,
              height: 80,
              resizeMode: 'contain',
              tintColor: Color.primary,
              // marginLeft: 20,
              // backgroundColor:"red"
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Img.bellicon} style={styles.icon} />
        </TouchableOpacity>
      </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,

    height: 90,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  cantocuable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Home;
