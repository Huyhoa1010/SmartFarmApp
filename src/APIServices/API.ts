import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.147:6868/api_App_Mobi', // Đổi thành URL của backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Login
export const login = async (username: string, password: string) => {
  try {
    const response = await api.post('/login', {username, password});
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

// Register
export const register = async (username: string, password: string) => {
  try {
    const response = await api.post('/register', {username, password});
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

// Forgot Password
export const forgotPassword = async (username: string) => {
  try {
    const response = await api.post('/forgot-password', {username});
    return response.data;
  } catch (error) {
    console.error('Error during password reset:', error);
    throw error;
  }
};

// Update Password
export const updatePassword = async (
  username: string,
  password_old: string,
  password_new: string,
) => {
  try {
    const response = await api.patch('/update-password', {
      username,
      password_old,
      password_new,
    });
    return response.data;
  } catch (error) {
    console.error('Error updating password:', error);
    throw error;
  }
};
