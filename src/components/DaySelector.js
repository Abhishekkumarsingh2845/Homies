import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../utlis/Color';
import {FontText} from '../utlis/CustomFont';

const DaySelector = ({selectedDay, setSelectedDay}) => {
  const [selectedId, setSelectedId] = useState(null);

  const data = [
    {id: 1, txt: 'Mon'},
    {id: 2, txt: 'Tues'},
    {id: 3, txt: 'Wed'},
    {id: 4, txt: 'Thurs'},
    {id: 5, txt: 'Fri'},
    {id: 6, txt: 'Sat'},
    {id: 7, txt: 'Sun'},
  ];

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.dateTxtContainer,
              {
                backgroundColor: selectedDay === item.txt ? Color.white : Color.btnclr,
              },
            ]}
            onPress={() => setSelectedDay(item.txt)}>
            <Text
              style={[
                styles.txtStyle,
                {
                  color: selectedDay === item.txt ? Color.black : Color.white,
                },
              ]}>
              {item.txt}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default DaySelector;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.btnclr,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 20,
  },
  listContainer: {
    // paddingHorizontal: 10, // Adds padding to the FlatList container
  },
  txtStyle: {
    fontSize: 13,
    fontFamily: FontText.light,
    marginHorizontal: 15, // Adds spacing around text
  },
  dateTxtContainer: {
    paddingVertical: 5,
    marginHorizontal:4,
    // padding: 10, // Adds padding inside each item
    borderRadius: 8, // Optional for rounded corners
    // Adds spacing between items
  },
});
