import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  goals: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

const goalSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    // builder.addCase();
  },
});

export default goalSlice.reducer;
export const { reset } = goalSlice.actions;
