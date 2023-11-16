import React from 'react';
import './index.css';


import Footer from "./../components/Footer/Footer";
// import Headermenu from "./../components/Headermenu/Headermenu";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import Contentsmain from "./../components/Contentsmain/Contentsmain";
import Carditems from "./../components/Carditems/Carditems";
import Esfeatures2 from "./../components/Esfeatures/Esfeatures";
import Home from "./../components/Home/Home";
import Contactus from "./../components/Contactus/Contactus";


// Put any other imports below so that CSS from your
// components takes precedence over default styles.
export default function App() {
    const staticjson = {
        logourl:"./images/logo.svg",
       
    };
    return (
    <> 
        <Router> 
           
            <div className="headermenu-container">
        <div className="header-logo">
                <img src={staticjson.logourl} />
        </div>
        <div className="header-menu">
            <ul>
            <li> 
                <Link to="/">Home</Link> 
            </li> 
            <li> 
                <Link to="/Contentsmain">Contentsmain</Link> 
            </li> 
            <li> 
                <Link to="/Carditems">Carditems</Link> 
            </li> 
            <li>
                <Link to="/Esfeatures">Esfeatures</Link>
            </li>     
            <li>
                <Link to="/Contactus">Contactus</Link>
            </li>
            </ul>           
        </div>
    </div>
        <Routes> 
                <Route exact path='/' element={< Home />}></Route> 
                <Route exact path='/Contentsmain' element={< Contentsmain />}></Route> 
                <Route exact path='/Carditems' element={< Carditems />}></Route> 
                <Route exact path="/Contactus" element={< Contactus />}></Route>
                <Route exact path="/Esfeatures" element={< Esfeatures2 />}></Route>
        </Routes>  
    </Router> 
    </> 
    );
}

