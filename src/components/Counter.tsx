
import { useAppSelector, useAppDispatch } from '../store';
import { decrement, increment, incrementAsync } from '../store/counterSlice'

const Counter = () => {
  const dispatch = useAppDispatch()
  const counter = useAppSelector(state => state.counter);
  return (
    <>
      <h1>Counter Redux Toolkit</h1>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <p>{counter.value}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementAsync(50))}>Increment 50</button>
      </div>
    </>
  )
}
export default Counter;