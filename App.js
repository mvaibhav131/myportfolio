

// import "./style.css";
// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import About from './components/About/About';
// import Footer from './components/Fotter';
// import Projects from './components/Projects/Projects';
// import Home from './components/Home/Home';
// import { Navbar } from "react-bootstrap";
// import ResumeNew from "./components/Resume/ResumeNew";
// import Preloader from "./components/Preloader";



// function App() {
//   return (
//     <div className="App">
//       <Preloader/>
//       <Navbar/>
//      <Home/>
//      <Projects/>
//      <About/>
//      <ResumeNew/>
//      <Footer/>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
// import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Fotter";
import Resume from "./components/Resume/ResumeNew";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
     
        <div className="App">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route exact path="/"        element={<Home key="/"/>} />
            <Route exact path="/project" element={<Projects key="project"/>} />
            <Route exact path="/about"   element={<About key="about"/>} />
            <Route exact path="/resume"  element={<Resume key="resume"/>} />
          </Routes>
          <Footer />
        </div>
   
    </Router>
  );
}

export default App;

