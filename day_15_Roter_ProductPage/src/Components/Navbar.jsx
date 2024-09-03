import React from 'react'
import {Link, NavLink} from "react-router-dom"
import './Navbar.css'  

function Navbar() {
  return (
    <div className="navbar">
      <NavLink activeClassName="active" to={"/"}>Home</NavLink>
      <NavLink activeClassName="active" to={"/product"}>Product</NavLink>
      <NavLink activeClassName="active" to={"/women"}>Men</NavLink>
      <NavLink activeClassName="active" to={"/cart"}>Cart</NavLink>
      <NavLink activeClassName="active" to={"/login"}>Login</NavLink>
    </div>
  )
}

export default Navbar
