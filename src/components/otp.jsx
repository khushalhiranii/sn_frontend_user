import React, { useState } from 'react';
import { useUserData } from '../context/UserDataContext';
import { useNavigate } from 'react-router-dom';

export const Otp = ()=> {
  const [otp, setotp] = useState('')
  // Function to handle input and allow only numbers
  const handleInputChange = (e) => {
    const { value } = e.target;
    setotp(otp + e.target.value)
    // Restrict input to numbers only
    e.target.value = value.replace(/\D/g, '');
  };

  const { sendOTP } = useUserData()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call sendUserData function from context
      console.log(otp)
      const response = await sendOTP(otp);
      if(response.accessToken){
        navigate('/otpverified')
      }
      
      
      // Proceed to OTP verification step
      // Implement your logic here (e.g., navigate to OTP verification screen)
    } catch (error) {
      console.error('Failed to send user data:', error.message);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <div className="text-center">
          <img
            className="w-16 h-16 mx-auto rounded-full"
            src="/sn.png"
            alt=""
          />
          <h1 className="text-xl font-semibold mt-4">Phone Verification</h1>
        </div>
        <div className="mt-6">
          <div className="flex justify-center gap-4">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                onInput={handleInputChange}
                
              />
            ))}
          </div>
          <div className="text-center mt-4">
            <p>Didn’t you receive the OTP?</p>
            <button className="text-red-500 font-medium hover:text-red-600">
              Resend Code
            </button>
          </div>
          <button onClick={handleSubmit} className="mt-6 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg w-full focus:outline-none">
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  );
}

