import React, { useState } from 'react'

export const Counter = () => {
 
    const [count,setCount]=useState(0)

    
    function Add()
    {
        setCount(count+1)        
    }
    function Minus()
    {
        setCount(count-1)
    }

    return (

    <div>
        <h1>{count}</h1>
        <button onClick={Add}>+</button>
        <button disabled={count == 0} onClick={Minus}>-</button>
    </div>
  )
}
