import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {FontText} from '../utlis/CustomFont';
import {ScreenDimensions} from '../utlis/DimensionApi';
import {Img} from '../utlis/ImagesPath';

const VisitRequestbtn = ({Onprs, vistreq, OnPressRequestbtn, loading}) => {
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  const handleOpenModal = () => {
    setModalVisible(true); // Show modal
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Hide modal
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.visitbtncontainer} onPress={Onprs}>
        <Text style={styles.txtstyle}>Visit Request</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.paynowbtncontainer}
        onPress={OnPressRequestbtn}
        disabled={loading ? true : false}
        //in his commmand  from which request succesful is open
        // onPress={handleOpenModal}
      >
        {loading ? (
          <ActivityIndicator
            size={20}
            color={'#FFB83A'}
            style={{fontWeight: 'bold'}}
          />
        ) : (
          <Text style={styles.paynowtxtstyle}>Pay Now</Text>
        )}
      </TouchableOpacity>

      {/* Modal */}
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal} // Handle back button press on Android
      >
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Image
                source={Img.greentick}
                style={{width: 60, height: 60, resizeMode: 'contain'}}
              />
              <Text style={styles.modalTitle}>Request sent Successful</Text>

            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal> */}
    </View>
  );
};

export default VisitRequestbtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-evenly',
  },
  visitbtncontainer: {
    // paddingHorizontal: ScreenDimensions.screenWidth * 0.08,
    width: '45%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB83A',
    borderRadius: 15,
  },
  txtstyle: {
    fontSize: 16,
    fontFamily: FontText.medium,
    color: '#FFFFFF',
  },
  paynowtxtstyle: {
    fontSize: 16,
    fontFamily: FontText.medium,
    color: '#FFB83A',
  },
  paynowbtncontainer: {
    // paddingHorizontal: ScreenDimensions.screenWidth * 0.14,
    width: '45%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    marginLeft: ScreenDimensions.screenWidth * 0.02,
    borderColor: '#FFB83A',
    borderWidth: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '100%',
    padding: 20,
    height: '30%',
    backgroundColor: 'white',
    borderTopStartRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    // alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: FontText.bold,
    color: 'black',
    marginTop: 25,
  },
  modalDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#FFB83A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
