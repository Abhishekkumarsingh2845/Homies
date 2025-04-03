import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {Img} from '../../utlis/ImagesPath';
import FoodCatergory from '../../components/FoodCatergory';
import DaySelector from '../../components/DaySelector';
import Menu from '../../components/Menu';
import {useNavigation, useRoute} from '@react-navigation/native';
import FoodCategory from '../../components/FoodCatergory';
import {get} from '../../utlis/Api';

const FoodMenu = ({senddata}) => {
  const route = useRoute();
  const {id: propertyId} = route.params;

  console.log('->>>>actual', propertyId);
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Food');
  const [data, setData] = useState({});
  const [selectedDay, setSelectedDay] = useState('Mon');
  const PropertywithFood = async () => {
    console.log('PropertywithFood');

    const params = {
      propertyId: propertyId,
      week: selectedDay,
    };

    console.log(
      'consoling the params of the propertyId in the Foodmenu',
      propertyId,
    );
    try {
      const response = await get('propertyWithFood', params);
      setData(response?.data[0]?.foodDetails);
      console.log(
        'response of the property withFood=>>> in the Foodmenu',
        response?.data[0],
      );
    } catch (error) {
      console.log('error in the propertyWithFood', error.message);
    }
  };

  useEffect(() => {
    console.log('useeffect ');
    PropertywithFood();
  }, [selectedDay]);
  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Food Menu'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.subcontainer}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
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

              <View style={{marginVertical: 50}}></View>
            </View>
          </ScrollView>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <TouchableOpacity onPress={() => setSelectedTab('Overview')}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === 'Overview' && styles.activeTabText,
                ]}>
                Overview
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectedTab('Rooms')}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === 'Rooms' && styles.activeTabText,
                ]}>
                Rooms
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectedTab('Food')}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === 'Food' && styles.activeTabText,
                ]}>
                Food
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text></Text>
          </View>
          {/* Apply the red border to the "Rooms" and "Food" tabs when Food is selected */}
          {selectedTab === 'Food' && <View style={styles.activeTabBorder} />}

          <DaySelector
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />

          {data && data.length > 0 ? (
            data.map((item, index) => (
              <Menu
                key={index}
                Maintxt={item.title}
                senddata={item}
              />
            ))
          ) : (
            <Text>No Data Available</Text>
          )}
        </View>
        <View style={{marginVertical: 50}}></View>
      </ScrollView>
    </View>
  );
};

export default FoodMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  subcontainer: {
    paddingHorizontal: 10,
  },
  tabText: {
    fontSize: 16,
    marginVertical: 5,
    color: '#4E4B66', // Default text color
    fontWeight: '400',
  },
  activeTabText: {
    color: '#FFB83A', // Active tab text color
    fontWeight: 'bold',
  },
  activeTabBorder: {
    borderBottomWidth: 3,
    borderBottomColor: '#FFB83A', // Red border for active tab
    width: '40%', // Cover only "Rooms" and "Food" tabs
    marginLeft: '70%', // Position the border under "Rooms" and "Food" tabs
  },
});
