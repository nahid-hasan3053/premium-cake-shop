import React from 'react';
import { FaBeer, FaStar } from "react-icons/fa";

const CatalogModal = ({cakeDetails}) => {

    const {img, title, price, flavour, netweight, review} = cakeDetails

    return (
        <div>
            <input type="checkbox" id="catalog-modal" className="modal-toggle" />
            <div className="modal mx-auto" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <img className='h-[300px] rounded-md object-cover w-11/12 mt-2 mx-auto' src={img} alt="" />
                    <p className="mt-2 flex items-center"><div className='flex mr-1'><FaStar></FaStar ><FaStar></FaStar><FaStar></FaStar></div>{review}</p>
                    <p>Flavour: {flavour}</p>
                    <p>Net weight: {netweight}</p>
                    <p className='text-xl font-semibold'>Price: {price}tk</p>
                    <div className="modal-action">
                    <label htmlFor="catalog-modal" className="btn btn-sm btn-outline">CLOSE!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogModal;