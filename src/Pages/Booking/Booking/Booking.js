import React, { useEffect, useState } from 'react';
import {  useHistory, useParams } from 'react-router';
import "./booking.css"

const Booking = () => {
    const  {serviceid}= useParams();
    const [details,setDetails] =useState([]);
    // const [user,setUser]=useState([])
    const history =useHistory();
    const back =()=>{
        history.push("/home")
    }
 
    
    console.log(details)
    useEffect(()=>{
        fetch("/service.json")
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[serviceid])
    // useEffect(()=>{
        
    //     setUser(medicalPluss)
    // },[details])
    const medicalPluss = details?.find(ds=>ds?.keys  == serviceid)
    return (
        <div>
            <div className="container mt-5 mb-5 ">
                <div className="row">
                    <div className="col-md-6 img-ses">
                        <img className="img-fluid" src={medicalPluss?.img} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="text-success">
                            {medicalPluss?.title}
                        </h1>
                        <p>{medicalPluss?.description}</p>
                        <br/>
                        <button className="btn btn-success" onClick={back} >Booking Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;