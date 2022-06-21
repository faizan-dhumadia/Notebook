import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import noteSlice from './noteSlice'

export default configureStore({
    reducer: {
        user: userSlice,
        noteSlice,
    },
})