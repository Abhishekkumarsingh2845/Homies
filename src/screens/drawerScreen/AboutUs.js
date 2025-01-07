import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import CommonHeader from '../../components/CommonHeader';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
const AboutUs = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} />
      <CommonHeader title="About Us" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.text}>
            Welcome to Asteria hostel, where comfort meets community! We are
            dedicated to providing a welcoming and affordable living environment
            for students and working professionals. Our hostel is designed to
            meet the needs of modern lifestyles, offering clean, safe, and
            well-furnished accommodations Our convenient location ensures easy
            access to public transport, educational institutions, and local
            amenities, making your daily commute hassle-free. We pride ourselves
            on our attentive staff, who are always ready to assist you in making
            your stay comfortable and enjoyable.
          </Text>
          <Text style={styles.text}>
            Join our vibrant community at Asteria hostel and experience a home
            away from home!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  content: {
    paddingVertical: 10,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 14,
    fontFamily: FontText.bold,
    marginBottom: 10,
    lineHeight: 22,
    color: Color.black,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: FontText.light,
    color: '#7D7D7D',
  },
  bulletPoint: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    marginTop: 5,
  },
});
