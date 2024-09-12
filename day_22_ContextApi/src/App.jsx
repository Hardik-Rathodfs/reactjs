import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Mycontext } from './Components/ContextApI.jsx'


function App() {
   
    const data = useContext(Mycontext)
    console.log(data)

  return (
    <>
      <h1>{data.state.count}</h1>
      <button onClick={()=>data.dispatch({type : "INC"})}>+</button>
      <button disabled={data.state == 0} onClick={()=>data.dispatch({type : "DEC"})}>-</button>
    </>
  )
}

export default App