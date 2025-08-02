import slide1 from "../../assets/img/bg/bg1.webp";
import slide2 from "../../assets/img/bg/homenight.jpg";
import React, { useEffect, useState } from "react";
const slides = [
  {
    id: 1,
    title: "Sarjan DREAMS",
    subtitle: "Your dream lifestyle, thoughtfully crafted.",
    bulletPoints: [
      "Elegant architecture with natural lighting",
      "Surrounded by top schools and hospitals",
      "Exclusive amenities for residents",
    ],
    image: slide1,
  },
  {
    id: 2,
    title: "Sarjan Era",
    subtitle: "A lifestyle space designed for new-age living.",
     bulletPoints: [
      "Smart home features with modern interiors",
      "Well-connected to major transit points ",
      "Green spaces and recreational areas",
    ],
    image: slide2,
  },
  {
    id: 3,
    title: "Sarjan Heights",
    subtitle: "Your dream lifestyle, thoughtfully crafted.",
     bulletPoints: [
      "Smart home features with modern interiors",
      "Well-connected to major transit points ",
      "Green spaces and recreational areas",
    ],
    image: slide1,
  },
];

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="position-relative vh-100 overflow-hidden container ">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`position-absolute top-0 start-0 w-100 h-100 transition-opacity ${
            index === currentSlide ? "opacity-100 z-1" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",                     
            backgroundPosition: "center",
            transition: "opacity 1s ease-in-out",
          }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

          <div className="container h-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">
              <div
                className={`col-lg-6 ${
                  index % 2 === 0 ? "order-lg-1" : "order-lg-2"
                }`}
              >
                <div className="slidertextcolor p-5 bg-black bg-opacity-50 rounded-4 shadow-lg">
                  <h1 className="display-4 fw-bold slidertextcolor">{slide.title}</h1>
                  <h4 className="mt-3  slidertextcolor">{slide.subtitle}</h4>
                  {Array.isArray(slide.bulletPoints) &&
                    slide.bulletPoints.map((point, i) => (
                      <p key={i} className="lead mt-2 d-flex align-items-start slidertextcolor">
                        <i className="bi bi-dot text-warning fs-4 me-2 mt-1"></i>
                        {point}
                      </p>
                    ))}
                </div>
              </div>
              <div
                className={`col-lg-6 ${
                  index % 2 === 0 ? "order-lg-2" : "order-lg-1"
                }`}
              ></div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        className="btn btn-light position-absolute top-50 start-0 sliderbtn translate-middle-y ms-3 z-3 rounded-circle p-3"
        onClick={prevSlide}
      >
        <i className="bi bi-chevron-left fs-4"></i>
      </button>
      <button
        className="btn btn-light position-absolute top-50 end-0 sliderbtn translate-middle-y me-3 z-3 rounded-circle p-3"
        onClick={nextSlide}
      >
        <i className="bi bi-chevron-right fs-4"></i>
      </button>

      {/* Slide Counter */}
      <div className="position-absolute top-0 end-0 mt-3 me-3 bg-dark bg-opacity-50 text-white px-3 py-1 rounded-pill z-3">
        {String(currentSlide + 1).padStart(2, "0")} /{" "}
        {slides.length.toString().padStart(2, "0")}
      </div>
    </section>
  );
}
