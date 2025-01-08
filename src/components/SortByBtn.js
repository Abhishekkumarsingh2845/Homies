// import {
//   Image,
//   Platform,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React from 'react';
// import {Img} from '../utlis/ImagesPath';
// import {Color} from '../utlis/Color';
// import {FontText} from '../utlis/CustomFont';

// const SortByBtn = ({mrntop}) => {
//   return (
//     <TouchableOpacity style={[styles.container,{marginTop:mrntop}]}>
//       <Text style={styles.sortbytxt}>Short By</Text>
//       <Image source={Img.sortbyicon} style={styles.sortbystyle} />
//     </TouchableOpacity>
//   );
// };

// export default SortByBtn;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     backgroundColor: Color.white,
//     marginHorizontal: 150,
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: (Platform.OS === 'android' ? 18 : 15),
//     shadowColor: '#000', // Shadow color (iOS)
//     shadowOffset: {width: 0, height: 2}, // Shadow position (iOS)
//     shadowOpacity: 0.2, // Shadow transparency (iOS)
//     shadowRadius: 4,
//     elevation: 10,
//   },
//   sortbystyle: {
//     width: 15,
//     height: 15,
//   },
//   sortbytxt: {
//     fontSize: 14,
//     fontFamily: FontText.medium,
//     color: Color.black,
//   },
// });
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Img } from '../utlis/ImagesPath';
import { Color } from '../utlis/Color';
import { FontText } from '../utlis/CustomFont';

const SortByBtn = ({ mrntop, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, { marginTop: mrntop }]} onPress={onPress}>
      <Text style={styles.sortByText}>Sort By</Text>
      <Image source={Img.sortbyicon} style={styles.sortByStyle} />
    </TouchableOpacity>
  );
};

export default SortByBtn;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Color.white,
    marginHorizontal: 150,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: Platform.OS === 'android' ? 18 : 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
  },
  sortByStyle: {
    width: 15,
    height: 15,
  },
  sortByText: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
  },
});
