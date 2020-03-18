import React, {useState, useEffect} from 'react';
import Count from './Count'
import "./App.css"

export const countContext = React.createContext()

function App() {
  const [count, setCount] = useState(0)
  const [arr1, setArr1] = useState([])

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log('use effect')
    return () => {
      console.log('clean up')
    }
  }, [count])
  useEffect(() => {
    console.log(arr1)
  }, [arr1])

  return (
    <countContext.Provider className="App" value={{count}}>
      <Count />
      <button onClick={() => setCount(count + 1)}>up</button>
      <button onClick={() => setCount(count - 1)}>down</button>
      <button onClick={() => setArr1([...arr1, count])}>arr1</button>
    </countContext.Provider>
  );
}

export default App;
