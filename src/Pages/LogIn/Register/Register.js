import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import googleLogo from"../../../images/google.png"
import "./Register.css"

const Register = () => {
    const [email,setEmail]=useState({});
    const [password,setPassword]=useState({});
    const {signUpUsingEmail,signInUsingGoogle} =useAuth()
    const [error,setError] =useState('')
    const handleEmail=e=>{
        setEmail(e.target.value)
    }
    const handlePassword =e =>{
        setPassword(e.target.value)
    }
    // registation button 
    const handleRegistration = e => {
        e.preventDefault();
        if(password.length <6){
            setError('Password must be at least 6 charecter long.')
            return;
          }
          if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(password)){
            setError('Password must be write with rules a-z,A-Z,0-9')
            return;
          }
        // console.log(email, password);
       
        signUpUsingEmail(email,password)
    
      }
    return (
        <div className="main-form mt-5 pt-5 mb-5 pb-5">
            <form onSubmit={handleRegistration}>
                <h2 className="text-success">Register</h2>
                <input type="email" name="" id="" onBlur={handleEmail} placeholder="email" required/>
                <br />
                <br />
                <input type="password" onBlur={handlePassword}  placeholder="password" required/>
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