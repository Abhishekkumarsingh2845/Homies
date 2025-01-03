import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import CatergoryComponenet from '../../components/CatergoryComponenet';
import {Img} from '../../utlis/ImagesPath';
import StoreDetail from '../../components/StoreDetail';

const Store = () => {
  const storedata = [{id: 1}, {id: 2},{id: 3}];

  return (
    <View style={styles.container}>
      <SecondaryHeader />
      <View style={styles.subcontainer}>
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
          {storedata.map(item => (
            <StoreDetail id={item.id} key={item.id.toString()} />
          ))}
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
  },
});
