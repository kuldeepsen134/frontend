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



// export const postListById = createAsyncThunk('posts/:id', async (id, { rejectWithValue }) => {
//   try {
//     return await instance.get(`users/${id}`,)
//   } catch (error) {
//     return rejectWithValue(error.responce)
//   }
// })


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
  }
})

export default postSlice.reducer
