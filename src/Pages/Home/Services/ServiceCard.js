import React from 'react';

const ServiceCard = ({service}) => {

    const {icon, title} = service

    return (
        <div className="card shadow-xl">
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl w-1/2 mx-auto" />
            </figure>
                <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
        </div>
    );
};

export default ServiceCard;