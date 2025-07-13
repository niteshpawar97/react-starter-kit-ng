import { createSlice } from '@reduxjs/toolkit';

const storedUser = JSON.parse(localStorage.getItem('user'));

const initialState = {
  isLoggedIn: !!storedUser,
  user: storedUser || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload || { email: 'admin@example.com' };

      // ✅ Persist in localStorage
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;

      // ✅ Clear from localStorage
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
