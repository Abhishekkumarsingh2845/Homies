import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FontText} from '../utlis/CustomFont';
import {Color} from '../utlis/Color';
import {ScreenDimensions} from '../utlis/DimensionApi';
import Video from 'react-native-video';
import AppModal from './AppModal';

const VideoPlayer = ({videoplay}) => {
  const [visible, setVisible] = useState(false);
  const [selectedVideo, setSelecetdVideo] = useState('');
  const handleVideoSelect = item => {
    setVisible(!visible);
    setSelecetdVideo(item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.amenttxt}>Virtual Videos</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        {videoplay.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              handleVideoSelect(item);
            }}
            key={index}
            style={{
              marginTop: 5,
              marginLeft: 5,
            }}>
            <Video
              key={index}
              source={{uri: item}}
              style={{
                width: ScreenDimensions.screenWidth * 0.26,
                height: ScreenDimensions.screenHeight * 0.1,
                borderRadius: 10,
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>

      <AppModal visible={visible}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
              setSelecetdVideo('');
            }}
            style={styles.closeButton}>
            <Text style={styles.closeText}>✖</Text>
          </TouchableOpacity>
          <View style={styles.modalContainer}>
            <Video
              source={{uri: selectedVideo}}
              controls={true}
              hidePrevious={true}
              hideNext={true}
              style={{
                width: ScreenDimensions.screenWidth * 0.9,
                height: ScreenDimensions.screenWidth * 0.75,
                borderRadius: 10,
                marginLeft: 10,
              }}
            />
          </View>
        </View>
      </AppModal>
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

  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },

  closeText: {
    fontSize: 20,
    color: '#333',
  },

  closeButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    margin: 10,
  },
});
