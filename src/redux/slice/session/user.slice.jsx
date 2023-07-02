import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import instance from 'redux/axios/axios'

const initialState = {
  userlistData: {},
  userData:{}
}

export const createUser = createAsyncThunk('user/create', async (params, { rejectWithValue }) => {
  try {
    return await instance.post('users', params)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})

// export const googleSigIn = createAsyncThunk('google/registger', async (params, { rejectWithValue }) => {
//   try {
//     return await instance.get('google')
//   } catch (error) {
//     return rejectWithValue(error.responce)
//   }
// })


export const userList = createAsyncThunk('users/list', async (params, { rejectWithValue }) => {
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


export const me = createAsyncThunk('/me', async (id, { rejectWithValue }) => {
  try {
    return await instance.get(`me`,)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})


export const userUpdate = createAsyncThunk('user/update', async (params,) => {

  try {
    return await instance.patch(`users/${params._id}`, params)
  } catch (error) {
    return (error.responce)
  }
})

export const userTrush = createAsyncThunk('user/trush', async (id, { rejectWithValue }) => {
  try {
    return await instance.delete(`users/${id}`)
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
      // console.log(action.payload);
      state.loading = false
      state.userlistData = action.payload

    }, [userList.rejected]: (state,) => {
      state.loading = false
      state.userList = {}
    },


    [userUpdate.pending]: (state,) => {
      state.loading = false
      state.userlistData = {}
    },
    [userUpdate.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.loading = false
      state.userlistData = action.payload
      toast.success(action.payload.message);

    }, [userUpdate.rejected]: (state,) => {
      state.loading = false
      state.userList = {}
    },


    [userListById.pending]: (state,) => {
      state.loading = false
      state.userlistData = {}
    },
    [userListById.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.loading = false
      state.userlistData = action.payload

    }, [userListById.rejected]: (state,) => {
      state.loading = false
      state.userList = {}
    },

    [me.pending]: (state,) => {
      state.loading = false
      state.userlistData = {}
    },
    [me.fulfilled]: (state, action) => {
      state.loading = false
      state.userData = action.payload

    }, [me.rejected]: (state,) => {
      state.loading = false
      state.userList = {}
    },

    //Delete user
    [userTrush.pending]: (state,) => {
      state.loading = false
      state.userlistData = {}
    },
    [userTrush.fulfilled]: (state, action) => {
      state.loading = false
      state.userlistData = action.payload
      toast.success(action.payload.message)

    }, [userTrush.rejected]: (state,) => {
      state.loading = false
      state.userList = {}
    },
  }
})

export default userSlice.reducer
