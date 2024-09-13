import React, { useEffect } from 'react'
import { SingleproReducer } from '../Redux/Singleproduct/singlePageReducer'
import { useDispatch, useSelector } from 'react-redux'
import { FetchData } from '../Redux/Singleproduct/action'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom'



const Singleproduct = () => {
  const {id} = useParams()
  // console.log(id)
  const dispatch = useDispatch()
  const {data} = useSelector((s)=>s.SingleProduct)
  console.log(data)
  useEffect(()=>{
     dispatch(FetchData)(id)
    // FetchData(dispatch,id)
  },[])
  return (
    <>
       <Navbar/>
    <div className="untree_co-section before-footer-section">
            <div className="container">
              <div className="row mb-5">
                <form className="col-md-12" method="post">
                  <div className="site-blocks-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Image</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-total">Total</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {<tr>
                          <td className="product-thumbnail">
                            <img src={data.strMealThumb} alt={data.strMealThumb} className="img-fluid"/>
                          </td>
                          <td className="product-name">
                            <h2 className="h5 text-black">{data.strMeal}</h2>
                          </td>
                          <td>₹{data.strPrice}</td>
                          <td>
                            <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{maxwidth:120}}>
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-black decrease" type="button">-</button>
                              </div>
                              <input type="text" className="form-control text-center quantity-amount"  placeholder="" />
                              <div className="input-group-append">
                                <button className="btn btn-outline-black increase" type="button">+</button>
                              </div>
                            </div>
        
                          </td>
                          <td>${data.strPrice}</td>
                          <td><a href="#" className="btn btn-black btn-sm">X</a></td>
                        </tr>}
        
                       
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
        
              <div className="row">
                <div className="col-md-6">
                  <div className="row mb-5">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <button className="btn btn-black btn-sm btn-block">Update Cart</button>
                    </div>
                    <div className="col-md-6">
                      <button className="btn btn-outline-black btn-sm btn-block">Continue Shopping</button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label className="text-black h4" for="coupon">Coupon</label>
                      <p>Enter your coupon code if you have one.</p>
                    </div>
                    <div className="col-md-8 mb-3 mb-md-0">
                      <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code"/>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-black">Apply Coupon</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-5">
                  <div className="row justify-content-end">
                    <div className="col-md-7">
                      <div className="row">
                        <div className="col-md-12 text-right border-bottom mb-5">
                          <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <span className="text-black">Subtotal</span>
                        </div>
                        <div className="col-md-6 text-right">
                          <strong className="text-black">$230.00</strong>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-md-6">
                          <span className="text-black">Total</span>
                        </div>
                        <div className="col-md-6 text-right">
                          <strong className="text-black">$230.00</strong>
                        </div>
                      </div>
        
                      <div className="row">
                        <div className="col-md-12">
                          <button className="btn btn-black btn-lg py-3 btn-block">Proceed To Checkout</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    <Footer/>
    </>
  )
}



export default Singleproduct