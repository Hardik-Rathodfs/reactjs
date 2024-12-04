import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Home } from '../Components/Home'
import Login from '../Components/Login'
import Register from '../Components/Register'
import AddProduct from '../Components/AddProduct'
import Product from '../Components/Product'
import SingleEditProduct from '../Components/SingleEditProduct'
import AddUser from '../Components/AddUser'
const Mainrouter = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Addproduct' element={<AddProduct/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/adduser' element={<AddUser/>}></Route>
        <Route path='/product/edit/:id' element={<SingleEditProduct/>}></Route>
        </Routes>
    </div>
  )
}

export default Mainrouter