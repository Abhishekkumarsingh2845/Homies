import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonHeader from '../../components/CommonHeader';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import Aligntext from '../../components/Aligntext';
import {get} from '../../utlis/Api';
import axios from 'axios';
import {useSelector} from 'react-redux';
const TermsCondition = () => {
  const [data, setDate] = useState(null);
  const {token} = useSelector(state => state.auth.user);
  const [loading, setLoading] = useState(true);
  // const token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMGJmYWRlMTdlNWRiNzEzOTYyODUiLCJpYXQiOjE3MzQ1OTQ4NzF9.6MvhJVvtCCTdWiqANEFF7GBshBi3-19AV4INZNUgJTA';
  const fetchtermandcondition = async () => {
    setLoading(true);
    try {
      const response = await get('websiteTermsAndCondition', {}, token);

      if (response.success) {
        setDate(response.data[0]);
      } else {
        console.log('failed to fetch the privacy policy');
      }
    } catch (error) {
      console.log('Error', error?.reponse?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchtermandcondition();
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <CommonHeader title="Terms & Conditions" />
      <ScrollView
        refreshControl={
          <RefreshControl
            onRefresh={fetchtermandcondition}
            refreshing={loading}
          />
        }
        contentContainerStyle={styles.content}>
        <View style={styles.section}>
          {loading ? (
            <Text>Loading..</Text>
          ) : (
            <View style={styles.section}>
              <Text style={styles.text}>
                {data?.description || 'no term and condition'}
              </Text>
            </View>
          )}
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
