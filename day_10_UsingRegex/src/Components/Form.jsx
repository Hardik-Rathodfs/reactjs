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
      const [isFocusedd, setIsFocusedd] = useState(false); 
      const [isblur, setisbliur] = useState(false); 
      const [isblurr, setisbliurr] = useState(false); 
      const [mailField,setmailField] = useState(true);
      const [mailFieldd,setmailFieldd] = useState(true);
      const [number,setNumber] = useState(true);
      const [useField,setuseField] = useState(true);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,25}$/;
  
    const handleChange=(e)=>{
        let{name,value}=e.target
        setobj({...obj,[name]:value})

    }
    const handleChangee=(e)=>{
      let{name,value}=e.target
      setobj({...obj,[name]:value})

  }

    const handleSubmitt = (e) => {
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
const mailBlurr = ()=>{
  if(obj.email.includes('@gmail.com') || obj.email.includes('@yahoo.com') || obj.email.includes('@email.com'))
  {
      setmailFieldd(true)
  }
  else{
      setmailFieldd(false)
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

  const handleBlurr =()=>{
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,22}$/; 
    
     console.log(viewPass)
     setIsFocusedd(false)
      if(regex.test(obj.password)){
        setisbliurr(false);
  
      }else{
        setisbliurr(true)
      }
  
    }
 const handleFocus = ()=>{
  
 
 if(isblur == false){
   setIsFocused(true)
   
 }
}
const handleFocuss = ()=>{
  
 
  if(isblurr == false){
    setIsFocusedd(true)
    
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


  return (
    <>
    {state == "Login" ?  
          <div class="container" >
      <div class="wrapper">
        <div class="title"><span>Login Form</span></div>
        <form  onSubmit={handleSubmitt}>
          <div class="row">
            <i class="fas fa-envelope"></i>
            <input type="email" onChange={handleChange} value={obj.email} name='email' onBlur={mailBlurr} 
             placeholder="Email or Phone"
             id={mailFieldd ? "mailunchange" : "mailchange"}
             required/>
            {mailFieldd ? "" : <p className='em'>Please Enter Email Correctly</p>}
          </div>
          <div class="row">
       
            {viewPass==false ? <span onClick={()=>setviewPass(true)}>
            <i class="fas fa-lock"></i>
            </span> : <span onClick={()=>setviewPass(false)}>
            <i class="fas fa-lock"></i>
            </span>}
         
            <input type={viewPass ?  "text" : "password"} className={pass == false ? 'a' : ""}   
            name='password' value={obj.password} onChange={handleChangee} onBlur={handleBlurr} onFocus={handleFocuss}
             placeholder="Password" required/>
           {isFocusedd ==false  ? "" : <p className='red1'>Password include special character</p>}
           {isblurr == false  ? " " :<p className='red'>Password must be 8 character</p>}
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

      <input type="tel" name="phone" placeholder="+91 6353123475" required onChange={handleChange} 
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


