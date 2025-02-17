import React, {useState} from 'react';
import {View, Modal, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {Color} from '../utlis/Color';

const CalendarModal = ({isVisible, toggleModal, Submitbtn}) => {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <Modal
        visible={isVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <Calendar
              onDayPress={day => {
                setSelected(day.dateString);
                console.log('Selected Date:', day.dateString);
                // toggleModal(); // Close the modal after selecting a date
              }}
              markedDates={{
                [selected]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedDotColor: 'orange',
                },
              }}
            />
            {/* <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity> */}
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 180,
            backgroundColor: 'white',
            width: '94%',
            alignSelf: 'center',
            borderRadius: 15,
            paddingVertical: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, color: 'black'}}>Time</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 16, color: 'black', marginRight: 5}}>
              02:00
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFB83A',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text style={{fontSize: 16, color: '#FFFFFF'}}>AM</Text>
            </TouchableOpacity>
          </View>
        </View>
        {Submitbtn}
        {/* <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
          <Text style={styles.closeButtonText}>Submit</Text>
        </TouchableOpacity> */}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  calendarContainer: {
    width: '95%',
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5, // Shadow for Android
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4, // Shadow for iOS
    // marginVertical:10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  closeButton: {
    // marginTop: 20,
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    backgroundColor: Color.primary,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default CalendarModal;
