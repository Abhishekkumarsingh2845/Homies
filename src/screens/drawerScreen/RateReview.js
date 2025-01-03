import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {Img} from '../../utlis/ImagesPath';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import {FontText} from '../../utlis/CustomFont';

const RateReview = () => {
  const StarArray = new Array(5).fill(0);
  return (
    <View style={styles.conatiner}>
      <SecondaryHeader detailtxt={'Rate & Review'} />
      <View style={styles.subcontainer}>
        <Text style={styles.ratereviewtxt}>RateReview</Text>
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
            <Image
              key={index}
              source={Img.ratingstaricon}
              style={styles.ratingstarstyle}
            />
          ))}
        </View>
        <Text style={styles.starcounttxt}>4/5 stars</Text>
        <Text>Additional feedback</Text>
        <PrimaryBtn txt={'Submit Feedback'} bgcolor={Color.primary} mgntop={350} />
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
    marginTop:20,
    fontSize: 16,
    fontFamily: FontText.medium,
    lineHeight: 18,
    color: Color.black,
  },
  rateexperiecetxt: {
    marginTop:10,
    fontSize: 12,
    fontFamily: FontText.medium,
    // lineHeight:18,
    color: Color.black,
  },
  starcounttxt: {
    marginTop:10,
    fontSize: 14,
    fontFamily: FontText.light,
    lineHeight: 18,
    color: '#6B7280',
  },
});
