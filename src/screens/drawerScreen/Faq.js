import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Faquestion from '../../components/Faquestion';
import SecondaryHeader from '../../components/SecondaryHeader';
import {useNavigation} from '@react-navigation/native';
import {Img} from '../../utlis/ImagesPath';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import {ScreenDimensions} from '../../utlis/DimensionApi';
import {get} from '../../utlis/Api';
import {useSelector} from 'react-redux';

const FAQ = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null); // Keep it null initially
  const [loading, setLoading] = useState(true);
  const {token} = useSelector(state => state.auth.user);

  const fetchFaq = async () => {
    try {
      setLoading(true);
      const response = await get(
        'getFaqListByAppType',
        {appType: 'Website'},
        token,
      );

      if (response.success) {
        setData(response.data.length ? response.data : null); // Store full array or null
      } else {
        console.log('Failed to fetch the FAQ API');
      }
    } catch (error) {
      console.log('Error:', error?.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaq();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'FAQs'}
        onPress={() => navigation.openDrawer()}
      />

      <View style={styles.subcontainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item, index) =>
            item?.id ? item.id.toString() : index.toString()
          }
          renderItem={({item}) => (
            <Faquestion question={item.question} answer={item.answer} />
          )}
          ListEmptyComponent={<Text>No FAQs available</Text>}
          // ListFooterComponent={

          // }
        />

        <PrimaryBtn
        marVer={30}
          bgcolor={Color.btnclr}
          txt={'Raise a Query'}
          // mgntop={ScreenDimensions.screenHeight * 0.12} // Adjust margin
          destination={'Help'}
        />
      </View>
    </View>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  subcontainer: {
    paddingHorizontal: 20,


    // backgroundColor : 'red',
    flex: 1,
  },
});
