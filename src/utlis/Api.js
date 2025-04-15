// import axios from 'axios';
// import store from '../store/Store';

// const BASE_URL = 'http://15.206.16.230:8084/api/v1/user/';

// export const get = async (endpoint, params = {}) => {
//   try {
//    const token =  store.getState().auth.user.token
//     const response = await axios.get(`${BASE_URL}${endpoint}`, {
//       headers: token ? {Authorization: `${token}`} : {},
//       params,
//     });
//     return response?.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const post = async (endpoint, data = {}) => {
//   try {
//     console.log('data::', data);
//     const token =  store.getState().auth.user.token
//     const response = await axios.post(`${BASE_URL}${endpoint}`, data, {
//       headers: token ? {Authorization: `${token}`} : {},
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const put = async (endpoint, data = {}, token = '') => {
//   try {
//     const response = await axios.put(`${BASE_URL}${endpoint}`, data, {
//       headers: token ? {Authorization: `${token}`} : {},
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

import axios from 'axios';
import store from '../store/Store';

const BASE_URL = 'http://13.201.93.144:8084/api/v1/user/';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    const token = store.getState().auth?.user?.token;
    console.log('token at the interceptors::', token);
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      console.log('Unauthorized! Redirecting to login...');
    }
    return Promise.reject(error);
  },
);

export const get = async (endpoint, params = {}) => {
  try {
    const response = await api.get(endpoint, {params});
    return response?.data;
  } catch (error) {
    console.log(`error of get ${endpoint}============` , error)
    throw error;
  }
};

export const post = async (endpoint, data = {}) => {
  try {
    console.log('data::', data);
    const response = await api.post(endpoint, data);
    console.log('response--- post', response);

    return response?.data;
  } catch (error) {
    // console.log('===========================' , JSON.stringify(error.response))
    console.log(`error of get ${endpoint}============` , error)

    throw error.response.data;
  }
};

export const put = async (endpoint, data = {}) => {
  try {
    const response = await api.put(endpoint, data);
    return response?.data;
  } catch (error) {
    console.log(`error of put ${endpoint}============` , error)

    throw error;
  }
};
