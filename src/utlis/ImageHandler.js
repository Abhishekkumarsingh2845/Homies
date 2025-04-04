import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';

export const openGallery = async (mediaType =  'mixed') => {
  try {
    const res = await launchImageLibrary({
      mediaType: mediaType,
    });
    return {
      status: true,
      response: res.assets,
      message: 'selected image data',
    };
  } catch (error) {
    console.log('error of gallery', error);
    return {
      status: false,
      response: error,
      message: 'Something went wrong in openGallery method',
    };
  }
};

export const openCamera = async () => {
  try {
    const res = await launchCamera({
      mediaType: 'photo',
      saveToPhotos: true, // Saves the captured photo to the device gallery
      cameraType: 'back', // Uses the back camera
    });

    if (res.didCancel) {
      return {
        status: false,
        response: null,
        message: 'User cancelled camera',
      };
    }

    if (res.errorCode) {
      return {
        status: false,
        response: res.errorMessage,
        message: 'Camera error',
      };
    }

    return {
      status: true,
      response: res.assets,
      message: 'Captured image data',
    };
  } catch (error) {
    console.log('Error in openCamera:', error);
    return {
      status: false,
      response: error,
      message: 'Something went wrong in openCamera method',
    };
  }
};

export const uploadImageUrl = async data => {
  const formData = new FormData();
  formData.append('file', data);
  console.log('image api form data ====', formData);

  try {
    let response = await axios.post(
      'http://15.206.16.230:8084/api/v1/user/uploadImg',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    console.log('image api ====', response.data);
    return {
      status: true,
      message: response.data.message,
      imageUrl: response.data.data[0],
    };
  } catch (error) {
    console.log('image upload error: ' + error);
    return {
      status: false,
      response: error,
      message: 'Something went wrong',
    };
  }
};
