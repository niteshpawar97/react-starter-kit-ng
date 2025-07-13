import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import themeReducer from './slices/themeSlice';

// Read from localStorage
const savedUser = JSON.parse(localStorage.getItem('user'));
const savedTheme = localStorage.getItem('theme') || 'light';

const preloadedState = {
  auth: {
    isLoggedIn: !!savedUser,
    user: savedUser || null,
  },
  theme: {
    mode: savedTheme,
  },
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
  preloadedState, // ✅ restores state on hard refresh
});

export default store;
