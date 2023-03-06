import { configureStore } from '@reduxjs/toolkit'
import infoSlice from './component/infoSlice'
export const store = configureStore({
  reducer: {
    info:infoSlice
  },
})