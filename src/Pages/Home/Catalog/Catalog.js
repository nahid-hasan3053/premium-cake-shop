import React, { useEffect, useState } from 'react';
import CatalogCard from './CatalogCard';
import CatalogModal from '../CatalogModal/CatalogModal';

const Catalog = () => {

    const [products, setProducts] = useState([])
    const [cakeDetails , setCakeDetails] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:5000/catalog')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])

    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>OUR PREMIUM COLLECTION</h1>
            <div className='grid md:grid-cols-3 gap-6 mt-16 m-8'>
                {
                    products.map(product => <CatalogCard key={product._id} product={product} setCakeDetails={setCakeDetails}></CatalogCard>)
                }
            </div>
            {   cakeDetails &&
                <CatalogModal cakeDetails={cakeDetails}></CatalogModal>}
        </div>
    );
};

export default Catalog;