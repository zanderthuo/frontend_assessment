import { createSlice } from '@reduxjs/toolkit';
import { login } from '../actions/authActions';

const initialState = {
    user: {},
    token: null,
    loading: false,
    success: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.user = action.payload.username;
                localStorage.setItem('token', JSON.stringify(action.payload.token));
                localStorage.setItem('username', JSON.stringify(action.payload.username));
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.user = {};
                state.token = null;
                state.error = action.error.message;
            })
    },
});

export default authSlice.reducer;