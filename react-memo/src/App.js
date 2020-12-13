import React, { useState, useCallback } from "react"
import Parrent from "./Components/Parrent"
import Child from "./Components/Child"

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  const getCube = useCallback((n) => n * n * n, [])

  return (
    <div className="App">
      <button onClick={() => setCount1(count1 + 1)}>버튼1</button>
      <button onClick={() => setCount2(count2 + 1)}>버튼2</button>
      <button onClick={() => setCount3(count3 + 1)}>버튼3</button>
      <Parrent>
        <Child id={1} count={count1} getCube={getCube} />
        <Child id={2} count={count2} getCube={getCube} />
      </Parrent>
    </div>
  )
}

export default App
