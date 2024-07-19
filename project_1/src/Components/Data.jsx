import React from 'react'

export default function Data({arr}) {
  return (
    
    <div className="main">
      
        {
            arr.map((el)=>{
                return(
    <div className="wrapper">
      <div className="cart-nav">
        <div className="card">
        <img src={el.imageURL}  alt={el.title}/>
        <div className="content">
          <div className="row">
            <div className="details">
              <span>{el.product}</span>
            </div>
            <div className="price">₹{el.price}</div>
          </div>
          <div className="buttons">
            <button>Buy Now</button>
            <button className="cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
      </div>
      </div>
                )
            })
        }
        </div>
  )
}
