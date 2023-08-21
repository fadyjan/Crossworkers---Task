import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from './ReduxSlices/DataSlice'

export const store = configureStore({
  reducer: {
    moviesSlice :moviesSlice,
  },
})