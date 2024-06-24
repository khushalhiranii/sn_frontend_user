import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { UserDataProvider } from './context/UserDataContext.jsx'
import { Inputbar } from './components/Inputbar.jsx'
import { Otp } from './components/otp.jsx'
import { OtpVerified } from './components/OtpVerfied.jsx'
import App from './App.jsx'
import PrivateRoute from './routes/PrivateRoutes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserDataProvider>
  <Router>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Inputbar/>}/>
        <Route path='/otp' element={<Otp/>}/>
        <Route path='/otpverified' element={<PrivateRoute component={OtpVerified}/>}/>
      </Route>
    </Routes>
  </Router>
 </UserDataProvider>
)