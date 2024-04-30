import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Khởi tạo instance của axios với cấu hình ban đầu.
const api = axios.create({
  baseURL: 'http://localhost:6868/api_App_Mobi', // Đây là URL cơ sở của API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm interceptor để tự động chèn token vào header của các request cần xác thực
api.interceptors.request.use(
  async config => {
    // Lấy token từ AsyncStorage
    const token = await AsyncStorage.getItem('token');
    // Nếu có token, thêm vào header Authorization
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // Xử lý nếu có lỗi khi thiết lập config
    return Promise.reject(error);
  },
);

// API để đăng ký tài khoản
export const registerUser = async (username: string, password: string) => {
  const response = await axios.post(
    'https://9c5c-118-70-179-252.ngrok-free.app/api_App_Mobi/register',
    {
      username,
      password,
    },
  );
  return response.data;
};

// API để đăng nhập
export const loginUser = async (username: string, password: string) => {
  const response = await axios.post('http://localhost:3000/users', {
    username,
    password,
  });
  return response.data;
};

// API để thay đổi mật khẩu
export const changePassword = async (
  username: string,
  oldPassword: string,
  newPassword: string,
) => {
  const response = await axios.patch(
    'http://localhost:6868/api_App_Mobi/update-password',
    {
      username,
      password_old: oldPassword,
      password_new: newPassword,
    },
    {
      headers: {Authorization: 'Bearer YOUR_TOKEN_HERE'},
    },
  );
  return response.data;
};

// API để khôi phục mật khẩu quên
export const forgotPassword = async (username: string) => {
  const response = await axios.post(
    'http://localhost:6868/api_App_Mobi/forgot-password',
    {username},
  );
  return response.data;
};

// API để quét thông tin thiết bị (không yêu cầu body)
export const scanDevice = async () => {
  const response = await axios.get(
    'http://localhost:6868/api_App_Mobi/protected-route',
    {
      headers: {'Content-Type': 'application/json'},
    },
  );
  return response.data;
};

// API để lấy dữ liệu thiết bị
export const getDataDevice = async () => {
  const response = await axios.get(
    'http://localhost:6868/api_App_Mobi/call-data-device',
  );
  return response.data;
};

export default api;
