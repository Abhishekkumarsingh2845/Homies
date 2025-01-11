import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
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

const ComplaintScr = () => {
  const [selected, setselected] = useState('Complaint');

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
          <Complaint />
          <Complaint />
          <Complaint />
          <PrimaryBtn
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
