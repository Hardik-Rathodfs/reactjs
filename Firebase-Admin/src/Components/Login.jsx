import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { db, GoogleLogout } from '../FirebaseFolder/firebase';
import { toast, ToastContainer } from 'react-toastify';
import { google, UserReducer } from '../Redux/User/UserReducer';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [d, setD] = useState([]);
  const UserCollection = collection(db, "users");
  const navigate = useNavigate();
  const dispatch  = useDispatch()
  const state = useSelector((s)=>s.UserReducer)
  const [user,setUser] = useState(null)
  console.log(state)
  console.log(state.isLogin)

  useEffect(() => {
      const getData = async () => {
          try {
              let data = await getDocs(UserCollection);
              let val = data.docs.map((el) => ({
                  id: el.id,
                  ...el.data(),
              }));
              setD(val);
          } catch (error) {
              toast.error("Failed to load user data", { autoClose: 3000 });
          }
      };
      getData();
  }, []);

  const handleSubmit = (e) => {
      e.preventDefault();

      let user = d.filter((el) => el.email === email && el.pass === pass);

      if (user.length > 0) {
          toast.success("Login Successful!", { autoClose: 3000 });
          setTimeout(() => {
            navigate("/");
        }, 3000); 
      } else {
          toast.error("Login Unsuccessful! Please check your credentials.", { autoClose: 3000 });
      }
  };

  const handleClick=()=>{
    dispatch(google)
   
    
  }
  useEffect(()=>{
    if(state.isLogin == true)
      {
        navigate('/')
        
      }
  },[state.isLogin])
  const handleLogout=()=>{
    GoogleLogout()
    toast.success("Logout Successful!", { autoClose: 3000 });
  }

  return (
    <div>
      <ToastContainer/>
        <div className="container-scroller">
  <div className="container-fluid page-body-wrapper full-page-wrapper">
    <div className="content-wrapper d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-4 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5">
            <div className="brand-logo">
              <img src="https://demo.bootstrapdash.com/star-admin2-free/template/images/logo.svg" alt="logo" />
            </div>
            <h4>Hello! let's get started</h4>
            <h6 className="fw-light">Sign in to continue.</h6>
            <form className="pt-3"onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Email"
                  value={email} onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  value={pass} onChange={(e)=>setPass(e.target.value)}
                />
              </div>
              <div className="mt-3 d-grid gap-2">
                <input
                  value="LOGIN"
                  type='submit'
                  className="btn btn-block btn-primary btn-lg fw-medium auth-form-btn"/>
        
              </div>
              <div className="my-2 d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <label className="form-check-label text-muted">
                    <input type="checkbox" className="form-check-input" /> Keep
                    me signed in{" "}
                  </label>
                </div>
                <a href="#" className="auth-link text-black">
                  Forgot password?
                </a>
              </div>
           
              <div className="text-center mt-4 fw-light">
                {" "}
                Don't have an account?{" "}
                <Link to="/register" className="text-primary">
                  Create
                </Link>
              </div>
            </form>
            <div className="mb-2 d-grid gap-2">
              <h1>{user}</h1>
                <button
                  type="button"
                  className="btn btn-block btn-facebook auth-form-btn"
                  onClick={handleClick}
                >
                  <i className="ti-google me-2" />
                  Connect using Google{" "}
                </button>
                <button  className="btn btn-block btn-facebook auth-form-btn" style={{width:"200px", height:"auto",margin:"auto"}} onClick={handleLogout}>Logout With Google?</button>
              </div>
          </div>
        </div>
      </div>
    </div>
    {/* content-wrapper ends */}
  </div>
  {/* page-body-wrapper ends */}
</div>

    </div>
  )
}

export default Login