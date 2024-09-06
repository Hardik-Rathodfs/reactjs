import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Counter() {
    const value = useSelector((h)=>h)
    const dispatch = useDispatch()
    const handleInc = ()=>{
        dispatch({type : "INCREASE",payload : 10})
    }
    const handleDec = ()=>{
        dispatch({type : "DECREASE" , payload : 10})
    }
  return (
    <>
      <h1>Counter1 : {value.count1}</h1>
      <button onClick={handleInc}>inc</button>
      <button onClick={handleDec}disabled={value.count1==10}>DEC</button>
    </>
  )
}

export default Counter