import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontText } from '../utlis/CustomFont'

const ReferralField = ({refertxt}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nametxt}>{refertxt}</Text>
    </View>
  )
}

export default ReferralField

const styles = StyleSheet.create({
    nametxt:
    {
        fontSize:14,
        fontFamily:FontText.medium,
        
    },
    container:
    {
        marginVertical:10,
    }
})