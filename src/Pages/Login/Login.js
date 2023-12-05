import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError,setLoginError] = useState('')
    const {userLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleLogin = data =>{
        userLogin(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .catch(error => {
            setLoginError(error.message)
        })
    }

    return (
            <div className="flex items-center flex-col justify-center my-20">
                <div>
                    <h1 className='text-4xl font-bold'>Login Now</h1>
                </div>
                <div className='w-full mt-4 px-5'>
                    <form className='md:w-2/6 w-full mx-auto shadow-lg p-5' onSubmit={handleSubmit(handleLogin)}>
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Email</span></div>
                        <input {...register("email",
                                {required: 'email is required'}
                        )} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        {errors.email && <p className='text-sm text-red-600 mt-1' role="alert">{errors.email.message}</p>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Password</span></div>
                        <input {...register("password",
                                {required: 'password is required'}
                        )} type="password" placeholder="Type here" className="input input-bordered w-full" />
                        {errors.password && <p className='text-sm text-red-600 mt-1' role="alert">{errors.password.message}</p>}
                        {
                            loginError && <p className='text-sm text-red-600 mt-1'>eamil or password authentication failed!</p>
                        }
                    </label>
                        <input className='btn btn-outline mt-4 w-full' type="submit" value='Login' />
                    </form>
                </div>
            </div>
    );
};

export default Login;