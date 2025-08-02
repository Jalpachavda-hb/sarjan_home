import React, { useRef } from "react";

import profile1 from "../../assets/img/bg/profile.jpg";
import profile2 from "../../assets/img/bg/profile.jpg";
import profile3 from "../../assets/img/bg/profile.jpg";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Kelian Anderson",
    role: "SELLING AGENTS",
    img: profile1,
    text: `"Dream Home Delivered!".Sarajan Homes turned our vision into a reality. From the first consultation to the final handover, their team was professional, transparent, and incredibly supportive. "`,
  },
    {
    name: "Kelian Anderson",
    role: "SELLING AGENTS",
    img: profile1,
    text: `"Truly Hassle-Free Experience,"Working with Sarajan Homes was a breeze. They handled all permits, deadlines, and designs with precision. We felt informed and cared for every step of the way. It’s rare to find builders who genuinely listen — and deliver."`,
  },
    {
    name: "Kelian Anderson",
    role: "SELLING AGENTS",
    img: profile1,
    text: `"Elegance Meets Functionality,"Our home is not just beautiful, it's thoughtfully planned. Sarajan Homes combines modern design with smart layouts and top-notch materials. Our guests are constantly impressed!"`,
  },
  {
    name: "Adam Joseph",
    role: "SELLING AGENTS",
    img: profile2,
    text: `"On Time, On Budget, No Compromises",We were skeptical at first, but Sarajan Homes delivered everything as promised — no hidden costs, no delays. We are extremely satisfied with the quality and service."`,
  },
  {
    name: "James Carter",
    role: "SELLING AGENTS",
    img: profile3,
    text: `"Built with Heart and Expertise" ,You can tell Sarajan Homes cares about each project like it's their own. The team is passionate, skilled, and extremely responsive. We couldn't have asked for a better builder."`,
  },
];

const Testimonial = () => {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    const scrollAmount = 350; // change as per your card width
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
     <span className="container section-title d-block mb-4 mt-5">Our Testimonial</span>
        <p className="para container mb-5">Dream Living Space Setting New Standards</p>

      <div className="testimonial-wrapper mb-5">
       
        <div className="testimonial-carousel">
          <button className="arrow left" onClick={() => scrollSlider("left")}>
            <FaArrowLeft />
          </button>

          <div className="carousel-inner" ref={sliderRef}>
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{item.text}</p>
                <div className="testimonial-user">
                  <img src={item.img} alt={item.name} />
                  <div>
                    <strong>{item.name}</strong>
                    <div>{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="arrow right" onClick={() => scrollSlider("right")}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
