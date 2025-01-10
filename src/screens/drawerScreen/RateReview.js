import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {Img} from '../../utlis/ImagesPath';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import {FontText} from '../../utlis/CustomFont';
import {useNavigation} from '@react-navigation/native';
import ComplaintTxtInpt from '../../components/ComplaintTxtInpt';

const RateReview = () => {
  const {width, height} = Dimensions.get('window');
  const [selected, setselected] = useState(0);
  const StarArray = new Array(5).fill(0);
  const navigation = useNavigation();
  const handlestar = index => {
    setselected(index + 1);
  };
  return (
    <View style={styles.conatiner}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Rate & Review'}
        onPress={() => navigation.openDrawer()}
      />
      <View style={styles.subcontainer}>
        <Text style={styles.ratereviewtxt}>Rate & Review</Text>
        <Text style={styles.rateexperiecetxt}>
          Please rate your experience below
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            justifyContent: 'space-between',
          }}>
          {StarArray.map((_, index) => (
            <TouchableOpacity onPress={() => handlestar(index)}>
              <Image
                source={index < selected ? Img.ratingstaricon : Img.uncheckstaricon}
                style={styles.ratingstarstyle}
              />
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.starcounttxt}>4/5 stars</Text>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Text style={{marginVertical: 10, textAlign: 'left'}}>
          Additional feedback
        </Text>
        <ComplaintTxtInpt height={140} multiline={false} />
        <PrimaryBtn
          txt={'Submit Feedback'}
          bgcolor={Color.primary}
          mgntop={height * 0.3}
          // mrgnbm={50}
        />
      </View>
    </View>
  );
};

export default RateReview;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  subcontainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  ratingstarstyle: {
    width: 20,
    height: 20,
    marginRight: 25,
    // resizeMode:"contain",
  },
  ratereviewtxt: {
    marginTop: 20,
    fontSize: 16,
    fontFamily: FontText.medium,
    lineHeight: 18,
    color: Color.black,
  },
  rateexperiecetxt: {
    marginTop: 5,
    fontSize: 12,
    fontFamily: FontText.medium,
    // lineHeight:18,
    color: Color.black,
  },
  starcounttxt: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: FontText.light,
    lineHeight: 18,
    color: '#6B7280',
  },
});
