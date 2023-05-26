import { configureStore } from '@reduxjs/toolkit'

import sessionSlice from './slice/session/session.slice'

const store = configureStore({
  reducer: {
    session: sessionSlice
  }
})
export default store