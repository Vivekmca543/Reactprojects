import React from 'react';
import './Contentsmain.css';
import Footer from "./../Footer/Footer";
const Contentsmain = ()=>{
    const staticjson = {
        h4content: "Fusion VR - AR, VR and MR Company in India",
        para:"Fusion VR is India’s leading Customer Focused VR, AR and Industry 4.0 solutions company that is focused on helping businesses in their Digital-Transformation journeys. We handhold companies deploying the Industry 4.0 suite of Virtual Reality (VR), Augmented Reality (AR), Mixed Reality (MR) and Digital Twins (DT) technologies. We are also one of India’s leading VR / AR companies actively supporting the development and implementation of these technologies in the industrial sectors. We also engage with various stakeholders to help unlock the potential of the Immersive Metaverse.",
    }
    return(
        <>
        <div className="content-main">
            <div className="left-content">
            <h4>{staticjson.h4content}</h4>
            <p>{staticjson.para}</p>
            </div>
            <div className="right-content">
                <img src="./images/company-profile.webp" />
        </div>
        </div>
        <Footer />
        </>
    )
}
export default Contentsmain;