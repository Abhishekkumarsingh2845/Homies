import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import {setFcmToken} from '../store/FcmTokenSlice';
import notifee from '@notifee/react-native';

export async function requestUserPermissionForNotification() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

export const getToken = async () => {
  try {
    const FCMToken = await messaging().getToken();
    console.log('->>>fcmtoken', FCMToken);
    return FCMToken
    if (FCMToken) {
      // const dispatch = useDispatch();
      // dispatch(setFcmToken(FCMToken));
    }
  } catch (error) {
    console.log('error in getToken', error);
  }
};

export const notificationFunction = async (body) => {
  console.log('body inside notificationFunction', JSON.stringify(body));
  await notifee.requestPermission()
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  const notificationId = 'simpleNotification';

  // Display the simple notification
  await notifee.displayNotification({
    id: notificationId,
    title: body?.data?.title,
    body: body?.data?.body,
    android: {
      channelId,
      smallIcon :'ic_launcher',
      priority: 1,
      sound: 'default',
      pressAction: {
        id: 'default',
    },
    },
  });
};
