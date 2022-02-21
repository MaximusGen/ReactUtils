import "./App.css";
import {
  NavLink,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from './About/About';
import Settings from './Settings/Settings';
import Home from './Home/Home';


function App() {

  const location = useLocation();
  return (
<div className="container-fluid bg-light" style={{ height: "100%" }}>
      <div className="row">
        <nav
          className="col-6 col-sm-4 col-md-2 bg-dark py-5"
          style={{ height: "150vh", zIndex: 1000 }}
        >
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink to="/"  className="nav-link text-white">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about"  className="nav-link text-white">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/settings"  className="nav-link text-white">
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
        <main className="col-6 col-sm-8 col-md-10 py-5"
        style={{overflowX:"hidden", position: "relative"}}
        >
          <AnimatePresence>
              <Routes location={location} key={location.pathname}>
                <Route path="/about" element={<About />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/" element={<Home />} />
              </Routes>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export const pageVariants = {
  initial: {
   opacity: 0,
   x: "-100vh",
   scale: 0.8
  },
 in: {
   opacity: 1,
   x: 0,
   scale: 1
 },
 out: {
   opacity: 0,
   x: "100vh",
   scale: 1.2
 },
};

export const pageTransition ={
 type: "tween",
 ease: "anticipate",
 duration: 1
};

export const pageStyles = {
 position: "absolute",
}

export default App
