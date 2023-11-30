import { createSlice } from '@reduxjs/toolkit';
import {
    getAllSectors,
} from '../actions/sectorsActions';

const initialState = {
    sectors: [],
    loading: false,
    success: false,
    error: null,
};

const sectorsSlice = createSlice({
    name: 'sectors',
    initialState,
    extraReducers: (builder) => {
        builder
        // get All Sectors
            .addCase(getAllSectors.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(getAllSectors.fulfilled, (state, action) => {
                state.loading = false;
                state.sectors = action.payload
                console.log('sectors in slice', action.payload)
                state.success = true;
                state.error = null;
            })
            .addCase(getAllSectors.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.error.message;
            })
    }
})

export default sectorsSlice.reducer