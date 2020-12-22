import React, {useState, useEffect, useRef} from 'react'


function App() {
  const [stateNum, setState] = useState(0)

  const obj = {num: 0}
  let num = 0
  const refNum = useRef(0)

  const onClickFunc = () => {
    num += 1;
    obj.num += 1;
    refNum.current += 1
    console.log(num, obj.num, refNum.current)
    if(refNum.current % 5 === 0) setState(stateNum + 1)
  }

  return (
    <div className="App">
      <p>
        stateNum : {stateNum}
      </p>
      <p>
        obj.num : {obj.num}
      </p>
      <p>
        local num : {num}
      </p>
      <p>
        useRef num : {refNum.current}
      </p>
      <button onClick={onClickFunc}>클릭</button>
    </div>
  );
}

export default App;
