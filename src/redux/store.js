import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './slices/authSlice';
import applicationSliceReducer from './slices/applicationSlice';
import sectorsSliceReducer from './slices/sectorsSlice';

export const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        application: applicationSliceReducer,
        sectors: sectorsSliceReducer
    },
});

export default store;