import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  name:"Roshni",
  email:"roshni@gmail.com"
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    demoapp:(state)=>{
        state.value += 5
    }
  },
})
export const { increment, decrement, demoapp } = counterSlice.actions

export default counterSlice.reducer