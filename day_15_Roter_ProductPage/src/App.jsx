import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Men from './Pages/Men'
import Women from './Pages/Women'
import MainRoute from './Router/MainRoute'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
       <Navbar/>
      <MainRoute/>
    </>
  )
}

export default App