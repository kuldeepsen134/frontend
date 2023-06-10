import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { toast } from 'react-toastify'
import instance from 'redux/axios/axios'

const initialState = {
  followerlistData: {},
  alert: ''
}

export const joiFollower = createAsyncThunk('join', async (params, { rejectWithValue }) => {
  try {
    return await instance.post('followers', params)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})


export const followerList = createAsyncThunk('followers', async (params, { rejectWithValue }) => {
  try {
    return await instance.get(`posts`)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})



const followerSlice = createSlice({
  name: 'follower',
  initialState: initialState,
  reducers: {},

  extraReducers: {

    [joiFollower.pending]: (state,) => {
      state.loading = false
      state.userlistData = {}
    },
    [joiFollower.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.userlistData = action.payload

    }, [joiFollower.rejected]: (state,) => {
      state.loading = true
      state.userList = {}
    },



   
  }
})

export default followerSlice.reducer
