import React, { memo } from "react"

const Child = ({ id, count, getCube }) => {
  console.log(id + " 리렌더링...")
  return (
    <div>
      [ 카운터 {id} ] : {getCube(count)}
    </div>
  )
}

export default memo(Child)
