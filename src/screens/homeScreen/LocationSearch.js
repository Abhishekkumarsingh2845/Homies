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

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import SecondaryHeader from '../../components/SecondaryHeader';
import { Img } from '../../utlis/ImagesPath';
import SearchBar from '../../components/SearchBar';
import { get } from '../../utlis/Api';
import { Color } from '../../utlis/Color';
import { FontText } from '../../utlis/CustomFont';

const LocationSearch = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  console.log("suggestions---------", JSON.stringify(suggestions))
  const route = useRoute()
  const navParams = route?.params

  console.log('search::', route);

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
      }
    } catch (error) {
      console.log('Error fetching properties:', error.message);
    }
  };

  // useEffect(() => {
  //   getSearch();
  // }, [search]);

  const fetchPlaces = async (text) => {
    if (text.length < 3) {
      setSuggestions([]);
      return;
    }

    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&key=AIzaSyA8KBPjCEIBIU0ujqQ7bacaQ5-dK2bUi7E&components=country:IN`; // Restricting to India
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'OK') {
        setSuggestions(data.predictions);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Error fetching places:', error);
      setSuggestions([]);
    }
  };

  // Fetch place details to get coordinates
  const fetchPlaceDetails = async (place_id) => {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=AIzaSyA8KBPjCEIBIU0ujqQ7bacaQ5-dK2bUi7E`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("place coord==========", data.result.geometry.location)

      if (data.status === 'OK') {
        const { lat, lng } = data.result.geometry.location;
        return { lat, lng };
      }
    } catch (error) {
      console.error('Error fetching place details:', error);
    }

    return null;
  };


  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt="Enter your location"
        onPress={() => navigation.goBack()}
      />

      <View style={styles.searchContainer}>
        <View
          style={[styles.container2, { backgroundColor: 'white' }]}
        >
            <Image source={Img.srch} style={styles.searchicon} />
          <TextInput
            style={styles.searchbar}
            placeholder={'Search your location'} // Dynamic placeholder
            placeholderTextColor={'#737373'}
            // onFocus={handleNavigation}
            onChangeText={(text) => {
              setSearchQuery(text);
              fetchPlaces(text);
            }}
            value={searchQuery}
          />

        </View>
      </View>

      {suggestions.length > 0 && (
        <View style={{ width: '90%', alignSelf: 'center' }}>

          <FlatList
            data={suggestions}
            keyExtractor={(item) => item.place_id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ padding: 10, borderBottomWidth: 1, borderColor: 'gray' }}
                onPress={async () => {
                  setSearchQuery(item.description);
                  setSuggestions([]);

                  // Fetch coordinates
                  const coordinates = await fetchPlaceDetails(item.place_id);
                  if (coordinates) {
                    navParams?.onSelect({
                          name: item?.structured_formatting?.main_text || item.description,
                          lat: coordinates.lat,
                          lon: coordinates.lng,
                      });
                  }
                  navigation.goBack()
                }}
              >
                <Text style={{ color: 'black', fontSize: 15 }}>{item?.description}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

      )}
    </View>
  );
};

export default LocationSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecedee',
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


  container2: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: Platform.OS === 'android' ? 2 : 15,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: 'white',
    // borderWidth : 10
  },
  searchicon: {
    width: 18,
    height: 18,
  },

  searchbar: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontFamily: FontText.light,
    color: Color.clr73,
    backgroundColor : 'transparent',
    lineHeight: 18,
    fontWeight: '400',
    lineHeight: 18,
  },
});
