import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import ContactDetail from '../../components/ContactDetail';
import {Img} from '../../utlis/ImagesPath';
import LogoutModal from '../../components/LogoutModal';
import {useNavigation} from '@react-navigation/native';
import {get} from '../../utlis/Api';
import {useSelector} from 'react-redux';

const ContactUs = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState(null);
  const {token} = useSelector(state => state.auth.user);
  const getContactus = async () => {
    try {
      const response = await get(
        'websiteContactUsContent',
        {appType: 'Website'},
        token,
      );
      if (response.success) {
        setdata(response?.data[0].description);
      }
    } catch (error) {
      console.log('Error', error?.reponse?.data , error.message);
    }
  };

  useEffect(() => {
    getContactus();
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Contact Us'}
        onPress={() => navigation.openDrawer()}
      />
      <View style={styles.subcontainer}>
        <Text>{data || 'no contact us data found'}</Text>
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
});

{
  /* <ContactDetail
          title="We’re Here to Help!"
          message={
            'If you need assistance or have any\nquestions, please reach out to us using one\nof the options below'
          }
          imageSource={Img.helpicon}
        />
        <ContactDetail
          title="Call Us"
          message={
            'If you need assistance or have any\nquestions, please reach out to us using one\nof the options below'
          }
          imageSource={Img.phoneiconcontact}
          contactInfo="+1 80 80 8888 001"
        />
        <ContactDetail
          title="Email US"
          message={
            'If you need assistance or have any\nquestions, please reach out to us using one\nof the options below'
          }
          imageSource={Img.msgicon}
          contactInfo="admin@gmail.com"
        /> */
}
{
  /* <LogoutModal /> */
}
