import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import YesNoBtn from './YesNoBtn';
import {Color} from '../utlis/Color';
import {FontText} from '../utlis/CustomFont';

const LogoutModal = ({ modalVisible, setModalVisible }) => {
  // const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
           
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Are you Sure leave the Property
              </Text>
              <View style={styles.btncontainer}>
                <YesNoBtn
                  text="Yes"
                  backgroundColor={Color.btnclr}
                  textColor={Color.white}
                  borderColor="green"
                  onPress={() => setModalVisible(!modalVisible)}
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
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
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
    textAlign: 'center',
  },
  btncontainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
});

export default LogoutModal;
