import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../utlis/Color';
import PropertyInfoCard from '../../components/PropertyInfoCard';
import SecondaryHeader from '../../components/SecondaryHeader';
import Amenity from '../../components/Amenity';
import Sharing from '../../components/Sharing';

const PropertyDetail = () => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.replace('Home');
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, [navigation])
  return (
    <View style={styles.container}>
      <SecondaryHeader detailtxt={'Property Details'} />
      <View style={styles.subcontainer}>
        <PropertyInfoCard />
        <View style={styles.amenitycontainer}>
          <Amenity txt={'Wifi'} />
          <Amenity txt={'Parking'} mrgnleft={5} />
          <Amenity txt={'Gym'} mrgnleft={5} />
          <Amenity txt={'Gym'} mrgnleft={5} />
        </View>
        <Sharing />
      </View>
    </View>
  );
};

export default PropertyDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
  amenitycontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
});
