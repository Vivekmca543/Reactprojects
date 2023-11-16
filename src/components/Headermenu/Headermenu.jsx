import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import Contentsmain from "./../Contentsmain/Contentsmain";
import Carditems from "./../Carditems/Carditems";
import Esfeatures from "./../Esfeatures/Esfeatures";
import Home from "./../Home/Home";

import "./Headermenu.css";
const Headermenu = ()=>{
 
    const staticjson = {
        logourl:"./images/logo.svg",
       
    };
  
return(
    <div className="headermenu-container">
        <div className="header-logo">
                <img src={staticjson.logourl} />
        </div>
        <div className="header-menu">
      
            <ul>
                    
            </ul>
             {/* <ul>
               <li><Link to="/">Home</Link></li>
              <li><Link to="/Contentsmain">Contentsmain</Link></li>
               <li><Link to="/Carditems">Carditems</Link></li>
               <li><Link to="/Esfeatures">Esfeatures</Link></li> 
             </ul> */}
           {/* <Routes>
                <Route path="/" element={<Home/>}/>
                 <Route path="/Contentsmain" element={<Contentsmain/>} />
                <Route path="/Carditems" element={<Carditems/>} /> 
                <Route path="/Esfeatures" element={<Esfeatures/>} />
            </Routes>  */}
           
        </div>
    </div>
)
}
export default Headermenu;