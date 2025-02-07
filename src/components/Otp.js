// import {StyleSheet, Text, TextInput, View} from 'react-native';
// import React from 'react';
// import {Color} from '../utlis/Color';
// import { ScreenDimensions } from '../utlis/DimensionApi';

// const Otp = () => {
//   return (
//     <View style={styles.container}>
//       <TextInput style={styles.otpcontainer} />
//       <TextInput style={styles.otpcontainer} />
//       <TextInput style={styles.otpcontainer} />
//       <TextInput style={styles.otpcontainer} />
//     </View>
//   );
// };

// export default Otp;

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop:10
//   },
//   otpcontainer: {
//     backgroundColor: "#F0F0F0",
//     width: ScreenDimensions.screenWidth*0.20,
//     height: ScreenDimensions.screenHeight*0.07,
//     borderRadius: 10,
//     textAlign:"center"
//   },
// });

import React, { useState, useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { ScreenDimensions } from '../utlis/DimensionApi';

const Otp = ({setOtp}) => {
  const [otp, setOtp1] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleChangeText = (text, index) => {
    if (text.length > 1) return; // Prevents multiple characters in one input

    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp1(newOtp);
    setOtp(newOtp)
    if (text && index < 3) {
      inputRefs[index + 1].current.focus(); // Move to next input
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={inputRefs[index]}
          style={styles.otpcontainer}
          keyboardType="number-pad"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
              inputRefs[index - 1].current.focus(); // Move to previous input on backspace
            }
          }}
        />
      ))}
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  otpcontainer: {
    backgroundColor: "#F0F0F0",
    width: ScreenDimensions.screenWidth * 0.20,
    height: ScreenDimensions.screenHeight * 0.07,
    borderRadius: 10,
    textAlign: "center",
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 20,
  },
});
