import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Faquestion from '../../components/Faquestion';
import SecondaryHeader from '../../components/SecondaryHeader';
import {useNavigation} from '@react-navigation/native';
import {Img} from '../../utlis/ImagesPath';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';

const Faq = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'FAQ'}
        onPress={() => navigation.openDrawer()}
      />
      <View style={styles.subcontainer}>
        <Faquestion
          question="1: What amenities do hostels provide?"
          answer={`Most hostels offer basic amenities like bunk beds,\nshared bathrooms, kitchens, lockers for valuables, Wi-Fi, and common areas for socializing.`}
        />
        <Faquestion
          question="2: Is it safe to stay in a hostel/PG?"
          answer={`Yes, many hostels offer private rooms in addition to dormitory-style accommodations.`}
        />
        <Faquestion
          question="3: Do hostels/PG provide meals?"
          answer={`Yes, many hostels offer private rooms in addition to dormitory-style accommodations.`}
        />
        <PrimaryBtn bgcolor={Color.btnclr} txt={'Raise a Query'} mgntop={240} destination={"Help"} />
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
