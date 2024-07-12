import React, { useState } from 'react'
import "../components/reg.css"
import "../components/login.css"
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export default function SignUpLogin() {
    const [state,setState]=useState("Logindd")
    const [regName,setregName]=useState("")
    const[regEmail,setEmail]=useState("")
    const[regPass,setPassword]=useState("")
    const[logEmail,setLogemail]=useState("")
    const[logPass,setLogpass]=useState("")
    const [arr,setArr]=useState([])

    const handleClick=()=>
    {
      let obj ={
        username:regName,
        email:regEmail,
        password:regPass
      };
      console.log(arr);
      
      if(obj.username == "" && obj.email == "" && obj.password=="")
        {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
        else
        {
        setArr([...arr,obj])
      }
    }

    const handleChange=()=>{
      let data=arr.filter((e)=>{
        return(e.email == logEmail && e.password == logPass)
        
      })
      if(data.length>0)
      {
        Swal.fire({
          icon: "success",
          title: "Login Sucessfully!",
          text: "Thank You",
        });
      }
      else
      {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }


    }

    return (
    
    
    <div>

        {state == "Login" ?
         
         <form action="" >
         <div className="wrapper">
    <header>Login Form</header>
    <form action="#">
      <div className="field email">
        <div className="input-area">
          <input type="text" placeholder="Email Address" onChange={(e)=>setLogemail(e.target.value)}/>
          <i className="icon fas fa-envelope"></i>
          <i className="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div className="error error-txt">Email can't be blank</div>
      </div>
      <div className="field password">
        <div className="input-area">
          <input type="password" placeholder="Password" onChange={(e)=>setLogpass(e.target.value)}/>
          <i className="icon fas fa-lock"></i>
          <i className="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div className="error error-txt">Password can't be blank</div>
      </div>
      <div className="lg"><a href="#">Forgot password?</a></div>
      <input type="submit" value="Login" onClick={handleChange}/>

    </form>
          <a onClick={()=>setState("Signup")}>Create account:-Singup</a>  
  </div>
      </form>
       :
       <form action="">
   
       <section className="container">
      <header>Registration Form</header>
      <form action="#" className="form">
        <div className="input-box">
          <label>User Name</label>
          <input type="text" placeholder="Enter user name" onChange={(e)=>setregName(e.target.value)}  />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" onChange={(e)=>setEmail(e.target.value)}   />
        </div>
        <div className="input-box">
          <label>Password</label>
          <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}  />
        </div>
        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number"  />
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date"  />
          </div>
        </div>
    
        <div className="input-box address">
          <label>Address</label>
          <input type="text" placeholder="Enter street address"  />
        </div><br />
    <a onClick={()=>setState("Login")} className='lg'>Already have an account ? Login</a>
        <button onClick={handleClick}>Submit</button>
      </form>
    </section>       
   </form>}

    </div>
  )
}
