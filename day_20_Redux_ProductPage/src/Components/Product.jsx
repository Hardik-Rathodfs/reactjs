import React, { useEffect } from 'react'
import { FetchData } from '../Redux/ProductPage/Action'
import { useDispatch, useSelector } from 'react-redux'

function Product() {
    const dispatch = useDispatch()
    const {isLoading,isError,data} = useSelector((s)=>s.productReducer)
    useEffect(()=>{
        FetchData(dispatch)
    },[])
  return (
    <div>
      {
        isLoading ? <h1>Loading......</h1> : 
        isError ? <h1>Loading......</h1>:
        data.map((el)=>{
            return (
                <div key={el.idMeal} style={{display:"flex",justifyContent:"space-evenly"}}>
                  <img style={{width:"300px",height:"300px"}} src={el.strMealThumb}  />
                    <h1>{el.strMeal} - ₹{el.strPrice}</h1>
                </div>
            )
        })
      }
    </div>
  )
}

export default Product