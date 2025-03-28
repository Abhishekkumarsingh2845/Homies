import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import Wifi from 'react-native-vector-icons/FontAwesome5';
import {FontText} from '../utlis/CustomFont';

const Amenity = ({txt, mrgnleft, icon}) => {
  return (
    <TouchableOpacity style={[styles.container, {marginLeft: mrgnleft}]}>
      {icon}

      <Text style={styles.amenitytxt}>{txt}</Text>
    </TouchableOpacity>
  );
};

export default Amenity;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    alignItems: 'center',

    paddingVertical: 10,

    width: 70,
    borderRadius: 10,
    elevation: 10,

    shadowColor: '#000', // Shadow color (iOS)
    shadowOffset: {width: 0, height: 2}, // Shadow position (iOS)
    shadowOpacity: 0.2, // Shadow transparency (iOS)
    shadowRadius: 4, // Shadow blur radius (iOS),
  },
  amenitytxt: {
    fontSize: 11,
    fontFamily: FontText.light,
    color: Color.black,
    lineHeight: 16,
  },
});

// import {StyleSheet, Text, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {Color} from '../utlis/Color';
// import {FontText} from '../utlis/CustomFont';
// import Icon from 'react-native-vector-icons/FontAwesome5'; // Default icon library

// const Amenity = ({txt, mrgnleft, iconName, iconSize = 16, iconColor = 'black', iconType}) => {
//   const IconComponent = iconType || Icon; // Use the provided iconType or default to FontAwesome5

//   return (
//     <TouchableOpacity style={[styles.container, {marginLeft: mrgnleft}]}>
//       {/* Dynamic Icon */}
//       <IconComponent name={iconName} size={iconSize} color={iconColor} />
//       <Text style={styles.amenitytxt}>{txt}</Text>
//     </TouchableOpacity>
//   );
// };

// export default Amenity;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: Color.white,
//     alignItems: 'center',
//     paddingVertical: 10,
//     width: 70,
//     borderRadius: 10,
//     elevation: 10,
//     shadowColor: '#000', // Shadow color (iOS)
//     shadowOffset: {width: 0, height: 2}, // Shadow position (iOS)
//     shadowOpacity: 0.2, // Shadow transparency (iOS)
//     shadowRadius: 4, // Shadow blur radius (iOS)
//   },
//   amenitytxt: {
//     fontSize: 11,
//     fontFamily: FontText.light,
//     color: Color.black,
//     lineHeight: 16,
//   },
// });
