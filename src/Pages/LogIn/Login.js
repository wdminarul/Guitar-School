import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import googleLogo from"../../images/google.png"
import  "./Login.css"

const Login = () => {
    const [email,setEmail]=useState({});
    const [password,setPassword]=useState({});
    const {signInUsingEmail,signInUsingGoogle,} =useAuth();
    const handleEmail=e=>{
        setEmail(e.target.value)
    }
    const handlePassword =e =>{
        setPassword(e.target.value)
    }

    const handleLogin = e => {
        e.preventDefault();
        signInUsingEmail(email,password,)
    
      }

    return (
        <div className="main-form mt-5 pt-5 mb-5 pb-5">
            <form onSubmit={handleLogin}>
                <h2 className="text-success">Login Here</h2>
                <input type="email" onBlur={handleEmail} name="" id="" placeholder="email" required/>
                <br />
                <br />
                <input type="password" onBlur={handlePassword} placeholder="password" required/>
                <br />
                <span className="text-danger"></span>
                <br />
                <input className="btn btn-success" type="submit" value="Login" />
                <br /><span></span><br />
                <p>I have no account!<span className="text-primary "><Link to="/register"> Register Here</Link></span></p>
                <Link to="/login">
                <button className="google-logo" onClick={signInUsingGoogle}><img className=" " src={googleLogo} alt="" /></button>
                </Link>
            </form>
        </div>
    );
};

export default Login;