import React, {useEffect, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import YesNoBtn from './YesNoBtn';
import {Color} from '../utlis/Color';
import {FontText} from '../utlis/CustomFont';
import {post, put} from '../utlis/Api';
import {useDispatch, useSelector} from 'react-redux';
import {clearToken, clearUser, setExist} from '../store/AuthSlice';
import {useNavigation} from '@react-navigation/native';
import {clearMyProperty} from '../store/MyPropertySlice';
import Toast from 'react-native-toast-message';
import {clearLocation} from '../store/LocationSlice';
import {clearProperties} from '../store/PropertiesSlice';

const LogoutModal = ({
  modalVisible,
  setModalVisible,
  msg = 'Are you Sure leave the Property',
  modalType,
  setModalType,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const {token} = useSelector(state => state.auth.user);
  // const {data: myProperty} = useSelector(state => state.MyProperty);
  // console.log('logout modal', modalType);
  const {data: myProperty} = useSelector(state => state.MyProperty);
  console.log('logout modal', myProperty);

  const logoutUser = async () => {
    setLoading(true);
    try {
      const response = await post('logout', {}, token);
      if (response.success) {
        setModalVisible(!modalVisible);
        dispatch(clearUser({}));
        dispatch(clearLocation());
        dispatch(clearMyProperty());
        dispatch(clearProperties());

        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Login',
            },
          ],
        });
      }
    } catch (error) {
      console.log(
        'error in logout post Api',
        error?.reponse?.data || error.message,
      );
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
    setModalType('');
  };

  const deleteuser = async () => {
    console.log('delete user---------', modalType);
    try {
      const response = await put('deleteUserAccount', {}, token);
      if (response.success) {
        setModalVisible(!modalVisible);
        dispatch(clearUser({}));
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Login',
            },
          ],
        });
      }
    } catch (error) {
      console.log(
        'errro in the Delete Api->>>',
        error?.reponse?.data || error.message,
      );
    }
    setModalType('');
  };

  const leaveProperty = async () => {
    const params = {
      propertyId: myProperty?._id,
      landLordId: myProperty?.landLordId,
      
      // reason: 'I am leaving this property',
    };
    console.log('body leave property', params);

    try {
      setLoading(true);

      const response = await post('leaveRequest', params);
      console.log('response of  the  leave property', response);
      if (response.success) {
        setModalVisible(false);
      }
      if (!response.success) {
        console.log('response of  the  leave property false', response);
        Toast.show({
          type: 'error',
          text1: 'Property Joined',
          text2: response?.message,
          position: 'bottom',
        });
      }
    } catch (error) {
      setModalVisible(false);
      console.log('erorr of the leave', error.message);
    } finally {
      setLoading(false);
    }
    setModalType('');
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={Color.primary} />
        </View>
      ) : (
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{msg}</Text>
            <View style={styles.btncontainer}>
              <YesNoBtn
                loading={loading}
                text="Yes"
                backgroundColor={Color.btnclr}
                textColor={Color.white}
                borderColor="green"
                onPress={() => {
                  if (modalType == 'logout') {
                    logoutUser();
                  }
                  if (modalType == 'leave') {
                    leaveProperty();
                  }
                  if (modalType == 'delete') {
                    deleteuser();
                  }

                  // dispatch(clearToken(token));
                  // setModalVisible(!modalVisible);
                }}
              />
              <YesNoBtn
                text="No"
                backgroundColor={Color.white}
                textColor={Color.btnclr}
                borderColor={Color.btnclr}
                borderWidth={1}
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </View>
      )}
      <Toast />
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 50,
  },
  modalView: {
    // margin: 20,
    width: '100%',

    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    // backgroundColor: 'red',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    // marginBottom: 15,
    fontSize: 14,
    lineHeight: 18,
    fontFamily: FontText.medium,
    color: Color.black,
    textAlign: 'center',
  },
  btncontainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
});

export default LogoutModal;
