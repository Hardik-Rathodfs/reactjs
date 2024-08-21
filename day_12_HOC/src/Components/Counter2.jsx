import React from 'react'
import HOC from './HOC'

function Counter2({count,INC,DEC}) {
  return (
    <div>
        <button onClick={INC}>+</button>
        <button onClick={DEC}>-</button>
    </div>
  )
}

export default HOC(Counter2)