import React, { useRef, useState, useEffect } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { gettesTimonial } from "../../utils/Api_path";

const Testimonial = () => {
  const sliderRef = useRef(null);
  const [testimonials, setTestimonials] = useState([]);

  // 🔥 Load API data ONCE
  useEffect(() => {
    const load = async () => {
      try {
        const res = await gettesTimonial();
        setTestimonials(res || []);
      } catch (error) {
        console.error("Failed to load testimonials:", error);
      }
    };
    load();
  }, []);

  const scrollSlider = (direction) => {
    const scrollAmount = 350;
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="testimonial-section">
      <span className="container section-title d-block mb-1">
        Our Testimonial
      </span>
      <p className="para container mb-5">
        Dream Living Space Setting New Standards
      </p>

      <div className="testimonial-wrapper mb-5">
        <div className="testimonial-carousel">
          {/* Left Arrow */}
          <button className="arrow left" onClick={() => scrollSlider("left")}>
            <FaArrowLeft />
          </button>

          {/* Testimonials Slider */}
          <div className="carousel-inner" ref={sliderRef}>
            {testimonials.length === 0 ? (
              <p className="text-center w-100">Loading testimonials...</p>
            ) : (
              testimonials.map((item, index) => (
                <div key={index} className="testimonial-card">
                  <FaQuoteLeft className="quote-icon" />
                  
                  <p className="testimonial-text">{item.description}</p>

                  <div className="testimonial-user">
                    <img src={item.photo} alt={item.name} />

                    <div>
                      <strong>{item.name}</strong>
                      <div>{item.role}</div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Arrow */}
          <button className="arrow right" onClick={() => scrollSlider("right")}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
