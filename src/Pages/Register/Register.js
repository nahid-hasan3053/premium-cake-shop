import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const {createUser, updateUser} = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')

    const handleRegister = data =>{
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user
            console.log(user);
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{
                toast.success('User created successfully')
            })
            .catch(error => console.log(error))
        })
        .catch(error => {
            console.log(error)
            setRegisterError(error.message)
        })
    }


    return (
            <div className="flex items-center flex-col justify-center my-20">
                <div>
                    <h1 className='text-4xl font-bold'>Register Now</h1>
                </div>
                <div className='w-full mt-4 px-5 '>
                    <form className='md:w-2/6 w-full mx-auto shadow-lg p-5' onSubmit={handleSubmit(handleRegister)}>
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Name</span></div>
                        <input {...register("name", {required: 'name is required'})} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600 mt-1 text-sm' role="alert">{errors.name.message}</p>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Email</span></div>
                        <input {...register("email", {required: 'email is required'})} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600 mt-1 text-sm' role="alert">{errors.email.message}</p>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Password</span></div>
                        <input {...register("password", 
                        {required: 'password is required', 
                        minLength: {value: 6, message: 'Password should be 6 character'},
                        pattern: {value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'choose strong password with special character'}})} type="password" placeholder="Type here" className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600 mt-1 text-sm' role="alert">{errors.password.message}</p>}
                        {
                            registerError && <p className='text-sm text-red-600 mt-1'>registration failed try again</p>
                        }
                        
                    </label>
                        <input className='btn btn-outline mt-4 w-full' value='Register' type="submit" />
                    </form>
                </div>
            </div>
    );
};

export default Register;