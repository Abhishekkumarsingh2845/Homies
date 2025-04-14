// import React, {useEffect, useState} from 'react';
// import {Image, ScrollView, StyleSheet, View} from 'react-native';
// import {Img} from '../utlis/ImagesPath';

// const DotIndicatorImg = ({
//   imageSource,
//   count = 3,
//   width = 370,
//   height = 150,
//   activeDotColor = '#007BFF', // Dynamic active dot color with default
// }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [images, setImages] = useState([Img.intro_1, Img.intro_2, Img.intro_3]);

//   console.log('images------------------------', images);

//   useEffect(() => {
//     if (imageSource) {
//       setImages(imageSource);
//     }
//   }, [imageSource]);

//   const handleScroll = event => {
//     const contentOffsetX = event.nativeEvent.contentOffset.x;
//     const index = Math.round(contentOffsetX / width);
//     setActiveIndex(index);
//   };

//   return (
//     <View>
//       <ScrollView
//         pagingEnabled={true}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={styles.horiscrollviewcontainer}
//         onScroll={handleScroll}
//         scrollEventThrottle={16}>
//         {images?.map((img, index) => (
//           <Image
//             key={index}
//             source={img}
//             style={[styles.image, {width: width, height: height}]}
//           />
//         ))}
//       </ScrollView>

//       <View style={styles.dotContainer}>
//         {images?.map((_, index) => (
//           <View
//             key={index}
//             style={[
//               styles.dot,
//               index === activeIndex && {backgroundColor: activeDotColor}, // Dynamic active dot style
//             ]}
//           />
//         ))}
//       </View>
//     </View>
//   );
// };

// export default DotIndicatorImg;

// const styles = StyleSheet.create({
//   image: {
//     resizeMode: 'cover',
//     marginRight: 10,

//     borderRadius: 10,
//   },
//   horiscrollviewcontainer: {
//     marginVertical: 20,
//   },
//   dotContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     // marginTop: 5,
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#D3D3D3',
//     marginHorizontal: 5,
//   },
// });

import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Img} from '../utlis/ImagesPath';

const DotIndicatorImg = ({
  imageSource,
  width = 370,
  height = 150,
  activeDotColor = '#007BFF',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (Array.isArray(imageSource) && imageSource.length > 0) {
      setImages(imageSource);
    }
  }, [imageSource]);

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
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
            style={[styles.image, {width, height}]}
          />
        ))}
      </ScrollView>

      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === activeIndex && {backgroundColor: activeDotColor},
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
    marginRight: 10,
    borderRadius: 10,
  },
  horiscrollviewcontainer: {
    marginVertical: 20,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 5,
  },
});
