import React from 'react';

const Doctor = ({doctor}) => {
    const{name,details,phone,img} = doctor;
    return (
        <div>
              <div className="">
                    <div className="single-service p-3">
                       <img className="img-section" src={img} alt="" />
                        <h2 className="text-primary">{name}</h2>
                        <p className="text-secondary">Phone: {phone}</p>
                        <p>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;