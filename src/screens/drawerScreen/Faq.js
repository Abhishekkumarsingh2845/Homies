// import {
//   RefreshControl,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import Faquestion from '../../components/Faquestion';
// import SecondaryHeader from '../../components/SecondaryHeader';
// import {useNavigation} from '@react-navigation/native';
// import {Img} from '../../utlis/ImagesPath';
// import PrimaryBtn from '../../components/PrimaryBtn';
// import {Color} from '../../utlis/Color';
// import {ScreenDimensions} from '../../utlis/DimensionApi';
// import {get} from '../../utlis/Api';
// import {useSelector} from 'react-redux';

// const Faq = () => {
//   const navigation = useNavigation();
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const token = useSelector(state => state.auth.token);
//   console.log('token received from redux in termcondition', token);
//   const fetchFaq = async () => {
//     try {
//       setLoading(true);
//       const reponse = await get(
//         'getFaqListByAppType',
//         {appType: 'Website'},
//         token,
//       );
//       console.log('reponse of the faq->>', reponse.data, token);
//       if (reponse.success) {
//         setData(reponse.data[0]?.question);
//         console.log('->>>jb', reponse.data.question);
//       } else {
//         console.log('failed to fetch the faq api');
//       }
//     } catch (error) {
//       console.log('error', error?.reponse?.data || error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchFaq();
//   }, []);
//   return (
//     <View style={styles.container}>
//       <SafeAreaView />
//       <SecondaryHeader
//         gobackImage={Img.goback}
//         detailtxt={'FAQs'}
//         onPress={() => navigation.openDrawer()}
//       />

//       <View style={styles.subcontainer}>
//         <Faquestion
//           question={data || 'no question'}
//           answer={`Most hostels offer basic amenities like bunk beds,\nshared bathrooms, kitchens, lockers for valuables, Wi-Fi, and common areas for socializing.`}
//         />
//         <Faquestion
//           question="2: Is it safe to stay in a hostel/PG?"
//           answer={`Yes, many hostels offer private rooms in addition to dormitory-style accommodations.`}
//         />
//         <Faquestion
//           question="3: Do hostels/PG provide meals?"
//           answer={`Yes, many hostels offer private rooms in addition to dormitory-style accommodations.`}
//         />
//         <PrimaryBtn
//           bgcolor={Color.btnclr}
//           txt={'Raise a Query'}
//           mgntop={ScreenDimensions.screenHeight * 0.23}
//           destination={'Help'}
//         />
//       </View>
//     </View>
//   );
// };

// export default Faq;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F1F1F1',
//   },
//   subcontainer: {
//     paddingHorizontal: 20,
//   },
// });

import {
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

const Faq = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null); // Keep it null initially
  const [loading, setLoading] = useState(true);
  const token = useSelector(state => state.auth.token);

  const fetchFaq = async () => {
    try {
      setLoading(true);
      const response = await get(
        'getFaqListByAppType',
        {appType: 'Website'},
        token,
      );
      console.log('FAQ Response ->>', response.data);

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
        {data
          ? data.map((item, index) => (
              <Faquestion
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))
          : 'no faq avaiable'}

        <PrimaryBtn
          bgcolor={Color.btnclr}
          txt={'Raise a Query'}
          mgntop={ScreenDimensions.screenHeight * 0.23}
          destination={'Help'}
        />
      </View>
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
});
