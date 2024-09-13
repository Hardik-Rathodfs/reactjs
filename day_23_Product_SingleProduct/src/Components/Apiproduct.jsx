import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Apiproduct() {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector((s) => s.productReducer);
  useEffect(() => {
    FetchData(dispatch);
  }, []);

  return (
    <div>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {data.map((el) => {
              return (
                <div key={el.idMeak} className="col-12 col-md-4 col-lg-3 mb-5 my">
                  <Link to={`/products/${el.idMeal}`}>
                    <a className="product-item">
                      <img
                        src={el.strMealThumb}
                        className="myimg product-thumbnail"
                      />
                      <h3 className="product-title">{el.strMeal}</h3>
                      <strong className="product-price">${el.strPrice}</strong>

                      <span className="icon-cross">
                        <img
                          src="https://themewagon.github.io/furni/images/cross.svg"
                          className="img-fluid"
                        />
                      </span>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apiproduct;