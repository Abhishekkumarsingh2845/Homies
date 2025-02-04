import React, {useEffect, useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import YesNoBtn from './YesNoBtn';
import {Color} from '../utlis/Color';
import {FontText} from '../utlis/CustomFont';
import {post, put} from '../utlis/Api';
import { useDispatch, useSelector } from 'react-redux';
import { clearToken } from '../store/AuthSlice';

const LogoutModal = ({
  modalVisible,
  setModalVisible,
  msg = 'Are you Sure leave the Property',
}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  console.log('token received from redux in termcondition', token);
  
  // const token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzlmYTc1OTNlNjZiMWY4YmNmYjYwMDkiLCJpYXQiOjE3Mzg1MTYzMTN9.JuLwf9Pwv1qLzcvxmvRiZOpbIywWM-zw6NI6mjDUc5s';
  const logoutUser = async () => {
    try {
      const response = await post('logout', {}, token);
      console.log('response of the post Lo Api->>>', response);
      dispatch(clearToken(token));
      // console.log('token received from redux in termcondition', token);
      console.log("token of the redux after the loout",token);
    } catch (error) {
      console.log(
        'error in logout post Api',
        error?.reponse?.data || error.message,
      );
    }
  };

  const deleteuser = async () => {
    try {
      const response = await put('deleteUserAccount', {}, token);
      console.log('response of the put delete Api', response);
    } catch (error) {
      console.log(
        'errro in the Delete Api->>>',
        error?.reponse?.data || error.message,
      );
    }
  };

  useEffect(() => {
    logoutUser();
    deleteuser();
  }, []);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{msg}</Text>
          <View style={styles.btncontainer}>
            <YesNoBtn
              text="Yes"
              backgroundColor={Color.btnclr}
              textColor={Color.white}
              borderColor="green"
              onPress={() => {
                deleteuser();
                logoutUser();
                setModalVisible(!modalVisible);
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
