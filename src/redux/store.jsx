import { configureStore } from '@reduxjs/toolkit'

import sessionSlice from './slice/session/session.slice'
import userSlice from './slice/session/user.slice'

const store = configureStore({
  reducer: {
    session: sessionSlice,
    user: userSlice
  }
})
export default store