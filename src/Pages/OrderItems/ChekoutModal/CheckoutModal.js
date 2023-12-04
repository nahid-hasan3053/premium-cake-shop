import React from 'react';
import { useForm } from "react-hook-form";

const CheckoutModal = ({product}) => {

    const { register, handleSubmit } = useForm();

    const handleOrder = data =>{
        console.log(data);
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
                            <div className="label"><span className="label-text font-semibold">Name</span></div>
                            <input {...register("firstName")} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control">
                            <div className="label"><span className="label-text font-semibold">Email</span></div>
                            <input {...register("email")} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control">
                            <div className="label"><span className="label-text font-semibold">Address</span></div>
                            <input {...register("address")} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control">
                            <div className="label"><span className="label-text font-semibold">Phone</span></div>
                            <input {...register("phone")} type="text" placeholder="Type here" className="input input-bordered w-full" />
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