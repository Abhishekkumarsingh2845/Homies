import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {Img} from '../../utlis/ImagesPath';
import StarComponent from '../../components/StarComponent';
import Seater from '../../components/Seater';
import Amentity from '../../components/Amentity';
import Distance from '../../components/Distance';
import Price from '../../components/Price';
import GenderSelector from '../../components/GenderSelector';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import BottomTab from '../../navigations/BottomTab';
import {useNavigation, useRoute} from '@react-navigation/native';

const FilterScreen = () => {
  const navigation = useNavigation();
  const [filterData , setFilterData] = useState({})
  const {params} = useRoute()
  console.log("filterData============== > > > > > > >" , params)

  const filterFunc = () =>{
    params.handleFilter(filterData)
  }
  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Search'}
        onPress={() =>{ navigation.goBack()}}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.subcontainer}>
          <StarComponent setFilterData={setFilterData}/>
          <Seater setFilterData={setFilterData}/>
          <Amentity setFilterData={setFilterData}/>
          <Distance setFilterData={setFilterData}/>
          <Price  setFilterData={setFilterData}/>
          <GenderSelector setFilterData={setFilterData}/>
          <PrimaryBtn
           Onpress={filterFunc}
            txt={'Apply'}
            bgcolor={Color.btnclr}
            mgntop={20}
            destination={BottomTab}
          />
          <View style={{marginVertical: 50}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
});
