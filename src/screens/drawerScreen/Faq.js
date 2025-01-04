import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Faquestion from '../../components/Faquestion';
import SecondaryHeader from '../../components/SecondaryHeader';
import {useNavigation} from '@react-navigation/native';

const Faq = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView/>
      <SecondaryHeader
        detailtxt={'FAQ'}
        onPress={() => navigation.openDrawer()}
      />
      <View style={styles.subcontainer}>
        <Faquestion
          question="1: What amenities do hostels provide?"
          answer={`Most hostels offer basic amenities like bunk beds,\nshared bathrooms, kitchens, lockers for valuables, Wi-Fi, and common areas for socializing.`}
        />
        <Faquestion
          question="2: Can I book a private room in a hostel?"
          answer={`Yes, many hostels offer private rooms in addition to dormitory-style accommodations.`}
        />
        <Faquestion question="3: Do hostels/PG provide meals?" />
      </View>
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
});
