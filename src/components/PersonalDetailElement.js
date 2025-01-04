import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';

const PersonalDetailElement = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Image source={Img.profileicon} style={styles.profileIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      <Image source={Img.greentick} style={styles.greenTick} />
    </View>
  );
};

export default PersonalDetailElement;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical:15,
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
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
});
