import React from 'react';
import './VideoFile.css';
const VideoFile = ()=>{
    return(
        <div className="video-container m-3">
            <video autoplay="autoplay" muted="muted" loop="loop">
                <source src="./acadamy.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
export default VideoFile;