import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
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

export const getFollowerList = createAsyncThunk('get-followers', async (params, { rejectWithValue }) => {
  try {
    return await instance.get(`get-followers`)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})

export const getFollower = createAsyncThunk('get-follower', async (params, { rejectWithValue }) => {
  try {
    return await instance.get(`followers/${params}`)
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
      toast.success(action.payload.message);

    }, [joiFollower.rejected]: (state,) => {
      state.loading = true
      state.userList = {}
    },




    [getFollowerList.pending]: (state,) => {
      state.loading = false
      state.followerlistData = {}
    },
    [getFollowerList.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.followerlistData = action.payload
      toast.success(action.payload.message);

    }, [getFollowerList.rejected]: (state,) => {
      state.loading = true
      state.followerlistData = {}
    },


    [getFollower.pending]: (state,) => {
      state.loading = false
      state.follower = {}
    },
    [getFollower.fulfilled]: (state, action) => {
      state.follower = action.payload
      toast.success(action.payload.message);

    }, [getFollower.rejected]: (state,) => {
      state.loading = true
      state.follower = {}
    },

  }
})

export default followerSlice.reducer
