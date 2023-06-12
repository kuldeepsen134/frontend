import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { toast } from 'react-toastify'
import instance from 'redux/axios/axios'

const initialState = {
  postlistData: {},
  alert: ''
}

export const createPost = createAsyncThunk('posts', async (params, { rejectWithValue }) => {
  try {
    return await instance.post('posts', params)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})


export const postList = createAsyncThunk('posts', async (params, { rejectWithValue }) => {
  try {
    return await instance.get(`posts`)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})



export const postListById = createAsyncThunk('posts/:id', async (id, { rejectWithValue }) => {
  try {
    return await instance.get(`posts/${id}`,)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})


const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [createPost.pending]: (state,) => {
      state.loading = false
      state.userlistData = {}
    },
    [createPost.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.userlistData = action.payload

    }, [createPost.rejected]: (state,) => {
      state.loading = true
      state.userList = {}
    },



    [postList.pending]: (state,) => {
      state.loading = false
      state.userlistData = {}
    },
    [postList.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.loading = false
      state.userlistData = action.payload

    }, [postList.rejected]: (state,) => {
      state.loading = false
      state.userList = {}
    },



    [postListById.pending]: (state,) => {
      state.loading = false
      state.postlistData = {}
    },
    [postListById.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.loading = false
      state.postlistData = action.payload

    }, [postListById.rejected]: (state,) => {
      state.loading = false
      state.postlistData = {}
    },



  }
})

export default postSlice.reducer
