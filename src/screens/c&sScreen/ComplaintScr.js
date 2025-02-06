import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import Complaint from '../../components/Complaint';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import {ScreenDimensions} from '../../utlis/DimensionApi';
import Header from '../../components/Header';
import {Img} from '../../utlis/ImagesPath';
import {FontText} from '../../utlis/CustomFont';
import DisputesCmp from '../../components/DisputesCmp';
import DisputesDetail from './DisputesDetail';
import {get} from '../../utlis/Api';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const ComplaintScr = () => {
  const navigation = useNavigation();
  const [selected, setselected] = useState('Complaint');
  const [complaint, setComplaint] = useState({});
  const token = useSelector(state => state.auth.token);
  console.log('token received from redux in complaint screen', token);

  const getComplaint = async () => {
    try {
      const response = await get('getAllComplaints', {}, token);
      console.log('response of the getCompliantapi', response);
      if (response.success) {
        setComplaint(response?.data);
        console.log('kdf', response?.data);
      }
    } catch (error) {
      console.log('Error:', error?.response?.data || error.message);
    }
  };
  useEffect(() => {
    getComplaint();
  }, []);
  return (
    <View style={styles.container}>
      <Header
        hght={160}
        Img1={Img.draw}
        complaintbtn={
          <View style={styles.complaintcontainer}>
            <TouchableOpacity onPress={() => setselected('Complaint')}>
              <Text style={styles.complainttxt}>Complaint</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setselected('Disputes')}>
              <Text style={styles.disputetxt}>Disputes</Text>
            </TouchableOpacity>
          </View>
        }
      />
      {selected == 'Complaint' && (
        <View style={styles.subcontainer}>
          <Complaint ComplaintNo={complaint.complaintTitle} />
          {/* <Complaint /> */}
          {/* <Complaint /> */}
          <PrimaryBtn
            Onpress={() => navigation.navigate('ComplaintForm')}
            destination={'ComplaintForm'}
            mgntop={ScreenDimensions.screenHeight * 0.15}
            txt={'+ADD'}
            bgcolor={Color.primary}
          />
        </View>
      )}

      {selected == 'Disputes' && (
        <View style={styles.subcontainer}>
          <DisputesCmp status="Pending" statusColor="#FF1C1C" />
          <DisputesCmp status="Pending" statusColor="#FF1C1C" />
          <DisputesCmp status="Completed" statusColor="#027516" />
          <PrimaryBtn
            destination={DisputesDetail}
            txt={'+ADD'}
            bgcolor={Color.primary}
            mgntop={ScreenDimensions.screenHeight * 0.15}
          />
        </View>
      )}
    </View>
  );
};

export default ComplaintScr;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#484848',
  },
  subcontainer: {
    // marginTop:10,
    flex: 1,
    paddingHorizontal: ScreenDimensions.screenWidth * 0.03,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderTopStartRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#D9D9D9',
    backgroundColor: '#D9D9D9',
  },
  complaintcontainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
  },
  complainttxt: {
    fontSize: 16,
    fontFamily: FontText.medium,
    color: Color.primary,
  },
  disputetxt: {
    fontSize: 16,
    fontFamily: FontText.medium,
    color: Color.white,
  },
});
