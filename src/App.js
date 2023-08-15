import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Card from "./components/card";


const App = () => {
  return (
    <Router>
      <Navbar />
     
      
      <Home/>
      <About />
       

       <Services />
       <Contact />
      <Footer />
      {/* <Card/> */}
      
      {/* <Home/> */}
      

     
    </Router>
  );
};

export default App;
