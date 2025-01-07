import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import DownloadDoc from '../../components/DownloadDoc';
import { Img } from '../../utlis/ImagesPath';
import { useNavigation } from '@react-navigation/native';

const PersonDoument = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SecondaryHeader  gobackImage={Img.goback}detailtxt={'Document'} onPress={()=>navigation.goBack("DrawerNavigator")} />
      <View style={{paddingHorizontal:20}}> 
      <Text style={{marginTop:10}}>Student Aadhar Card</Text>
      <DownloadDoc/>
      <Text style={{marginTop:10}}>Student / Job ID</Text>

      <DownloadDoc/>
      <Text style={{marginTop:10}}>College Name</Text>
      <Text style={{marginTop:10}}>G.L Bajaj university</Text>
      <Text style={{marginTop:10}}>Parents Details</Text>
      <Text style={{marginTop:10}}>Name</Text>
      <Text style={{marginTop:10}}>Rohit Kumar</Text>
      <Text style={{marginTop:10}}>Phone Number</Text>
      <Text style={{marginTop:10}}>+917654327865</Text>
      <Text style={{marginTop:10}}>Phone Number</Text>
      <Text style={{marginTop:10}}>Ram Nagar, noida</Text>
      </View>
    </View>
  );
};

export default PersonDoument;

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        backgroundColor:"#F1F1F1",
    }
});
