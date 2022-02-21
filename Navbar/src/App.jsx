import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Navbar1 from './pages/navbar1/Navbar1';
import Navbar2 from './pages/navbar2/Navbar2';
import Sidenav from './pages/sidenav/Sidenav';
import Navbar3 from './pages/navbar3/Navbar3';

const App = () => {

  return (
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/navbar1" element={<Navbar1/>} />
         <Route path="/navbar2" element={<Navbar2/>} />
         <Route path="/navbar3" element={<Navbar3/>} />
         <Route path="/sidenav" element={<Sidenav/>} />
      </Routes>  
  )
}

export default App
