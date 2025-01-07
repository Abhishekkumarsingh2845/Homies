// import {Image, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {Img} from '../utlis/ImagesPath';

// const FoodCatergory = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={Img.breakfasticon}
//         style={{width: 90, height: 90, resizeMode: 'contain'}}
//       />
//       <Text style={{alignItems: 'center'}}>Breakfast</Text>
//       <Text>7:30AM - 9:00 AM</Text>
//     </View>
//   );
// };

// export default FoodCatergory;

// const styles = StyleSheet.create({
//   container: {
//     // alignItems:"center",
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import { FontText } from '../utlis/CustomFont';

const FoodCategory = ({imageSource = Img.breakfasticon, title = "Breakfast", time = "7:30 AM - 9:00 AM"}) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

export default FoodCategory;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:10,
    marginTop:10,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 12,
    fontFamily:FontText.medium,
    color:"#101010",
    
  },
  time: {
   
    fontSize: 10,
    fontFamily:FontText.light,
    color:"#101010",
  },
});
