import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Components/Signup'
import Login from '../Components/Login'

const MainRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>

    </>
  )
}

export default MainRouter