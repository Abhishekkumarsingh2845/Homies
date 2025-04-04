

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {notificationFunction} from './src/utlis/Notification';
import  messaging from "@react-native-firebase/messaging";
messaging().setBackgroundMessageHandler(async remoteMessage => {
  notificationFunction(remoteMessage);
});
AppRegistry.registerComponent(appName, () => App);
