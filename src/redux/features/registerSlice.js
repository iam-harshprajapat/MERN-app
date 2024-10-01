import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './registerAction';

const initialState = {
    success: false,
    loading: false,
    error: null
}

const registerSlice = createSlice({
    name: 'register',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(registerUser.fulfilled, (state) => {
            state.success = true;
            state.error = null;
            state.loading = false;
        })
        builder.addCase(registerUser.rejected, (state, { payload }) => {
            state.error = 'Unable to register';
            state.success = false;
            state.loading = false;
            console.log(payload);
        })
    }
})

export default registerSlice.reducer;