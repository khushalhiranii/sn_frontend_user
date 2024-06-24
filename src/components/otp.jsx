import React from 'react';
import { useEffect, useRef, useState }
	from "react";
import { useUserData } from '../context/UserDataContext';
import { useNavigate } from 'react-router-dom';

export const Otp = ({ length = 6
    // ,
	// onOtpSubmit = (nalotp) => { 
    //     console.log(nalotp)
    // } 
}) => {
        const [finalOtp, setFinalOtp] = useState('')
	const [otp, setOtp] = useState(
		new Array(length).fill(""));
	const inputRefs = useRef([]);

	useEffect(() => {
		if (inputRefs.current[0]) {
			inputRefs.current[0].focus();
		}
	}, []);

	const handleChange = (index, e) => {
		const value = e.target.value;
		if (isNaN(value)) return;

		const newOtp = [...otp];
		// allow only one input
		newOtp[index] =
			value.substring(value.length - 1);
		setOtp(newOtp);

		// submit trigger
		const combinedOtp = newOtp.join("");
		if (combinedOtp.length === length){
			// onOtpSubmit(combinedOtp);
            setFinalOtp(combinedOtp);
        }

		// Move to next input if current field is filled
		if (value && index < length - 1 &&
			inputRefs.current[index + 1]) {
			inputRefs.current[index + 1].focus();
		}
	};

	const handleClick = (index) => {
		inputRefs.current[index].setSelectionRange(1, 1);

		// optional
		if (index > 0 && !otp[index - 1]) {
			inputRefs.current[otp.indexOf("")].focus();
		}
	};

	const handleKeyDown = (index, e) => {
		if (
			e.key === "Backspace" &&
			!otp[index] &&
			index > 0 &&
			inputRefs.current[index - 1]
		) {
			// Move focus to the previous input field on backspace
			inputRefs.current[index - 1].focus();
		}
	};


  const { sendOTP } = useUserData()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call sendUserData function from context
      console.log(finalOtp)
      const response = await sendOTP(finalOtp);
      console.log(response)
      if(response){
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
          {otp.map((value, index) => {
				return (
					<input
						key={index}
						type="text"
						ref={(input) => (inputRefs.current[index] = input)}
						value={value}
						onChange={(e) => handleChange(index, e)}
						onClick={() => handleClick(index)}
						onKeyDown={(e) => handleKeyDown(index, e)}
						className="w-9 h-10 text-2xl text-center border-2 border-gray-300 rounded-md"
					/>
				);
			})}
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

