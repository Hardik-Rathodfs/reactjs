import React, { useEffect, useState } from 'react'

function Data() {
  
    const [state,setState]=useState(false)
    const [dataa,setData]=useState([])
    

    
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res)
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    
    console.log(dataa);

return (
    <div style={{display:"flex"}}>
        {
            dataa.map((el)=>{
                
                return (
                    <div>
                        <img src={el.image}  style={{width:"250px",height:"250px", display:"flex", justifyContent:"space-evenly"}}/>
                        <span>{el.title}</span>
                        <h5>Price:{el.price}</h5>
                    </div>
                    )
            })
        }
        <button onClick={()=>setState(!state)}>Fetch data</button>
    </div>
  )
}


export default Data