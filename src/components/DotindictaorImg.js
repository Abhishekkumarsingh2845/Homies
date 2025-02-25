// import {FlatList, Image, ScrollView, StyleSheet, View} from 'react-native';
// import React, {useState} from 'react';

// import { Color } from '../utlis/Color';
// import {Img} from '../utlis/ImagesPath';
// const DotindictaorImg = () => {
//   const images = [Img.hstimgage, Img.hstimgage, Img.hstimgage];
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Function to handle scroll position and update active index
//   const handleScroll = event => {
//     const contentOffsetX = event.nativeEvent.contentOffset.x;
//     const index = Math.floor(contentOffsetX / 350); // Image width is 350
//     setActiveIndex(index);
//   };
//   return (
//     <View>
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={styles.horiscrollviewcontainer}
//         onScroll={handleScroll}
//         scrollEventThrottle={16}>
//         {images.map((img, index) => (
//           <Image key={index} source={img} style={styles.image} />
//         ))}
//       </ScrollView>

//       <View style={styles.dotContainer}>
//         {images.map((_, index) => (
//           <View
//             key={index}
//             style={[
//               styles.dot,
//               index === activeIndex && styles.activeDot, // Active dot style
//             ]}
//           />
//         ))}
//       </View>
//     </View>
//   );
// };

// export default DotindictaorImg;

// const styles = StyleSheet.create({
//   image: {
//     width: 350, // Adjust width for horizontal scroll
//     height: 150, // Adjust height for horizontal scroll
//     resizeMode: 'cover',
//     marginRight: 10, // Add spacing between images
//     borderRadius: 10,
//   },
//   inactiveDot: {
//     backgroundColor: '#D3D3D3',
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     marginHorizontal: 3,
//   },
//   activeDot: {
//     backgroundColor: '#007BFF',
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 3,
//   },
//   horiscrollviewcontainer: {
//     marginVertical: 20,
//   },

//   dotContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   dot: {
//     width: 5,
//     height: 5,
//     borderRadius: 2,
//     backgroundColor: '#D3D3D3',
//     marginHorizontal: 5,
//   },
//   activeDot: {
//     backgroundColor: Color.btnclr,
//     width: 8,
//     height: 8,
//     borderRadius: 5,
//   },
// });



import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

const DotIndicatorImg = ({
  imageSource,
  count = 3,
  width = 370,
  height = 150,
  activeDotColor = '#007BFF', // Dynamic active dot color with default
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Dynamically generate an array of images
  const images = Array(count).fill(imageSource);

  // Function to handle scroll position and update active index
  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width); // Adjust based on dynamic width
    setActiveIndex(index);
  };

  return (
    <View>
      <ScrollView
      pagingEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horiscrollviewcontainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        {images.map((img, index) => (
          <Image
            key={index}
            source={img}
            style={[
              styles.image,
              {width: width, height: height}, // Dynamic width and height from props
            ]}
          />
        ))}
      </ScrollView>

      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === activeIndex && {backgroundColor: activeDotColor}, // Dynamic active dot style
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default DotIndicatorImg;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    marginRight: 10, // Add spacing between images
    borderRadius: 10,
    // backgroundColor:"red"
  },
  horiscrollviewcontainer: {
    marginVertical: 20,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginTop: 5,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 5,
  },
});
