import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {Img} from '../../utlis/ImagesPath';
import {useNavigation} from '@react-navigation/native';
import PrimaryBtn from '../../components/PrimaryBtn';
import PrimaryTxtInp from '../../components/PrimaryTxtInp';
import SearchBar from '../../components/SearchBar';
import Locationtracker from 'react-native-vector-icons/FontAwesome6';
import { FontText } from '../../utlis/CustomFont';
import { Color } from '../../utlis/Color';
import Plus from 'react-native-vector-icons/MaterialIcons';
import KmAdress from '../../components/KmAdress';
const LocationSearch = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Enter your location'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.subcontainer}>
        <SearchBar
          placeholderText="Search your location"
          containerBgColor="white"
       
        />
        <View style={styles.locationcontainer}>
          <Locationtracker name="location-crosshairs" color={"black"} size={20}/>
          <Text style={styles.uselocationtxt}>Use my current location</Text>
        </View>
        <View style={styles.locationcontainer}>
          <Plus name="add" color={"black"} size={20}/>
          <Text style={styles.addaddresstxt}>Add New Address</Text>
        </View>
        <View style={{marginTop:20}}>
          <Text>Recent Searches</Text>
          <KmAdress/>
          <KmAdress/>
        </View>
      </View>
    </View>
  );
};

export default LocationSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
  locationcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:10,
  },
  uselocationtxt:
  {
    marginLeft:10,
    fontSize:16,
    fontFamily:FontText.medium,
    color:Color.black
  },
  addaddresstxt:
  {
    marginLeft:10,
    fontSize:16,
    fontFamily:FontText.medium,
    color:Color.black,
    marginTop:10,
  }
});
