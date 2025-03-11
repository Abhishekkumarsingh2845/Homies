import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {Img} from '../../utlis/ImagesPath';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import {FontText} from '../../utlis/CustomFont';
import {useNavigation} from '@react-navigation/native';
import ComplaintTxtInpt from '../../components/ComplaintTxtInpt';
import {post} from '../../utlis/Api';
import {useDispatch, useSelector} from 'react-redux';
import {getMyProperty} from '../../store/MyPropertySlice';

const RateReview = () => {
  const dispatch = useDispatch();
  const {width, height} = Dimensions.get('window');
  const {data: myProperty} = useSelector(state => state.MyProperty);

  const propertyId = useSelector(state => state.property.propertyId);
  console.log(
    'Property ID  in the rate and review->>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
    myProperty._id,
  );
  const [selected, setselected] = useState(0);
  const [text, setText] = useState('');
  const StarArray = new Array(5).fill(0);
  const navigation = useNavigation();
  const handlestar = index => {
    setselected(index + 1);
  };
  const handleRating = async () => {
    console.log('Feedback Text:', text);
    const data = {
      propId: myProperty._id,
      rating: selected,
      feedbacks: text,
    };
    try {
      const response = await post('addReviews', data);
      console.log('response of the addReviews=>>>', response.data);
    } catch (error) {
      console.log(
        'error in the addReviews',
        error.message || error.message.data,
      );
    }
  };
  useEffect(() => {
    if (!myProperty?.landLordId) {
      dispatch(getMyProperty());
    }
  }, []);
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
                source={
                  index < selected ? Img.ratingstaricon : Img.uncheckstaricon
                }
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
        {/* <ComplaintTxtInpt
          value={text}
          onChange={setText} 
          height={140}
          multiline={false}
        /> */}
        <TextInput
          style={{
            fontFamily: FontText.light,
            padding: 30,
            backgroundColor: '#FFFFFF',
          }}
          value={text}
          onChangeText={setText}
        />

        <PrimaryBtn
          txt={'Submit Feedback'}
          bgcolor={Color.primary}
          mgntop={height * 0.3}
          Onpress={() => handleRating()}
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
