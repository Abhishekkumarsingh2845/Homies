import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';

const FoodCatergory = () => {
  return (
    <View style={styles.container}>
      <Image
        source={Img.breakfasticon}
        style={{width: 90, height: 90, resizeMode: 'contain'}}
      />
      <Text style={{alignItems: 'center'}}>Breakfast</Text>
      <Text>7:30AM - 9:00 AM</Text>
    </View>
  );
};

export default FoodCatergory;

const styles = StyleSheet.create({
  container: {
    // alignItems:"center",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
