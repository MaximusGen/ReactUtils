import {AnimatePresence} from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home';
import Slider from './components/slider/Slider';
import ModalDrag from './components/modalDrag/ModalDrag';
import TextAnimation from './components/textAnimation/TextAnimation';
import Filter from './components/filter/Filter';


function App() {

  const location = useLocation();
  return (
     
      <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/slider" element={<Slider/>} />
        <Route path="/modaldrag" element={<ModalDrag/>} />
        <Route path="/textanimation" element={<TextAnimation/>} />
        <Route path="/filter" element={<Filter/>} />
    </Routes>
      </AnimatePresence>

  )
}



export default App
