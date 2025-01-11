// import React, {useCallback, useMemo, useRef} from 'react';
// import {View, Text, StyleSheet, Image} from 'react-native';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
// import {Img} from './src/utlis/ImagesPath';
// // import {FontText} from './src/utlis/CustomFont';

// const RequestSentBtnSht = () => {
//   // ref
//   const bottomSheetRef = useRef(null);

//   // callbacks
//   const handleSheetChanges = useCallback(index => {
//     console.log('handleSheetChanges', index);
//   }, []);

//   // renders
//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <BottomSheet
//         ref={bottomSheetRef}
//         onChange={handleSheetChanges}
//         snapPoints={['30%']}
//         enablePanDownToClose={true}>
//         <BottomSheetView style={styles.contentContainer}>
//           {/* <Image
//             source={Img.verifytickicon}
//             style={{width: 100, height: 100}}
//           /> */}
//           <Text style={{fontSize: 16, color: 'black'}}>
//             Request sent Successful
//           </Text>
//         </BottomSheetView>
//       </BottomSheet>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'grey',
//   },
//   contentContainer: {
//     flex: 1,
//     // padding: 15,

//     alignItems: 'center',
//   },
// });

// export default RequestSentBtnSht;






import React, {forwardRef, useRef, useImperativeHandle} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

const RequestSentBtnSht = forwardRef((props, ref) => {
  const bottomSheetRef = useRef(null);

  // Allow external access to open the sheet
  useImperativeHandle(ref, () => ({
    open: () => {
      bottomSheetRef.current?.snapToIndex(0); // Open the bottom sheet
    },
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['30%']}
        enablePanDownToClose={true}>
        <BottomSheetView style={styles.contentContainer}>
          <Text style={{fontSize: 16, color: 'black'}}>
            Request sent successfully!
          </Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RequestSentBtnSht;
