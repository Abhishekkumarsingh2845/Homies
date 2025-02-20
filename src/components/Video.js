import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Img} from '../utlis/ImagesPath';
import {FontText} from '../utlis/CustomFont';
import {Color} from '../utlis/Color';
import {ScreenDimensions} from '../utlis/DimensionApi';
import Video from 'react-native-video';
const VideoPlayer = ({videoplay}) => {
  const videoarray = new Array(3).fill(null);
  console.log('system video', videoplay?.property_videos);
  return (
    <View style={styles.container}>
      <Text style={styles.amenttxt}>Virtual Videos</Text>
      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: 5,
          marginLeft: 5,
        }}>
        {videoarray.map((_, index) => (
          <Video
            key={index}
            source={{uri: videoplay?.property_videos?.[0]}}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: ScreenDimensions.screenWidth * 0.26,
              height: ScreenDimensions.screenHeight * 0.1,
              borderRadius: 10,
              marginLeft: 10,
            }}
          />
        ))}
      </TouchableOpacity>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    // marginTop:10
  },
  amenttxt: {
    fontSize: 14,
    fontFamily: FontText.medium,
    color: Color.black,
    marginLeft: 10,
    marginTop: 10,
    // marginVertical: 10,
  },
});
