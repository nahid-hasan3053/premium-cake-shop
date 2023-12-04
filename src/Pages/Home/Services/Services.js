import React from 'react';
import qulity from '../../../assets/icon/quality.png'
import taste from '../../../assets/icon/taste.png'
import delivary from '../../../assets/icon/delivary.png'
import ServiceCard from './ServiceCard';

const Services = () => {

    const services = [
        {
            id: 1,
            icon: qulity,
            title: "Premium quality cake"
        },
        {
            id: 2,
            icon: taste,
            title: "Best taste"
        },
        {
            id: 3,
            icon: delivary,
            title: "Fastest delivary"
        }
    ]

    return (
        <div className='mx-14 mt-20'>
            <h1 className='text-4xl mb-10 font-bold text-center'>WHAT WE OFFER!</h1>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;