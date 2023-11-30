import { createSlice } from '@reduxjs/toolkit';
import {
    createApplication,
    getAllApplications,
    getOneApplicationById,
    updateApplication
} from '../actions/applicationActions';

const initialState = {
    application: {},
    applications: [],
    loading: false,
    success: false,
    error: null,
};

const applicationSlice = createSlice({
    name: 'application',
    initialState,
    extraReducers: (builder) => {
        builder
        // create application
            .addCase(createApplication.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(createApplication.fulfilled, (state, action) => {
                state.loading = false;
                state.application = action.payload;
                state.success = true;
                state.error = null;
            })
            .addCase(createApplication.rejected, (state, action) => {
                state.loading = false;
                state.application = null;
                state.success = false;
                state.error = action.error.message;
            })
            // get all applications
            .addCase(getAllApplications.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(getAllApplications.fulfilled, (state, action) => {
                state.loading = false;
                state.applications = action.payload
                console.log('app', state.payload)
                state.success = true;
                state.error = null;
            })
            .addCase(getAllApplications.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.error.message;
            })
            .addCase(updateApplication.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateApplication.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.updatedApplication = action.payload;
            })
            .addCase(updateApplication.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getOneApplicationById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getOneApplicationById.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.application = action.payload;
            })
            .addCase(getOneApplicationById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default applicationSlice.reducer