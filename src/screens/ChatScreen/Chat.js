// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import ChatCmp from '../../components/ChatCmp';
// import {Img} from '../../utlis/ImagesPath';
// import Header from '../../components/Header';
// import {FontText} from '../../utlis/CustomFont';
// import {Color} from '../../utlis/Color';
// import {get} from '../../utlis/Api';
// import {SOCKET} from '../../utlis/socket';
// import {useSelector} from 'react-redux';
// import {useNavigation} from '@react-navigation/native';

// const Chat = () => {
//   const [chat, setChat] = useState([]);
//   const navigation = useNavigation();
//   const {data: myProperty} = useSelector(state => state.MyProperty);
//   const user = useSelector(state => state.auth.user);
 
//   const userId = user._id;
//   console.log("->>>userid in the chatscreen",userId);
//   console.log('->>>>>>>>propertid in the chatscreen', myProperty);

//   const propertyId = myProperty?._id;
//   const landlordId = myProperty?.landLordId;

//   const getUserPropertyGroup = async () => {
//     const params = {
//       propertyId: propertyId,
//       landLordId: landlordId,
//     };
//     console.log('params 0f the getUserPropertyGroup', params);
//     try {
//       const response = await get('userPropertyGroup', params);
//       console.log('Response from userPropertyGroup:', response.data);
//       setChat(response.data);
//     } catch (error) {
//       console.log('Error in userPropertyGroup:', error.message);
//     }
//   };

//   useEffect(() => {
//     getUserPropertyGroup();

//     const roomData = {
//       roomId: '67d9384e12f30d62b8f83be5',
//       userId: userId,
//     };
//     console.log('🛠️ Sending room data to SOCKET:', roomData);
//     SOCKET.emit('join_room', roomData);

//     SOCKET.on('connect', () => {
//       console.log('Socket Connected in the Chat screen', SOCKET.id);
//     });

//     SOCKET.on('chat_message', data => {
//       console.log('New chat message received:', data);
//       setChat(prevChat => [...prevChat, data]);
//     });

//     return () => {
//       SOCKET.off('chat_message');
//       SOCKET.off('connect');
//     };
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Header Img1={Img.draw} bellIcon={Img.bellicon} />
//       <Text style={styles.groupchattxt}>Group Chat</Text>
//       <View style={styles.subcontainer}>
//         {chat.length > 0 ? (
//           chat.map(item => (
//             <ChatCmp
//               onPress={() =>
//                 navigation.navigate('ChatMessage', {chatId: item._id})
//               }
//               iddd={item._id}
//               key={item._id}
//               mrntop={20}
//               Imgsource={Img.storeimgicon}
//               message={item.groupName}
//               updatetime={'08:42pm'}
//               chatmsg={'Hi How are you'}
//             />
//           ))
//         ) : (
//           <Text style={styles.noDataText}>No groups found</Text>
//         )}
//       </View>
//     </View>
//   );
// };

// export default Chat;

// const styles = StyleSheet.create({
//   subcontainer: {
//     paddingHorizontal: 30,
//   },
//   container: {
//     flex: 1,
//   },
//   groupchattxt: {
//     fontSize: 14,
//     fontFamily: FontText.medium,
//     color: Color.black,
//     paddingHorizontal: 20,
//     marginTop: 10,
//   },
// });

import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ChatCmp from '../../components/ChatCmp';
import {Img} from '../../utlis/ImagesPath';
import Header from '../../components/Header';
import {FontText} from '../../utlis/CustomFont';
import {Color} from '../../utlis/Color';
import {get} from '../../utlis/Api';
import {SOCKET} from '../../utlis/socket';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Chat = () => {
  const [chat, setChat] = useState([]);
  const [roomId, setRoomId] = useState(null); // State to store roomId dynamically
  const navigation = useNavigation();
  const {data: myProperty} = useSelector(state => state.MyProperty);
  const user = useSelector(state => state.auth.user);
  
  const userId = user._id;
  console.log("->>>userid in the chatscreen", userId);
  console.log('->>>>>>>>propertid in the chatscreen', myProperty);

  const propertyId = myProperty?._id;
  const landlordId = myProperty?.landLordId;

  const getUserPropertyGroup = async () => {
    const params = {
      propertyId: propertyId,
      landLordId: landlordId,
    };
    console.log('params of the getUserPropertyGroup', params);
    try {
      const response = await get('userPropertyGroup', params);
      console.log('Response from userPropertyGroup:', response.data);
      setChat(response.data);

      if (response.data.length > 0) {
        setRoomId(response.data[0]._id); // Set roomId dynamically from API response
      }
    } catch (error) {
      console.log('Error in userPropertyGroup:', error.message);
    }
  };

  useEffect(() => {
    getUserPropertyGroup();
  }, []);

  useEffect(() => {
    if (roomId) {
      const roomData = {
        roomId: roomId, // Use the dynamically set roomId
        userId: userId,
      };
      console.log('🛠️ Sending room data to SOCKET:', roomData);
      SOCKET.emit('join_room', roomData);
  
      SOCKET.on('connect', () => {
        console.log('Socket Connected in the Chat screen', SOCKET.id);
      });

      SOCKET.on('chat_message', data => {
        console.log('New chat message received:', data);
        setChat(prevChat => [...prevChat, data]);
      });

      return () => {
        SOCKET.off('chat_message');
        SOCKET.off('connect');
      };
    }
  }, [roomId]); // Runs only when roomId is updated

  return (
    <View style={styles.container}>
      <Header Img1={Img.draw} bellIcon={Img.bellicon} />
      <Text style={styles.groupchattxt}>Group Chat</Text>
      <View style={styles.subcontainer}>
        {chat.length > 0 ? (
          chat.map(item => (
            <ChatCmp
              onPress={() =>
                navigation.navigate('ChatMessage', {chatId: item._id})
              }
              // iddd={item._id}
              key={item._id}
              mrntop={20}
              Imgsource={Img.storeimgicon}
              message={item.groupName}
              updatetime={'08:42pm'}
              chatmsg={'Hi How are you'}
            />
          ))
        ) : (
          <Text style={styles.noDataText}>No groups found</Text>
        )}
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  subcontainer: {
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
  },
  groupchattxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
    paddingHorizontal: 20,
    marginTop: 10,
  },
});
