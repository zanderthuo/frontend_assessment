import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from '../../api/api'


// Get All Sectors
export const getAllSectors = createAsyncThunk('sectors/getAllSectors', async() => {
    try {
        const response = await axiosInstance.get(`/v1/sectors/get-sectors`);
        return response.data;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error fetching sectors');
    }
});