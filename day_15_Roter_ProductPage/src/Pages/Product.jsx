import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Product.css'  

function Product() {
   const [data,setData] = useState([])
   const [Delete,setDelete] = useState(true)

   useEffect(()=>{
    fetch(`https://mock-server-app-ss14.onrender.com/mendata`)
    .then((res)=>res.json())
    .then((res)=>{
       setData(res)
    })
    .catch((err)=>{
      console.log(err)
    })
   },[Delete])

  
   const handleDelete=(id)=>{
    fetch(`https://mock-server-app-ss14.onrender.com/mendata/${id}`,{
      method:"DELETE"
    })
    .then((res)=>res.json())
    .then((res)=>{
      setDelete(!Delete)
    })
    .catch((err)=>console.log(err));
   }


  return (
   
         <div className="product-grid"> 
            {
               data.map((el)=>(
                <div key={el.id}>
                  <Link to={`/product/${el.id}`}  className="product-card">
                       <img src={el.imageURL} alt={el.brand} />
                       </Link>
                       <h2>{el.product}</h2>
                       <p>₹{el.price}</p>
                       <button onClick={()=>handleDelete(el.id)}>Delete</button>
                       <Link to={`/product/edit/${el.id}`}><button>Edit</button></Link>
                       </div>
                ))
            }
         </div>
  )
}

export default Product
