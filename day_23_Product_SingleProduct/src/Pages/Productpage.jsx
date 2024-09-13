import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { FetchData } from '../Redux/Productpage/action';
const Productpage = () => {
  const dispatch = useDispatch()
  const {isLoading,isError,data} = useSelector((s)=>s.productReducer)
  useEffect(()=>{
    dispatch(FetchData)
  },[])

  return (
    <>
    <Navbar/>
    <div>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {data.map((el) => {
              return (
                <div key={el.idMeal} className="col-12 col-md-4 col-lg-3 mb-5 my">
                  <Link to={`/products/${el.idMeal}`}>
                  <a className="product-item">
                    <img
                      src={el.strMealThumb}
                      className="myimg product-thumbnail"
                    />
                    <h3 className="product-title">{el.strMeal}</h3>
                    <strong className="product-price">₹{el.strPrice}</strong>

                    <span className="icon-cross">
                      <img
                        src="https://themewagon.github.io/furni/images/cross.svg"
                        className="img-fluid"
                      />
                    </span>
                  </a></Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Productpage