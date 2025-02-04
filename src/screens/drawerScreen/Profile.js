import {
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
const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMsg, setModalMsg] = useState('');
  const navigation = useNavigation();
  const toggleModal = message => {
    setModalMsg(message);
    setModalVisible(!modalVisible);
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
        <View style={styles.circle}>
          <Image
            source={Img.profilepicicon}
            style={{width: 90, height: 90, borderRadius: 40}}
          />
          <Image
            source={Img.editicon}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              borderRadius: 5,
              position: 'absolute',
              right: 10,
              bottom: 0,
            }}
          />
        </View>
      </ImageBackground>

      <Text style={styles.profileText}>Room No- 001</Text>
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
            onPress={() => toggleModal('Are you Sure Logout the Property')}>
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
        <TouchableOpacity
          onPress={() => toggleModal('Are you Sure leave the Property')}>
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
          onPress={() => toggleModal('Are you Sure delete Your Account')}>
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
    position: 'absolute',
    bottom: -50, // Moves the circle below the ImageBackground
    alignSelf: 'center', // Centers the circle horizontally
    justifyContent: 'center',
    alignItems: 'center',
    width: 100, // Circle width
    height: 100, // Circle height
    borderRadius: 50, // Makes it a circle

    // borderWidth: 4, // Optional border for the circle
    borderColor: '#fff', // Border color
  },
  profileText: {
    textAlign: 'center',
    marginTop: 50, // Adds spacing below the circle
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
