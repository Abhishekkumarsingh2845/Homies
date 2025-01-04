import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {Img} from '../../utlis/ImagesPath';
import FoodCatergory from '../../components/FoodCatergory';
import DaySelector from '../../components/DaySelector';
import Menu from '../../components/Menu';

const FoodMenu = () => {
  return (
    <View style={styles.container}>
      <SecondaryHeader gobackImage={Img.gobackImage} detailtxt={'Food Menu '} />
      <ScrollView>
      <View style={styles.subcontainer}>
        {/* Scrollable row for FoodCatergory */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <FoodCatergory />
            <FoodCatergory />
            <FoodCatergory />
            <FoodCatergory />
          </View>
        </ScrollView>

        <DaySelector />
        <Menu />
        <Menu />
        <Menu />
      </View>
      </ScrollView>
    </View>

  );
};

export default FoodMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
    paddingHorizontal: 10,
  },
});
