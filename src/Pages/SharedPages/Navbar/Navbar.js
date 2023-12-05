import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }

    const menueItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li> 
        <li className='font-semibold'><Link to='/catalog'>Catalog</Link></li> 
        <li className='font-semibold'><Link to='/order'>Order</Link></li> 
        <li className='font-semibold'><Link to='/contact'>Contact</Link></li>  
            {
                user?.uid?
                    <li onClick={handleLogOut} className='font-semibold'><Link>Logout</Link></li>  
                :
                <>
                    <li className='font-semibold'><Link to='/login'>Login</Link></li>  
                    <li className='font-semibold'><Link to='/register'>Register</Link></li>
                </>
            }
         </>


    return (
        <div className="navbar rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {menueItems}
                </ul>
                </div>
                <Link className="btn btn-ghost text-xl">Premium Bake Shop</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menueItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;