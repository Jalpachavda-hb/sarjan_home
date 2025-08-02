import React, { useState } from "react";
import vidiobg from "../../assets/img/vidiobg.jpg";
import playIcon from "../../assets/img/bg/video-play.png";


const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => {
    setIsOpen(true);
  };

  const closeVideo = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="video-section container">
        <div className="video-left">
          <img src={vidiobg} alt="Sarjan Homes" className="haircut-img" />
          <div className="play-button" onClick={openVideo}>
            <img src={playIcon} alt="Play" className="pulse" />
          </div>
        </div>
        <div className="video-right">
          <h2 className="projectvidiotitle">Project Highlights</h2>
          <p className="description">
            Watch a stunning aerial view of Sarjan Homes — showcasing premium flat
            layouts, open green zones, and modern elevation.
          </p>
          <ul className="video-features">
            <li className="Vidio-li"> Prime Location Connectivity</li>
            <li className="Vidio-li"> High-Rise Flat Layout with Sky View</li>
            <li className="Vidio-li"> Landscaped Gardens & Open Spaces</li>
            <li className="Vidio-li"> Clubhouse, Gym & Swimming Pool</li>
            <li className="Vidio-li"> 24x7 Security with Gated Entry</li>
          </ul>
          <button className="booking-btn">
            View Project Details &nbsp; &raquo;
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
  <div className="video-modal-overlay" onClick={closeVideo}>
    <div className="video-modal" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={closeVideo}>&times;</button>
      <div className="video-container">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/mDq5OvDkesk?autoplay=1"
          title="Sarjan Homes Walkthrough"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default VideoSection;
         