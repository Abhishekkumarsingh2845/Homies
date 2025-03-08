import React, {forwardRef, useRef, useImperativeHandle} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

const RequestSentBtnSht = forwardRef((props, ref) => {
  const bottomSheetRef = useRef(null);

  // Allow external access to open the sheet
  useImperativeHandle(ref, () => ({
    open: () => {
      bottomSheetRef.current?.expand(); // Open the bottom sheet properly
    },
    close: () => {
      bottomSheetRef.current?.close(); // Close the Bottom Sheet
    },
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['25%', '50%', '75%']} // Adjust for smooth interaction
        index={-1} // Hide initially
        enablePanDownToClose={true}>
        <BottomSheetView style={styles.sheetContent}>
          <Text>Visit Request Sent!</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
});

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
});
