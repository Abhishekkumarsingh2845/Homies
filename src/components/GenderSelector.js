// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useState} from 'react';
// import {FontText} from '../utlis/CustomFont';
// import Uncheck from 'react-native-vector-icons/MaterialCommunityIcons';
// import Check from 'react-native-vector-icons/MaterialCommunityIcons';
// const GenderSelector = () => {
//   const [isChecked, setIsChecked] = useState(false);

//   const toggleCheckbox = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.gendertxt}>Gender</Text>
//       <View style={styles.subcontainer}>
//         <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
//           {isChecked ? (
//             <Check name="checkbox-outline" size={25} color={'#FFB83A'} />
//           ) : (
//             <View style={styles.uncheckbox}></View>
//           )}
//         </TouchableOpacity>
//         <Text style={styles.text}>Boys</Text>
//       </View>
//       <View style={styles.subcontainer}>
//         <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
//           {isChecked ? (
//             <Check name="checkbox-outline" size={25} color={'#FFB83A'} />
//           ) : (
//             <View style={styles.uncheckbox}></View>
//           )}
//         </TouchableOpacity>
//         <Text style={styles.text}>Girls.</Text>
//       </View>
//       <View style={styles.subcontainer}>
//         <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
//           {isChecked ? (
//             <Check name="checkbox-outline" size={25} color={'#FFB83A'} />
//           ) : (
//             <View style={styles.uncheckbox}></View>
//           )}
//         </TouchableOpacity>
//         <Text style={styles.text}>Co-living</Text>
//       </View>
//     </View>
//   );
// };

// export default GenderSelector;

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 10,
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 10,
//     marginTop: 20,
//     elevation: 5,
//     // flexDirection: 'row',
//     borderRadius: 10,
//     shadowColor: '#000', // Shadow color for iOS
//     shadowOffset: {
//       width: 0, // Horizontal shadow offset
//       height: 2, // Vertical shadow offset
//     },
//     shadowOpacity: 0.25, // Shadow transparency
//     shadowRadius: 3.84,
//   },
//   checkbox: {
//     marginRight: 10,
//   },
//   text: {
//     fontSize: 14,
//     color: '#737373',
//     fontFamily: FontText.medium,
//   },
//   subcontainer: {
//     flexDirection: 'row',
//   },
//   gendertxt: {
//     fontSize: 14,
//     fontFamily: FontText.medium,
//     color: '#252C32',
//   },
//   uncheckbox: {
//     width: 18,
//     height: 18,
//     borderWidth: 1,
//     borderRadius: 5,
//     BorderColor: '#B0BABF',
//   },
// });



import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FontText} from '../utlis/CustomFont';
import Uncheck from 'react-native-vector-icons/MaterialCommunityIcons';
import Check from 'react-native-vector-icons/MaterialCommunityIcons';

const GenderSelector = ({setFilterData}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  console.log("selectedItem ===================" , selectedItem)

  const toggleCheckbox = (index) => {
    console.log("index" , index , ' selectedItem' , selectedItem)
    if(index == selectedItem){
      setSelectedItem(null)
      setFilterData(prev => ({
        ...prev , 
        gender : ''
      }))
      return
    }
    setSelectedItem(index);
    setFilterData(prev => ({
      ...prev , 
      gender : index == 0 ? 'Boys' : index == 1 ? "Girls" : "Co-living"
    }))
  };

  return (
    <View style={styles.container}>
      <Text style={styles.gendertxt}>Gender</Text>

      {/* Boys */}
      <View style={styles.subcontainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => toggleCheckbox(0)}>
          {selectedItem == 0 ? (
            <Check name="checkbox-outline" size={20} color={'#FFB83A'} />
          ) : (
            <View style={styles.uncheckbox}></View>
          )}
        </TouchableOpacity>
        <Text style={styles.text}>Boys</Text>
      </View>

      {/* Girls */}
      <View style={styles.subcontainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => toggleCheckbox(1)}>
          {selectedItem == 1 ? (
            <Check name="checkbox-outline" size={20} color={'#FFB83A'} />
          ) : (
            <View style={styles.uncheckbox}></View>
          )}
        </TouchableOpacity>
        <Text style={styles.text}>Girls</Text>
      </View>

      {/* Co-living */}
      <View style={styles.subcontainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => toggleCheckbox(2)}>
          {selectedItem == 2 ? (
            <Check name="checkbox-outline" size={20} color={'#FFB83A'} />
          ) : (
            <View style={styles.uncheckbox}></View>
          )}
        </TouchableOpacity>
        <Text style={styles.text}>other</Text>
      </View>
    </View>
  );
};

export default GenderSelector;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    marginTop: 20,
    elevation: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  checkbox: {
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    color: '#737373',
    fontFamily: FontText.medium,
  },
  subcontainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  gendertxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: '#252C32',
  },
  uncheckbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#B0BABF',
  },
});
