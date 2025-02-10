import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

export const openGallery = async () => {
    try {
        const res = await launchImageLibrary(
            {
                mediaType: 'photo',
            }
        )
        return { 
            status: true, 
            response: res.assets, 
            message: 'selected image data' 
        }
    } 
    catch (error) {
        console.log("error of gallery" , error)
        return { 
            status: false, 
            response: error, 
            message: 'Something went wrong in openGallery method' 
        }
    }
}


export const uploadImageUrl = async (data) => {
    const formData = new FormData();
    formData.append('file', data);
    try {
        let response = await axios.post(
            'http://15.206.16.230:8084/api/v1/user/uploadImg',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data', 
              }
            }
        )
        console.log("image api ====" , response.data)
            return {
                status: true,
                message: response.data.message,
                imageUrl: response.data.data,
            }
    }
    catch (error) {
        return { 
            status: false, 
            response: error, 
            message: 'Something went wrong' 
        }
    }
}