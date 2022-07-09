import { configureStore } from '@reduxjs/toolkit';

import characterReducer from './slice/characterSlice';

const store = configureStore({
  reducer: {
    character: characterReducer,
  },
});

export default store;
