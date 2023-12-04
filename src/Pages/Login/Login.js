import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const {userLogin} = useContext(AuthContext)

    const handleLogin = data =>{
        userLogin(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
            <div className="flex items-center flex-col justify-center my-20">
                <div>
                    <h1 className='text-4xl font-bold'>Login Now</h1>
                </div>
                <div className='w-full mt-4 '>
                    <form className='w-2/6 mx-auto shadow-lg p-5' onSubmit={handleSubmit(handleLogin)}>
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Email</span></div>
                        <input {...register("email")} type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Password</span></div>
                        <input {...register("password")} type="password" placeholder="Type here" className="input input-bordered w-full" />
                    </label>
                        <input className='btn btn-outline mt-4 w-full' type="submit" />
                    </form>
                </div>
            </div>
    );
};

export default Login;