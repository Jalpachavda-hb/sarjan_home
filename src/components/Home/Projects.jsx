import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaArrowDown, FaCheckCircle } from "react-icons/fa";
import slide1 from "../../assets/img/bg/bg1.webp";
import slide2 from "../../assets/img/bg/homenight.jpg";

const Projects = () => {
  const sliderContainerRef = useRef(null);
  const slideRightRef = useRef(null);
  const slideLeftRef = useRef(null);

  const slides = [
    {
      title: "Sarjan DREAMS",
      desc: "Modern homes built for comfort and convenience.",
      bgColor: "#fff",
      img: slide1,
      details: {
        name: "Sarjan DREAMS",
        type: "Residential Commercial Mix",
        location: "Prime City Center",
        bhk: "3 BHK & Retail Spaces",
      },
      features: [
        "Modern homes built for comfort and convenience.",
        "Located in the prestigious Buckhead and Vinings communities",
        "A rare blend of inspired architectural design",
      ],
    },
    {
      title: "Sarjan Era",
      desc: "A lifestyle space designed for new-age living.",
      bgColor: "#fff",
      img: slide2,
      details: {
        name: "Sarjan Era",
        type: "Residential Commercial Mix",
        location: "Urban East Side",
        bhk: "3 BHK & Retail Spaces",
      },
      features: [
        "Smart home features with modern interiors",
        "Well-connected to major transit points",
        "Green spaces and recreational areas",
      ],
    },
    {
      title: "Sarjan DREAMS",
      desc: "Experience a seamless fusion of luxury and utility.",
      bgColor: "#fff",
      img: slide1,
      details: {
        name: "Sarjan DREAMS",
        type: "Residential Commercial Mix",
        location: "Downtown Heights",
        bhk: "3 BHK & Retail Spaces",
      },
      features: [
        "Premium finishes throughout the apartment",
        "Community-first design approach",
        "Retail space on lower floors",
      ],
    },
    {
      title: "Sarjan DREAMS",
      desc: "Your dream lifestyle, thoughtfully crafted.",
      bgColor: "#fff",
      img: slide1,
      details: {
        name: "Sarjan DREAMS",
        type: "Residential Commercial Mix",
        location: "Greenfield Enclave",
        bhk: "3 BHK & Retail Spaces",
      },
      features: [
        "Elegant architecture with natural lighting",
        "Surrounded by top schools and hospitals",
        "Exclusive amenities for residents",
      ],
    },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    slideLeftRef.current.style.top = `-${(slides.length - 1) * 100}vh`;
  }, [slides.length]);

  const changeSlide = (direction) => {
    const sliderHeight = sliderContainerRef.current.clientHeight;
    let newIndex = activeSlideIndex;

    if (direction === "up") {
      newIndex = (activeSlideIndex + 1) % slides.length;
    } else {
      newIndex = (activeSlideIndex - 1 + slides.length) % slides.length;
    }

    setActiveSlideIndex(newIndex);

    slideRightRef.current.style.transform = `translateY(-${
      newIndex * sliderHeight
    }px)`;
    slideLeftRef.current.style.transform = `translateY(${
      newIndex * sliderHeight
    }px)`;
  };

  return (
    <>
      <span className="container section-title d-block mb-4">
        Ongoing Projects
      </span>
      <p className="para container">Dream Living Space Setting New Standards</p>

      <div className="slider-container container" ref={sliderContainerRef}>
        <div className="left-slide" ref={slideLeftRef}>
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{ backgroundColor: slide.bgColor }}
              className="slide-content"
            >
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>

              <ul className="features-list">
                {slide.features?.map((feature, i) => (
                  <li key={i}>
                    <FaCheckCircle className="check-icon mr-5" />
                    {feature}
                  </li>
                ))}
              </ul>

           
            </div>
          ))}
        </div>

        <div className="right-slide" ref={slideRightRef}>
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${slide.img})` }}
            ></div>
          ))}
        </div>

        <div className="action-buttons">
          <button className="down-button" onClick={() => changeSlide("down")}>
            <FaArrowDown />
          </button>
          <button className="up-button" onClick={() => changeSlide("up")}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
