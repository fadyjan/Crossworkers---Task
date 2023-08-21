import { configureStore } from '@reduxjs/toolkit'
import TasksSlice from './ReduxSlices/DataSlice'

export const store = configureStore({
  reducer: {
    TasksSlice :TasksSlice,
  },
})