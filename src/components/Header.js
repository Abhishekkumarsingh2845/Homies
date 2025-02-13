// import {
//   Image,
//   ImageBackground,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React from 'react';
// import {Img} from '../utlis/ImagesPath';
// import { useNavigation } from '@react-navigation/native';

// const Header = ({
//   Img1,
//   tittclr = 'white',
//   heght = 20,
//   wdth = 20,
//   resizem = 'contain',
//   locationimg
// }) => {
//   const naviagtion=useNavigation();
//   return (
//     <ImageBackground source={Img.headerbg} style={styles.container}>
//       <StatusBar backgroundColor={'#010101'} barStyle={'light-content'} />
//       <View style={styles.logocontainer}>
//         <View style={styles.leftcontinaer}>
//           <TouchableOpacity onPress={()=>naviagtion.goBack()}>
//             <Image
//               source={Img1}
//               style={[
//                 (styles.drawicon,
//                 {
//                   tintColor: tittclr,
//                   width: wdth,
//                   height: heght,
//                   resizeMode: resizem,
//                 }),
//               ]}
//             />
//           </TouchableOpacity>

//           <Image source={Img.primarylogo} style={styles.logoicon} />
//         </View>
//         <View style={styles.rightcontinaer}>
//           {/* <TouchableOpacity>
//             <Image source={Img.lcn} style={styles.location} />
//           </TouchableOpacity> */}
//            <TouchableOpacity>
//             <Image source={locationimg||Img.lcn} style={styles.location} />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image source={Img.hrt} style={styles.heart} />
//           </TouchableOpacity>

//           <TouchableOpacity>
//             <Image source={Img.bll} style={styles.bell} />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image source={Img.hrt} style={styles.heart} />
//           </TouchableOpacity>

//           <TouchableOpacity>
//             <Image source={Img.bll} style={styles.bell} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// export default Header;

// const styles = StyleSheet.create({
//   container: {
//     height: 100,
//     // backgroundColor:"red"
//   },
//   leftcontinaer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     // backgroundColor: 'red',
//   },
//   drawicon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//     // tintColor: 'white',
//   },
//   logoicon: {
//     width: 80,
//     height: 120,
//     resizeMode: 'contain',
//     marginLeft: 8,
//   },
//   logocontainer: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//   },
//   location: {
//     width: 25,
//     height: 25,
//     resizeMode: 'contain',
//     // marginLeft:10,
//   },
//   heart: {
//     width: 25,
//     height: 25,
//     resizeMode: 'contain',
//     marginLeft: 10,
//   },
//   bell: {
//     width: 30,
//     height: 30,
//     resizeMode: 'contain',
//     marginLeft: 10,
//   },
//   rightcontinaer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     // backgroundColor: 'red',
//   },
// });




import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Img } from '../utlis/ImagesPath';
import { useNavigation } from '@react-navigation/native';
import { FontText } from '../utlis/CustomFont';
import { ScreenDimensions } from '../utlis/DimensionApi';

const Header = ({
  Img1,
  tittclr = 'white',
  heght = 20,
  wdth = 20,
  resizem = 'contain',
  locationIcon,
  heartIcon,
  bellIcon,
  hght=100,
  complaintbtn
}) => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={Img.headerbg} style={[styles.container,{height:hght}]}>
      <StatusBar backgroundColor={'#010101'} barStyle={'light-content'} />
      <View style={styles.logocontainer}>
        <View style={styles.leftcontinaer}>
          {/* <TouchableOpacity onPress={() => navigation.goBack()}> */}
          <TouchableOpacity  onPress={() => navigation.openDrawer()}>

            <Image
              source={Img1}
              style={[
                styles.drawicon,
                {
                  tintColor: tittclr,
                  width: wdth,
                  height: heght,
                  resizeMode: resizem,
                },
              ]}
            />
          </TouchableOpacity>

          <Image source={Img.primarylogo} style={styles.logoicon} />
        </View>
        <View style={styles.rightcontinaer}>
          {/* Dynamic location icon */}
          <TouchableOpacity>
            <Image
              source={locationIcon}  // Default to Img.lcn if no prop is provided
              style={styles.location}
            />
          </TouchableOpacity>

          {/* Dynamic heart icon */}
          <TouchableOpacity>
            <Image
              source={heartIcon }  // Default to Img.hrt if no prop is provided
              style={styles.heart}
            />
          </TouchableOpacity>

          {/* Dynamic bell icon */}
          <TouchableOpacity onPress={()=>navigation.navigate("Notification")}>
            <Image
              source={bellIcon }  // Default to Img.bll if no prop is provided
              style={styles.bell}
            />
          </TouchableOpacity>
        </View>
      </View>
{complaintbtn}
      {/* <View style={styles.complaintcontainer}>
        <Text style={styles.complainttxt}>Complaint</Text>
        <Text style={styles.complainttxt}>Disputes</Text>
      </View> */}
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // height: 100,
    // backgroundColor:"red"
  },
  leftcontinaer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  drawicon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    // tintColor: 'white',
  },
  logoicon: {
    width: 80,
    height: 120,
    resizeMode: 'contain',
    marginLeft: 8,
  },
  logocontainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  location: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    // marginLeft:10,
  },
  heart: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  bell: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  rightcontinaer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  complaintcontainer:
  {
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-around",
    paddingHorizontal:40,
    

    
  },
  complainttxt:
  {
    fontSize:16,
    fontFamily:FontText.medium,

  }
});
