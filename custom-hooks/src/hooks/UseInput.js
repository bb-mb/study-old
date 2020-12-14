import { useState } from "react"

const useInput = () => {
  console.log('UseInput 리렌더링..')
  const [value, setValue] = useState("")
  const [valid, setValid] = useState(false)
  const handleInput = (e) => {
    const text = e.target.value
    setValue(text)
    if(text.length > 6) setValid(true)
    else setValid(false)
  }

  return [value, handleInput, valid]
}

export default useInput
