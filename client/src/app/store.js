import { configureStore } from '@reduxjs/toolkit';


import loginSliceReducer from '../features/loginSlice';

export const store = configureStore({
  reducer: {
    loginStatus:loginSliceReducer,
  },
})
