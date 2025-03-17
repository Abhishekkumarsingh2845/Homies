// import {
//   Image,
//   Platform,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React from 'react';
// import Search from 'react-native-vector-icons/AntDesign';
// import {Img} from '../utlis/ImagesPath';

// const SearchBar = () => {
//   return (
//     <View style={styles.contianer}>
//       <TouchableOpacity>
//         <Image source={Img.srch} style={styles.searchicon} />
//       </TouchableOpacity>

//       <TextInput
//         style={styles.searchbar}
//         placeholder="Find Property"
//         placeholderTextColor={'#737373'}
//       />

//       <TouchableOpacity>
//         <Image source={Img.sttng} style={styles.setting} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SearchBar;

// const styles = StyleSheet.create({
//   searchbar: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 14,
//     fontWeight: '400',
//     lineHeight: 18,

//   },
//   contianer: {
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#EFEFEF',
//     // backgroundColor:"red",
//     paddingHorizontal: 25,
//     paddingVertical: Platform.OS === 'android' ? 5 : 15,
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   searchicon: {
//     width: 20,
//     height: 20,
//   },
//   setting: {
//     width: 25,
//     height: 25,
//   },
// });

import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useState} from 'react';
import {Img} from '../utlis/ImagesPath';
import {useNavigation} from '@react-navigation/native';
import {FontText} from '../utlis/CustomFont';
import {Color} from '../utlis/Color';
import SortByModal from './SortBymodal';

const SearchBar = ({
  placeholderText = 'Find Property',
  containerBgColor = '#EFEFEF',
  destination,
  handleFilter = null,
  onChangeText ,
  onSelect = null
}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleNavigation = () => {
    if (destination) {
      navigation.navigate(destination , {onSelect : onSelect });
    }
  };

  const handleSearchNavigation = () => {
    if(handleFilter){
      navigation.navigate("FilterScreen" , {handleFilter : handleFilter});
    }
    else{
      navigation.navigate("FilterScreen");

    }
  };
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: 'white'}]}
      onPress={handleNavigation}>
      <TouchableOpacity>
        <Image source={Img.srch} style={styles.searchicon} />
      </TouchableOpacity>
      <TextInput
        style={styles.searchbar}
        placeholder={placeholderText} // Dynamic placeholder
        placeholderTextColor={'#737373'}
        onFocus={handleNavigation}
        onChangeText={onChangeText}
      />

      <TouchableOpacity onPress={()=>handleSearchNavigation()}>
        <Image source={Img.sttng} style={styles.setting} />
      </TouchableOpacity>
      <SortByModal
        closemodal={closeModal}
        openthemodal={modalVisible} // Pass the modal visibility
      />
    </TouchableOpacity>
  );
};

export default memo(SearchBar);

const styles = StyleSheet.create({
  searchbar: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontFamily: FontText.light,
    color: Color.clr73,
    backgroundColor : 'transparent',
    lineHeight: 18,
    fontWeight: '400',
    lineHeight: 18,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: Platform.OS === 'android' ? 2 : 15,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor : 'white',
    // borderWidth : 10
  },
  searchicon: {
    width: 18,
    height: 18,
  },
  setting: {
    width: 25,
    height: 25,
  },
});
