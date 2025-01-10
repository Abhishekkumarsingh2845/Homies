
// import React, {useState} from 'react';
// import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import {Color} from '../utlis/Color'; 
// import {FontText} from '../utlis/CustomFont';

// const SortByModal = ({closemodal, openthemodal}) => {
//   const openModal = () => setModalVisible(true);
//   const closeModal = () => setModalVisible(false);
//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={openthemodal}  // Set modal visibility from the parent
//       onRequestClose={closemodal}
//     >
//       <View style={styles.centeredView}>
//         <View style={styles.modalView}>
//           <Text style={styles.modalText}>Sort By</Text>
//           <View
//             style={{
//               width: 350,
//               borderWidth: 0.5,
//               borderColor: '#857E7E',
//             }}
//           />
//           {[
//             'Rating--Low to High',
//             'Rating--High to Low',
//             'Distance--Low to High',
//             'Distance--High to Low',
//             'Price--Low to High',
//             'Price--High to Low',
//           ].map((option, index) => (
//             <View style={styles.ratingContainer} key={index}>
//               <Text>{option}</Text>
//               <TouchableOpacity style={styles.outerCircle} onPress={closemodal}>
//                 <View style={styles.innerCircle} />
//               </TouchableOpacity>
//             </View>
//           ))}
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     paddingHorizontal: 10,
//   },
//   modalView: {
//     width: '100%',
//     position: 'absolute',
//     bottom: 30,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     paddingVertical: 25,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalText: {
//     fontSize: 14,
//     lineHeight: 18,
//     fontFamily: FontText.medium,
//     textAlign: 'center',
//   backgroundColor:"red",
//   },
//   outerCircle: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderColor: '#D9D9D9',
//     borderWidth: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   innerCircle: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: Color.btnclr,
//   },
//   ratingContainer: {
//     marginTop: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
// });

// export default SortByModal;


import React from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Color} from '../utlis/Color'; 
import {FontText} from '../utlis/CustomFont';

const SortByModal = ({closemodal, openthemodal}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={openthemodal}
      onRequestClose={closemodal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Sort By</Text>
          <View
            style={{
              width: 350,
              borderWidth: 0.5,
              borderColor: '#857E7E',
            }}
          />
          {[
            'Rating--Low to High',
            'Rating--High to Low',
            'Distance--Low to High',
            'Distance--High to Low',
            'Price--Low to High',
            'Price--High to Low',
          ].map((option, index) => (
            <View style={styles.ratingContainer} key={index}>
              <Text>{option}</Text>
              <TouchableOpacity
                style={styles.outerCircle}
                onPress={closemodal} // Call the passed function to close the modal
              >
                <View style={styles.innerCircle} />
              </TouchableOpacity>
            </View>
          ))}
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
  },
  modalView: {
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
  modalText: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: FontText.medium,
    textAlign: 'center',
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Color.btnclr,
  },
  ratingContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});

export default SortByModal;
