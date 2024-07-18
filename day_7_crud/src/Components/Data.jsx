import React, { useState } from 'react'
import {v4} from 'uuid'
import Datalist from './Datalist'

function Data() {

    const [obj,setObj]=useState({
        id:v4(),
        title:"",
        price:"",
        img:"",
        des:""
    })

    const[data,setData]=useState([])
    const[dis,setDis]=useState(false)
    const[id,setId]=useState("")


   const handleChange=(e)=>{
        setObj({...obj,[e.target.name]:e.target.value})
    }
    
    const handleClick=()=>{
        setData([...data,obj])
        setObj({
            id:v4(),
            title:"",
            price:"",
            img:"",
            des:""
        })
    }   

    const handleDelete=(dl)=>{
        let d = data.filter((el)=>{
            if(el.id != dl)
            {
                return el;
            }
        })
        setData(d)
    }

    const handleEdit=(ed)=>{
        setDis(true)
        setId(ed)
        data.forEach((el)=>{
            if(el.id==ed)
            {
                setObj(el)
            }
        })
    }
    const handleUpdate=()=>{
        let d=data.map((el)=>{
            if(el.id==id)
            {
                return{...el,...obj}
            }
            else
            {
                return el;
            }
        })
        setData(d)
        setDis(false)
        setObj({
            id:v4(),
            title:"",
            price:"",
            img:"",
            des:""
        })
    }

  return (
    <div>
        <div className="main">
         <div class="wrapper">
    <h2>Admin</h2>
        <div className="form">
      <div class="input-box">
        <input type="text" value={obj.title} placeholder="Enter Product Title" name='title'  onChange={handleChange}/>
      </div>
      <div class="input-box">
        <input type="text" value={obj.price} placeholder="Enter Product Price" name='price' onChange={handleChange}/>
      </div>
      <div class="input-box">
        <input type="text" value={obj.img} placeholder="Enter ImageURL" name='img'  onChange={handleChange}/>
      </div>
      <div class="input-box">
        <input type="text" value={obj.des} placeholder="Enter Product Description" name='des' onChange={handleChange}/>
      </div>
     
      <div class="input-box button">
        <button  onClick={handleClick}>Submit</button>
  <button onClick={handleUpdate} style={{ display : dis ? "inline-block" : "none"}}>Update</button>
      </div>
  
    </div>
  </div>
        {data== null ? <h1>Loading.........</h1> : <Datalist del={handleDelete} arr={data} edit={handleEdit}/>}
      </div>
    </div>
    
  )
}

export default Data