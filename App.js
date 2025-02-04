if (__DEV__) {
  require("./ReactotronConfig");
}

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Linking,
  View,
  Button,
  Text,
} from 'react-native';
import MainNavigation from './src/navigations/MainNavigator';
import {Color} from './src/utlis/Color';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import appsFlyer from 'react-native-appsflyer';
import {Provider} from 'react-redux';
import store from './src/store/Store';

const App = () => {
  const [inviteLink, setInviteLink] = useState(null);

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
        console.log('AppsFlyer SDK initialized:', result);

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

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <MainNavigation />
      </View>
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   View,
//   ActivityIndicator,
//   Text,
//   PermissionsAndroid,
//   Platform,
//   TouchableOpacity,
// } from "react-native";
// import MapView, { Marker } from "react-native-maps";
// import Geolocation from "react-native-geolocation-service";

// const noidaLocation = {
//   latitude: 28.5355,
//   longitude: 77.3910,
//   latitudeDelta: 0.0099,
//   longitudeDelta: 0.0421,
// };

// const Home = () => {
//   const [location, setLocation] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const requestLocationPermission = async () => {
//     if (Platform.OS === "android") {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//         );
//         return granted === PermissionsAndroid.RESULTS.GRANTED;
//       } catch (err) {
//         console.error("Permission error:", err);
//         return false;
//       }
//     }
//     return true;
//   };

//   useEffect(() => {
//     const fetchLocation = async () => {
//       const hasPermission = await requestLocationPermission();
//       if (hasPermission) {
//         Geolocation.getCurrentPosition(
//           ({ coords }) => {
//             setLocation({
//               latitude: coords.latitude,
//               longitude: coords.longitude,
//               latitudeDelta: 0.0099,
//               longitudeDelta: 0.0421,
//             });
//             setLoading(false);
//           },
//           (error) => {
//             console.error("Location error:", error);
//             // Fallback to Noida if there's an error
//             setLocation(noidaLocation);
//             setLoading(false);
//           },
//           { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//         );
//       } else {
//         alert("Permission to access location was denied. Showing Noida by default.");
//         setLocation(noidaLocation);
//         setLoading(false);
//       }
//     };
//     fetchLocation();
//   }, []);

//   // Zoom in by reducing the deltas
//   const handleZoomIn = () => {
//     if (location) {
//       setLocation({
//         ...location,
//         latitudeDelta: location.latitudeDelta * 0.5,
//         longitudeDelta: location.longitudeDelta * 0.5,
//       });
//     }
//   };

//   // Zoom out by increasing the deltas
//   const handleZoomOut = () => {
//     if (location) {
//       setLocation({
//         ...location,
//         latitudeDelta: location.latitudeDelta * 2,
//         longitudeDelta: location.longitudeDelta * 2,
//       });
//     }
//   };

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#007BFF" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {location && (
//         <>
//           <MapView
//             style={StyleSheet.absoluteFillObject}
//             region={location}
//             mapType="standard"
//             showsUserLocation={true}
//           >
//             <Marker coordinate={location} title="Location" />
//           </MapView>
//           <View style={styles.zoomContainer}>
//             <TouchableOpacity style={styles.zoomButton} onPress={handleZoomIn}>
//               <Text style={styles.zoomText}>+</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.zoomButton} onPress={handleZoomOut}>
//               <Text style={styles.zoomText}>-</Text>
//             </TouchableOpacity>
//           </View>
//         </>
//       )}
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   zoomContainer: {
//     position: "absolute",
//     bottom: 50,
//     right: 20,
//     flexDirection: "column",
//   },
//   zoomButton: {
//     backgroundColor: "#fff",
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 10,
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//   },
//   zoomText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#007BFF",
//   },
// });
