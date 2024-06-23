// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserData } from '../context/UserDataContext';

const PrivateRoute = ({ component: Component, condition }) => {
   const { userData, otpVerificationStatus }  = useUserData()
//   console.log(isAuthenticated)
    if((userData && userData === condition) || (otpVerificationStatus && otpVerificationStatus === condition )){
        return(
            <Component/>
        )
    }else{
        return <Navigate to="/" replace />
    }
    

//   return (
//         userData ? (
//           <Component />
//         ) : (
//             <Navigate to="/" replace />
//         )
//   )
}
export default PrivateRoute;
