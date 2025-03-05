import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Heart from 'react-native-vector-icons/EvilIcons';
import Share from 'react-native-vector-icons/AntDesign';
import {Color} from '../utlis/Color';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setLikeUnlike } from '../store/PropertiesSlice';
import { post } from '../utlis/Api';

const LikeShare = ({color , propertyId}) => {
  const {_id} = useSelector(state => state.auth.user)
  const naviagtion = useNavigation();
  const dispatch = useDispatch()

    const toggleLike = async () => {
      try {
        const response = await post('likeProperty', {
          propertyId,
          likedBy: _id,
        });
        dispatch(setLikeUnlike({propertyId : propertyId , isLiked : response?.data?.isLiked}))
      } catch (error) {
        console.log('Error liking/unliking property:', error.message);
      }
    };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.whitecontainer}
        onPress={toggleLike}>
        <Heart name="heart" size={25} color={color} />
      </TouchableOpacity>
      <View style={styles.whitecontainer}>
        <Share name="sharealt" size={18} />
      </View>
    </View>
  );
};

export default LikeShare;

const styles = StyleSheet.create({
  container: {
    // alignSelf: 'flex-end',
    // justifyContent:"flex-start",
    position: 'absolute',
    top: 10,
    right: 10,
  },
  whitecontainer: {
    backgroundColor: Color.white,
    width: 32,
    height: 32,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
