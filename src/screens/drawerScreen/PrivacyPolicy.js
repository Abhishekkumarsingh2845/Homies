import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonHeader from '../../components/CommonHeader';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import {get} from '../../utlis/Api';
import {useSelector} from 'react-redux';

const PrivacyPolicy = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const {token} = useSelector(state => state.auth.user);

  // const token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMGJmYWRlMTdlNWRiNzEzOTYyODUiLCJpYXQiOjE3MzQ1OTQ4NzF9.6MvhJVvtCCTdWiqANEFF7GBshBi3-19AV4INZNUgJTA';

  const fetchPrivacyPolicy = async () => {
    setLoading(true);
    try {
      const response = await get('/websitePrivacyPolicy', {}, token);
      if (response.success && response.data?.length > 0) {
        setData(response.data[0]);
      } else {
        console.log('Failed to fetch the privacy policy');
      }
    } catch (error) {
      console.log('Error:', error?.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrivacyPolicy();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <CommonHeader title="Privacy Policy" />
      <ScrollView contentContainerStyle={styles.content}>
        {loading ? (
          <Text>Loading..</Text>
        ) : (
          <View style={styles.section}>
            <Text style={styles.text}>
              {data?.description || 'Description not provided'}
            </Text>
          </View>
        )}
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
  text: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: FontText.light,
    color: '#7D7D7D',
  },
});
