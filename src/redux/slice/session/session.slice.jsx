import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import instance from 'redux/axios/axios'

const initialState = {
  loading: false,
  loggedInUser: {},
  isUserLoggedIn: document.cookie ? true : false
}

export const login = createAsyncThunk('account/login', async (params, { rejectWithValue }) => {
  try {
    return await instance.post('login', params)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})

export const forgotPassword = createAsyncThunk('account/forgotPassword', async (params, { rejectWithValue }) => {
  try {
    return await instance.post('forgotPassword', params)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})

export const resetPassword = createAsyncThunk('account/resetPassword', async (params, { rejectWithValue }) => {
  try {
    return await instance.post('forgotPasswordVerify', params)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})

export const register = createAsyncThunk('account/register', async (params, { rejectWithValue }) => {
  try {
    return await instance.post('register', params)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})

export const logOut = createAsyncThunk('account/logOut', async (params, { rejectWithValue }) => {
  try {
    return await instance.get('logout', params)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})



const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state,) => {
      state.loading = true
      state.isUserLoggedIn = false
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false
      state.isUserLoggedIn = true
      state.loggedInUser = action.payload
      toast.success(action.payload.message);

    }, [login.rejected]: (state,) => {
      state.loading = false
      state.isUserLoggedIn = false
    },

    [forgotPassword.pending]: (state,) => {
      state.loading = false
    },
    [forgotPassword.fulfilled]: (state, action) => {
      state.loading = false
      state.isUserLoggedIn = true
      toast.success(action.payload.message);
    },
    [forgotPassword.rejected]: (state,) => {
      state.loading = false
      state.isUserLoggedIn = false

    },

    [resetPassword.pending]: (state,) => {
      state.loading = false
    },
    [resetPassword.fulfilled]: (state, action) => {

      state.loading = false
      toast.success(action.payload.message);


    },
    [resetPassword.rejected]: (state,) => {
      state.loading = false
    },

    [register.pending]: (state,) => {
      state.loading = false
      state.isUserLoggedIn = false
    },

    [register.fulfilled]: (state, action) => {
      state.loading = false
      state.isUserLoggedIn = true
      toast.success(action.payload.message);
    },

    [register.rejected]: (state,) => {
      state.loading = false
      state.isUserLoggedIn = false

    },


    [logOut.pending]: (state,) => {
      state.loading = false
    },

    [logOut.fulfilled]: (state, action) => {
      state.loading = false,
        state.isUserLoggedIn = false
      toast.success(action.payload.message);
      localStorage.clear()
    },

    [logOut.rejected]: (state,) => {
      state.loading = false
    },
  }
})

export default sessionSlice.reducer
