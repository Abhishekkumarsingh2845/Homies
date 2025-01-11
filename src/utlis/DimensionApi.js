import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ScreenDimensions = {
  screenWidth: width,
  screenHeight: height,
  isSmallDevice: width < 360, // Example: Detect small devices
};

export { ScreenDimensions };
