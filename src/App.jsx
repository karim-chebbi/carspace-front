import React, { Suspense, lazy } from 'react'
import { Routes, Route } from "react-router-dom";
import Loading from './components/Loading';

const NavBar = lazy(()=> import('./components/NavBar')) 
const Home = lazy(()=> import('./pages/Home')) 
const Marketplace  = lazy(()=> import('./pages/Marketplace')) 
const Contact  = lazy(()=> import('./pages/Contact')) 
const Login  = lazy(()=> import('./pages/Login')) 
const Register  = lazy(()=> import('./pages/Register')) 
const Profile  = lazy(()=> import('./pages/Profile')) 
const ErrorPage  = lazy(()=> import('./pages/ErrorPage')) 
const Footer  = lazy(()=> import('./components/Footer')) 
const CarDescription = lazy(() => import("./components/CarDescription")); 

const App = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={ <Loading /> }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/car_description/:id" element={<CarDescription />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App