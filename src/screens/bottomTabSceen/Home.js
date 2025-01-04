import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import SecondaryHeader from '../../components/SecondaryHeader';
import {useNavigation} from '@react-navigation/native';
import {Img} from '../../utlis/ImagesPath';
import Setting from 'react-native-vector-icons/Octicons';
import FoodServices from '../../components/FoodServices';
import BillBoard from '../../components/BillBoard';

const Home = ({navigation}) => {
  // const Drawer = createDrawerNavigator();
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.draw}
        // onPress={() => navigation.openDrawer()}
      />
      <View style={styles.subcontainer}>
      <TouchableOpacity>
        <Text>Food Services</Text>
      </TouchableOpacity>
      <View style={{paddingHorizontal:10}}>
      {/* <Image source={Img.hstdetail} style={{width:300,resizeMode:"stretch",backgroundColor:"red",height:200,}}/> */}

      </View>
      <FoodServices />
      <Text>Bill Board</Text>
      <BillBoard/>
      <BillBoard/>

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
  subcontainer:
  {
    paddingHorizontal:20,
  }
});

export default Home;
