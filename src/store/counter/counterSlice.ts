import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  isReady: boolean;
}

const initialState: CounterState = {
  value: 5,
  isReady: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCount(state, action: PayloadAction<number>) {
      if (state.isReady) return;
      state.value = action.payload;
      state.isReady = true;
    },

    addOne(state) {
      state.value++;
    },
    substractOne(state) {
      if (state.value === 0) return;
      state.value--;
    },
    resetCount(state, action: PayloadAction<number>) {
      if (action.payload < 0) action.payload = 0;
      state.value = action.payload;
    },
  },
});

export const { initCount, addOne, substractOne, resetCount } =
  counterSlice.actions;

export default counterSlice.reducer;
