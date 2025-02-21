import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Color} from '../utlis/Color';
import {FontText} from '../utlis/CustomFont';

const SortOptions = [
  {label: 'Rating--Low to High', value: 'rating-asc'},
  {label: 'Rating--High to Low', value: 'rating-desc'},
  {label: 'Distance--Low to High', value: 'distance-asc'},
  {label: 'Distance--High to Low', value: 'distance-desc'},
  {label: 'Price--Low to High', value: 'price-asc'},
  {label: 'Price--High to Low', value: 'price-desc'},
];

const SortByModal = ({closemodal, openthemodal, sortBy, setSortBy}) => {
  const handleOptionSelect = option => {
    setSortBy(option.value);
    closemodal();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={openthemodal}
      onRequestClose={closemodal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Sort By</Text>
          <View
            style={{
              width: '100%',
              borderWidth: 0.5,
              borderColor: '#857E7E',
            }}
          />
          {SortOptions.map((option, index) => (
            <View style={styles.ratingContainer} key={index}>
              <Text
                style={[
                  sortBy === option.value && styles.selectedOptionText, // Apply red color if selected
                ]}>
                {option.label}
              </Text>
              <TouchableOpacity
                style={[
                  styles.outerCircle,
                  sortBy === option.value && {borderColor: '#FFB83A'}, // Apply border color when selected
                ]}
                onPress={() => handleOptionSelect(option)} // Select the option
              >
                {sortBy === option.value && <View style={styles.innerCircle} />}
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
  },
  modalView: {
    width: '100%',
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 25,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: FontText.medium,
    textAlign: 'left',
    paddingHorizontal: 20,
    marginBottom: 5,
    color: '#787070',
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#D9D9D9', // Default border color
    borderWidth: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Color.btnclr,
  },
  ratingContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  selectedOptionText: {
    color: '#000000',
  },
});

export default SortByModal;
