import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import SecondaryHeader from '../../components/SecondaryHeader';
import {useNavigation} from '@react-navigation/native';
import {Img} from '../../utlis/ImagesPath';
import Setting from 'react-native-vector-icons/Octicons';

const Home = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SecondaryHeader gobackImage={Img.draw} onPress={() => navigation.openDrawer()} />
      <TouchableOpacity
       >
        <Text>Banner</Text>
      </TouchableOpacity>

      <Text>Home</Text>
      <Text>Food Services</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default Home;
