import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FontText} from '../utlis/CustomFont';
import {Img} from '../utlis/ImagesPath';
import {Color} from '../utlis/Color';

const StarComponent = () => {
  const [selectedId, setSelectedId] = useState(null); // State to track the selected item

  const data = [
    {id: 1, rate: 1},
    {id: 2, rate: 2.0},
    {id: 3, rate: 3.0},
    {id: 4, rate: 4.0},
    {id: 5, rate: 5.0},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.starratingtxt}>Star Rating</Text>
      <FlatList
        horizontal={true} // Enables horizontal scrolling
        showsHorizontalScrollIndicator={false}
        data={data}
        contentContainerStyle={styles.flatliststyle}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.flatlistcontainer,
              {
                backgroundColor:
                  selectedId === item.id ? Color.btnclr : 'white', // Change container background color
              },
            ]}
            onPress={() => setSelectedId(item.id)} // Set the selected ID on press
          >
            <Image
              source={Img.ratingstaricon}
              style={[
                styles.image,
                {
                  tintColor: selectedId === item.id ? 'white' : Color.btnclr, // Change star icon color
                },
              ]}
            />
            <Text
              style={[
                styles.ratetxt,
                {
                  color: selectedId === item.id ? 'white' : '#9AA6AC', // Change text color
                },
              ]}>
              {item.rate}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default StarComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    marginTop: 20,
    elevation: 5,
    borderRadius: 10,
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {
      width: 0, // Horizontal shadow offset
      height: 2, // Vertical shadow offset
    },
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 3.84,
  },
  flatlistcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //  paddingVertical:3,
    borderWidth: 1,
    borderColor: '#DDE2E4',
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginRight: 12,
    borderRadius: 5,
  },
  image: {
    width: 15,
    height: 15,
  },
  ratetxt: {
    fontSize: 14,
    fontFamily: FontText.light,
    marginHorizontal: 8,
  },
  flatliststyle: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  starratingtxt: {
    fontSize: 14,
    marginHorizontal: 20,
    marginTop: 5,
    fontFamily: FontText.medium,
  },
});
