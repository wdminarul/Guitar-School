import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({service}) => {
    const {title,img,details,key}=service;
    return (
        <div className="">
                    <div className="single-service p-3">
                       <img className="img-section" src={img} alt="" />
                        <h2>{title}</h2>
                        <p>{details}</p>
                        <Link to={`/booking/${key}`}>
                        <button className="btn btn-success">Booking Service</button>
                        </Link>
                </div>
            </div>
    );
};

export default Service;