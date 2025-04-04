import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import PrimaryBtn from '../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {Img} from '../../utlis/ImagesPath';
import ComplaintTxtInpt from '../../components/ComplaintTxtInpt';
import {ScreenDimensions} from '../../utlis/DimensionApi';

const Help = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Raise a Query'}
        onPress={() => navigation.openDrawer()}
      />
      <TouchableOpacity
        style={styles.subcontainer}
        onPress={() => navigation.openDrawer()}>
        <Text style={styles.titletxt}>Title</Text>
        <ComplaintTxtInpt />
        <Text style={styles.titletxt}>Description</Text>
        <ComplaintTxtInpt height={150} multiline={false} />
        <PrimaryBtn
          txt={'Submit'}
          bgcolor={Color.primary}
          mgntop={ScreenDimensions.screenHeight * 0.25}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
  titletxt: {
    fontSize: 14,
    fontFamily: FontText.light,
    lineHeight: 18,
    color: Color.black,
    marginVertical: 20,
  },
});
