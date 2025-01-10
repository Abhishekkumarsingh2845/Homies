import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Img} from '../utlis/ImagesPath';
import {FontText} from '../utlis/CustomFont';
import {Color} from '../utlis/Color';
import {useNavigation} from '@react-navigation/native';

const CatergoryComponenet = ({Imgsource, toptxt, bottomtxt}) => {
  const navigation = useNavigation();
  const [textcolor, settextcolor] = useState(Color.clr87);

  const handlepress = () => {
    settextcolor('#FF9457');
    // navigation.navigate('DrawerNavigator');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlepress}>
      <Image source={Imgsource} style={styles.imgstyle} />
      <View style={{marginTop: 5}} />
      <Text style={[styles.txtstyle, {color: textcolor}]}>{toptxt}</Text>
      <Text style={[styles.txtstyle, {color: textcolor}]}>{bottomtxt}</Text>
    </TouchableOpacity>
  );
};

export default CatergoryComponenet;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
  imgstyle: {
    width: 40,
    height: 40,
  },
  txtstyle: {
    fontSize: 12,
    fontFamily: FontText.light,
    lineHeight: 16,
    color: '#FF9457',
  },
});
