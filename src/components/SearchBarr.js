import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Color } from '../utlis/Color'
import { Img } from '../utlis/ImagesPath'

const SearchBarr = () => {
  return (
    <View style={styles.container}>
   <Image source={Img.srch}/>
   <TextInput style={styles.searchbarstyle} placeholder='hvhvv'/>
    </View>
  )
}

export default SearchBarr

const styles = StyleSheet.create({
    container:
    {
        backgroundColor:Color.white,
    },
    searchbarstyle:
    {
        flex:1,
       
    }
})