import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [d, setD] = useState([]);
    const UserCollection = collection(db, "users");

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
        } else {
            toast.error("Login Unsuccessful! Please check your credentials.", { autoClose: 3000 });
        }
    };

    return (
        <div>
            <ToastContainer /> 
            <div className="container">
                <div className="form-container sign-in-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            required
                        />
                        <a href="#">Forgot your password?</a>
                        <input type="submit" value="Login" className='btn'/>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start your journey with us</p>
                            <Link className='link' to={'/'}>
                                <button id="signUp" className='btn'>Sign Up</button>
                            </Link>
                            <Link className='link' to={'/'}>Create account: Signup</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
