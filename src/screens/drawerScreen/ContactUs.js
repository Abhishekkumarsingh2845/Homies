import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import ContactDetail from '../../components/ContactDetail';
import {Img} from '../../utlis/ImagesPath';
import LogoutModal from '../../components/LogoutModal';

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <SecondaryHeader detailtxt={'FAQs'} />
      <View style={styles.subcontainer}>
        <ContactDetail
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
          imageSource={Img.helpicon}
          contactInfo="+1 80 80 8888 001"
        />
        <ContactDetail
          title="We’re Here to Help!"
          message={
            'If you need assistance or have any\nquestions, please reach out to us using one\nof the options below'
          }
          imageSource={Img.helpicon}
          contactInfo="admin@gmail.com"
        />
        <LogoutModal />
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