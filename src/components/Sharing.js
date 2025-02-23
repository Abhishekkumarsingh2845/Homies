import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FontText} from '../utlis/CustomFont';
import {Color} from '../utlis/Color';

const Sharing = ({share}) => {
  const [selectedSharing, setSelectedSharing] = useState('Double Sharing'); // Track the selected sharing type
  const handleSharingSelection = sharingType => {
    setSelectedSharing(sharingType); // Update selected sharing type
  };

  // console.log('->>>>pp', share?.sharing[0].sharingType);

  return (
    <View style={styles.container}>
      <View style={styles.bedsharingcontainer}>
        <TouchableOpacity
          style={[selectedSharing == 'Double Sharing' && styles.selectbtnstyle]}
          onPress={() => handleSharingSelection('Double Sharing')}>
          <Text
            style={[
              styles.sharingtxtstyle,
              selectedSharing == 'Double Sharing' && styles.selectedtxt,
            ]}>
            {share?.sharing?.[0]?.sharingType || 'No Data Available'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[selectedSharing == 'Three Sharing' && styles.selectbtnstyle]}
          onPress={() => handleSharingSelection('Three Sharing')}>
          <Text
            style={[
              styles.sharingtxtstyle,
              selectedSharing == 'Three Sharing' && styles.selectedtxt,
            ]}>
            {share?.sharing?.[1]?.sharingType || 'No Data Available'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[selectedSharing == 'Five Sharing' && styles.selectbtnstyle]}
          onPress={() => handleSharingSelection('Five Sharing')}>
          <Text
            style={[
              styles.sharingtxtstyle,
              selectedSharing == 'Five Sharing' && styles.selectedtxt,
            ]}>
            Five Sharing
          </Text>
        </TouchableOpacity>
      </View>

      {selectedSharing === 'Double Sharing' && (
        <>
          <View style={styles.rentcontainer}>
            <View style={styles.rentpercontainer}>
              <Text style={styles.rentperperson}>Rent per Person</Text>
              <Text style={styles.amounttxt}>
                {share?.sharing?.[0]?.rentPerPerson?.withAC ||
                  'No Data Available'}
              </Text>
            </View>
            <View>
              <Text style={styles.deposittxt}>Deposit</Text>
              <Text style={styles.amounttxt}>
                {share?.sharing?.[0]?.deposit || 'No Data Available'}
              </Text>
            </View>
          </View>

          <View style={styles.withaccontainer}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.outercircle}>
                <View style={styles.innercircle}></View>
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={styles.withxtxt}>With AC</Text>
                <Text style={styles.amounttxt}>
                  {share?.sharing?.[0]?.rentPerPerson?.withAC ||
                    'No Data Available'}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.outercircle}>
                <View style={styles.innercircle}></View>
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={styles.withxtxt}>Without AC</Text>
                <Text style={styles.amounttxt}>
                  {share?.sharing?.[0]?.rentPerPerson?.withoutAC ||
                    'No Data Available'}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.line}></View>
          <View style={styles.timecontainer}>
            <View>
              <Text style={styles.lockintxt}>Lock in Period</Text>
              <Text>{share?.lock_in_period || 'No Data Available'}</Text>
            </View>
            <View>
              <Text style={styles.noofroomtxt}>Numbers of Room</Text>
              <Text>{share?.rooms_in_hostel || 'No Data Available'}</Text>
            </View>
          </View>
          <View style={{marginVertical: 10}} />
        </>
      )}

      {selectedSharing === 'Three Sharing' && (
        <>
          <View style={styles.rentcontainer}>
            <View style={styles.rentpercontainer}>
              <Text style={styles.rentperperson}>Rent per Person</Text>
              <Text style={styles.amounttxt}>
                {share?.sharing?.[1]?.rentPerPerson?.withAC ||
                  'No Data Available'}
              </Text>
            </View>
            <View>
              <Text style={styles.deposittxt}>Deposit</Text>
              <Text style={styles.amounttxt}>
                {share?.sharing?.[1]?.deposit || 'No Data Available'}
              </Text>
            </View>
          </View>

          <View style={styles.withaccontainer}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.outercircle}>
                <View style={styles.innercircle}></View>
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={styles.withxtxt}>With AC</Text>
                <Text style={styles.amounttxt}>
                  {share?.sharing?.[1]?.rentPerPerson?.withAC ||
                    'No Data Available'}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.outercircle}>
                <View style={styles.innercircle}></View>
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={styles.withxtxt}>Without AC</Text>
                <Text style={styles.amounttxt}>
                  {share?.sharing?.[0]?.rentPerPerson?.withoutAC ||
                    'No Data Available'}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.line}></View>
          <View style={styles.timecontainer}>
            <View>
              <Text style={styles.lockintxt}>Lock in Period</Text>
              <Text>{share?.lock_in_period || 'No Data Available'}</Text>
            </View>
            <View>
              <Text style={styles.noofroomtxt}>Numbers of Room</Text>
              <Text>{share?.rooms_in_hostel || 'No Data Available'}</Text>
            </View>
          </View>
          <View style={{marginVertical: 10}} />
        </>
      )}
      {selectedSharing === 'Five Sharing' && (
        <>
          <View style={styles.rentcontainer}>
            <View style={styles.rentpercontainer}>
              <Text style={styles.rentperperson}>Rent per Person</Text>
              <Text style={styles.amounttxt}>
                {share?.sharing?.[2]?.rentPerPerson?.withAC ||
                  'No Data Available'}
              </Text>
            </View>
            <View>
              <Text style={styles.deposittxt}>Deposit</Text>
              <Text style={styles.amounttxt}>
                ₹ {share?.sharing?.[2]?.deposit || 'No Data Available'}
              </Text>
            </View>
          </View>

          <View style={styles.withaccontainer}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.outercircle}>
                <View style={styles.innercircle}></View>
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={styles.withxtxt}>With AC</Text>
                <Text style={styles.amounttxt}>
                  ₹
                  {share?.sharing?.[2]?.rentPerPerson?.withAC ||
                    'No Data Available'}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.outercircle}>
                <View style={styles.innercircle}></View>
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={styles.withxtxt}>With AC</Text>
                <Text style={styles.amounttxt}>
                  ₹
                  {share?.sharing?.[0]?.rentPerPerson?.withoutAC ||
                    'No Data Available'}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.line}></View>
          <View style={styles.timecontainer}>
            <View>
              <Text style={styles.lockintxt}>Lock in Period</Text>
              <Text>{share?.lock_in_period || 'No Data Available'}</Text>
            </View>
            <View>
              <Text style={styles.noofroomtxt}>Numbers of Room</Text>
              <Text>{share?.rooms_in_hostel || 'No Data Available'}</Text>
            </View>
          </View>
          <View style={{marginVertical: 10}} />
        </>
      )}
    </View>
  );
};

export default Sharing;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 10,
    color: Color.black,
  },
  bedsharingcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  rentcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  outercircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFB83A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innercircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  withaccontainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 10,
    // backgroundColor:"red"
  },
  line: {
    borderWidth: 1,
    borderColor: '#BEC1C4',
    marginHorizontal: 20,
    marginTop: 10,
  },
  timecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  rentpercontainer: {},
  sharingtxtstyle: {
    fontSize: 12,
    fontFamily: FontText.medium,
    color: '#989898',
  },
  selectedtxt: {
    fontSize: 12,
    fontFamily: FontText.medium,
    color: '#989898',
    color: Color.black,
  },
  rentperperson: {
    fontSize: 12,
    color: 'black',
    fontFamily: FontText.light,
  },
  deposittxt: {
    fontSize: 12,
    color: Color.black,
    fontFamily: FontText.light,
  },
  amounttxt: {
    fontSize: 12,
    color: Color.black,
    fontFamily: FontText.light,
  },
  withxtxt: {
    fontSize: 12,
    color: Color.black,
    fontFamily: FontText.light,
  },
  lockintxt: {
    fontSize: 12,
    color: Color.black,
    fontFamily: FontText.light,
  },
  noofroomtxt: {
    fontSize: 12,
    color: Color.black,
    fontFamily: FontText.light,
  },
  selectbtnstyle: {
    borderBottomWidth: 1,
    borderColor: 'red',
  },
});
