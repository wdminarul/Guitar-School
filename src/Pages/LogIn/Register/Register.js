import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import googleLogo from"../../../images/google.png"
import "./Register.css"

const Register = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState();
    const {signUpUsingEmail,signInUsingGoogle,error} =useAuth()
    const handleEmail=e=>{
        setEmail(e.target.value)
    }
    const handlePassword =e =>{
        setPassword(e.target.value)
    }
    
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
       
        signUpUsingEmail(email,password)
    
      }
    return (
        <div className="main-form mt-5 pt-5 mb-5 pb-5">
            <form onSubmit={handleRegistration}>
                <h2 className="text-success">Register</h2>
                <input type="email" name="" id="" onBlur={handleEmail} placeholder="email" />
                <br />
                <br />
                <input type="password" onBlur={handlePassword}  placeholder="password"/>
                <br />
                <span className="text-danger">{error}</span>
                <br />
                <input className="btn btn-success" type="submit" value="Register" />
                <br /><br />
                <p>already have an account?<span className="text-primary "><Link to="/login"> Login</Link></span></p>
                <button className=" google-logo"  onClick={signInUsingGoogle}><img  src={googleLogo} alt="" /></button>
            </form>
        </div>
    );
};

export default Register;