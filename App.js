if (__DEV__) {
  require('./ReactotronConfig');
}

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Linking,
  View,
  Button,
  Text,
  LogBox,
} from 'react-native';
import MainNavigation from './src/navigations/MainNavigator';
import { Color } from './src/utlis/Color';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import appsFlyer from 'react-native-appsflyer';
import { Provider } from 'react-redux';
import store, { persistor } from './src/store/Store';
import Toast from 'react-native-toast-message';
import { PersistGate } from 'redux-persist/integration/react';
import Splash from './src/screens/splashScreen/Splash';
import notifee, { AuthorizationStatus } from '@notifee/react-native';
import { getMessaging } from '@react-native-firebase/messaging';
import { getToken, requestUserPermissionForNotification } from './src/utlis/Notification';
import Geolocation from 'react-native-geolocation-service';
import { notificationFunction } from './src/utlis/Notification';
























const App = () => {
  const [inviteLink, setInviteLink] = useState(null);
  LogBox.ignoreAllLogs();
  useEffect(() => {
    appsFlyer.initSdk(
      {
        devKey: 'jM5UQCpNnhNqvHx6LV9S6h', // Replace with your AppsFlyer Dev Key
        isDebug: true,
        // appId: '154785576', // Replace with your App ID
        onInstallConversionDataListener: true,
        onDeepLinkListener: true,
        timeToWaitForATTUserAuthorization: 10, // for iOS 14.5
      },
      result => {
        // console.log('AppsFlyer SDK initialized:', result);

        // Set the OneLink template ID
        appsFlyer.setAppInviteOneLinkID(
          'rjOn', // Replace with your OneLink template ID
          result => {
            console.log('OneLink template ID set successfully:', result);
          },
          error => {
            console.error('Error setting OneLink template ID:', error);
          },
        );
      },
      error => {
        console.error('Error initializing AppsFlyer SDK:', error);
      },
    );
  }, []);

  useEffect(() => {
    // Handle deep links
    const handleDeepLink = response => {
      const deepLinkValue = response?.deepLinkValue; // Get the `deepLinkValue`
      console.log('Deep link value:', deepLinkValue);
    };

    appsFlyer.onDeepLink(handleDeepLink);

    // Clean up listener
    return () => appsFlyer.onDeepLink(null);
  }, []);

  const generateInviteLink = () => {
    // Generate the invite link
    appsFlyer.generateInviteLink(
      {
        channel: 'wholesome', // Specify the channel, e.g., email, social media
        campaign: 'wholesome', // Specify your campaign name
        customerID: 'user123', // Optional: User ID for tracking
        userParams: {
          deep_link_value: 'Intro', // Deep link param to direct the user
          // custom_param: 'example', // Add any custom params
        },
      },
      link => {
        console.log('Generated Invite Link:', link);
        setInviteLink(link); // Save the link to state
      },
      error => {
        console.error('Error generating invite link:', error);
      },
    );
  };

  const handleShareInviteLink = () => {
    if (inviteLink) {
      Linking.openURL(
        `mailto:?subject=Check out this app&body=${inviteLink}`,
      ).catch(err => console.error('Error opening email client:', err));
    } else {
      console.log('Invite link is not generated yet.');
    }
  };

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {

    Geolocation.setRNConfiguration({
      skipPermissionRequests: true,
      authorizationLevel: 'auto',
      locationProvider: 'auto',
    });
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = getMessaging().onMessage(async remoteMessage => {
      console.log('remoteMessage', remoteMessage);
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      notificationFunction(remoteMessage)
    });

    return unsubscribe;
  }, []);

  async function requestUserPermission() {
    const settings = await notifee.requestPermission();

    if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
      // console.log('Permission settings:', settings);
    } else {
      console.log('User declined permissions');
    }
  }

  useEffect(() => {
    // notificaion permission check
    requestUserPermission();
  }, [])


  useEffect(() => {
    requestUserPermissionForNotification();


  }, [])
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <View style={styles.container}> */}
        <GestureHandlerRootView style={styles.container}>
          <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

          {showSplash ? <Splash /> : <MainNavigation />}

          <Toast />
        </GestureHandlerRootView>
        {/* </View> */}
      </PersistGate>
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});













// if (__DEV__) {
//   require('./ReactotronConfig');
// }

// import React, { useEffect, useState } from 'react';
// import {
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Linking,
//   View,
//   Button,
//   Text,
//   LogBox,
// } from 'react-native';
// import MainNavigation from './src/navigations/MainNavigator';
// import { Color } from './src/utlis/Color';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import appsFlyer from 'react-native-appsflyer';
// import { Provider } from 'react-redux';
// import store, { persistor } from './src/store/Store';
// import Toast from 'react-native-toast-message';
// import { PersistGate } from 'redux-persist/integration/react';
// import Splash from './src/screens/splashScreen/Splash';
// import Geolocation from 'react-native-geolocation-service';
// // import notifee, { AuthorizationStatus } from '@notifee/react-native';
// import { getMessaging } from '@react-native-firebase/messaging';
// import { getToken, requestUserPermissionForNotification } from './src/utlis/Notification';

// import { notificationFunction } from './src/utlis/Notification';
























// const App = () => {
//   const [inviteLink, setInviteLink] = useState(null);
//   LogBox.ignoreAllLogs();
//   useEffect(() => {
//     appsFlyer.initSdk(
//       {
//         devKey: 'jM5UQCpNnhNqvHx6LV9S6h', // Replace with your AppsFlyer Dev Key
//         isDebug: true,
//         // appId: '154785576', // Replace with your App ID
//         onInstallConversionDataListener: true,
//         onDeepLinkListener: true,
//         timeToWaitForATTUserAuthorization: 10, // for iOS 14.5
//       },
//       result => {
//         // console.log('AppsFlyer SDK initialized:', result);

//         // Set the OneLink template ID
//         appsFlyer.setAppInviteOneLinkID(
//           'rjOn', // Replace with your OneLink template ID
//           result => {
//             console.log('OneLink template ID set successfully:', result);
//           },
//           error => {
//             console.error('Error setting OneLink template ID:', error);
//           },
//         );
//       },
//       error => {
//         console.error('Error initializing AppsFlyer SDK:', error);
//       },
//     );
//   }, []);

//   useEffect(() => {
//     // Handle deep links
//     const handleDeepLink = response => {
//       const deepLinkValue = response?.deepLinkValue; // Get the `deepLinkValue`
//       console.log('Deep link value:', deepLinkValue);
//     };

//     appsFlyer.onDeepLink(handleDeepLink);

//     // Clean up listener
//     return () => appsFlyer.onDeepLink(null);
//   }, []);

//   const generateInviteLink = () => {
//     // Generate the invite link
//     appsFlyer.generateInviteLink(
//       {
//         channel: 'wholesome', // Specify the channel, e.g., email, social media
//         campaign: 'wholesome', // Specify your campaign name
//         customerID: 'user123', // Optional: User ID for tracking
//         userParams: {
//           deep_link_value: 'Intro', // Deep link param to direct the user
//           // custom_param: 'example', // Add any custom params
//         },
//       },
//       link => {
//         console.log('Generated Invite Link:', link);
//         setInviteLink(link); // Save the link to state
//       },
//       error => {
//         console.error('Error generating invite link:', error);
//       },
//     );
//   };

//   const handleShareInviteLink = () => {
//     if (inviteLink) {
//       Linking.openURL(
//         `mailto:?subject=Check out this app&body=${inviteLink}`,
//       ).catch(err => console.error('Error opening email client:', err));
//     } else {
//       console.log('Invite link is not generated yet.');
//     }
//   };

//   const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {

//     Geolocation.setRNConfiguration({
//       skipPermissionRequests: true,
//       authorizationLevel: 'auto',
//       locationProvider: 'auto',
//     });
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//     }, 8000);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const unsubscribe = getMessaging().onMessage(async remoteMessage => {
//       console.log('remoteMessage', remoteMessage);
//       // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
//       notificationFunction(remoteMessage)
//     });

//     return unsubscribe;
//   }, []);

//   async function requestUserPermission() {
//     const settings = await notifee.requestPermission();

//     if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
//       // console.log('Permission settings:', settings);
//     } else {
//       console.log('User declined permissions');
//     }
//   }

//   useEffect(() => {
//     // notificaion permission check
//     // requestUserPermission();
//   }, [])


//   useEffect(() => {
//     requestUserPermissionForNotification();


//   }, [])
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         {/* <View style={styles.container}> */}
//         <GestureHandlerRootView style={styles.container}>
//           <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

//           {showSplash ? <Splash /> : <MainNavigation />}

//           <Toast />
//         </GestureHandlerRootView>
//         {/* </View> */}
//       </PersistGate>
//     </Provider>
//   );
// };

// export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
