import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'
import { FontText } from '../utlis/CustomFont';
import { Color } from '../utlis/Color';
import YesNoBtn from './YesNoBtn';
import { useNavigation } from '@react-navigation/native';

const GuestModal = ({modalVisible , setModalVisible}) => {
const Nav = useNavigation()
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
        <Text style={styles.modalText}>Please sign Up the App</Text>
        <View style={styles.btncontainer}>
          <YesNoBtn
            text="Sign Up"
            backgroundColor={Color.btnclr}
            textColor={Color.white}
            borderColor="green"
            onPress={() => {
                setModalVisible(false)
                Nav.navigate('Login')
            }}
          />
         
        </View>
      </View>
    </View>
  </Modal>
  )
}

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

export default GuestModal