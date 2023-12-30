import { createSlice } from '@reduxjs/toolkit'


export interface ConfettiState {
  isOpen: boolean
}

const initialState: ConfettiState = {
  isOpen: false,
}

export const confettiSlice = createSlice({
  name: 'confetti',
  initialState,
  reducers: {
    open: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { open, close } = confettiSlice.actions

export default confettiSlice.reducer