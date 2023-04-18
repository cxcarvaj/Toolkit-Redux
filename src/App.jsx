import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {
  increment,
  decrement,
  incrementByAmount
} from './store/slices/counter';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
      </div>
    </div>
  );
}

export default App;
