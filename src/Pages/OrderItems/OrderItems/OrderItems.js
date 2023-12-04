import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const OrderItems = () => {
    
    const product = useLoaderData();
    const {flavour, title, img, description, review, price} = product

    return (
        <div className='my-14'>
            <div className="card card-side md:w-8/12 px-3  md:mx-auto bg-base-100 shadow-xl flex-col md:flex-row">
                <figure><img src={img} className='md:h-[400px] p-2' alt="Movie"/></figure>
                <div className="card-body md:w-1/2">
                    <div>
                        <h2 className="card-title md:text-3xl">{title}</h2>
                        <p className='font-semibold text-xl mt-2'>Flavour: {flavour}</p>
                        <p className='font-semibold text-xl'>Price: {price}tk</p>
                        <p className='my-2'>{description}</p>
                    </div>
                    <p className="flex items-center"><div className='flex'><FaStar></FaStar ><FaStar></FaStar><FaStar></FaStar></div>{review}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Chekout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderItems;