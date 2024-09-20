import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addDoc, collection } from 'firebase/firestore';
import { db } from './FirebaseFolder/Firebase'
import Login from './Login';

function App() {
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("")
  const UserCollection = collection(db,"users")
   const handleSubmit = async (e)=>{
       e.preventDefault()
       let obj = {
        email,
        pass
       }
       let a  = await addDoc(UserCollection,obj)
       console.log(a.id)
       alert("Data added successfully")
   }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
          <input type="text" onChange={(e)=>setEmail(e.target.value)} />
          <input type="text" onChange={(e)=>setPass(e.target.value)}/>
          <input type="submit" />
      </form>
      <h1>Login</h1>
      <Login/>
    </>
  )
}

export default App