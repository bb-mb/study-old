import React, {memo} from "react"
import isEqual from "react-fast-compare"


const Parrent = ({ children }) => {
  console.log('Parrent 리렌더링..')
  return (
    <div style={{ margin: 20, padding: 20, backgroundColor: "lavender" }}>
      {children}
    </div>
  )
}

export default memo(Parrent, isEqual)
