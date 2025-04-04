import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import DownloadDoc from '../../components/DownloadDoc';
import {Img} from '../../utlis/ImagesPath';
import {useNavigation} from '@react-navigation/native';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import {get} from '../../utlis/Api';
import {useSelector} from 'react-redux';

const PersonDoument = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState({});
  const user = useSelector(state => state.auth.user);
  const editUserName = async () => {
    try {
      const response = await get(
        'userProfile',
        {},
        (token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkNjZlNGQwMmY1ZmUzNTg3MzU5NTUiLCJpYXQiOjE3NDI1NjMwNzB9.N0gKpQBBQuCRKXGwBEqyDsrb-5opDBf1N9LqZjGsUSo'),
      );
      if (response.success) {
        setProfile(response.data);
        console.log('name of the userprofile in draqwer', response.data);
      }
    } catch (error) {
      console.log(
        'error in the editUserprofile',
        error?.response?.data || error?.message,
      );
    }
  };
  useEffect(() => {
    editUserName();
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Document'}
        onPress={() => navigation.goBack('DrawerNavigator')}
      />
      <View style={{paddingHorizontal: 20}}>
        <Text style={styles.boldtxt}>Student Aadhar Card</Text>
        <DownloadDoc />
        <Text style={{fontsize:12,color:"red"}}>{profile.profileImage}</Text>


 
        <Text style={styles.boldtxt}>College Name</Text>
        <Text style={styles.boldtxt}>
          {profile.collegeName || 'Rohit Kumar'}
        </Text>
        <Text style={styles.boldtxt}>Parents Details</Text>
        <Text style={styles.boldtxt}>Name</Text>
        <Text style={{marginTop: 10, color: 'black'}}>
          {profile.name || 'Abhishek'}
        </Text>
        <Text style={styles.boldtxt}>Phone Number</Text>
        <Text style={{marginTop: 10, color: 'black'}}>
          {profile.phone || '917654327865'}
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


