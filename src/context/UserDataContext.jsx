// contexts/UserDataContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// Create context
const UserDataContext = createContext();

// Custom hook to use context
export const useUserData = () => {
  return useContext(UserDataContext);
};

// Context Provider component
export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState(false);
  const [otpVerificationStatus, setOtpVerificationStatus] = useState(false);
  // const navigate = useNavigate();
  // Function to send user data and handle response
  const sendUserData = async (fullname, email, dob, phoneno) => {
    try {
      const response = await axios.post('https://sn-backend.vercel.app/api/v1/user/login',{
        
        fullname,
        email,
        dob,
        phoneno,
        
      });
      // Assuming the response includes a phone number for verification
      const { phoneNumber } = response.data;
      // Set userData and verificationStatus based on API response
      setUserData({ fullname, email, dob, phoneno });
      setVerificationStatus(true); // Proceed to OTP verification
      return phoneNumber;
    } catch (error) {
      console.error('Error sending user data:', error);
      // Handle error (e.g., show error message)
      throw new Error('Failed to send user data');
    }
  };

  // Function to send OTP and handle verification
  const sendOTP = async (otp, phoneNumber) => {
    try {
      const response = await axios.post('https://sn-backend.vercel.app/api/v1/user/verifyotp', {
        otp,
        phoneno: phoneNumber,
      });
      if(response.accesToken){
        setOtpVerificationStatus(true); // OTP verification successful
        // navigate('/otpverified')
        return response.accessToken
      };
      
    } catch (error) {
      console.error('Error verifying OTP:', error);
      // Handle error (e.g., show error message)
      throw new Error('Failed to verify OTP');
    }
  };

  // Value object to be provided by the context
  const value = {
    userData,
    verificationStatus,
    otpVerificationStatus,
    sendUserData,
    sendOTP,
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};
