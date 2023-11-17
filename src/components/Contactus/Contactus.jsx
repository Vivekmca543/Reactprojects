import React from "react";
import "./Contactus.css";
import Footer from "./../Footer/Footer";
const Contactus = ()=>{
return (
    <>
    <div className="contactus-container">
        <h4>Contact Us</h4>
        <form>
        <div className="input-felds">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />    
        </div>
        <div className="input-felds">
            <label htmlFor="lastname">LastName</label>
            <input type="text" id="lastname" />    
        </div>
        <div className="input-felds">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />    
        </div>
        <div className="input-felds">
            <label htmlFor="selectcountry">Select country</label>
            <select id="selectcountry">
                    <option>India</option>
                    <option>United states</option>
                    <option>United Nation</option>
                    <option>Canada</option>
            </select>    
        </div>
        <div className="input-felds">
            <label htmlFor="selectstate">Select State</label>
            <select id="selectstate">
                    <option>Andhra Pradesh</option>
                    <option>Haryana</option>
                    <option>manipur</option>
                    <option>Sikkim</option>
                    <option>Tamilnadu</option>
            </select>    
        </div>
        <button>Submit</button>
        </form>
    </div>
    <Footer />
    </>
)
}
export default Contactus;