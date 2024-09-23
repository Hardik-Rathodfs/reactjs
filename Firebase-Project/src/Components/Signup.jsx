import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../Firebase/firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {
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

            <div className="container" id="container">
                <div className="form-container sign-in-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign up</h1>
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
                        <input type="submit" value="Signup" className='btn2' />
                    </form>
                </div>
                <div className="overlay2-container">
                    <div className="overlay2">
                        <div className="overlay2-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay2-panel overlay2-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <Link className="link" to={'/Login'}>
                                <button className="ghost" id="signUp">Login</button>
                            </Link>
                            <Link className="link" to={'/Login'}>Already have an account? Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
