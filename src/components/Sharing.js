import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontText} from '../utlis/CustomFont';
import {Color} from '../utlis/Color';
import Toast from 'react-native-toast-message';

const Sharing = ({
  selectedSharing,
  setSelectedSharing,
  share,
  setSelectedPlan,
  getAmountFunc,
  x,y
}) => {
  // const [selected, setSelected] = useState(null);
  useEffect(() => {
    if (x) {
      let plan = {
        AC_NonAc: options.find(item => item.id == x).type,
        duration: options.find(item => item.id == x).category,
      };
      console.log('inside plan===', plan);
      setSelectedPlan(plan);
    }
  }, [x]);
  console.log('selected=======', x);
  const handleSharingSelection = sharingType => {
    setSelectedSharing(sharingType); // Update selected sharing type
    y(null);
    setSelectedPlan({});
  };

  const options = [
    {id: 'yearly_ac', label: 'With AC', category: 'Yearly', type: 'AC'},
    {
      id: 'yearly_no_ac',
      label: 'Without AC',
      category: 'Yearly',
      type: 'Non AC',
    },
    {id: 'monthly_ac', label: 'With AC', category: 'Monthly', type: 'AC'},
    {
      id: 'monthly_no_ac',
      label: 'Without AC',
      category: 'Monthly',
      type: 'Non AC',
    },
  ];

  const getAcNOnAcAmount = (type, category) => {
    const amount = selectedSharing?.details?.find(
      ele => ele?.roomType == type && ele.periodType == category,
    ).amount;
    return amount;
  };
  const formatNumber = num => {
    if (!num) return 'No Data Available';
    const absNum = Math.abs(num);
    if (absNum >= 1.0e12) return (num / 1.0e12).toFixed(1) + 'T'; // Trillions
    if (absNum >= 1.0e9) return (num / 1.0e9).toFixed(1) + 'B'; // Billions
    if (absNum >= 1.0e6) return (num / 1.0e6).toFixed(1) + 'M'; // Millions
    if (absNum >= 1.0e3) return (num / 1.0e3).toFixed(1) + 'K'; // Thousands
    return num.toString(); // Return as is if less than 1K
  };

  return (
    <View style={styles.container}>
      <View style={styles.bedsharingcontainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row', // Ensure items are in a row
            alignItems: 'center',
          }}>
          {share?.sharing.map((item, index) => {
            return (
              <TouchableOpacity
                style={[
                  selectedSharing?.sharingType == item?.sharingType &&
                    styles.selectbtnstyle,
                ]}
                onPress={() => handleSharingSelection(item)}>
                <Text
                  style={[
                    styles.sharingtxtstyle,
                    selectedSharing?.sharingType == item?.sharingType &&
                      styles.selectedtxt,
                  ]}>
                  {item?.sharingType || 'No Data Available'}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <>
        <View style={styles.rentcontainer}>
          <View style={styles.rentpercontainer}>
            <Text style={styles.rentperperson}>Rent per Person</Text>
            <Text style={styles.amounttxt}>
              {formatNumber(share?.sharing?.[0].details?.[0].amount) ||
                'no data'}
            </Text>
          </View>
          <View>
            <Text style={styles.deposittxt}>Deposit</Text>
            <Text style={styles.amounttxt}>
              {formatNumber(share?.sharing?.[0]?.details?.[0].depositAmount) ||
                'No Data Available'}
            </Text>
          </View>
        </View>

        <View style={styles.SelectType}>
          <View style={styles.column}>
            <Text style={styles.heading}>Yearly</Text>
            {options
              .filter(item => item.category === 'Yearly')
              .map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.option}
                  onPress={() => {
                    y(item.id);
                    // getAmountFunc()
                  }}>
                  <View style={styles.radio}>
                    { x=== item.id && (
                      <View style={styles.radioSelected} />
                    )}
                  </View>
                  <View style={{}}>
                    <Text style={styles.text}>{item.label}</Text>
                    <Text style={styles.text}>
                      ₹
                      {formatNumber(getAcNOnAcAmount(item.type, item.category))}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
          </View>

          <View style={styles.column}>
            <Text style={styles.heading}>Monthly</Text>
            {options
              .filter(item => item.category === 'Monthly')
              .map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.option}
                  onPress={() => {
                    y(item.id);
                    
                  }}>
                  <View style={styles.radio}>
                    {x === item.id && (
                      <View style={styles.radioSelected} />
                    )}
                  </View>
                  <View style={{}}>
                    <Text style={styles.text}>{item.label}</Text>
                    <Text style={styles.text}>
                      ₹
                      {formatNumber(getAcNOnAcAmount(item.type, item.category))}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
          </View>
        </View>

        <View style={styles.line}></View>
        <View style={styles.timecontainer}>
          <View>
            <Text style={styles.lockintxt}>Lock in Period</Text>
            <Text>{share?.lock_in_period || 'No Data Available'} Month</Text>
          </View>
          <View>
            <Text style={styles.noofroomtxt}>Numbers of Room</Text>
            <Text>{share?.rooms_in_hostel || 'No Data Available'}</Text>
          </View>
        </View>
        <View style={{marginVertical: 10}} />
      </>
    </View>
  );
};

export default Sharing;

const styles = StyleSheet.create({
  SelectType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  column: {
    flex: 1,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFB83A',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    width: 12,
    height: 12,
    borderRadius: 10,
    backgroundColor: '#FFB83A',
    borderColor: '#FFB83A',
  },
  text: {
    fontSize: 14,
    color: 'black',
  },

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
    marginHorizontal: 12,
  },
});
