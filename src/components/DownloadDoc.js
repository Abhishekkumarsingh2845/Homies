import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../utlis/Color';
import {FontText} from '../utlis/CustomFont';

const DownloadDoc = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginLeft: 10,
          fontSize: 16,
          fontFamily: FontText.medium,
          color: 'white',
        }}>
        Document.jpg
      </Text>
    </View>
  );
};

export default DownloadDoc;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.btnclr,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});
