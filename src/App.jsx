function App() {
  return (
    <div className="flex flex-col h-screen justify-center items-center ">
      <h1 className="text-3xl font-mono  mb-5">Counter With redux</h1>
      <button className="btn btn-success mb-3">Increment</button>
      <div>0</div>
      <button className="btn mt-3 btn-error">Decrement</button>
    </div>
  );
}

export default App;
