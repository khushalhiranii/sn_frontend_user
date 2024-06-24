import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../context/UserDataContext';

export const Inputbar = ()=> {
  const { sendUserData } = useUserData();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call sendUserData function from context
      const phoneNumber = await sendUserData(name, email, dob, phone);
      // console.log('Received phone number:', phoneNumber);
      navigate('/otp')
      // Proceed to OTP verification step
      // Implement your logic here (e.g., navigate to OTP verification screen)
    } catch (error) {
      console.error('Failed to send user data:', error.message);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] mq750:gap-[1rem]">
            <div className="flex flex-row items-center justify-center gap-[1.5rem] mq450:flex-wrap">
              <img
                className="h-[4rem] w-[4rem] relative rounded-981xl object-cover"
                loading="lazy"
                alt=""
                src="/sn.png"
              />
              <h2 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                Registration
              </h2>
            </div>
        <form className="self-stretch flex flex-col items-start justify-start gap-6 md:gap-4">
          <div className="flex flex-col md:flex-row items-start justify-start gap-4 md:gap-2">
            <label htmlFor="fullName" className="min-w-[3.938rem] text-sm text-black">
              Full Name
            </label>
            <input
              id="fullName"
              className="w-full rounded-lg py-2 px-3 border border-gray-300 focus:border-black focus:outline-none"
              type="text"
              placeholder="Enter your full name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row items-start justify-start gap-4 md:gap-2">
            <label htmlFor="email" className="min-w-[3.938rem] text-sm text-black">
              E-mail
            </label>
            <input
              id="email"
              className="w-full rounded-lg py-2 px-3 border border-gray-300 focus:border-black focus:outline-none"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row items-start justify-start gap-4 md:gap-2">
            <label htmlFor="dob" className="min-w-[3.938rem] text-sm text-black">
              Date of Birth
            </label>
            <input
              id="dob"
              className="w-full rounded-lg py-2 px-3 border border-gray-300 focus:border-black focus:outline-none"
              type="date"
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row items-start justify-start gap-4 md:gap-2">
            <label htmlFor="phone" className="min-w-[3.938rem] text-sm text-black">
              Phone No
            </label>
            <input
              id="phone"
              className="w-full rounded-lg py-2 px-3 border border-gray-300 focus:border-black focus:outline-none"
              type="tel"
              placeholder="Enter your phone number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button onClick={handleSubmit} className="self-center py-2 px-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 focus:outline-none">
            Get OTP
          </button>
        </form>
        </div>
    </div>
  )
}
