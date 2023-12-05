import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        return  <div>
                    <span className="loading loading-ball loading-md"></span>
                    <span className="loading loading-ball loading-md"></span>
                    <span className="loading loading-ball loading-md"></span>
                </div>
    }

    if(user){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;