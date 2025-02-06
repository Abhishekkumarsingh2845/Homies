import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonHeader from '../../components/CommonHeader';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import {get} from '../../utlis/Api';
import {useSelector} from 'react-redux';
const AboutUs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = useSelector(state => state.auth.token);
  console.log('token received from redux in aboutus', token);
  // const token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMGJmYWRlMTdlNWRiNzEzOTYyODUiLCJpYXQiOjE3MzQ1OTQ4NzF9.6MvhJVvtCCTdWiqANEFF7GBshBi3-19AV4INZNUgJTA'; // Replace with your valid token

  const handleAboutdata = async () => {
    try {
      setLoading(true);
      const response = await get('websiteAboutUsContent', {}, token);
      console.log('response of the aboutus', response);
      if (response.success) {
        setData(response.data[0]);
      } else {
        console.log('failed to fetch About us data');
      }
    } catch (error) {
      console.log('Error in AboutApi:', error?.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleAboutdata();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <CommonHeader title="About Us" />
      <ScrollView
        refreshControl={
          <RefreshControl onRefresh={handleAboutdata} refreshing={loading} />
        }
        contentContainerStyle={styles.content}>
        {loading ? (
          <Text style={styles.text}>Loading...</Text>
        ) : (
          <View style={styles.section}>
            <Text style={styles.text}>
              {data?.description || 'no about us '}
            </Text>
          </View>
        )}
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
    marginVertical: 10,
  },
  bulletPoint: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    marginTop: 5,
  },
});
