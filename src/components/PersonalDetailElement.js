import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Img } from '../utlis/ImagesPath';
import Feather from 'react-native-vector-icons/Feather';
import { Color } from '../utlis/Color';
import { ScreenDimensions } from '../utlis/DimensionApi';
import { post } from '../utlis/Api';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/AuthSlice';
        
const PersonalDetailElement = ({ title, subtitle, Icons, TickIcon, editIcon , field='' }) => {
  const {token} = useSelector(state => state.auth.user)
  const [showTextInput, setShowTextInput] = useState(false)
  const [value, setValue] = useState(subtitle)
  const dispatch = useDispatch()
  const onChange = (val) => {
    setValue(val)
  }

  const updateFunc = async () =>{
    if(field){
       const data = {
        [field] : value,
           
          }
          // return
          try {
            const response = await post('updateProfile', data , token);
            console.log("value====== res 1111" , response)
            if (response?.success) {
              dispatch(setUser(response));
              // navigation.navigate('HomeNavigator');
            }
          } catch (error) {
            console.log('error in sign up submit', error);
          }
          setShowTextInput(false)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        {Icons}
        {/* <Image source={Img.profileicon} style={styles.profileIcon} /> */}
        <View style={styles.textContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => { setShowTextInput(!showTextInput) }}>
              {editIcon}
              {/* <Feather name="edit-2" color={'#5F6368'} /> */}
            </TouchableOpacity>
          </View>
          {
            showTextInput ?
              <View style={styles.input}>

                <TextInput
                  style={{ flex: 1 }}
                  onChangeText={onChange}
                  value={value}
                />
                <TouchableOpacity onPress={updateFunc}>

                <Image source={Img.greentick} style={styles.greenTick} />
                </TouchableOpacity>
              </View>
              :
              <Text style={styles.subtitle}>{subtitle}</Text>
          }

        </View>
      </View>
      {TickIcon}
      {/* <Image source={Img.greentick} style={styles.greenTick} /> */}
    </View>
  );
};

export default PersonalDetailElement;

const styles = StyleSheet.create({
  input: {
    width: ScreenDimensions.screenWidth * 0.7, flexDirection: 'row', borderWidth: 0.6,
    borderColor: 'gray',
    borderRadius: 10, alignItems: 'center',
    paddingRight : 6
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  detailContainer: {
    flexDirection: 'row',
  },
  profileIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 12,
  },
  textContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  greenTick: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
