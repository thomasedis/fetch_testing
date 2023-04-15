import axios from 'axios';
import Toast from 'react-native-toast-message';
import show = Toast.show;

const apiClient = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
});

try {
  apiClient.interceptors.response.use(
    (response) => {
      if (response.status === 404) {
        show({
          type: 'error',
          text1: 'Đã có lỗi xảy ra',
          text2: 'Request not found',
        });
        throw new Error('Request not found');
      }
      if (response.status === 400) {
        show({
          type: 'error',
          text1: 'Đã có lỗi xảy ra',
          text2: response?.data?.message ?? '',
        });
        return Promise.reject(response?.data?.message);
      }
      if (response?.status === 500) {
        show({
          type: 'error',
          text1: 'Đã có lỗi xảy ra',
          text2: response?.data?.message ?? '',
        });
        return Promise.reject(response?.data?.message);
      }
      return response;
    },
    (error) => {
      if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
      }
      if (error?.request) {
        show({
          type: 'error',
          text1: 'Đã có lỗi xảy ra',
          text2: 'Bad Gateway',
        });
        throw new Error('Bad Gateway');
      }
      return Promise.reject(error.message);
    },
  );
} catch (error) {
  console.log(error);
}

function handleError(error: any) {
  if (error) {
    setTimeout(() => {
      show({
        type: 'error',
        text1: 'Đã có lỗi xảy ra',
        text2: error ?? '',
      });
    }, 200);
  } else {
    setTimeout(() => {
      show({
        type: 'error',
        text1: 'Đã có lỗi xảy ra',
        text2: error ?? '',
      });
    }, 200);
  }
}
function buildQueryString(filter: any) {
  const qs: string[] = [];
  Object.keys(filter).forEach((key) => {
    if (!['', null, undefined].includes(filter[key])) {
      qs.push(`${key}=${filter[key]}`);
    }
  });
  return `?${qs.join('&')}`;
}

export { apiClient, handleError, buildQueryString };
