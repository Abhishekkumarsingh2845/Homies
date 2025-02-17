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

const Store = () => {
  const [loading, setloading] = useState(false);
  const [storeData, setstoreData] = useState([]);

  const getStoreDetail = async () => {
    const params = {
      long: '77.3812',
      lat: '28.621',
      groceryType: 'vegetable',
    };
    try {
      const response = await get('getNearStores', params);
      console.log('->>>', response?.data[0]?.data);
      setstoreData(response?.data[0]?.data);
    } catch (error) {
      console.log(
        'error in the getStoreDetail',
        error?.response?.data || error.message,
      );
    }
  };
  useEffect(() => {
    getStoreDetail();
  }, []);
  const storedata = [{id: 1}, {id: 2}, {id: 3}];
  const navigation = useNavigation();

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
          <CatergoryComponenet
            Imgsource={Img.vegetableicon}
            toptxt={'Vegetable'}
            bottomtxt={'&Fruits'}
          />
          <CatergoryComponenet
            Imgsource={Img.groceryicon}
            toptxt={'Grocery'}
            bottomtxt={'&Staples'}
          />
          <CatergoryComponenet
            Imgsource={Img.beautyicon}
            toptxt={'Beauty'}
            bottomtxt={'&Personal'}
          />
          <CatergoryComponenet
            Imgsource={Img.householdicon}
            toptxt={'HouseHold'}
            bottomtxt={'&Essentials'}
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
