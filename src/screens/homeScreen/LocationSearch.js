// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect} from 'react';
// import SecondaryHeader from '../../components/SecondaryHeader';
// import {Img} from '../../utlis/ImagesPath';
// import {useNavigation} from '@react-navigation/native';
// import PrimaryBtn from '../../components/PrimaryBtn';
// import PrimaryTxtInp from '../../components/PrimaryTxtInp';
// import SearchBar from '../../components/SearchBar';
// import Locationtracker from 'react-native-vector-icons/FontAwesome6';
// import {FontText} from '../../utlis/CustomFont';
// import {Color} from '../../utlis/Color';
// import Plus from 'react-native-vector-icons/MaterialIcons';
// import KmAdress from '../../components/KmAdress';
// import {get} from '../../utlis/Api';
// const LocationSearch = () => {
//   const navigation = useNavigation();
//   // const [search, setsearch] = useState();
//   const getSearch = async () => {
//     const params = {
//       long: 77.3769,
//       lat: 28.6285,
//       search: 'VEERU',

//     };
//     try {
//       const response = await get('./getNearProperties', params);
//       console.log('response of the search', response.data);
//     } catch (error) {
//       console.log('error in the search screen APi', error.message);
//     }
//   };
//   useEffect(() => {
//     getSearch();
//   });

//   return (
//     <View style={styles.container}>
//       <SecondaryHeader
//         gobackImage={Img.goback}
//         detailtxt={'Enter your location'}
//         onPress={() => navigation.goBack()}
//       />
//       <View style={styles.subcontainer}>
//         <SearchBar
//           placeholderText="Search your location"
//           containerBgColor="white"
//         />
/* <View style={styles.locationcontainer}>
          <Locationtracker
            name="location-crosshairs"
            color={'black'}
            size={20}
          />
          <Text style={styles.uselocationtxt}>Use my current location</Text>
        </View>
        <View style={styles.locationcontainer}>
          <Plus name="add" color={'black'} size={20} />
          <Text style={styles.addaddresstxt}>Add New Address</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text>Recent Searches</Text>
          <KmAdress />
          <KmAdress />
        </View> */
//       </View>
//     </View>
//   );
// };

// export default LocationSearch;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   subcontainer: {
//     paddingHorizontal: 20,
//   },
//   locationcontainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   uselocationtxt: {
//     marginLeft: 10,
//     fontSize: 16,
//     fontFamily: FontText.medium,
//     color: Color.black,
//   },
//   addaddresstxt: {
//     marginLeft: 10,
//     fontSize: 16,
//     fontFamily: FontText.medium,
//     color: Color.black,
//     marginTop: 10,
//   },
// });



import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SecondaryHeader from '../../components/SecondaryHeader';
import {Img} from '../../utlis/ImagesPath';
import SearchBar from '../../components/SearchBar';
import {get} from '../../utlis/Api';
import {Color} from '../../utlis/Color';

const LocationSearch = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [properties, setProperties] = useState([]);
  console.log('search::', search);

  const getSearch = async () => {
    const params = {
      long: 77.3769,
      lat: 28.6285,
      search: search,
    };

    try {
      const response = await get('./getNearProperties', params);
      if (response.success) {
        setProperties(response.data[0].data);
        console.log('->>>>>>>>ppp', properties?.[0]._id);
      }
    } catch (error) {
      console.log('Error fetching properties:', error.message);
    }
  };

  useEffect(() => {
    getSearch();
  }, [search]);

  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt="Enter your location"
        onPress={() => navigation.goBack()}
      />

      <View style={styles.searchContainer}>
        <SearchBar
          placeholderText="Search your location"
          containerBgColor="white"
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={getSearch}
        />
      </View>

      <FlatList
        data={properties}
        keyExtractor={item => item._id}
        contentContainerStyle={{marginTop: 10}}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('PropertyDetail', {propertyId: item._id})
            }
          >
            <View style={styles.details}>
              <Text style={styles.name}>{item.property_name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default LocationSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  searchContainer: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Color.black,
  },
  address: {
    fontSize: 14,
    color: Color.gray,
  },
  amount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Color.blue,
  },
});
