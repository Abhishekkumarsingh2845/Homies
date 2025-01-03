import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import MainNavigation from './src/navigations/MainNavigator';
import {Color} from './src/utlis/Color';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <MainNavigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
// xcrun simctl list





// import React, {useEffect} from 'react';
// import {View, Text} from 'react-native';
// import appsFlyer from 'react-native-appsflyer';

// export default function App() {
//   useEffect(() => {
//     appsFlyer.initSdk(
//       {
//         devKey: 'jM5UQCpNnhNqvHx6LV9S6h',
//         isDebug: true,
//       },
//       result => {
//         console.log('AppsFlyer initialized:', result);
//       },
//       error => {
//         console.error('AppsFlyer initialization error:', error);
//       },
//     );

//     const onDeepLink = data => {
//       console.log('Deep link data:', data);
//     };

//     appsFlyer.onDeepLink(response => onDeepLink(response));

//     const simulateDeepLink = () => {
//       const testDeepLinkData = {deepLink: 'testapp://testhost'};
//       onDeepLink(testDeepLinkData);
//     };

//     simulateDeepLink();
//   }, []);

//   return (
//     <View>
//       <Text>Welcome to the App with AppsFlyer Deep Linking!</Text>
//     </View>
//   );
// }
