import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const handleIncrement=()=>{
    dispatch(increment())
  }
  const handleDecrement=()=>{
    dispatch(decrement())
  }
  return (
    <div className="flex flex-col h-screen justify-center items-center ">
      <h1 className="text-3xl font-mono  mb-5">Counter With redux</h1>
      <button onClick={handleIncrement} className="btn btn-success mb-3">Increment</button>
      <div>0</div>
      <button onClick={handleDecrement} className="btn mt-3 btn-error">Decrement</button>
    </div>
  );
}

export default App;
