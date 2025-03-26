// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { FontText } from '../utlis/CustomFont';
// import { Color } from '../utlis/Color';
// import { useNavigation } from '@react-navigation/native';

// const ChatCmp = ({mrntop,message,updatetime,Imgsource,chatmsg,iddd}) => {
//   const navigation=useNavigation();
//     return (
//         <TouchableOpacity style={[styles.container,{marginTop:mrntop}]} onPress={()=>navigation.navigate("ChatNavigator",{screenn:"ChatMessage"})}>
//           <Image
//             source={Imgsource}
//             style={styles.notificationiconstyle}
//           />
//           <View style={styles.msgandtimecontainer}>
//             <Text style={styles.msgtxtstyle}>{message}</Text>
//             <View style={styles.msgAtimecontainer}>
//             <Text>{iddd}</Text>
//             <Text style={styles.chatmsgstyle}>{chatmsg}</Text>
//             <Text style={styles.time}>{updatetime}</Text>
         
//             </View>
           
//           </View>
//         </TouchableOpacity>
//       );
//     };
    
//     export default ChatCmp;
    
//     const styles = StyleSheet.create({
//       container: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderBottomWidth:2,
//         paddingVertical:10,
//         borderColor:"#F0EBEB",
        
//       },
//       notificationiconstyle: {
//         width: 40,
//         height: 40,
//         borderRadius:20,
//       },
//       msgandtimecontainer: {
//         marginLeft: 10,
//       },
//       msgtxtstyle: {
//         fontSize: 14,
//         fontFamily: FontText.medium,
//         lineHeight: 18,
//         color: Color.black,
//       },
//       time: {
//         fontSize: 12,
//         fontFamily: FontText.light,
//         lineHeight: 16,
//         color: Color.clr87,
//        textAlign:"right",
//        marginLeft:160,
//       },
//       chatmsgstyle:
//       {
//         fontSize: 12,
//         fontFamily: FontText.light,
//         lineHeight: 16,
//         color: Color.clr87,
        
//       },
//       msgAtimecontainer:{
//         flexDirection:"row",
//         alignItems:"center",
//         justifyContent:"space-between",

//       }
//     });
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FontText } from '../utlis/CustomFont';
import { Color } from '../utlis/Color';
import { useNavigation } from '@react-navigation/native';

const ChatCmp = ({ mrntop, message, updatetime, Imgsource, chatmsg, iddd, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, { marginTop: mrntop }]} onPress={onPress}>
      <Image source={Imgsource} style={styles.notificationiconstyle} />
      <View style={styles.msgandtimecontainer}>
        <Text style={styles.msgtxtstyle}>{message}</Text>
        <View style={styles.msgAtimecontainer}>
          {/* <Text>{iddd}</Text> */}
          <Text style={styles.chatmsgstyle}>{chatmsg}</Text>
          <Text style={styles.time}>{updatetime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatCmp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    paddingVertical: 10,
    borderColor: '#F0EBEB',
  },
  notificationiconstyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  msgandtimecontainer: {
    marginLeft: 10,
  },
  msgtxtstyle: {
    fontSize: 14,
    fontFamily: FontText.medium,
    lineHeight: 18,
    color: Color.black,
  },
  time: {
    fontSize: 12,
    fontFamily: FontText.light,
    lineHeight: 16,
    color: Color.clr87,
    textAlign: 'right',
    marginLeft: 160,
  },
  chatmsgstyle: {
    fontSize: 12,
    fontFamily: FontText.light,
    lineHeight: 16,
    color: Color.clr87,
  },
  msgAtimecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
