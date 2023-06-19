import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import instance from 'redux/axios/axios'

const initialState = {
  userlistData: {}
}

export const createProfile = createAsyncThunk('user/profile', async (params, { rejectWithValue }) => {
  try {
    return await instance.post('profiles', params)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})



export const userList = createAsyncThunk('users/profile', async (params, { rejectWithValue }) => {
  try {
    return await instance.get(`profiles`)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})


const profileSlice = createSlice({
  name: 'Profile',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [userList.pending]: (state,) => {
      state.loading = false
      state.profilelistData = {}
    },
    [userList.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.loading = false
      state.profilelistData = action.payload
      toast.success(action.payload.message);
      
    }, [userList.rejected]: (state,) => {
      state.loading = false
      state.userList = {}
    },
  }
})

export default profileSlice.reducer
