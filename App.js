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
// import React, {useEffect, useState} from 'react';
// import {View, Text, Button, Linking} from 'react-native';
// import appsFlyer from 'react-native-appsflyer';
// import DeviceInfo from 'react-native-device-info';

// const App = () => {
//   const [deviceId, setDeviceId] = useState('');

//   useEffect(() => {
//     // Initialize AppsFlyer SDK
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

//     // Handle deep link when the app is opened via a deep link
//     const onDeepLink = data => {
//       console.log('Deep link data:', data);

//       // Here you can handle the deep link data and navigate to the appropriate screen
//       if (data && data.deepLink) {
//         console.log('Deep link received:', data.deepLink);
//         // Example: Navigate based on the deep link URL
//         // Navigate to a screen using your navigation method (e.g., React Navigation)
//       }
//     };

//     // Listen for deep link events
//     appsFlyer.onDeepLink(response => onDeepLink(response));

//     // Handle deep link if the app is opened via a link while in the background
//     Linking.addEventListener('url', event => {
//       const {url} = event;
//       console.log('Deep link URL:', url);
//       onDeepLink({deepLink: url});
//     });

//     // Simulate a deep link (for testing purposes)
//     const simulateDeepLink = () => {
//       const testDeepLinkData = {deepLink: 'testapp://testhost'};
//       onDeepLink(testDeepLinkData);
//     };

//     simulateDeepLink();

//     // Get the device ID when the component mounts
//     const getDeviceId = async () => {
//       const id = await DeviceInfo.getUniqueId();
//       setDeviceId(id);
//       console.log('Device ID:', id);
//     };

//     getDeviceId();

//     // Clean up event listeners when the component is unmounted
//     return () => {
//       Linking.removeEventListener('url');
//     };
//   }, []);
//   useEffect(() => {
//     const handleDeepLink = (response) => {
//       const newsId = response?.deepLinkValue; // Get the `newsId`
//     console.log("value",newsId);
//     };

//     appsFlyer.onDeepLink(handleDeepLink);
//     return () => appsFlyer.onDeepLink(null); // Clean up the listener
//   }, []);
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Device ID: {deviceId}</Text>
//       <Button
//         title="Get Device ID"
//         onPress={() => {
//           DeviceInfo.getUniqueId().then(id => {
//             setDeviceId(id);
//           });
//         }}
//       />
//     </View>
//   );
// };

// export default App;

// import React, {useEffect, useState} from 'react';
// import {View, Text, Button, Linking, Alert} from 'react-native';
// import appsFlyer from 'react-native-appsflyer';
// import DeviceInfo from 'react-native-device-info';

// const App = () => {
//   const [deviceId, setDeviceId] = useState('');
//   const [customerUserId, setCustomerUserId] = useState(''); // State for customer user ID

//   useEffect(() => {
//     // Initialize AppsFlyer SDK
//     appsFlyer.initSdk(
//       {
//         devKey: 'jM5UQCpNnhNqvHx6LV9S6h',
//         isDebug: true,
//         onDeepLinkListener: true,
//       },
//       result => {
//         console.log('AppsFlyer initialized:', result);
//       },
//       error => {
//         console.error('AppsFlyer initialization error:', error);
//       },
//     );

//     // Set Customer User ID manually to "12020"
//     const userId = '12020'; // Manual Customer User ID
//     appsFlyer.setCustomerUserId(userId, res => {
//       console.log('Customer User ID set successfully:', res);
//       setCustomerUserId(userId); // Update state with the Customer User ID
//     });

//     // Handle deep link when the app is opened via a deep link
//     const onDeepLink = data => {
//       if (data?.deepLinkValue) {
//         console.log('Deep link value:', data.deepLinkValue);
//         Alert.alert('Deep Link Received', `Value: ${data.deepLinkValue}`);
//       } else {
//         console.log('Invalid deep link data:', data);
//       }
//     };

//     // Listen for deep link events
//     appsFlyer.onDeepLink(response => onDeepLink(response));

//     // Handle deep link if the app is opened via a link while in the background
//     Linking.addEventListener('url', event => {
//       const url = event.url;
//       console.log('Deep link URL:', url);
//       if (url) {
//         onDeepLink({deepLinkValue: url});
//       }
//     });

//     // Get the device ID when the component mounts
//     const getDeviceId = async () => {
//       const id = await DeviceInfo.getUniqueId();
//       setDeviceId(id);
//       console.log('Device ID:', id);
//     };

//     getDeviceId();

//     // Clean up event listeners when the component is unmounted
//     return () => {
//       Linking.removeEventListener('url');
//     };
//   }, []);

//   useEffect(() => {
//     const handleDeepLink = response => {
//       const newsId = response?.deepLinkValue; // Get the `deepLinkValue`
//       console.log('Deep link value:', newsId);
//     };

//     appsFlyer.onDeepLink(handleDeepLink);

//     // Clean up listener
//     return () => appsFlyer.onDeepLink(null);
//   }, []);

//   // Function to generate an invite link
//   const generateInviteLink = () => {
//     appsFlyer.generateInviteLink(
//       {
//         channel: 'gmail',
//         campaign: 'wholesome',
//         customerID: customerUserId, // Use the manually set Customer User ID
//         userParams: {
//           deep_link_value: 'App',
//           deep_link_sub1: 'App',
//         },
//       },
//       link => {
//         console.log('Generated Invite Link:', link);
//         Alert.alert('Invite Link Generated', link); // Display the link in an alert
//       },
//       err => {
//         console.error('Error Generating Invite Link:', err);
//         Alert.alert('Error', 'Failed to generate invite link');
//       },
//     );
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Device ID: {deviceId}</Text>
//       <Text>Customer User ID: {customerUserId}</Text>
//       {/* Display the Customer User ID */}
//       <Button
//         title="Get Device ID"
//         onPress={() => {
//           DeviceInfo.getUniqueId().then(id => {
//             setDeviceId(id);
//           });
//         }}
//       />
//       <Button
//         title="Generate Invite Link"
//         onPress={generateInviteLink} // Call the generateInviteLink function
//       />
//     </View>
//   );
// };

// export default App;

// import React from 'react';
// import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
// import appsFlyer from 'react-native-appsflyer';

// const App = () => {
//   const generateInviteLink = () => {
//     const linkData = {
//       channel: 'wholesomee',
//       campaign: 'wholesomee',
//       customerID: '1234',
//       userParams: {
//         deep_link_value: 'productDetails',
//         deep_link_sub1: 'electronics',
//         custom_param: 'special_offer',
//         brandDomain: 'www.wholesomebywh.com',
//       },

//       af_ios_url: 'https://www.wholesomebywh.com/',
//       af_android_url: 'https://www.wholesomebywh.com/',
//     };

//     appsFlyer.generateInviteLink(
//       linkData,
//       link => {
//         // Success callback
//         Alert.alert('Invite Link Generated', link);
//         console.log('Generated Invite Link:', link);
//       },
//       err => {
//         // Error callback
//         Alert.alert('Error Generating Link', JSON.stringify(err));
//         console.error('Error Generating Invite Link:', err);
//       },
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>AppsFlyer Invite Link Demo</Text>
//       <TouchableOpacity style={styles.button} onPress={generateInviteLink}>
//         <Text style={styles.buttonText}>Generate Invite Link</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 20,
//     fontWeight: 'bold',
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 15,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default App;
