import { increment, decrement, demoapp } from "./app/reducer/counterSlice"
import { useDispatch, useSelector } from 'react-redux';


function Home() {
    const dispatch = useDispatch()
    return (
        <>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(demoapp())}>increment by 5</button>
        </>
    )
}
export default Home;