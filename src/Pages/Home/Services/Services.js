import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    console.log(services)
    return (
        <div className="mt-5 mb-5 pb-3 services-main" id="services">
            <h2 className="text-center text-success">Services</h2>
            <div className="service-container container">
            {
                services.map(service=><Service key={service.key} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;