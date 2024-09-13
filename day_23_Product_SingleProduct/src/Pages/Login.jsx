
import React from 'react'
import './login.css'
const Login = () => {
  return (
    <>
     <div className='div'>
      <div className='login'>
      <h2>LOGIN / REGISTER</h2>
      {/* <PhoneInput
        style={{width:"140px",height:"50px",margin:"20px"}}
        inputStyle={{height:"50px", border: "1px solid #fc2779"}}
        inputClass="custom-phone-input"
        
        
        country={'in'}
        type="tel"
        
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        
        // onChange={e => setPhoneNumber(`${e.target.value}`)}

      /> */}
      <button  >Send OTP</button>
      <input
      className='input'
        type="text"
        placeholder="Enter OTP"
        style={{marginTop:"50px"}}
      />
      <button style={{paddingLeft:"50px",paddingRight:"50px"}} >PROCEED</button>
      <br />
      <br />
      <br />
      <div style={{opacity:"0.8",color:"#fc2779"}}></div>
      <br />
      <p></p>
      <br />
      <br />
      <p  style={{color:"#fc2779",cursor:"pointer"}}>Go Back</p>

      <div id="recaptcha-container"></div>
      </div>
      {/* <PhoneInput
        country={'india'} // Default country
        value={mobileNumber}
        onChange={handlePhoneNumberChange}
      /> */}
    </div>
    </>
  )
}

export default Login
