import React, { useEffect, useState } from "react";
import "./preloader.css";
import { useLoading } from "../../contexts/LoadingContext";

const Preloader = ({ initial = false }) => {
  const [showInitial, setShowInitial] = useState(initial);
  const { isLoading } = useLoading();

  useEffect(() => {
    if (initial) {
      const timer = setTimeout(() => setShowInitial(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [initial]);

  if (showInitial) {
    return (
      <div className="preloader-overlay">
        <div className="building-container">
          <div className="building-block block-1"></div>
          <div className="building-block block-2"></div>
          <div className="building-block block-3"></div>
          <div className="building-block block-4"></div>
        </div>
        <div className="preloader-text">
          <span>S</span><span>A</span><span>R</span><span>J</span><span>A</span><span>N</span>
          <span className="space"></span>
          <span>H</span><span>O</span><span>M</span><span>E</span><span>S</span>
        </div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="preloader-overlay api-loader">
        <div className="spinner"></div>
        <div className="api-text">Please Wait...</div>
      </div>
    );
  }

  return null;
};

export default Preloader;
