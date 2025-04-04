import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import DownloadDoc from '../../components/DownloadDoc';
import { Img } from '../../utlis/ImagesPath';
import { useNavigation } from '@react-navigation/native';
import { FontText } from '../../utlis/CustomFont';
import { Color } from '../../utlis/Color';
import { get } from '../../utlis/Api';
import { useSelector } from 'react-redux';
import { ScreenDimensions } from '../../utlis/DimensionApi';

const PersonDoument = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state?.auth?.user);
  console.log("user-----------------qqqq>>>", user)

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Document'}
        onPress={() => navigation.goBack('DrawerNavigator')}
      />
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.boldtxt}>Student Aadhar Card</Text>
        {/* <DownloadDoc /> */}
      {user?.studentAadhar ?
        <Image source={{ uri: user?.studentAadhar }} style={{ width: ScreenDimensions?.screenWidth * 0.9, height: ScreenDimensions?.screenWidth * 0.5, borderWidth: 2, resizeMode: 'contain' }} />
        :
        <Text style={styles.boldtxt}>
        {'Not Added'}
      </Text>
      }

        <Text style={styles.boldtxt}>College Name</Text>
        <Text style={{ marginTop: 10, color: 'black' }}>
          {user?.collegeName || 'Not Mentioned'}
        </Text>
        <Text style={styles.boldtxt}>Parents Details</Text>
        <Text style={styles.boldtxt}>Name</Text>
        <Text style={{ marginTop: 10, color: 'black' }}>
          {user?.parentsDetails?.parentName || 'Not Mentioned'}
        </Text>
        <Text style={styles.boldtxt}>Phone Number</Text>
        <Text style={{ marginTop: 10, color: 'black' }}>
          {user?.parentsDetails?.parentPhone || 'Not Mentioned'}
        </Text>

      </View>
    </View>
  );
};

export default PersonDoument;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  boldtxt: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
  },
});


