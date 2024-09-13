import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark " arial-label="Furni navigation bar">

<div className="container">
    <a className="navbar-brand" href="index.html">Accessories<span>.</span></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item ">
                <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="active" ><a className="nav-link" href="#" >Shop</a></li>
            <li><a className="nav-link" href="about.html">About us</a></li>
            <li><a className="nav-link" href="services.html">Services</a></li>
            <li><a className="nav-link" href="blog.html">Blog</a></li>
            <li><a className="nav-link" href="contact.html">Contact us</a></li>
        </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                <li><p className="nav-link" ><img src="https://themewagon.github.io/furni/images/user.svg"/></p></li>
                <li><a className="nav-link" href="cart.html"><img src="https://themewagon.github.io/furni/images/cart.svg"/></a></li>
            </ul>
    </div>
</div>
    
</nav>
<div>
        <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  <h1>Shop</h1>
                </div>
              </div>
              <div className="col-lg-7"></div>
            </div>
          </div>
        </div>

       
      </div>
    </>
  )
}

export default Navbar