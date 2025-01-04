import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import Opencamera from '../../components/Opencamera';
import ComplaintFormFill from './ComplaintFormFill';

const ComplaintForm = () => {
  return (
    <View style={styles.container}>
      <SecondaryHeader detailtxt={'Complaint Form'} />
      <View style={styles.subcontainer}>
        <Text style={styles.label}>Topic</Text>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.label}>Upload Photo & Video</Text>
        <Opencamera />
        <PrimaryBtn  destination={ComplaintFormFill}txt={'Submit'} bgcolor={Color.primary} mgntop={350} />
      </View>
    </View>
  );
};

export default ComplaintForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 14,
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
});
