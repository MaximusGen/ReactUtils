import {Routes, Route, useLocation} from 'react-router-dom'
import './App.css'
import {AnimatePresence} from 'framer-motion'
import Home from './pages/Home/Home';
import ScrollFull from './pages/ScrollFull/ScrollFull';
import ScrollX from './pages/ScrollX/ScrollX';
import ReactScroll from './pages/ReactScrollAnimation/ReactScroll';
import TestContainer from './pages/Test/TestContainer';

function App() {
   const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/scrollfull" element={<ScrollFull/>} />
        <Route path="/scrollx" element={<ScrollX/>} />
        <Route path="/reactscroll" element={<ReactScroll/>} />
        <Route path="/test" element={<TestContainer/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
