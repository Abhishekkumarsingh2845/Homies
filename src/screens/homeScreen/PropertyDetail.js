import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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
import CalendarModal from '../../components/Calendarcmp';
import RequestSentBtnSht from '../../components/RequestSentBtnSht';
import GuestModal from '../../components/GuestModal';
import {useSelector} from 'react-redux';
import {post} from '../../utlis/Api';
// import {Image} from 'react-native-svg';
const PropertyDetail = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [showGuestModal, setShowGuestModal] = useState(false);
  const {token} = useSelector(state => state.auth.user);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const bottomSheetRef = useRef(null);


  const handleVistRequest = async () => {
    const data = {
      propertyId: '6773a32551be0fa4b0c3d95f',
      visitDate: '2025-01-15T10:30:00.000Z',
      visitTime: '2025-01-15T11:00:00.000Z',
      landLordId: '6773972194f1b2bc916447e6',
    };
    try {
      const response = await post('visitRequest', data);
      console.log('response of the visitRequest API ', response);
    } catch (error) {
      console.log(
        'error in visitRequest API',
        error.message || error?.response?.data,
      );
    }
  };

  const handleVistBtn = () => {
    handleVistRequest();
    handlePayNow();
    setModalVisible(!isModalVisible);
  };
  const handlePayNow = async () => {
    const data = {
      propertyId: '67ab1c2a395fe63ce5fa9521',
      userId: '67a238e4e86cb4cef27227aa',
      landLordId: '67a6e680f466c174a36625ea',
    };
    try {
      const response = await post('payNow', data);
      console.log('response of the payNow API ', response);
    } catch (error) {
      console.log(
        'error in payNow API',
        error.message || error?.response?.data,
      );
    }
  };

  useEffect(() => {
    console.log('tpken========', token);
    if (!token) {
      setShowGuestModal(true);
    } else {
      setShowGuestModal(false);
    }
  }, []);
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
                  style={{width: 25, height: 20, resizeMode: 'contain'}}
                />
              }
            />
            <Amenity
              txt={'Gym'}
              mrgnleft={5}
              icon={
                <Image
                  source={Img.gymicon}
                  style={{width: 25, height: 20, resizeMode: 'contain'}}
                />
              }
            />
            <Amenity
              txt={'Pool'}
              mrgnleft={5}
              icon={<Pool name="pool" size={19} color={'black'} />}
            />
          </View>
          <Sharing />
          <Video />
          <Text style={styles.neaerbytxt}>Near by Property </Text>
          <NearLocationProperty />
          <PermonthRent />
          <VisitRequestbtn
            // OnPaynowprs={handleRequestSent}
            Onprs={() => handleVistBtn()}
          />
          {/* <SignUpModal /> */}
          <CalendarModal
            Submitbtn={
              <TouchableOpacity
                style={styles.closeButton}
                onPress={toggleModal}>
                <Text style={styles.closeButtonText}>Submit</Text>
              </TouchableOpacity>
            }
            toggleModal={toggleModal}
            isVisible={isModalVisible}
          />
          <RequestSentBtnSht ref={bottomSheetRef} />

          <View style={{marginVertical: 80}} />
        </View>
      </ScrollView>
      <GuestModal
        modalVisible={showGuestModal}
        setModalVisible={setShowGuestModal}
      />
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
  closeButton: {
    // marginTop: 20,
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    backgroundColor: Color.primary,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
