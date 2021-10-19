
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./booking.css"

const Booking = () => {
    const  {serviceid} = useParams();
    const [details,setDetails] =useState([]);
    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch("/service.json")
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[serviceid])
    useEffect(()=>{
        const medicalPluss = details.find(ds=>ds?.key === serviceid)
        setUser(medicalPluss)
    },[details])
    return (
        <div>
            <div className="container mt-5 mb-5 ">
                <div className="row">
                    <div className="col-md-6 img-ses">
                        <img classNme="img-fluid" src={user?.img} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="text-success">
                            {user?.title}
                        </h1>
                        <p>{user?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;