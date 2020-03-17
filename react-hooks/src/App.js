import React, {useState, useEffect} from 'react';
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const [arr1, setArr1] = useState([])

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log('use effect')
  })
  useEffect(() => {
    console.log(arr1)
  })

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>up</button>
      <button onClick={() => setCount(count - 1)}>down</button>
      <button onClick={() => setArr1([...arr1, count])}>arr1</button>
    </div>
  );
}

export default App;
