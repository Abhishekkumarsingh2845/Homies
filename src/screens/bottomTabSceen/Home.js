import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
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

const Home = () => {
  // const Drawer = createDrawerNavigator();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView/>
      <SecondaryHeader
        gobackImage={Img.draw}
        notificationIcon={Img.bellicon}
        onPress={() => navigation.navigate("DrawerNavigator")}
      />
      <View style={styles.subcontainer}>
        <Text style={styles.bannertxt}>Banner</Text>
        <DotindictaorImg />
        <TouchableOpacity>
          <Text style={styles.foodservicetxt}>Food Services</Text>
        </TouchableOpacity>
        <View style={{paddingHorizontal: 10}}>
          {/* <Image source={Img.hstdetail} style={{width:300,resizeMode:"stretch",backgroundColor:"red",height:200,}}/> */}
        </View>
        <FoodServices />
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
