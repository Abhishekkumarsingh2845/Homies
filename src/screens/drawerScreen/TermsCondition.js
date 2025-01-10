import {StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import CommonHeader from '../../components/CommonHeader';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import Aligntext from '../../components/Aligntext';
const TermsCondition = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <CommonHeader title="Terms & Conditions" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.heading}>1. Acceptance of Terms</Text>
          <Text style={styles.text}>
            By booking a room at Asteria hostel, you agree to these Terms and
            Conditions. If you do not agree, please do not use our services.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>2.Cancellation Policy</Text>
          <Aligntext
            detailtxt={
              'Cancellations must be made [insert cancellation notice period, e.g., 48 hours] prior to check-in for a full refund.'
            }
          />
          {/* 
          <Text style={styles.text}>
            • Cancellations made after this period may incur a cancellation fee.
          </Text> */}
          <Aligntext
            detailtxt={
              'Cancellations made after this period may incur a cancellation fee'
            }
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>3. Termination of Stay</Text>

          <Aligntext
            detailtxt={
              "Management reserves the right to terminate a guest's stay if they violate any house rules or terms outlined herein"
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default TermsCondition;

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
