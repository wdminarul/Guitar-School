import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            {/* banner for use home banner  */}
            <Banner></Banner>
            {/* 6 services use on home  */}
            <Services></Services>
        </div>
    );
};

export default Home;