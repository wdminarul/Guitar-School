import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import "./Doctors.css"
const Doctors = () => {
    const [doctors,setDoctors]=useState([])
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div>
            <div className="mt-5 mb-5 pb-3 services-main" id="services">
            <h2 className="text-center text-success">Doctorrs</h2>
            <div className="main-container container text-center">
            {
                doctors.map(doctor=><Doctor key={doctor.key} doctor={doctor}></Doctor>)
            }
            </div>
        </div>
        </div>
    );
};

export default Doctors;