import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Img} from '../../utlis/ImagesPath';
import PersonalDetailCard from '../../components/PersonalDetailCard';
import SeeAllDocument from '../../components/SeeAllDocument';
import Logout from 'react-native-vector-icons/MaterialIcons';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import SecondaryHeader from '../../components/SecondaryHeader';
import LogoutModal from '../../components/LogoutModal';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  openCamera,
  openGallery,
  uploadImageUrl,
} from '../../utlis/ImageHandler';
import {post} from '../../utlis/Api';
import {setUser} from '../../store/AuthSlice';
const Profile = () => {
  const propertyId = useSelector(state => state.property.propertyId);
  const landLordId = useSelector(state => state.property.landLordId);

  console.log('Property ID from Redux:', propertyId);
  console.log('Landlord ID from Redux:', landLordId);

  const [modalVisible, setModalVisible] = useState(false);
  const user = useSelector(state => state.auth.user);
  console.log('user ================= > ', user);
  const [modalMsg, setModalMsg] = useState('');
  const navigation = useNavigation();
  const [modalType, setModalType] = useState('');

  const dispatch = useDispatch();
  const toggleModal = (message, type) => {
    setModalMsg(message);
    setModalVisible(!modalVisible);
    setModalType(type);
  };

  const dimensions = {
    screenWidth: Dimensions.get('screen').width,
    screenHeight: Dimensions.get('screen').height,
  };

  const galleryFunc = async () => {
    let res = await openCamera();
    console.log('res--------------', res.response[0].uri);
    if (res.status) {
      const data = {
        uri: res.response[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      };
      let imageRes = await uploadImageUrl(data);
      console.log('image data ======', imageRes);
      if (imageRes.status) {
        try {
          const response = await post(
            'updateProfile',
            {
              profileImage: imageRes?.imageUrl,
            },
            user.token,
          );
          console.log('value====== res 1111', response);
          if (response?.success) {
            dispatch(setUser(response));
            // navigation.navigate('HomeNavigator');
          }
        } catch (error) {
          console.log('error in update  submit', error);
        }
      }
    }
  };

  const leaveProperty = async () => {
    const params = {
      propertyId: propertyId,
      landLordId: landLordId,
      reason: 'I am leaving this property',
    };
    try {
      const response = await post('leaveRequest', params);
      console.log('response of  the  leave property', response.data);
    } catch (error) {
      console.log('erorr of the leave', error.message);
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />

      {/* <SecondaryHeader
        detailtxt={'My Profile'}
        gobackImage={Img.goback}
        onPress={() => navigation.goBack('DrawerNavigator')}
      /> */}

      <ImageBackground source={Img.headerbg} style={styles.imageBackground}>
        <StatusBar backgroundColor={'#010101'} barStyle={'light-content'} />
        <TouchableOpacity
          style={styles.subcontainer}
          onPress={() => navigation.navigate('DrawerNavigator')}>
          <Image source={Img.goback} style={styles.gobackstyle} />
        </TouchableOpacity>
        <View
          style={[
            styles.circle,
            {
              width: dimensions.screenWidth * 0.5,
              height: dimensions.screenWidth * 0.5,
              marginTop: dimensions.screenHeight * 0.1,
            },
          ]}>
          <Image
            source={{uri: user?.profileImage}}
            style={{
              width: '90%',
              height: '90%',
              borderRadius: 100,
              backgroundColor: 'black',
            }}
            resizeMode="contain"
          />
          <TouchableOpacity
            onPress={galleryFunc}
            style={{position: 'absolute', right: 30, bottom: 5}}>
            <Image
              source={Img.editicon}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
                borderRadius: 5,
              }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <Text
        style={[
          styles.profileText,
          {marginTop: dimensions.screenHeight * 0.11},
        ]}>
        Room No- 001
      </Text>
      <PersonalDetailCard />
      <SeeAllDocument />
      <View style={{paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Logout name="logout" size={20} />
          <TouchableOpacity
            onPress={() =>
              toggleModal('Are you Sure Logout the Property', 'logout')
            }>
            <Text
              style={{
                fontSize: 18,
                fontFamily: FontText.medium,
                color: Color.black,
                marginVertical: 10,
                marginLeft: 10,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={leaveProperty}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: FontText.medium,
              color: Color.black,
              marginVertical: 10,
            }}>
            Leave Property
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            toggleModal('Are you Sure delete Your Account', ' delete')
          }>
          <Text
            style={{
              fontSize: 18,
              fontFamily: FontText.medium,
              color: Color.black,
              marginVertical: 10,
            }}>
            Delete account
          </Text>
        </TouchableOpacity>
        <LogoutModal
          msg={modalMsg}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          modalType={modalType}
          setModalType={setModalType}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    // backgroundColor:"#010101",
    width: '100%',
    height: 140,
    justifyContent: 'center', // Aligns content within ImageBackground
    alignItems: 'center',
  },
  circle: {
    // position: 'absolute',
    // bottom: -50, // Moves the circle below the ImageBackground
    alignSelf: 'center', // Centers the circle horizontally
    justifyContent: 'center',
    alignItems: 'center',
    // Circle height
    // borderRadius: 75, // Makes it a circle

    // borderWidth: 4, // Optional border for the circle
    borderColor: '#fff', // Border color
  },
  profileText: {
    textAlign: 'center',
    // marginTop:, // Adds spacing below the circle
    fontSize: 14,
    fontWeight: 'bold',
    color: Color.black,
    // marginTop:10
  },
  subcontainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 25,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  gobackstyle: {
    tintColor: 'white',
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  textstyle: {
    fontSize: 16,
    fontFamily: FontText.bold,
    lineHeight: 20,
    marginLeft: 10,
    color: '#FFFFFF',
  },
});
