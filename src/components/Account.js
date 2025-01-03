import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import { useNavigation } from '@react-navigation/native';

const Account = ({txt1, txt2,dest,mgntop}) => {
    const Nav=useNavigation();
    const handleNav =()=>
    {
        Nav.navigate(dest)
    }
  return (
    <View style={[styles.container,{ marginTop:mgntop}]}>
      <Text style={styles.acc}>{txt1}</Text>
      <TouchableOpacity onPress={handleNav}>
      <Text style={styles.Lgin}>{txt2}</Text>
      </TouchableOpacity>
     
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
   
  },
  acc: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: Color.accounttxt,
  },
  Lgin: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: Color.primary,
  },
});
