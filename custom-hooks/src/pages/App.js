import React from 'react'
import UseInput from '../hooks/UseInput'

function App() {
  console.log('App 리렌더링..')
  const [value, handleInput, valid] = UseInput()
  return (
    <div className="App">
      <input value={value} onChange={handleInput}></input>
      <p>{valid ? "유효한 텍스트입니다." : "6글자 이상 하셔야 합니다."}</p>
    </div>
  );
}

export default App;
