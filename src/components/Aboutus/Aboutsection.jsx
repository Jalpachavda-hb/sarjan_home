import React, { useEffect, useState } from "react";
import { FaShieldAlt, FaRegGem } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { PiTreeEvergreenBold } from "react-icons/pi";
import videoImage from "../../assets/img/bg/video-play.png";
import { getaboutusmain } from "../../utils/Api_path";
import "../Home/Hero.css";
const Aboutsection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  // OPEN/CLOSE VIDEO
  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  // Convert URL to EMBED FORMAT
  const convertToEmbedUrl = (url) => {
    if (!url) return "https://www.youtube.com/embed/mDq5OvDkesk";

    // Convert normal YouTube watch links into embed link
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }

    // Convert youtu.be short links
    if (url.includes("youtu.be")) {
      const videoId = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // If already embed, return as-is
    if (url.includes("embed")) return url;

    return "https://www.youtube.com/embed/mDq5OvDkesk";
  };

  // Fetch About Us Data
  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const data = await getaboutusmain();

      if (data) {
        setHeader(data.header || "");
        setDescription(data.description || "");
        setImage(data.image || "");
        setYoutubeLink(convertToEmbedUrl(data.youtube_link));
      }
    } catch (err) {
      console.error("Failed to load About us section:", err);
    }
  };

  return (
    <>
      <span className="container section-title d-block mb-4 mt-5">
        About us
      </span>

      {/* Dynamic Header */}
      <p className="para container">{header}</p>

      <div className="container d-flex flex-wrap align-items-center justify-content-between">
        {/* -------- LEFT SECTION: TEXT -------- */}
        <div className="col-md-6 mb-4">
          <h2 className="abouttitle">{header}</h2>

          <p className="text-muted para">{description}</p>

          {/* Static Features */}
          <div className="row mt-4">
            <div className="col-6 d-flex align-items-center mb-3">
              <MdOutlineHome className="iconcolor me-2" />
              <span className="icondescription">Smart Home Design</span>
            </div>

            <div className="col-6 d-flex align-items-center mb-3">
              <PiTreeEvergreenBold className="iconcolor me-2" />
              <span className="icondescription">Beautiful Scene Around</span>
            </div>

            <div className="col-6 d-flex align-items-center mb-3">
              <FaRegGem className="iconcolor me-2" />
              <span className="icondescription">Exceptional Lifestyle</span>
            </div>

            <div className="col-6 d-flex align-items-center mb-3">
              <FaShieldAlt className="iconcolor me-2" />
              <span className="icondescription">Complete 24/7 Security</span>
            </div>
          </div>
        </div>

        {/* -------- RIGHT SECTION: Image + Play Button -------- */}
        <div className="col-md-6 position-relative video-left">
          <img src={image} alt="Building" className="img-fluid rounded" />

          <div className="position-absolute play-button" onClick={openVideo}>
            <img src={videoImage} alt="Play" className="pulse" />
          </div>
        </div>
      </div>

      {/* -------- VIDEO MODAL -------- */}
      {isOpen && (
        <div className="video-modal-overlay" onClick={closeVideo}>
          <div
            className="video-modal-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeVideo}>
              &times;
            </button>

            <div className="video-modal-content">
              <iframe
                src={`${youtubeLink}?autoplay=1`}
                title="Sarjan Homes Walkthrough"
                className="video-frame"
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
