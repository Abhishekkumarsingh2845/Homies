import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Img} from '../../utlis/ImagesPath';

const screenWidth = Dimensions.get('window').width;

const ExtraImage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {hostel} = route.params || {};
  const images = hostel?.property_images || [];

  const renderItem = ({item}) => (
    <Image source={{uri: item}} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={Img.goback}
          style={{width: 20, height: 20, resizeMode: 'contain'}}
        />
      </TouchableOpacity>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.galleryContainer}
      />
    </View>
  );
};

export default ExtraImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  galleryContainer: {
    gap: 10,
    marginVertical: 20,
  },
  image: {
    width: (screenWidth - 90) / 2, // half of the screen minus margin
    height: 100,
    borderRadius: 10,
    margin: 5,
    resizeMode: 'cover',
  },
});
