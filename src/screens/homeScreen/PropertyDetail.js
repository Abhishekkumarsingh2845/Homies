import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Color } from '../../utlis/Color';
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
import { Img } from '../../utlis/ImagesPath';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontText } from '../../utlis/CustomFont';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Wifi from 'react-native-vector-icons/FontAwesome5';
import Pool from 'react-native-vector-icons/MaterialIcons';
import CalendarModal from '../../components/Calendarcmp';
import RequestSentBtnSht from '../../components/RequestSentBtnSht';
import GuestModal from '../../components/GuestModal';
import { useSelector } from 'react-redux';
import { get, post } from '../../utlis/Api';
import VideoPlayer from '../../components/Video';

// import {Image} from 'react-native-svg';
const PropertyDetail = () => {
  const route = useRoute();
  const detail = route.params?.detail;
  const navigation = useNavigation();
  const propertyID = route?.params?.propertyID ?? null;
  const [isModalVisible, setModalVisible] = useState(false);
  const [showGuestModal, setShowGuestModal] = useState(false);
  const { token, _id } = useSelector(state => state.auth.user);
  const [property, setPropertyData] = useState({});
  const [loading, setloading] = useState();
  const [hostetData, sethostelData] = useState([]);
  const [selectedSharing, setSelectedSharing] = useState({});
  const [selectedPlan, setSelectedPlan] = useState({})
  const [rentAmount, setRentAmount] = useState({
    amount: '',
    planDuration: ''
  })
  const isEmpty = (obj) => JSON.stringify(obj) === "{}";



  const getAmountFunc = () => {
    let amount = selectedSharing?.details?.find(item => item.roomType == selectedPlan?.AC_NonAc && item?.periodType == selectedPlan?.duration)?.amount
    setRentAmount({
      amount: amount,
      planDuration: selectedPlan?.duration
    })
  }

  useEffect(() => {
    if (!isEmpty(selectedPlan)) {
      getAmountFunc()
    } else {
      setRentAmount({})
    }
  }, [selectedPlan])

  useEffect(() => {
    if (property?.property?.sharing[0]) {

      setSelectedSharing(property?.property?.sharing[0])
    }
  }, [property?.property?.sharing])
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const bottomSheetRef = useRef(null);

  const handleVistRequest = async (date, time) => {
    toggleModal();
    const data = {
      propertyId: detail?._id,
      visitDate: date,
      visitTime: time,
      // landLordId: property?.property?.landLordId,
      // landLordId: '6773972194f1b2bc916447e6',
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

  const getHstdetail = async () => {
    const params = {
      long: '77.376945',
      lat: '28.628454',
    };
    // setloading(true);
    try {
      const response = await get('getNearProperties', params);
      sethostelData(response?.data[0]?.data);
    } catch (error) {
      console.log(
        'error in  the getNearProperty',
        error?.response?.data || error.message,
      );
    } finally {
      // setloading(false);
    }
  };
  const getOneProperty = async () => {
    const params = {
      propertyId: propertyID,
      userId: _id,
      // propertyId :propertyID,
    };
    try {
      const response = await get('viewOneProperty', params);
      setPropertyData(response.data);
      console.log('response of the viewOneProperty API', JSON.stringify(response.data));
      // console.log("response of the sharing",response.);
    } catch (error) {
      console.log(
        'error in the viewOneProperty',
        error.message || error?.response?.data,
      );
    }
  };

  const handleVistBtn = () => {
    setModalVisible(!isModalVisible);
  };
  const handlePayNow = async () => {
    setloading(true)
    const data = {
      propertyId: propertyID,
      userId: _id,
      landLordId: property?.property?.landLordId,
      selectedRoomDetailID: selectedSharing?.details?.find(item => item?.periodType == selectedPlan?.duration && item?.roomType == selectedPlan?.AC_NonAc)?._id,
      sharingTypeId: selectedSharing?._id
    };
    try {
      const response = await post('payNow', data);
      console.log('response of the payNow API====', response);
      if(response.success){
        navigation.navigate('BottomTab')
      }
    } catch (error) {
      console.log(
        'error in payNow API',
        error.message || error?.response?.data,
      );
    } finally{
    setloading(false)

    }
  };

  useEffect(() => {
    getOneProperty();
    getHstdetail();
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
        tintColor={property?.isLiked ? 'red' : 'white'}
        share={Img.shareicon}
      />
      <ScrollView>
        <View style={styles.subcontainer}>
          <PropertyInfoCard data={property} />
          <Text style={styles.amenttxt}>Amenities</Text>
          <View style={styles.amenitycontainer}>
            <Amenity
              iconName="Wifi"
              txt={
                property?.property?.availableAmenities?.[0] ||
                'no data available'
              }
              iconType={FontAwesome5}
              icon={<Wifi name="wifi" size={16} color={'black'} />}
            />

            <Amenity
              txt={property?.property?.availableAmenities?.[1]}
              mrgnleft={5}
              icon={
                <Image
                  source={Img.parkingicon}
                  style={{ width: 25, height: 20, resizeMode: 'contain' }}
                />
              }
            />
            <Amenity
              txt={property?.property?.availableAmenities?.[2]}
              mrgnleft={5}
              icon={
                <Image
                  source={Img.gymicon}
                  style={{ width: 25, height: 20, resizeMode: 'contain' }}
                />
              }
            />
            <Amenity
              txt={'Pool'}
              mrgnleft={5}
              icon={<Pool name="pool" size={19} color={'black'} />}
            />
          </View>

          <Sharing selectedSharing={selectedSharing} setSelectedSharing={setSelectedSharing} share={property?.property} setSelectedPlan={setSelectedPlan} getAmountFunc={getAmountFunc} />

          <VideoPlayer videoplay={property} />

          <Text style={styles.neaerbytxt}>Near by Property</Text>

          <NearLocationProperty nearproperty={property} />
          {
            !isEmpty(rentAmount) && <PermonthRent rentAmount={rentAmount} />
          }

          <VisitRequestbtn
            OnPressRequestbtn={() => handlePayNow()}
            Onprs={() => handleVistBtn()}
            loading={loading}
          />

          <CalendarModal
            toggleModal={toggleModal}
            isVisible={isModalVisible}
            handleVistRequest={handleVistRequest}
          />

          <RequestSentBtnSht ref={bottomSheetRef} />

          <View style={{ marginVertical: 80 }} />
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
