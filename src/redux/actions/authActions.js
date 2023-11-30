import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/api';

export const login = createAsyncThunk('auth/login', async(loginData) => {
    try {
        const response = await axiosInstance.post(`/v1/auth/login`, loginData);
        const userData = response.data;
        console.log('data>>>', userData)
        return userData;
    } catch (error) {
        throw new Error('Error logging in');
    }
});

export const logout = () => {
    localStorage.removeItem('token');
};

export const registerUser = createAsyncThunk('auth/register', async(registerData) => {
    try {
        const response = await axiosInstance.post(`/v1/auth/register`, registerData);
        const { data } = response.data;
        console.log('reg data>>>>', response.data)
        return { registerData: data }; // Returning relevant data from the response
    } catch (error) {
        throw error; // Rethrow the error to be handled by Redux
    }
});