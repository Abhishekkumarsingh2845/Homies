import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import Opencamera from '../../components/Opencamera';
import ComplaintFormFill from './ComplaintFormFill';
import {Img} from '../../utlis/ImagesPath';
import {useNavigation} from '@react-navigation/native';
import ComplaintTxtInpt from '../../components/ComplaintTxtInpt';
import {FontText} from '../../utlis/CustomFont';

const ComplaintForm = () => {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Complaint Form'}
        onPress={() => navigation.goBack('BottomTab')}
      />
      <View style={styles.subcontainer}>
        <Text style={styles.label}>Topic</Text>
        <ComplaintTxtInpt />
        <Text style={styles.label}>Description</Text>
        <ComplaintTxtInpt height={150} multiline={true} />
        <Text style={styles.uploadlabel}>Upload Photo & Video</Text>
        <Opencamera />
        <PrimaryBtn
          destination={ComplaintFormFill}
          txt={'Submit'}
          bgcolor={Color.primary}
          mgntop={90}
        />
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
    fontFamily: FontText.medium,
    marginTop: 5,

    color: '#333',
  },
  uploadlabel: {
    fontSize: 16,
    fontFamily: FontText.medium,
    marginVertical: 10,

    color: '#333',
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
