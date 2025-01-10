import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {Color} from '../../utlis/Color';
import PropertyInfoCard from '../../components/PropertyInfoCard';
import SecondaryHeader from '../../components/SecondaryHeader';
import Amenity from '../../components/Amenity';
import Sharing from '../../components/Sharing';
import Video from '../../components/Video';
import Nearby from '../../components/Nearby';
import NearLocationProperty from '../../components/NearLocationProperty';
import PermonthRent from '../../components/PermonthRent';
import VisitRequestbtn from '../../components/VisitRequestbtn';
import SignUpModal from '../../components/SignUpModal';
import {Img} from '../../utlis/ImagesPath';
import {useNavigation} from '@react-navigation/native';
import {FontText} from '../../utlis/CustomFont';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Wifi from 'react-native-vector-icons/FontAwesome5';
import Pool from 'react-native-vector-icons/MaterialIcons';
// import {Image} from 'react-native-svg';
const PropertyDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Property Details'}
        onPress={() => navigation.goBack()}
        notificationIcon={Img.hrt}
        share={Img.shareicon}
      />
      <ScrollView>
        <View style={styles.subcontainer}>
          <PropertyInfoCard />
          <Text style={styles.amenttxt}>Amenities</Text>
          <View style={styles.amenitycontainer}>
            <Amenity
              iconName="Wifi"
              txt={'Wifi'}
              iconType={FontAwesome5}
              icon={<Wifi name="wifi" size={16} color={'black'} />}
            />
            <Amenity
              txt={'Parking'}
              mrgnleft={5}
              icon={
                <Image
                  source={Img.parkingicon}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                />
              }
            />
            <Amenity
              txt={'Gym'}
              mrgnleft={5}
              icon={
                <Image source={Img.gymicon} style={{width: 25, height: 25}} />
              }
            />
            <Amenity
              txt={'Pool'}
              mrgnleft={5}
              icon={<Pool name="pool" size={16} color={'black'} />}
            />
          </View>
          <Sharing />

          <Video />
          <Text style={styles.neaerbytxt}>Near by Property </Text>
          <NearLocationProperty />
          <PermonthRent />
          <VisitRequestbtn />
          {/* <SignUpModal /> */}
          <View style={{marginVertical: 80}} />
        </View>
      </ScrollView>
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
    // marginTop: 10,
  },
  amenttxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
    marginVertical: 10,
  },
  neaerbytxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
    marginLeft: 5,
    marginVertical: 10,
  },
});
