import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import DownloadDoc from '../../components/DownloadDoc';
import { Img } from '../../utlis/ImagesPath';
import { useNavigation } from '@react-navigation/native';
import { FontText } from '../../utlis/CustomFont';
import { Color } from '../../utlis/Color';

const PersonDoument = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SecondaryHeader  gobackImage={Img.goback}detailtxt={'Document'} onPress={()=>navigation.goBack("DrawerNavigator")} />
      <View style={{paddingHorizontal:20}}> 
      <Text style={styles.boldtxt}>Student Aadhar Card</Text>
      <DownloadDoc/>
      <Text style={styles.boldtxt}>Student / Job ID</Text>

      <DownloadDoc/>
      <Text style={styles.boldtxt}>College Name</Text>
      <Text style={{marginTop:10}}>G.L Bajaj university</Text>
      <Text style={styles.boldtxt}>Parents Details</Text>
      <Text style={styles.boldtxt}>Name</Text>
      <Text style={{marginTop:10}}>Rohit Kumar</Text>
      <Text style={styles.boldtxt}>Phone Number</Text>
      <Text style={{marginTop:10}}>+917654327865</Text>
      <Text style={styles.boldtxt}>Phone Number</Text>
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
    },
    boldtxt:
    {
      marginTop:10,
      fontSize:14,
      fontFamily:FontText.medium,
      color:Color.black,
    }

});
