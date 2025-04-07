import { RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import Complaint from '../../components/Complaint';
import PrimaryBtn from '../../components/PrimaryBtn';
import { Color } from '../../utlis/Color';
import { ScreenDimensions } from '../../utlis/DimensionApi';
import Header from '../../components/Header';
import { Img } from '../../utlis/ImagesPath';
import { FontText } from '../../utlis/CustomFont';
import DisputesCmp from '../../components/DisputesCmp';
import DisputesDetail from './DisputesDetail';
import { get } from '../../utlis/Api';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import DisputesFormFill from './DisputesFormFill';

const ComplaintScr = () => {
  const navigation = useNavigation();
  const [selected, setselected] = useState('Complaint');
  const [complaint, setComplaint] = useState([]);
  const [disputes, setDisputes] = useState([]);
  const { token } = useSelector(state => state.auth.user);
  const [refreshing, setRefreshing] = useState(false);

  const getComplaint = async () => {
    setRefreshing(true);
    try {
      const response = await get('getAllComplaints', {}, token);
      console.log("getAllComplaints data  ==============", JSON.stringify(response?.data[0]?.data))
      if (response.success) {
        setComplaint(response.data[0]?.data);
      }
    } catch (error) {
      console.log('Error:', error?.response?.data || error.message);
    }
    setRefreshing(false);
  };


  const getDisputes = async () => {
    setRefreshing(true);
    try {
      const response = await get('getAllDisputes', { sendBy: 'User' }, token);
      if (response.success) {
        // setComplaint(response.data[0]?.data);
      console.log("getAllDisputes data  ==============", JSON.stringify(response?.data[0]?.data))

        setDisputes(response.data[0]?.data)
        // console.log('kdf', response?.data);
      }
    } catch (error) {
      console.log('Error:', error?.response?.data || error.message);
    }
    setRefreshing(false);

  };
  useEffect(() => {
      console.log("useeffect-======= running" )
    
    getComplaint();
    getDisputes()
  }, []);
  return (

    <View style={styles.container}>
      <Header
        hght={ScreenDimensions?.screenHeight * 0.2}
        Img1={Img.draw}
        complaintbtn={
          <View style={styles.complaintcontainer}>
            <TouchableOpacity onPress={() => setselected('Complaint')}>
              <Text style={[styles.complaintDisputetxt, { color: selected == 'Complaint' ? Color.primary : Color.white }]}>Complaint</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setselected('Disputes')}>
              <Text style={[styles.complaintDisputetxt, { color: selected == 'Disputes' ? Color.primary : Color.white }]}>Disputes</Text>
            </TouchableOpacity>
          </View>
        }
      />
      {selected == 'Complaint' && (

        <View style={styles.subcontainer}>
          <ScrollView 
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getComplaint} colors={[Color.primary]} />
          }
          >

            {complaint &&
              complaint?.map((item, index) => {
                return <Complaint key={index} complaint_id={item.complaint_id} title={item.complaintTitle} date={item?.updatedAt} media={item.propertyMedia[0]} _id={item._id} />
              })
            }
          </ScrollView>

          <PrimaryBtn
            Onpress={() => navigation.navigate('ComplaintForm', { getComplaint })}
            destination={'ComplaintForm'}
            mgntop={10}
            txt={'+ADD'}
            bgcolor={Color.primary}
          />
        </View>
      )}

      {selected == 'Disputes' && (
        <View style={styles.subcontainer}>
          <ScrollView 
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getDisputes} colors={[Color.primary]} />
          }
          >

            {
              disputes.map((item, index) => {
                return <DisputesCmp key={index} status={item?.dispute_status} statusColor={item?.dispute_status == "Pending" ? "#FF1C1C" : '#027516'} dispute_id={item?.dispute_id} date={item?.updatedAt} _id={item._id} />


              })
            }
          </ScrollView>


          <PrimaryBtn

            Onpress={() => navigation.navigate('DisputesFormFill', { getDisputes })}
            destination={'DisputesFormFill'}
            txt={'+ADD'}
            bgcolor={Color.primary}
            mgntop={10}
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
    flex: 1,
    paddingHorizontal: ScreenDimensions.screenWidth * 0.03,
    paddingBottom: 12,
    // borderRightWidth: 2,
    // borderLeftWidth: 2,
    // borderTopWidth: 2,
    borderTopStartRadius: 20,
    borderTopRightRadius: 20,
    // borderColor: '#D9D9D9',
    backgroundColor: '#D9D9D9',

  },
  complaintcontainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
  },
  complaintDisputetxt: {
    fontSize: 16,
    fontFamily: FontText.medium,
    // color: Color.primary,
  },
  disputetxt: {
    fontSize: 16,
    fontFamily: FontText.medium,
    // color: Color.white,
  },
});
