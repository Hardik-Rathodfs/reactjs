import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Fullcounter from './components/Fullcounter'

function App() {
  const [state, setstate] = useState("This Example of")
  const[state1,setstate1]=useState("Counter using react")
  return (
 
      <div>
    <Counter hardik={state} name={state1}/>
    <Fullcounter/>
      </div>

  )
}

export default App
