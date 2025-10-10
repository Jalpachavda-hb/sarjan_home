import React, { useState } from "react";
import "./Loader.css";

const LazyImage = ({ src, alt, className = "" }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`lazy-wrapper ${className}`}>
      {!loaded && <div className="lazy-placeholder"></div>}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`lazy-img ${loaded ? "loaded" : ""}`}
      />
    </div>
  );
};

export default LazyImage;
