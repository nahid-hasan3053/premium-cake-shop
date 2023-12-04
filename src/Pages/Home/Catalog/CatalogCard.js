import React from 'react';
import { Link } from 'react-router-dom';

const CatalogCard = ({product, setCakeDetails}) => {

    const {img, title, price, _id} = product

    return (
        <div>
            <div className="card glass shadow-md">
            <figure><img className='h-[300px] w-full object-cover' src={img} alt="cake!"/></figure>
            <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link className="btn btn-outline btn-sm" to={`/orderItems/${_id}`}>Order now</Link>
                    <label onClick={()=>setCakeDetails(product)} htmlFor="catalog-modal" className="btn btn-outline btn-sm">See Details</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CatalogCard;