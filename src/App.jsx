import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import { UserDataProvider } from './context/UserDataContext.jsx'
import { Inputbar } from './components/Inputbar.jsx'
import { Otp } from './components/otp.jsx'
import { OtpVerified } from './components/OtpVerfied.jsx'
import PrivateRoute from './routes/PrivateRoutes.jsx'
import Registration from './pages/Registration.jsx'



const App = () => {
  

  return (
    <UserDataProvider>
    <Routes>
      <Route path='/' element={<Registration/>}>
        <Route index element={<Inputbar/>}/>
        <Route path='/otp' element={<PrivateRoute component={Otp} />}/>
        <Route path='/otpverified' element={<PrivateRoute component={OtpVerified}/>}/>
      </Route>
    </Routes>
 </UserDataProvider>
  )
}
export default App;


