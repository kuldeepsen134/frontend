import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { toast } from 'react-toastify'
import instance from 'redux/axios/axios'

const initialState = {
  userlistData: {}
}

export const createUser = createAsyncThunk('user/create', async (params, { rejectWithValue }) => {
  try {
    return await instance.post('users', params)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})

export const userList = createAsyncThunk('user/list', async (params, { rejectWithValue }) => {
  console.log('mdsfnj');
  try {
    return await instance.get(`users`)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})

export const userListById = createAsyncThunk('user/list/id', async (id, { rejectWithValue }) => {
  try {
    return await instance.get(`users/${id}`,)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})

export const userUpdate = createAsyncThunk('user/update', async (params, id, { rejectWithValue }) => {
  try {
    return await instance.put(`users/${id}`, params)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})

export const userTrush = createAsyncThunk('user/trush', async (id, { rejectWithValue }) => {
  try {
    return await instance.get(`users/${id}`)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [userList.pending]: (state,) => {
      state.loading = false
      state.userlistData = {}
    },
    [userList.fulfilled]: (state, action) => {
      state.loading = false
      state.userlistData = action.payload

    }, [userList.rejected]: (state,) => {
      state.loading = false
      state.userList = {}
    },
  }
})

export default userSlice.reducer
