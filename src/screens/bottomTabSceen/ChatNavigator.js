import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Chat from '../ChatScreen/Chat';
import ChatMessage from '../ChatScreen/ChatMessage';
import AdminMessage from '../ChatScreen/AdminMessage';

const Stack = createStackNavigator();

const ChatNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Chat" component={Chat} /> */}
      <Stack.Screen name="ChatMessage" component={ChatMessage} />
      <Stack.Screen name="AdminMessage" component={AdminMessage} />
    </Stack.Navigator>
  );
};

export default ChatNavigator;
