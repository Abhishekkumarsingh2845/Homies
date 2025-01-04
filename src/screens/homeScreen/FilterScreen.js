import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {Img} from '../../utlis/ImagesPath';
import StarComponent from '../../components/StarComponent';
import Seater from '../../components/Seater';
import Amentity from '../../components/Amentity';
import Distance from '../../components/Distance';
import Price from '../../components/Price';
import GenderSelector from '../../components/GenderSelector';
import PrimaryBtn from '../../components/PrimaryBtn';
import { Color } from '../../utlis/Color';
import BottomTab from '../../navigations/BottomTab';

const FilterScreen = () => {
  return (
    <View style={styles.container}>
    
      <SecondaryHeader gobackImage={Img.goback} detailtxt={'Search'} />
      <ScrollView>
      <View style={styles.subcontainer}>
        <StarComponent />
        <Seater />
        <Amentity />
       <Distance/>
       <Price/>
       <GenderSelector/>
       <PrimaryBtn txt={"Apply"} bgcolor={Color.btnclr} mgntop={20} destination={BottomTab}/>
       <View style={{marginVertical:50}}/>
      </View>
      </ScrollView>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
});
