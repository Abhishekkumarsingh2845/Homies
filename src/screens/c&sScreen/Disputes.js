import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SecondaryHeader from '../../components/SecondaryHeader'
import Header from '../../components/Header'
import DisputesCmp from '../../components/DisputesCmp'
import PrimaryBtn from '../../components/PrimaryBtn'
import { Color } from '../../utlis/Color'
import DisputesDetail from './DisputesDetail'

const Disputes = () => {
  return (
    <View style={styles.container}>
       <Header/>
       <View style={styles.subcontainer}>
      <DisputesCmp status = 'Pending' statusColor = '#FF1C1C'/>
      <DisputesCmp  status = 'Pending' statusColor = '#FF1C1C'/>
      <DisputesCmp  status = 'Completed' statusColor = '#027516'/>
      <PrimaryBtn  destination={DisputesDetail}txt={"+ADD"} bgcolor={Color.primary} mgntop={200}/>
      </View>
    </View>
  )
}

export default Disputes

const styles = StyleSheet.create({
    container:
    {
        flex:1,
    }
,
subcontainer:
{
    paddingHorizontal:20
}
})