// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';
// import DownArrow from 'react-native-vector-icons/MaterialIcons';
// import UpArrow from 'react-native-vector-icons/MaterialIcons';
// import {FontText} from '../utlis/CustomFont';

// const Faquestion = ({question, answer}) => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpanded = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.questioncontainer}
//         onPress={toggleExpanded}>
//         <TextInput />
//         {expanded ? (

//           <UpArrow name="keyboard-arrow-up" size={20} />
//         ) : (
//           <DownArrow name="keyboard-arrow-down" size={20} />
//         )}
//       </TouchableOpacity>

//       {expanded && (
//         <View style={styles.answercontainer}>
//           <Text style={styles.answer}>{answer}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default Faquestion;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 20,
//     paddingHorizontal: 15,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   questioncontainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   questiontxt: {
//     fontSize: 15,
//     fontFamily: FontText.medium,
//     lineHeight: 20,
//     color: '#000000',
//     flex: 1,
//     marginRight: 10,
//   },
//   answer: {
//     fontSize: 12,
//     fontFamily: FontText.light,
//     lineHeight: 22,
//     color: '#575757',
//   },
//   answercontainer: {
//     marginTop: 10,
//     alignItems: 'flex-start',
//   },
// });

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import DownArrow from 'react-native-vector-icons/MaterialIcons';
import UpArrow from 'react-native-vector-icons/MaterialIcons';
import {FontText} from '../utlis/CustomFont';
import PrimaryBtn from './PrimaryBtn';
import RenderHTML from 'react-native-render-html';
const Faquestion = ({question, answer}) => {
  const [expanded, setExpanded] = useState(false);
  const {width} = useWindowDimensions();
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  console.log('->>>>>', question);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.questioncontainer}
        onPress={toggleExpanded}>
        {/* <Text style={styles.questiontxt}>{question}</Text> */}
        <RenderHTML
          contentWidth={width}
          source={{
            html: question,
          }}
        />
        {expanded ? (
          <UpArrow name="keyboard-arrow-up" size={20} color="#000" />
        ) : (
          <DownArrow name="keyboard-arrow-down" size={20} color="#000" />
        )}
      </TouchableOpacity>

      {expanded && (
        <View style={styles.answercontainer}>
          {/* <Text style={styles.answer}>{answer}</Text> */}
          <RenderHTML
          contentWidth={width}
          source={{
            html: answer,
          }}
        />
        </View>
      )}
    </View>
  );
};

export default Faquestion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  questioncontainer: {
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Space between text and arrow
  },
  questiontxt: {
    fontSize: 15,
    fontFamily: FontText.medium,
    lineHeight: 20,
    color: '#000000',
    flex: 1, // Make the question text take available space
    marginRight: 10, // Add space between text and arrow
  },
  answer: {
    fontSize: 12,
    fontFamily: FontText.light,
    lineHeight: 22,
    color: '#575757',
  },
  answercontainer: {
    marginTop: 5,
    alignItems: 'flex-start',
  },
});
