import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Color } from '../utlis/Color';
import DatePicker from 'react-native-date-picker'

const CalendarModal = ({ isVisible, toggleModal, handleVistRequest }) => {
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false)
  const [time, setTime] = useState(new Date())

  const onSubmit = () => {
    const newDate = new Date(date)
    handleVistRequest(newDate.toISOString() , time)
  }

  const getFormattedTime = () => {
    let hours = time.getHours();
    let minutes = time.getMinutes();

    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? '0' + minutes : minutes;

    return {
      formattedTime: `${hours}:${minutes}`,
      AMPM: ampm
    };
  }


  return (
    <TouchableOpacity style={styles.container} onPress={()=> {console.log("jbcejvfuev")}}>
      <Modal
        visible={isVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}>
        <TouchableOpacity style={styles.modalContainer} onPress={toggleModal} activeOpacity={1}>
          <View style={styles.calendarContainer}>
            <Calendar
              onDayPress={day => {
                setDate(day.dateString);
                console.log('Selected Date:', day);
                // toggleModal(); // Close the modal after selecting a date
              }}
              markedDates={{
                [date]: {
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
        </TouchableOpacity>
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
          <Text style={{ fontSize: 16, color: 'black' }}>Time</Text>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { setOpen(true) }}>
            <Text style={{ fontSize: 16, color: 'black', marginRight: 5 }}>
              {getFormattedTime().formattedTime}
            </Text>
            <View
              style={{
                backgroundColor: '#FFB83A',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text style={{ fontSize: 16, color: '#FFFFFF' }}>
                {getFormattedTime().AMPM}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.closeButton}
          onPress={onSubmit}>
          <Text style={styles.closeButtonText}>Submit</Text>
        </TouchableOpacity>
      </Modal>

      <DatePicker
        modal
        mode='time'
        open={open}
        date={time}
        onConfirm={(date) => {
          setOpen(false)
          setTime(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </TouchableOpacity>
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
    shadowOffset: { width: 0, height: 2 },
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
