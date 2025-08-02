import React, { useState } from "react";
import {FaShieldAlt } from "react-icons/fa";
import { FaRegGem } from "react-icons/fa";
import buildingImage from "../../assets/img/Group2.png";
import videoImage from "../../assets/img/bg/video-play.png";
import { MdOutlineHome } from "react-icons/md";
import { PiTreeEvergreenBold } from "react-icons/pi"; 
const Aboutsection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  return (
    <>
     <span className="container section-title d-block mb-4 mt-5">
       About us
      </span>
      <p className="para container">Dream Living Space Setting New Standards</p>
      <div className="container d-flex flex-wrap align-items-center justify-content-between">
        {/* Left Text Section */}
        <div className="col-md-6 mb-4">
        
          <h2 className="abouttitle">
            The Leading Real Estate <br />
            Rental Marketplace<span className="text-danger"></span>
          </h2>
          <p className="text-muted para">
            We are a trusted real estate company committed to turning your dream
            of owning a perfect home into reality. With a passion for creating
            comfortable living spaces, we offer the best properties to suit your
            lifestyle and budget.
          </p>

          <div className="row mt-4">
            <div className="col-6 d-flex align-items-center mb-3">
              <MdOutlineHome className=" iconcolor  me-2 " />
             
              <span className="icondescription">Smart Home Design</span>
            </div>
            <div className="col-6 d-flex align-items-center mb-3">
              <PiTreeEvergreenBold className="iconcolor  me-2" />
              <span className="icondescription">Beautiful Scene Around</span>
            </div>
            <div className="col-6 d-flex align-items-center mb-3">
              <FaRegGem  className="iconcolor  me-2" />
              <span className="icondescription">Exceptional Lifestyle</span>
            </div>
            <div className="col-6 d-flex align-items-center mb-3">
              <FaShieldAlt className="iconcolor  me-2" />
              <span className="icondescription">Complete 24/7 Security</span>
            </div>
          </div>

         
        </div>

        {/* Right Image + Play Button Section */}
        <div className="col-md-6 position-relative video-left">
          <img src={buildingImage} alt="Building" className="img-fluid rounded" />
          <div
            className="position-absolute  play-button"
            onClick={openVideo}
          >
            <img src={videoImage} alt="Play" className="pulse" />
          </div>
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

export default Aboutsection;
