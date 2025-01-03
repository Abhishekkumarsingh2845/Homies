import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontText } from '../utlis/CustomFont'
import { Color } from '../utlis/Color'

const PayNowbtn = () => {
  return (
    <View style={styles.container}>
      <Text  style={styles.txt}>Pay Now</Text>
    </View>
  )
}

export default PayNowbtn

const styles = StyleSheet.create({
  container:{
    // width:100,
    // height:50,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#257500",
    paddingVertical:5,
    paddingHorizontal:20,
    borderRadius:10,
  },
  txt:{
    fontSize:16,
    fontFamily:FontText.medium,
    color:Color.white,
  }
})