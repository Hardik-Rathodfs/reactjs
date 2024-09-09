import './Login.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

function Login() {
   
    const dispatch = useDispatch()
    const value=useSelector((s)=>s)

    console.log(value)
    const [state,setState]=useState({
        email:"",
        password:""
    })

    
    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }

    const handleSubmit =(e)=>{
        e.preventdefault()
        fetchapi(dispatch,state.email)
    }

    return (

    <div>
     <div className="form">
         <div className="wrapper">
    <header>Login Form</header>
    <form onSubmit={handleSubmit}>
      <div className="field email">
        <div className="input-area">
          <input type="text" placeholder="Email Address" name='email' onChange={handleChange}/>
          <i className="icon fas fa-envelope"></i>
          <i className="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div className="error error-txt">Email can't be blank</div>
      </div>
      <div className="field password">
        <div className="input-area">
          <input type="password" placeholder="Password" name='password' onChange={handleChange}/>
          <i className="icon fas fa-lock"></i>
          <i className="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div className="error error-txt">Password can't be blank</div>
      </div>
      <div className="lg"><a href="#">Forgot password?</a></div>
      <input type="submit" value="Login" onClick={handleChange}/>

    </form>
         
          <Link className='link' to={'/'}>Create account:-Singup</Link>  
        
  </div>
      </div>
    </div>
  )
}

export default Login