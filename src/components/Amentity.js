// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useState} from 'react';
// import Uncheck from 'react-native-vector-icons/MaterialCommunityIcons';
// import Check from 'react-native-vector-icons/MaterialCommunityIcons';
// import {FontText} from '../utlis/CustomFont';

// const Amentity = ({labelText}) => {
//   const [isChecked, setIsChecked] = useState(false);

//   const toggleCheckbox = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.Amentitytxt}>Amenity</Text>
//       <View style={styles.subcontainer}>
//         <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
//           {isChecked ? (
//             <Check name="checkbox-outline" size={25} color={'#FFB83A'} />
//           ) : (
//             <View style={styles.uncheckbox}></View>
//             // <Uncheck name="checkbox-blank-outline" size={25} />
//           )}
//         </TouchableOpacity>
//         <Text style={styles.text}>Personalized welcome gifts</Text>
//       </View>
//       <View style={styles.subcontainer}>
//         <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
//           {isChecked ? (
//             <Check name="checkbox-outline" size={25} color={'#FFB83A'} />
//           ) : (
//             // <Uncheck name="checkbox-blank-outline" size={25} />
//             <View style={styles.uncheckbox}></View>
//           )}
//         </TouchableOpacity>
//         <Text style={styles.text}>Snack baskets with local flavor.</Text>
//       </View>
//       <View style={styles.subcontainer}>
//         <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
//           {isChecked ? (
//             <Check name="checkbox-outline" size={25} color={'#FFB83A'} />
//           ) : (
//             // <Uncheck name="checkbox-blank-outline" size={25} />
//             <View style={styles.uncheckbox}></View>
//           )}
//         </TouchableOpacity>
//         <Text style={styles.text}>WI-FI</Text>
//       </View>
//     </View>
//   );
// };

// export default Amentity;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 10,
//     paddingHorizontal: 10,
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
//     marginTop: 5,
//   },
//   Amentitytxt: {
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
import Uncheck from 'react-native-vector-icons/MaterialCommunityIcons';
import Check from 'react-native-vector-icons/MaterialCommunityIcons';
import {FontText} from '../utlis/CustomFont';

const Amentity = () => {
  const [checkedItems, setCheckedItems] = useState([false, false, false]);

  const toggleCheckbox = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Amentitytxt}>Amenity</Text>

      {/* Personalized welcome gifts */}
      <View style={styles.subcontainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => toggleCheckbox(0)}
        >
          {checkedItems[0] ? (
            <Check name="checkbox-outline" size={20} color={'#FFB83A'} />
          ) : (
            <View style={styles.uncheckbox}></View>
          )}
        </TouchableOpacity>
        <Text style={styles.text}>Personalized welcome gifts</Text>
      </View>

      {/* Snack baskets with local flavor */}
      <View style={styles.subcontainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => toggleCheckbox(1)}
        >
          {checkedItems[1] ? (
            <Check name="checkbox-outline" size={20} color={'#FFB83A'} />
          ) : (
            <View style={styles.uncheckbox}></View>
          )}
        </TouchableOpacity>
        <Text style={styles.text}>Snack baskets with local flavor.</Text>
      </View>

      {/* WI-FI */}
      <View style={styles.subcontainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => toggleCheckbox(2)}
        >
          {checkedItems[2] ? (
            <Check name="checkbox-outline" size={20} color={'#FFB83A'} />
          ) : (
            <View style={styles.uncheckbox}></View>
          )}
        </TouchableOpacity>
        <Text style={styles.text}>WI-FI</Text>
      </View>
    </View>
  );
};

export default Amentity;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 20,
    elevation: 5,
    borderRadius: 10,
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {
      width: 0, // Horizontal shadow offset
      height: 2, // Vertical shadow offset
    },
    shadowOpacity: 0.25, // Shadow transparency
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
  Amentitytxt: {
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
