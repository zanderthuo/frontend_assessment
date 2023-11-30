import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from '../../api/api'

//Add Application
export const createApplication = createAsyncThunk(
    "application/createApplication",
    async(applicationData) => {
        try {
            const response = await axiosInstance.post(
                `/v1/user/applications`,
                applicationData
            );
            console.log("new Application", response.data);
            return response.data;
        } catch (error) {
            throw new Error("Error creating application", error);
        }
    }
);

// Get All Applications for a User

export const getAllApplications = createAsyncThunk(
    "application/getApplications",
    async() => {
        try {
            const response = await axiosInstance.get(
                `/v1/user/applications`
            );
            console.log("datanenje>>", response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching applications:', error)
        }
    }
);

export const getOneApplicationById = createAsyncThunk(
    "application/getOneApplicationById",
    async({ applicationId }) => {
        try {
            const response = await axiosInstance.get(
                `/v1/user/applications/${applicationId}`
            );
            console.log('one app', response.data)
            return response.data;
        } catch (error) {
            throw Error(error);
        }
    }
);

// Update application
export const updateApplication = createAsyncThunk(
    "application/updateApplication",
    async({ applicationId, updatedData }) => {
        try {
            const response = await axiosInstance.put(
                `/v1/user/applications/${applicationId}`,
                updatedData
            );
            console.log('data uodate', response)
            return response.data;
        } catch (error) {
            throw Error(error);
        }
    }
);