import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SingleProduct.css'  // Import the CSS file

function SingleProduct() {
  const { id } = useParams()
  const [state, setState] = useState({})

  useEffect(() => {
    fetch(`https://mock-server-app-ss14.onrender.com/mendata/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setState(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  return (
    <div className="single-product-container">
      <img src={state.imageURL} alt={state.title} />
      <h1>{state.brand} - ₹{state.price}</h1>
      <p>{state.product}</p>
    </div>
  )
}

export default SingleProduct
  