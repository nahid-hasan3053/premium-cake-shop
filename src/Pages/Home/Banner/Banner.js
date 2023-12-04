import React from 'react';
import banner from '../../../assets/banner/banner.jpg'

const Banner = () => {
    return (
        <div className="hero mt-10 mb-20 bg-secondary">
            <div className="hero-content flex-col lg:flex-row">
                <img alt='' src={banner} className="md:w-1/2 rounded-lg shadow-2xl" />
                <div className='md:ms-4'>
                    <h1 className="text-5xl font-bold">Premium cake shop!</h1>
                    <p className="py-6">Welcome to Sweet Delights Homemade Cake Shop, where every bite tells a story of love and passion! Nestled in the heart of Dhaka, our charming little bakery is a haven for cake enthusiasts seeking delightful treats made with care and creativity.</p>
                    <button className="btn btn-primary">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;