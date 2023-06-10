import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { toast } from 'react-toastify'
import instance from 'redux/axios/axios'

const initialState = {
  userlistData: {}
}

export const createComment = createAsyncThunk('comments/create', async (params, { rejectWithValue }) => {
  try {
    return await instance.post('comments', params)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})



export const commentList = createAsyncThunk('users/list', async (params, { rejectWithValue }) => {
  try {
    return await instance.get(`users`)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})




const commentSlice = createSlice({
  name: 'comment',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [commentList.pending]: (state,) => {
      state.loading = false
      state.commentlistData = {}
    },
    [commentList.fulfilled]: (state, action) => {
      state.loading = false
      state.commentlistData = action.payload

    }, [commentList.rejected]: (state,) => {
      state.loading = false
      state.commentList = {}
    },
  }
})

export default commentSlice.reducer
