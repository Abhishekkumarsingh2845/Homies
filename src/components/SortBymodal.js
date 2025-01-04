import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import YesNoBtn from './YesNoBtn';
import {Color} from '../utlis/Color';
import {FontText} from '../utlis/CustomFont';
import {Img} from '../utlis/ImagesPath';

const SortBymodal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            openModal();
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Short By</Text>
              <View
                style={{
                  width: 350,
                  borderWidth: 0.5,
                  borderColor: '#857E7E',
                }}></View>

              <View style={styles.ratingcontianr}>
                <Text>Rating--Low to High</Text>
                <TouchableOpacity
                  style={styles.outerCircle}
                  onPress={() => closeModal()}>
                  <View style={styles.innerCircle}></View>
                </TouchableOpacity>
              </View>
              <View style={styles.ratingcontianr}>
                <Text>Rating--High to Low</Text>
                <View style={styles.outerCircle}>
                  <View style={styles.innerCircle}></View>
                </View>
              </View>
              <View style={styles.ratingcontianr}>
                <Text>Distance--Low to High</Text>
                <View style={styles.outerCircle}>
                  <View style={styles.innerCircle}></View>
                </View>
              </View>
              <View style={styles.ratingcontianr}>
                <Text>Distance--High to Low</Text>
                <View style={styles.outerCircle}>
                  <View style={styles.innerCircle}></View>
                </View>
              </View>
              <View style={styles.ratingcontianr}>
                <Text>Price--Low to High</Text>
                <View style={styles.outerCircle}>
                  <View style={styles.innerCircle}></View>
                </View>
              </View>
              <View style={styles.ratingcontianr}>
                <Text>Price--High to Low</Text>
                <View style={styles.outerCircle}>
                  <View style={styles.innerCircle}></View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        {/* <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */}
           <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Text style={styles.sortbytxt}>Short By</Text>
      <Image source={Img.sortbyicon} style={styles.sortbystyle} />
    </TouchableOpacity>
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
    paddingHorizontal: 10,
  },
  modalView: {
    // margin: 20,
    width: '100%',
    position: 'absolute',
    bottom: 30,
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
    backgroundColor: '#F194FF',
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
    backgroundColor: Color.btnclr,
    // width:200,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
  },
  txtstyle: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: 'white',
  },
  outerCircle: {
    width: 20, // Outer circle width
    height: 20, // Outer circle height
    borderRadius: 10, // Makes the View round
    borderColor: '#D9D9D9',
    borderWidth: 1, // Outer circle color (tomato red)
    justifyContent: 'center', // Centers inner circle inside outer circle
    alignItems: 'center', // Centers inner circle inside outer circle
  },
  innerCircle: {
    width: 10, // Inner circle width
    height: 10, // Inner circle height
    borderRadius: 5, // Makes the View round
    backgroundColor: Color.btnclr, // Inner circle color (white)
  },
  ratingcontianr: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  sortbystyle: {
    width: 15,
    height: 15,
  },
  sortbytxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
  },
});

export default SortBymodal;
