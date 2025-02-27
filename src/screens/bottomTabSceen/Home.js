import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import SecondaryHeader from '../../components/SecondaryHeader';
import {useNavigation} from '@react-navigation/native';
import {Img} from '../../utlis/ImagesPath';
import Setting from 'react-native-vector-icons/Octicons';
import FoodServices from '../../components/FoodServices';
import BillBoard from '../../components/BillBoard';
import DotindictaorImg from '../../components/DotindictaorImg';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import {get} from '../../utlis/Api';

const Home = () => {
  const [data, setData] = useState(null);
  const [banner, setBanner] = useState(null);
  console.log("----------------------------------------------------------------" , banner?.data[0]?.image_url);
  const navigation = useNavigation();

  const PropertywithFood = async () => {
    const params = {
      propertyId: '67bff9b538a34df307bf2b97',
    };
    try {
      const response = await get('./propertyWithFood', params);
      setData(response.data[0]);
      console.log('response of the property withFood=>>>', response.data[0]);
    } catch (error) {
      console.log('error in the propertyWithFood', error.message);
    }
  };
  const GetBanner = async () => {
    try {
      const response = await get('./getBannersForProperties');
      console.log('response of the getBannersForProperties', response.data);
      console.log('banner detail', response?.data[0]?.data[0]?.image_url);
      setBanner(response.data[0]);
    } catch (error) {
      console.log('error in the getBannersForProperties', error.message);
    }
  };

  // console.log("->>>",data?.theme?.colorValue);

  useEffect(() => {
    PropertywithFood();
    GetBanner();
  }, []);
  // console.log("Property withFood->>>>>",data.foodDetails);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SecondaryHeader
        gobackImage={Img.draw}
        notificationIcon={Img.bellicon}
        onPress={() => navigation.openDrawer()}
      />
      <View style={styles.subcontainer}>
        <Text style={styles.bannertxt}>Banner</Text>
        <DotindictaorImg imageSource={Img.hstdetail} activeDotColor="#FF9457" />
        {/* <DotindictaorImg
          imageSource={ banner?.data[0]?.image_url}
          activeDotColor="#FF9457"
        /> */}

        <TouchableOpacity>
          <Text style={styles.foodservicetxt}>Food Services</Text>
        </TouchableOpacity>
        <View style={{paddingHorizontal: 10}}>
          {/* <Image source={Img.hstdetail} style={{width:300,resizeMode:"stretch",backgroundColor:"red",height:200,}}/> */}
        </View>
        {!!data && (
          <FoodServices bgcolor={data?.theme?.colorValue} fooddetail={data} />
        )}
        <Text style={styles.billboardtxt}>Bill Board</Text>
        <BillBoard />
        <BillBoard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
    // marginTop:20,
  },
  billboardtxt: {
    fontSize: 16,
    fontFamily: FontText.medium,
    color: Color.black,
    marginTop: 20,
  },
});

export default Home;
