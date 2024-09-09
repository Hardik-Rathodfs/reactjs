import React from 'react'
import {Routes,Route}  from 'react-router-dom'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

function MainRouter() {
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