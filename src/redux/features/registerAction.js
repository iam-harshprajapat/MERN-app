import { createAsyncThunk } from "@reduxjs/toolkit";
import API from '../../services/API';

export const registerUser = createAsyncThunk(
    'register',
    async ({ name, email, mobile, password }, { rejectWithValue }) => {
        try {
            const payload = {};
            payload.name = name;
            payload.email = email;
            payload.mobile = mobile;
            payload.password = password;
            const response = await API.post('/api/register', payload);
            return response.data;
        }
        catch (error) {
            if (error.response) {
                return rejectWithValue(error.response.data.message)
            }
            return rejectWithValue(error);
        }
    }
)
