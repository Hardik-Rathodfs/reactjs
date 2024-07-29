import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Form() {

    const[obj,setobj]=useState({
          username:"",
          phone:"",
          email:"",
          password:"",
      })
    // const [main,setMain] = useState(true);

    const [state,setState] = useState("Logindd")


      const[arr,setarr]=useState([])
      const[pass,setpass]=useState(null)
      const [viewPass,setviewPass] = useState(false)      
      const [isFocused, setIsFocused] = useState(false); 
      const [isblur, setisbliur] = useState(false); 
      const [mailField,setmailField] = useState(true);
      const [number,setNumber] = useState(true);
      const [useField,setuseField] = useState(true);

      const [arry,setArry] = useState(["skill","skill"])
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,25}$/;
  
    const handleChange=(e)=>{
        let{name,value}=e.target
        setobj({...obj,[name]:value})
    }



const handleSubmit = (e) => {
  e.preventDefault();
  setarr([...arr, obj]);
  setobj({
    username:"",
    phone:"",
      email: "",
      password: ""
  });

  if (passwordRegex.test(obj.password)) {
    Swal.fire({
      icon: "success",
      title: "Register Sucessfully!",
      text: "Thank you",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }
};

const mailBlur = ()=>{
  if(obj.email.includes('@gmail.com') || obj.email.includes('@yahoo.com') || obj.email.includes('@email.com'))
  {
      setmailField(true)
  }
  else{
      setmailField(false)
  }
  
}
 

const handleBlur =()=>{
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,22}$/; 
  
   console.log(viewPass)
   setIsFocused(false)
    if(regex.test(obj.password)){
      setisbliur(false);

    }else{
      setisbliur(true)
    }

  }

 const handleFocus = ()=>{
  
 
 if(isblur == false){
   setIsFocused(true)
   
 }
}

const usernameBlur = ()=>{
  if(obj.username.length > 5)
  {
      setuseField(true)
  }
  else{
      setuseField(false)
  }
}


const numberBlur = ()=>{
  if(obj.phone.length >= 10)
  {
      setNumber(true)
  }
  else{
      setNumber(false)
  }
}
const handleClick = ()=>{
  setArry([...arr,"skill"])
}

  return (
    <>
    {state == "Login" ?  
          <div class="container" >
      <div class="wrapper">
        <div class="title"><span>Login Form</span></div>
        <form  onSubmit={handleSubmit}>
          <div class="row">
            <i class="fas fa-envelope"></i>
            <input type="email" onChange={handleChange} value={obj.email} name='email' onBlur={mailBlur} 
             placeholder="Email or Phone"
             id={mailField ? "mailunchange" : "mailchange"}
             required/>
            {mailField ? "" : <p className='em'>Please Enter Email Correctly</p>}
          </div>
          <div class="row">
       
            {viewPass==false ? <span onClick={()=>setviewPass(true)} >
            <i class="fas fa-lock"></i>
            </span> : <span onClick={()=>setviewPass(false)} >
            <i class="fas fa-lock"></i>
            </span>}
         
            <input type={viewPass ?  "text" : "password"} className={pass == false ? 'a' : ""}   
            name='password' value={obj.password} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} placeholder="Password" required/>
           {isFocused ==false  ? "" : <p className='red1'>Password include special character</p>}
           {isblur == false  ? " " :<p className='red'>Password must be 8 character</p>}
          </div>
        <div class="pass"><a href="#">Forgot password?</a></div>
          <div class="row button">
            <input type="submit" name='submit' value="Submit"/>
          </div>
          <div class="signup-link">Not a member? <a onClick={()=>setState("Signup")}>Signup now</a></div>
        </form>
      </div>
    </div>
    :
    <div class="container" >
    <div class="wrapper">
      <div class="title"><span>Registration Form</span></div>
      <form  onSubmit={handleSubmit}>
        <div className='row'>
        
        <i class="fas fa-user"></i>
      <input type="text" name="username" placeholder="Enter Username" required onChange={handleChange} 
      value={obj.username} onBlur={usernameBlur} id={useField ? "userunchange" : "userchange"}/>
      {useField ? "" : <p className='emmm'>Please Enter 5 Character Atleast</p>}
      
        </div>
        <div className="row">
        <i class="fas fa-phone"></i>

      <input type="tel" name="phone" placeholder="+91 1234567890" required onChange={handleChange} 
      value={obj.phone} onBlur={numberBlur} id={number ? "numberunchange" : "numberchange"}/>
      {number ? "" : <p className='emm'>Phone Number Must Be Atleast 10 Digit</p>}
      
        </div>
   
        <div class="row">
          <i class="fas fa-envelope"></i>
          <input type="email" onChange={handleChange} value={obj.email} name='email' onBlur={mailBlur} 
           placeholder="Email or Phone"
           id={mailField ? "mailunchange" : "mailchange"}
           required/>
          {mailField ? "" : <p className='em'>Please Enter Email Correctly</p>}
        </div>
        <div class="row">
     
          {viewPass==false ? <span onClick={()=>setviewPass(true)} >
          <i class="fas fa-lock"></i>
          </span> : <span onClick={()=>setviewPass(false)} >
          <i class="fas fa-lock"></i>
          </span>}
       
          <input type={viewPass ?  "text" : "password"} className={pass == false ? 'a' : ""}   
          name='password' value={obj.password} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus}
           placeholder="Password" required/>
         {isFocused ==false  ? "" : <p className='red1'>Password include special character</p>}
         {isblur == false  ? " " :<p className='red'>Password must be 8 character</p>}
        </div>
     
      <div class="pass"><a href="#">Forgot password?</a></div>
        <div class="row button">
          <input type="submit" name='submit' value="Submit"/>
        </div>
        <div class="signup-link">Not a member? <a onClick={()=>setState("Login")}>Signup now</a></div>
      </form>
    </div>
  </div>
}
    </>
  )
}

export default Form


