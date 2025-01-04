import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';

const Distance = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.titletxt}>Distance</Text>
        <View style={styles.textContainer}>
          <Text>Min</Text>
          <Text>Max</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>0km</Text>
  
          <Slider
            style={{width: 280, height: 40}}
            minimumValue={0}
            maximumValue={1}
             thumbTintColor="#FFB83A"
            minimumTrackTintColor="#FFB83A"
            maximumTrackTintColor="#FFB83A"
          />
  
          <Text>50km</Text>
        </View>
      </View>
    );
  };
  
  export default Distance;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      paddingVertical: 10,
      marginTop: 20,
      elevation: 5,
      borderRadius: 10,
      shadowColor: '#000', // Shadow color for iOS
      shadowOffset: {
        width: 0, // Horizontal shadow offset
        height: 2, // Vertical shadow offset
      },
      shadowOpacity: 0.25, // Shadow transparency
      shadowRadius: 3.84,
    },
    textContainer: {
      flexDirection: 'row', // Places Min and Max in a horizontal row
      justifyContent: 'space-between', // Distributes space between them
      marginTop: 10, // Adds space above the row
      paddingHorizontal: 10, // Adds padding on both sides
      alignItems: 'center',
    },
    titletxt:
    {
      marginHorizontal:10,
    }
  });
  