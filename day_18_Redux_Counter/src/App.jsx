import { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import './App.css'
import Counter from './Components/Counter'
import Counter2 from './Components/Counter2'

function App() {

  const value=useSelector((s)=>s)
  const dispatch = useDispatch()



  return (
    <>
    <h1 style={{textDecoration:"underline"}}>Counter Examples</h1>
     <h1>Counter:{value.count}</h1>
     <button onClick={()=>dispatch({type:"DEP"})} >inc</button>
     <button onClick={()=>dispatch({type:"WIT"})} disabled={value.count==0}>dec</button>
     <Counter/>
     <Counter2/>
    </>
  )
}

export default App
