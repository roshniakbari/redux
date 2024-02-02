import logo from './logo.svg';
import './App.css';
import { decrement,demoapp,increment } from './app/reducer/counterSlice';
import Home from './Home';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.counter.value);
  const name = useSelector((state) => state.counter.name);
  const email = useSelector((state) => state.counter.email);

  const dispatch = useDispatch()

  return (
    <div className="App">
      <h2>COUNTER:{count}</h2>
      <h2>NAME:{name}</h2>
      <h2>EMAIL:{email}</h2>
      <Home></Home>
    
      {/* <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(demoapp())}>increment by 5</button> */}

    </div>
  );
}
export default App;