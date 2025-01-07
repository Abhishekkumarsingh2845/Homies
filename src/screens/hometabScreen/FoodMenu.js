import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {Img} from '../../utlis/ImagesPath';
import FoodCatergory from '../../components/FoodCatergory';
import DaySelector from '../../components/DaySelector';
import Menu from '../../components/Menu';
import {useNavigation} from '@react-navigation/native';
import FoodCategory from '../../components/FoodCatergory';

const FoodMenu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Food Menu'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.subcontainer}>
          {/* Scrollable row for FoodCatergory */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <FoodCatergory />
              <FoodCatergory
                imageSource={Img.lunchicon}
                title="Lunch"
                time="12:00 PM - 2:00 PM"
              />
              <FoodCategory
                imageSource={Img.snackicon}
                title="Snacks"
                time="5:00PM - 6:00PM"
              />
              <FoodCategory
                imageSource={Img.dinnericon}
                title="Dinner"
                time="7:00 PM - 9:00 PM"
              />
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
