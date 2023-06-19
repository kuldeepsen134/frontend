import { configureStore } from '@reduxjs/toolkit'

import sessionSlice from './slice/session/session.slice'
import userSlice from './slice/session/user.slice'
import postSlice from './slice/session/post.slice'
import commentSlice from './slice/session/comment.slice'
import followerSlice from './slice/session/follower.slice'
import profileSlice from './slice/session/profile.slice'

const store = configureStore({
  reducer: {
    session: sessionSlice,
    user: userSlice,
    post: postSlice,
    comment: commentSlice,
    follower:followerSlice,
    profile:profileSlice

  }
})
export default store