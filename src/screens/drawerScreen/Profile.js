import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {Img} from '../../utlis/ImagesPath';
import PersonalDetailCard from '../../components/PersonalDetailCard';
import SeeAllDocument from '../../components/SeeAllDocument';
import Logout from 'react-native-vector-icons/MaterialIcons';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import SecondaryHeader from '../../components/SecondaryHeader';
import LogoutModal from '../../components/LogoutModal';
const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />
    
      <ImageBackground source={Img.headerbg} style={styles.imageBackground}>

        {/* <Text style={{fontSize:18,fontFamily:FontText.medium,color:Color.white}}>My Profile</Text> */}
        <View style={styles.circle}>
          <Image
            source={Img.beautyicon}
            style={{width: 90, height: 90, borderRadius: 40}}
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
          <TouchableOpacity  onPress={toggleModal}>
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
        <Text
          style={{
            fontSize: 18,
            fontFamily: FontText.medium,
            color: Color.black,
            marginVertical: 10,
          }}>
          Leave Property
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: FontText.medium,
            color: Color.black,
            marginVertical: 10,
          }}>
          Delete account
        </Text>
        <LogoutModal
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
    width: '100%',
    height: 90,
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

    borderWidth: 4, // Optional border for the circle
    borderColor: '#fff', // Border color
  },
  profileText: {
    textAlign: 'center',
    marginTop: 40, // Adds spacing below the circle
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
