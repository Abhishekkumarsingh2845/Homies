import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SeeAllDocument = () => {
    const navigation=useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("PersonDoument")}>
      <Text>See All Document Details</Text>
    </TouchableOpacity>
  )
}

export default SeeAllDocument

const styles = StyleSheet.create({
    container:
    {
        marginTop:10,
        backgroundColor:"#FFFFFF",
        marginHorizontal:20,
        paddingVertical:20,
        borderRadius:10,
        paddingHorizontal:10,
    }
})