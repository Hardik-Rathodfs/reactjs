import React from 'react'
import { useState } from 'react'
import "../components/LoginSignup.css"

function LoginSignup() {

   const [state,setState] = useState("Logindd")

  return (
    <div className='forms'>
        
     {state == "Login" ?  
     
     <form action="" >
              <h1>Login Form</h1>
              <input type="text" className='frm' placeholder='Email Id' /><br />
              <input type="password" className='frm' placeholder='Password'/><br />
              <button className='frm'>Submit</button>
              <br/>
               <a onClick={()=>setState("Signup")}>New account</a>  
           </form>
            :
            <form action="">
        
            <h1>Signup Form</h1>
            <input type="text"  className='frm' placeholder='Username' /><br />
            <input type="text" className='frm' placeholder='Email Id'/>
            <br />
            <input type="password" className='frm' placeholder='Password'/><br />
            <button className='frm'>Signup</button>
            <br/>
            <a onClick={()=>setState("Login")}>Already have an account ? Login</a>
        </form>}

    </div>
  )
}

export default LoginSignup