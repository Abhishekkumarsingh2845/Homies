import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import CommonHeader from '../../components/CommonHeader';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';

const PrivacyPolicy = () => {
  return (
    <View style={styles.container}>
      <CommonHeader title="Privacy Policy" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.heading}>1. Introduction</Text>
          <Text style={styles.text}>
            At Asteria hostel, we are committed to protecting your privacy. This
            Privacy Policy outlines how we collect, use, and safeguard your
            personal information when you stay with us or use our services.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>2. Information We Collect</Text>

          <Text style={styles.text}>
            • Personal Information When you register or book a room, we may
            collect personal information such as your name, contact details,
            identification documents, and payment information.
          </Text>

          <Text style={styles.text}>
            • Usage Data We may collect information about how you access and use
            our website and services, including your IP address, browser type,
            and pages visited.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>3. How We Use Your Information</Text>

          <Text style={styles.text}>
            We may use your information for the following purposes:
          </Text>
          <View style={{paddingHorizontal: 20}}>
            <Text style={styles.text}>
              • Booking and Reservations:To process and manage your bookings.
            </Text>
            <Text style={styles.text}>
              • Communication: To send you confirmation details, updates, and
              important information related to your stay.
            </Text>
            <Text style={styles.text}>
              • Customer Support:To send you promotional materials, if you have
              opted in to receive them.
            </Text>
            <Text style={styles.text}>
              • Marketing: To send you promotional materials, if you have opted
              in to receive them.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;
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