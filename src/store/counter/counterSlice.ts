import { PayloadAction, createSlice } from '@reduxjs/toolkit'

 
interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState:CounterState = {
    count:5,
    isReady: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { // acciones que mandamos a llamar para que cambiern el valor del estado
    initCounterState(state, action:PayloadAction<number>){
      if (state.isReady) return // si ya esta listo no hagas nada
      state.count = action.payload // si no esta listo cambia el valor
      state.isReady = true // cambia el estado a listo
    },

    addOne(state){
      state.count++
    },

    substractOne(state){
      if(state.count === 0) return
      state.count--
    },

    resetCounter(state, action:PayloadAction<number>){
      if(action.payload < 0) action.payload = 0
      state.count = action.payload
    }
  }
});

export const {addOne, substractOne, resetCounter, initCounterState} = counterSlice.actions

export default counterSlice.reducer