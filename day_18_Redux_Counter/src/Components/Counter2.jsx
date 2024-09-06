import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Counter2() {
    const value = useSelector((h)=>h)
    const dispatch = useDispatch()
    const handleInc = ()=>{
        dispatch({type : "INCRE",payload : 50})
    }
    const handleDec = ()=>{
        dispatch({type : "DECRE" , payload : 50})
    }
  return (
    <>
      <h1>Counter2 : {value.count2}</h1>
      <button onClick={handleInc}>inc</button>
      <button onClick={handleDec}disabled={value.count2==50}>DEC</button>
    </>
  )
}

export default Counter2