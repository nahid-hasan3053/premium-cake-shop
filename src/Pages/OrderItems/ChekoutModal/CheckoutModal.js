import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const CheckoutModal = ({product}) => {

    const { register, handleSubmit } = useForm();

    const {user} = useContext(AuthContext)

    const handleOrder = data =>{

        const order = {
            product_name: data.order,
            customer: data.name,
            email: data.email,
            address: data.address,
            phone: data.phone,
            message: data.message
        }
        console.log(order);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Your order placed successfully')
            }
        })
    }

    return (
        <div>
            <input type="checkbox" id="checkout-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                        <div className="avatar">
                            <div className="w-16 rounded">
                                <img src={product.img} alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div>
                        <h3 className="font-bold text-lg">{product.title}</h3>
                    <form onSubmit={handleSubmit(handleOrder)}>
                        <label className="form-control">
                            <div className="label"><span className="label-text font-semibold">Order Item</span></div>
                            <input {...register("order")} type="text" placeholder="Type here" className="input input-bordered w-full" value={product.title} readOnly />
                        </label>
                        <label className="form-control">
                            <div className="label"><span className="label-text font-semibold">Your Name</span></div>
                            <input {...register("name")} type="text" value={user?.displayName} readOnly placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control">
                            <div className="label"><span className="label-text font-semibold">Email</span></div>
                            <input {...register("email")} value={user?.email} readOnly type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control">
                            <div className="label"><span className="label-text font-semibold">Address</span></div>
                            <input {...register("address")} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control">
                            <div className="label"><span className="label-text font-semibold">Phone</span></div>
                            <input {...register("phone")} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control">
                        <div className="label">
                            <span className="label-text font-semibold">Your message</span>
                        </div>
                             <textarea {...register("message")} className="textarea textarea-bordered h-24" placeholder="Type your preference"></textarea>
                        </label>
                        <input className='btn btn-outline mt-4 w-full' type="submit" />
                        <div className="modal-action">
                            <label htmlFor="checkout-modal" className="btn">Close!</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;