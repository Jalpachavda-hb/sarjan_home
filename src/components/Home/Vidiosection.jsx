import React, { useState, useEffect } from "react";
import vidiobg from "../../assets/img/vidiobg.jpg";
import playIcon from "../../assets/img/bg/video-play.png";
import { gettesaboutus } from "../../utils/Api_path";
import "./Hero.css";
const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [about, setAbout] = useState(null);

  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  useEffect(() => {
    const loadData = async () => {
      const res = await gettesaboutus();
      setAbout(res);
    };
    loadData();
  }, []);

  // Convert YouTube link to embed if needed
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;

    if (url.includes("embed")) return url;

    const videoId = url.split("v=")[1]?.split("&")[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const youtubeURL = getYouTubeEmbedUrl(about?.youtube_link);

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
          <h2 className="projectvidiotitle mb-5">Project Highlights</h2>
          <p className="description">
            Watch a stunning aerial view of Sarjan Homes — showcasing premium
            flat layouts, open green zones, and modern elevation.
          </p>

          <ul className="video-features">
            <li className="Vidio-li">Prime Location Connectivity</li>
            <li className="Vidio-li">High-Rise Flat Layout with Sky View</li>
            <li className="Vidio-li">Landscaped Gardens & Open Spaces</li>
            <li className="Vidio-li">Clubhouse, Gym & Swimming Pool</li>
            <li className="Vidio-li">24x7 Security with Gated Entry</li>
          </ul>

          <a href="/Property" className="text-decoration-none">
            <button className="booking-btn">
              View Project Details &nbsp; &raquo;
            </button>
          </a>
        </div>
      </div>

      {/* ---------- Video Modal ---------- */}
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
              {youtubeURL ? (
                <iframe
                  src={`${youtubeURL}?autoplay=1`}
                  className="video-frame"
                  title="Sarjan Homes Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : about?.additional_image?.endsWith(".mp4") ? (
                <video
                  src={about.additional_image}
                  className="video-frame"
                  controls
                  autoPlay
                ></video>
              ) : (
                <p className="text-white text-center">No video available</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
