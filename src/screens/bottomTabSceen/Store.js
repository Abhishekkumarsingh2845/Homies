import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import CatergoryComponenet from '../../components/CatergoryComponenet';
import {Img} from '../../utlis/ImagesPath';
import StoreDetail from '../../components/StoreDetail';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import {useNavigation} from '@react-navigation/native';
import {get} from '../../utlis/Api';
import {useSelector} from 'react-redux';

const Store = () => {
  const navigation = useNavigation();
  const [loading, setloading] = useState(false);
  const [storeData, setstoreData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const {
    latitude,
    longitude,
    name: placeName,
  } = useSelector(state => state.location);
  latitude, console.log('long and lat->>', latitude, longitude);
  const categories = [
    {
      id: '1',
      type: 'vegetable',
      img: Img.vegetableicon,
      topTxt: 'Vegetable',
      bottomTxt: '&Fruits',
    },
    {
      id: '2',
      type: 'staples',
      img: Img.groceryicon,
      topTxt: 'Grocery',
      bottomTxt: '&Staples',
    },
    {
      id: '3',
      type: 'beauty',
      img: Img.beautyicon,
      topTxt: 'Beauty',
      bottomTxt: '&Personal',
    },
    {
      id: '4',
      type: 'household',
      img: Img.householdicon,
      topTxt: 'HouseHold',
      bottomTxt: '&Essentials',
    },
  ];

  const getStoreDetail = async groceryType => {
    const params = {
      long: longitude,
      lat: latitude,
      groceryType: groceryType,
    };

    try {
      const response = await get('getNearStores', params);
      console.log('params in the getNearStores', params);
      console.log('response in the store ', response?.data);
      setstoreData(response?.data[0]?.data);
    } catch (error) {
      console.log(
        'error in the getStoreDetail',
        error?.response?.data || error.message,
      );
    }
  };

  const handleStore = groceryType => {
    getStoreDetail(groceryType);
    console.log('->>', groceryType);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getStoreDetail('vegetable');
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.draw}
        notificationIcon={Img.bellicon}
        onPress={() => navigation.openDrawer()}
      />
      <View style={styles.subcontainer}>
        <Text style={styles.catergorytxt}>Category</Text>
        <View style={styles.catergorycontainer}>
          <FlatList
            data={categories}
            keyExtractor={item => item.id}
            horizontal
            ItemSeparatorComponent={() => <View style={{width: 40}} />}
            renderItem={({item}) => (
              <CatergoryComponenet
                OnPress={() => handleStore(item.type)}
                Imgsource={item.img}
                toptxt={item.topTxt}
                bottomtxt={item.bottomTxt}
              />
            )}
          />
        </View>
        <Text style={styles.headerText}>Store Address</Text>
        <View>
          <FlatList
            data={storeData}
            keyExtractor={item =>
              item._id ? item._id.toString() : Math.random().toString()
            }
            renderItem={({item}) => <StoreDetail strdetail={item} />}
          />
        </View>
      </View>
    </View>
  );
};

export default Store;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
  catergorycontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: Color.black,
  },
  catergorytxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
