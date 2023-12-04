import React from 'react';
import Banner from '../Banner/Banner';
import Catalog from '../Catalog/Catalog';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catalog></Catalog>
            <Services></Services>
        </div>
    );
};

export default Home;