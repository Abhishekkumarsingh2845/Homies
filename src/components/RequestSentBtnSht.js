import React, {forwardRef, useRef, useImperativeHandle, useCallback, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import { withDecay } from 'react-native-reanimated';
import { Img } from '../utlis/ImagesPath';

const RequestSentBtnSht = ({bottomSheetRef}) => {

  return (
    <>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['30%']} // Adjust for smooth interaction
        index={-1} // Hide initially
        enablePanDownToClose={true}
        style={styles.contentContainer}
        handleComponent={null}
        >
        <BottomSheetView style={styles.sheetContent}>
        <Image source={Img.greentick} style={{width : 40 , height : 40 , margin : 20}} resizeMode='contain' />
          <Text style={{color : 'black' , fontSize : 22 , fontWeight : 'bold'}}>Visit Request Sent!</Text>
        </BottomSheetView>
      </BottomSheet>
      
      </>
  );
};

export default RequestSentBtnSht;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sheetContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
