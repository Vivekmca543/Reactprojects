import React from "react";
import './Home.css';
import VideoFile from './../VideoFile/VideoFile';
import Contentsmain from "./../Contentsmain/Contentsmain";
import Carditems from "./../Carditems/Carditems";
import Headermenu from "./../Headermenu/Headermenu";
import Footer from "./../Footer/Footer";

const Home = ()=>{
    return(
        <div>   
           <VideoFile />
            <div className="container">
            <Contentsmain/>
            <div className="card-content">
            <Carditems/>
            </div>         
            </div>
            <Footer />
        </div>
    )
}
export default Home;