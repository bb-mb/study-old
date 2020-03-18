import React, {useContext} from 'react'
import { countContext } from './App'

const Count2 = () => {
    const { count } = useContext(countContext)
    return <h1>{count}</h1>
}

export default Count2