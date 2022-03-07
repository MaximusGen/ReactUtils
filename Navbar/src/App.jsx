import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import NavbarResponsive from './pages/navbarResponsive/NavbarResponsive';
import NavTransitions from './pages/NavTransition/NavTransitions';
import NavTransitionRight from './pages/NavTransitionRight/NavTransitionRight';

const App = () => {

  return (
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/navbar" element={<NavbarResponsive/>} />
         <Route path="/navtransition" element={<NavTransitions/>} />
         <Route path="/navtransitionright" element={<NavTransitionRight/>} />
      </Routes>  
  )
}

export default App
