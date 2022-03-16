import { configureStore } from '@reduxjs/toolkit';

import themeReducer from 'redux/slices/theme';

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
  devTools: process.env.MODE !== 'production',
});
