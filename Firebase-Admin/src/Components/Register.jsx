import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../FirebaseFolder/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const UserCollection = collection(db, "users");
  const [d, setD] = useState([]);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

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
              toast.error("Failed to load users", { autoClose: 3000 });
          }
      };
      getData();
  }, []);

  const handleSubmit = async (e) => {
      e.preventDefault();

      if (!emailRegex.test(email)) {
          toast.error("Invalid email format. Please enter a valid email.", { autoClose: 3000 });
          return;
      }

      if (!passwordRegex.test(pass)) {
          toast.error("Password must be at least 8 characters long and include letters and numbers.", { autoClose: 3000 });
          return;
      }

      let existingUser = d.find((el) => el.email === email);

      let newUser = {
          email,
          pass
      };

      if (existingUser) {
          toast.error("User already registered", { autoClose: 3000 });
      } else {
          try {
              await addDoc(UserCollection, newUser);
              toast.success("User Signup Successfully", { autoClose: 3000 });
              setTimeout(() => {
                  navigate("/Login");
              }, 3000); 
          } catch (error) {
              toast.error("Signup failed", { autoClose: 3000 });
          }
      }
  };
  return (
    
    <div>
      <ToastContainer />
        <div className="container-scroller">
  <div className="container-fluid page-body-wrapper full-page-wrapper">
    <div className="content-wrapper d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-4 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5">
            <div className="brand-logo">
              <img src="https://demo.bootstrapdash.com/star-admin2-free/template/images/logo.svg" alt="logo" />
            </div>
            <h4>New here?</h4>
            <h6 className="fw-light">
              Signing up is easy. It only takes a few steps
            </h6>
            <form className="pt-3" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="exampleInputUsername1"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
                  placeholder="Email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <select
                  className="form-select form-select-lg"
                  id="exampleFormControlSelect2"
                >
                  <option>Country</option>
                  <option>United States of America</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                  <option>Germany</option>
                  <option>Argentina</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e)=>setPass(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <div className="form-check">
                  <label className="form-check-label text-muted">
                    <input type="checkbox" className="form-check-input" /> I
                    agree to all Terms &amp; Conditions{" "}
                  </label>
                </div>
              </div>
              <div className="mt-3 d-grid gap-2">
                {/* <input type="submit" /> */}
                <input
                  className="btn btn-block btn-primary btn-lg fw-medium auth-form-btn"
                  value="SIGNUP" type='submit'
                />                  
              </div>
              <div className="text-center mt-4 fw-light">
                {" "}
                Already have an account?{" "}
                <Link to={'/login'} className="text-primary">
                  Login
                </Link>
              </div>
            </form>
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

export default Register