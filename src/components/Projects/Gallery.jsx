import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import "./Project.css";
const Gallery = ({ images = [] }) => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      zoomable: true,
    });

    return () => {
      lightbox.destroy();
    };
  }, [images]); // re-init when new images load

  if (images.length === 0) {
    return null; // don’t render if no images available
  }

  // Split images roughly into 4 columns for masonry layout
  const columns = [[], [], [], []];
  images.forEach((img, index) => {
    columns[index % 4].push(img);
  });

  return (
    <div className="products__area section-padding">
      <div className="container">
        {/* Title */}
        <div className="row mb-65">
          <div className="col-xl-12">
           
          </div>
        </div>

        {/* Masonry Gallery */}
        <div className="mansory-gallery">
          {columns.map((col, colIndex) => (
            <div className="column" key={colIndex}>
              {col.map((img, i) => (
                <a
                  key={i}
                  href={img}
                  className="glightbox"
                  data-gallery="gallery"
                >
                  <img src={img} alt={`Gallery ${i + 1}`} loading="lazy" />
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* See More Button */}
       
      </div>
    </div>
  );
};

export default Gallery;
