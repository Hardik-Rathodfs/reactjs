import React, { useState } from 'react'
import Swal from 'sweetalert2'
import ReactDOM from 'react-dom'

function Data() {

const [obj,setObj]=useState({
    email:"",
    password:""
})

const[arr,setArr]=useState([])
const [viewPass,setviewPass] = useState(false)

const handleChange=(e)=>{
    let {name,value}=e.target
    setObj({...obj,[name]:value})

}

const handleSubmit=(e)=>{

    e.preventDefault()
    setArr([...arr,obj])
    setObj({
        email:"",
        password:""
    })  
    Swal.fire({
        title: 'Success!',
        text: 'Login Sucessfully',
        icon: 'success',
      })    
}


  return (
      <div className="login-container">
         <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div className="row">
        <i className="fa-regular fa-user"></i>
            <input type="email" value={obj.email} style={{marginRight:"-2.5%"}} name='email' placeholder="Email" onChange={handleChange} required/>
            </div>
            <br/>
            <div className="psd">
            {viewPass==false ? <span onClick={()=>setviewPass(true)} className="material-symbols-outlined">
             visibility
            </span> : <span onClick={()=>setviewPass(false)} className="material-symbols-outlined">
            visibility_off
            </span>}
          <input className='pp' type={viewPass ? "text" : "password"} style={{marginLeft:"7%"}}   value={obj.password} name='password'
         placeholder="Password" onChange={handleChange} required/>   
               
            </div>
        <input type="submit" value="Login"/>
        </form>
    </div>
  )
}

export default Data