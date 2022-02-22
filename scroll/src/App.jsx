import {Routes, Route, useLocation} from 'react-router-dom'
import './App.css'
import {AnimatePresence} from 'framer-motion'
import Home from './pages/Home/Home';
import ScrollFull from './pages/ScrollFull/ScrollFull';

function App() {
   const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/scrollfull" element={<ScrollFull/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
