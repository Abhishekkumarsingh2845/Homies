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

const App = () => {
  const [inviteLink, setInviteLink] = useState(null);

  useEffect(() => {
    appsFlyer.initSdk(
      {
        devKey: 'jM5UQCpNnhNqvHx6LV9S6h', // Replace with your AppsFlyer Dev Key
        isDebug: true,
        appId: '154785576', // Replace with your App ID
        onInstallConversionDataListener: true,
        onDeepLinkListener: true,
        timeToWaitForATTUserAuthorization: 10, // for iOS 14.5
      },
      result => {
        console.log('AppsFlyer SDK initialized:', result);

        // Set the OneLink template ID
        appsFlyer.setAppInviteOneLinkID(
          'zweS', // Replace with your OneLink template ID
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
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Button title="Generate Invite Link" onPress={generateInviteLink} />
      {inviteLink && (
        <>
          <Text style={styles.linkText}>{inviteLink}</Text>
          <Button title="Share Invite Link" onPress={handleShareInviteLink} />
        </>
      )}
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
