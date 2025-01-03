import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Search from 'react-native-vector-icons/AntDesign';
import {Img} from '../utlis/ImagesPath';

const SearchBar = () => {
  return (
    <View style={styles.contianer}>
      <TouchableOpacity>
        <Image source={Img.srch} style={styles.searchicon} />
      </TouchableOpacity>

      <TextInput
        style={styles.searchbar}
        placeholder="Find Property"
        placeholderTextColor={'#737373'}
      />
     
      <TouchableOpacity>
        <Image source={Img.sttng} style={styles.setting} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchbar: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    backgroundColor:"red",
  },
  contianer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    // backgroundColor:"red",
    paddingHorizontal: 25,
    paddingVertical: Platform.OS === 'android' ? 5 : 15,
    borderRadius: 10,
    marginTop: 10,
  },
  searchicon: {
    width: 20,
    height: 20,
  },
  setting: {
    width: 25,
    height: 25,
  },
});
