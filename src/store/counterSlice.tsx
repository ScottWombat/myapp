import { createSlice,PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount: number,{dispatch})=> {
    
    await new Promise((resolve) => setTimeout(() => resolve(dispatch(incrementByAmount(amount))),1000),)
   
  },
  
);

interface CounterState {
    value: number;
    status: string;
}
const initialState : CounterState = {
    value: 0,
    status: "idle"
};
const counterSlice = createSlice({
      name: 'counter',
      initialState,
      reducers: {
        increment: (state: CounterState) => { // Explicitly type the state parameter
          state.value += 1;
        },
        decrement: (state: CounterState) =>{
            state.value -= 1;
        },
        incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
      },
      extraReducers: (builder) => {
        builder
          .addCase(incrementAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(incrementAsync.fulfilled, (state) => {
            state.status = 'succeeded';
          })
          .addCase(incrementAsync.rejected, (state) => {
            state.status = 'failed';
          });
      }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;


export const selectCount = (state: CounterState) => state.value;

export default counterSlice.reducer;