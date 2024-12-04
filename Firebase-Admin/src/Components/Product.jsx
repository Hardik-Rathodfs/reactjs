import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/Product/action'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../FirebaseFolder/firebase'
import { Link, useNavigate } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'

function Product() {
    const dispatch = useDispatch()
    const state = useSelector((s)=>s.proReducer)
    const navigate = useNavigate()
    console.log(state)
    useEffect(()=>{
       dispatch(getData)
    },[])
    const handleDelete = async(id)=>{
         let data = doc(db,"products",id)
         await deleteDoc(data)
         toast.success("Data Deleted Successfully", { autoClose: 3000 });
         dispatch(getData)
    }
  return (

    <div>
     <ToastContainer/>
  <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
        <div className="me-3">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-bs-toggle="minimize"
          >
            <span className="icon-menu" />
          </button>
        </div>
        <div>
          <a className="navbar-brand brand-logo" href="index.html">
            <img src="https://demo.bootstrapdash.com/star-admin2-free/template/images/logo.svg" alt="logo" />
          </a>
          <a className="navbar-brand brand-logo-mini" href="index.html">
            <img src="https://demo.bootstrapdash.com/star-admin2-free/template/images/logo-mini.svg" alt="logo" />
          </a>
        </div>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-top">
        <ul className="navbar-nav">
          <li className="nav-item fw-semibold d-none d-lg-block ms-0">
            <h1 className="welcome-text">
              Good Morning, <span className="text-black fw-bold">John Doe</span>
            </h1>
            <h3 className="welcome-sub-text">
              Your performance summary this week{" "}
            </h3>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown d-none d-lg-block">
            <a
              className="nav-link dropdown-bordered dropdown-toggle dropdown-toggle-split"
              id="messageDropdown"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {" "}
              Select Category{" "}
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
              aria-labelledby="messageDropdown"
            >
              <a className="dropdown-item py-3">
                <p className="mb-0 fw-medium float-start">Select category</p>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item preview-item">
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis fw-medium text-dark">
                    Bootstrap Bundle{" "}
                  </p>
                  <p className="fw-light small-text mb-0">
                    This is a Bundle featuring 16 unique dashboards
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis fw-medium text-dark">
                    Angular Bundle
                  </p>
                  <p className="fw-light small-text mb-0">
                    Everything you’ll ever need for your Angular projects
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis fw-medium text-dark">
                    VUE Bundle
                  </p>
                  <p className="fw-light small-text mb-0">
                    Bundle of 6 Premium Vue Admin Dashboard
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis fw-medium text-dark">
                    React Bundle
                  </p>
                  <p className="fw-light small-text mb-0">
                    Bundle of 8 Premium React Admin Dashboard
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="nav-item d-none d-lg-block">
            <div
              id="datepicker-popup"
              className="input-group date datepicker navbar-date-picker"
            >
              <span className="input-group-addon input-group-prepend border-right">
                <span className="icon-calendar input-group-text calendar-icon" />
              </span>
              <input type="text" className="form-control" />
            </div>
          </li>
          <li className="nav-item">
            <form className="search-form" action="#">
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
              />
            </form>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link count-indicator"
              id="notificationDropdown"
              href="#"
              data-bs-toggle="dropdown"
            >
              <i className="icon-bell" />
              <span className="count" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
              aria-labelledby="notificationDropdown"
            >
              <a className="dropdown-item py-3 border-bottom">
                <p className="mb-0 fw-medium float-start">
                  You have 4 new notifications{" "}
                </p>
                <span className="badge badge-pill badge-primary float-end">
                  View all
                </span>
              </a>
              <a className="dropdown-item preview-item py-3">
                <div className="preview-thumbnail">
                  <i className="mdi mdi-alert m-auto text-primary" />
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject fw-normal text-dark mb-1">
                    Application Error
                  </h6>
                  <p className="fw-light small-text mb-0"> Just now </p>
                </div>
              </a>
              <a className="dropdown-item preview-item py-3">
                <div className="preview-thumbnail">
                  <i className="mdi mdi-lock-outline m-auto text-primary" />
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject fw-normal text-dark mb-1">
                    Settings
                  </h6>
                  <p className="fw-light small-text mb-0"> Private message </p>
                </div>
              </a>
              <a className="dropdown-item preview-item py-3">
                <div className="preview-thumbnail">
                  <i className="mdi mdi-airballoon m-auto text-primary" />
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject fw-normal text-dark mb-1">
                    New user registration
                  </h6>
                  <p className="fw-light small-text mb-0"> 2 days ago </p>
                </div>
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link count-indicator"
              id="countDropdown"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="icon-mail icon-lg" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
              aria-labelledby="countDropdown"
            >
              <a className="dropdown-item py-3">
                <p className="mb-0 fw-medium float-start">
                  You have 7 unread mails{" "}
                </p>
                <span className="badge badge-pill badge-primary float-end">
                  View all
                </span>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img
                    src="./src/assets/images/faces/face10.jpg"
                    alt="image"
                    className="img-sm profile-pic"
                  />
                </div>
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis fw-medium text-dark">
                    Marian Garner{" "}
                  </p>
                  <p className="fw-light small-text mb-0">
                    {" "}
                    The meeting is cancelled{" "}
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img
                    src="./src/assets/images/faces/face12.jpg"
                    alt="image"
                    className="img-sm profile-pic"
                  />
                </div>
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis fw-medium text-dark">
                    David Grey{" "}
                  </p>
                  <p className="fw-light small-text mb-0">
                    {" "}
                    The meeting is cancelled{" "}
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img
                    src="./src/assets/images/faces/face1.jpg"
                    alt="image"
                    className="img-sm profile-pic"
                  />
                </div>
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis fw-medium text-dark">
                    Travis Jenkins{" "}
                  </p>
                  <p className="fw-light small-text mb-0">
                    {" "}
                    The meeting is cancelled{" "}
                  </p>
                </div>
              </a>
            </div>
          </li>
        
         
          <li className="nav-item d-none d-lg-block">
  <p className="nav-link">
    <Link to="/login">
      <img
        className="img-xs rounded-circle"
        src="https://demo.bootstrapdash.com/star-admin2-free/template/images/faces/face8.jpg"
        alt="Profile image"
      />
    </Link>
  </p>
 
</li>

        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-bs-toggle="offcanvas"
        >
          <span className="mdi mdi-menu" />
        </button>
      </div>
    </nav>
  
    <div className="container-fluid page-body-wrapper">
    
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
        <Link to={'/'} style={{textDecoration:"none"}}>    <li className="nav-item">
            <a className="nav-link">
              <i className="mdi mdi-grid-large menu-icon" />
             <span className="menu-title">Dashboard</span>
            </a>
          </li></Link>
          <li className="nav-item">
            <a className="nav-link">
              <i className="menu-icon mdi mdi-cart-arrow-down"/>
            <Link to={'/Addproduct'}>  <span className="menu-title">Add Products</span></Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <i className="menu-icon mdi mdi-layers-outline" />

              <span className="menu-title">Products</span>
            </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link">
            <i className="menu-icon mdi mdi-account-circle-outline" />
            <Link to={'/adduser'}> <span className="menu-title">Add user</span></Link>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link">
            <i className="menu-icon mdi mdi-logout" />
            <Link to={'/'}> <span className="menu-title">Logout</span></Link>
            </a>
          </li>
          <br /><br />
               
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i className="menu-icon mdi mdi-floor-plan" />
              <span className="menu-title">UI Elements</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/ui-features/buttons.html">
                    Buttons
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    href="pages/ui-features/dropdowns.html"
                  >
                    Dropdowns
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    href="pages/ui-features/typography.html"
                  >
                    Typography
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#form-elements"
              aria-expanded="false"
              aria-controls="form-elements"
            >
              <i className="menu-icon mdi mdi-card-text-outline" />
              <span className="menu-title">Form elements</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="form-elements">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/forms/basic_elements.html"
                  >
                    Basic Elements
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#charts"
              aria-expanded="false"
              aria-controls="charts"
            >
              <i className="menu-icon mdi mdi-chart-line" />
              <span className="menu-title">Charts</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="charts">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/charts/chartjs.html">
                    ChartJs
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#tables"
              aria-expanded="false"
              aria-controls="tables"
            >
              <i className="menu-icon mdi mdi-table" />
              <span className="menu-title">Tables</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="tables">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/tables/basic-table.html">
                    Basic table
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#icons"
              aria-expanded="false"
              aria-controls="icons"
            >
              <i className="menu-icon mdi mdi-layers-outline" />
              <span className="menu-title">Icons</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="icons">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/icons/font-awesome.html">
                    Font Awesome
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#auth"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i className="menu-icon mdi mdi-account-circle-outline" />
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/blank-page.html">
                    {" "}
                    Blank Page{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/error-404.html">
                    {" "}
                    404{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/error-500.html">
                    {" "}
                    500{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link">
                    {" "}
                    Login{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/register.html">
                    {" "}
                    Register{" "}
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      {
  state.product.map((el) => {
    return (
      <div className="product-card" key={el.id}>
        <img src={el.img} alt={el.title} className="product-image" />
        <p className="product-info">
          <span className="product-price">₹{el.price}</span> 
        </p>
        <p className="product-info">
           <span className="product-title">{el.title}</span>
           </p>
        <div className="product-actions">
          <button className="edit-btn" onClick={() => navigate(`/product/edit/${el.id}`)}>Edit</button>
          <button className="delete-btn" onClick={() => handleDelete(el.id)}>Delete</button>
        </div>
      </div>
    );
  })
}

      </div>

     
    </div>
  )
}

export default Product