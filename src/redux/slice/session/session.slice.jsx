import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUserLoggedIn: localStorage.getItem(`${process.env.REACT_APP_ACCESS_TOKEN}`) ? true : false,
  // token: {},
  loggedInUser: {},
}

const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState,
  reducers: {
    setAuth: (state, action) => {
      localStorage.setItem(`${process.env.REACT_APP_ACCESS_TOKEN}`, action?.payload)
      state.isUserLoggedIn = true
    },
    logoutUser: () => {
      localStorage.clear()
    }
  },
})

export const { setAuth, logoutUser } = sessionSlice.actions;

export default sessionSlice.reducer
