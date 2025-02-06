// import axios from 'axios';

// const BASE_URL = 'http://15.206.16.230:8084/api/v1/user/';

// export const get = async (endpoint, params = {}, token = '') => {
//   try {
//     const response = await axios.get(`${BASE_URL}${endpoint}`, {
//       params,
//       headers: token ? {Authorization: `Bearer ${token}`} : {},
//     });
//     return response.data;
//   } catch (error) {
//     console.log('Get Api error', error);
//     throw error;
//   }
// };
// export const post = async (endpoint, data = {}, token = '') => {
//   try {
//     const response = await axios.post(`${BASE_URL}${endpoint}`, data, {
//       headers: token ? {Authorization: 'Bearer ${token}'} : {},
//     });
//     return response.data;
//   } catch (error) {
//     console.log('Post API error:', error?.response?.data || error.message);
//     throw error;
//   }
// };

import axios from 'axios';

const BASE_URL = 'http://15.206.16.230:8084/api/v1/user/';

// export const get = async (endpoint, data = {}, token = '') => {
//   try {
//     const response = await axios.get(`${BASE_URL}${endpoint}`, {
//       headers: token ? {Authorization: `${token}`} : {},
//       data
//     });
//     console.log("response::",response.data)
//     return response.data;
//   } catch (error) {
//     console.log('Get API error:', error?.response?.data || error.message);
//     throw error;
//   }
// };
export const get = async (endpoint, params = {}, token = '') => {
  try {
    console.log('token::');
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: token ? {Authorization: `${token}`} : {},
      params,
    });
    console.log('response::', response);
    return response?.data;
  } catch (error) {
    console.log('Get API error:', error);
    throw error;
  }
};

export const post = async (endpoint, data = {}, token = '') => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, data, {
      headers: token ? {Authorization: `${token}`} : {},
    });
    return response.data;
  } catch (error) {
    console.log('Post API error:', error?.response?.data || error.message);
    throw error;
  }
};

export const put = async (endpoint, data = {}, token = '') => {
  try {
    const response = await axios.put(`${BASE_URL}${endpoint}`, data, {
      headers: token ? {Authorization: `${token}`} : {},
    });
    return response.data;
  } catch (error) {
    console.log('PUT Api error', error?.response?.data || error.message);
    throw error;
  }
};
