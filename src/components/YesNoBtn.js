import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const YesNoBtn = ({
  text,
  backgroundColor,
  textColor,
  borderColor,
  borderWidth,
  onPress,
  loading,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor, borderColor, borderWidth}]}
      onPress={onPress}
      disabled={loading ? true : false}>
      <Text style={[styles.txt, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default YesNoBtn;

const styles = StyleSheet.create({
  container: {
    width: 85,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginLeft: 10,
  },
  txt: {
    fontSize: 14,
    fontFamily: 'FontText.medium',
  },
});
