// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import {FontText} from '../utlis/CustomFont';
// import { ScreenDimensions } from '../utlis/DimensionApi';

// const VisitRequestbtn = ({Onprs}) => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.visitbtncontainer} onPress={Onprs}>
//         <Text style={styles.txtstyle}>VisitRequestbtn</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.paynowbtncontainer} >
//         <Text style={styles.paynowtxtstyle}>Pay Now</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default VisitRequestbtn;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     marginTop:10,
//     // justifyContent:"space-between",
//   },
//   visitbtncontainer: {
//     // width: 160,
//     paddingHorizontal:ScreenDimensions.screenWidth*0.03,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#FFB83A',
//     borderRadius: 15,
//   },
//   txtstyle: {
//     fontSize: 16,
//     fontFamily: FontText.medium,
//     color: '#FFFFFF',
//   },
//   paynowtxtstyle: {
//     fontSize: 16,
//     fontFamily: FontText.medium,
//     color: '#FFB83A',
//   },
//   paynowbtncontainer: {
//     paddingHorizontal:ScreenDimensions.screenWidth*0.14,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     borderRadius: 15,
//     marginLeft: ScreenDimensions.screenWidth*0.02,
//     borderColor: '#F1F1F1',
//     borderWidth: 1,
//     borderColor:"#FFB83A"
//   },
// });

// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useRef, useMemo, useState, useCallback} from 'react';
// import {FontText} from '../utlis/CustomFont';
// import {ScreenDimensions} from '../utlis/DimensionApi';
// import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

// const VisitRequestbtn = ({Onprs}) => {
//   const sheetRef = useRef(null);
//   const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
//   const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false); // State to track BottomSheet visibility

//   const handleSheetChange = useCallback(index => {
//     console.log('handleSheetChange', index);
//   }, []);
//   const handleSnapPress = useCallback(index => {
//     sheetRef.current?.snapToIndex(index);
//   }, []);
//   const handleClosePress = useCallback(() => {
//     sheetRef.current?.close();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.visitbtncontainer} onPress={Onprs}>
//         <Text style={styles.txtstyle}>Visit Request</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.paynowbtncontainer}
//         // onPress={handleOpenBottomSheet}
//       >
//         <Text style={styles.paynowtxtstyle}>Pay Now</Text>
//       </TouchableOpacity>

//       <BottomSheet
//         ref={sheetRef}
//         index={0}
//         snapPoints={snapPoints}
//         enableDynamicSizing={false}
//         onChange={handleSheetChange}>
//         <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
//           <View>
//             <Text>as;dka</Text>
//           </View>
//         </BottomSheetScrollView>
//       </BottomSheet>
//     </View>
//   );
// };

// export default VisitRequestbtn;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   visitbtncontainer: {
//     paddingHorizontal: ScreenDimensions.screenWidth * 0.06,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#FFB83A',
//     borderRadius: 15,
//   },
//   txtstyle: {
//     fontSize: 16,
//     fontFamily: FontText.medium,
//     color: '#FFFFFF',
//   },
//   paynowtxtstyle: {
//     fontSize: 16,
//     fontFamily: FontText.medium,
//     color: '#FFB83A',
//   },
//   paynowbtncontainer: {
//     paddingHorizontal: ScreenDimensions.screenWidth * 0.14,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     borderRadius: 15,
//     marginLeft: ScreenDimensions.screenWidth * 0.02,
//     borderColor: '#F1F1F1',
//     borderWidth: 1,
//     borderColor: '#FFB83A',
//   },
//   bottomSheetContent: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   bottomSheetTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   bottomSheetDescription: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   confirmButton: {
//     backgroundColor: '#FFB83A',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 10,
//   },
//   confirmButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {FontText} from '../utlis/CustomFont';
import {ScreenDimensions} from '../utlis/DimensionApi';
import {Img} from '../utlis/ImagesPath';

const VisitRequestbtn = ({Onprs, vistreq,OnPressRequestbtn}) => {
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
        //in his commmand  from which request succesful is open
        // onPress={handleOpenModal}
      >
        <Text style={styles.paynowtxtstyle}>Pay Now</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
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

              {/* <TouchableOpacity style={styles.confirmButton} onPress={handleCloseModal}>
              <Text style={styles.confirmButtonText}>Confirm Payment</Text>
            </TouchableOpacity> */}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default VisitRequestbtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  visitbtncontainer: {
    paddingHorizontal: ScreenDimensions.screenWidth * 0.08,
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
    paddingHorizontal: ScreenDimensions.screenWidth * 0.14,
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
