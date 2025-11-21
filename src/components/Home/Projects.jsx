import React, { useEffect, useRef, useState } from "react";
import { fetchSlider } from "../../utils/Api_path"; // <-- adjust import path if needed

export default function Projects() {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const didLoadRef = useRef(false); // prevents double fetch in StrictMode
  const pauseTimeoutRef = useRef(null);
  const autoplayIntervalRef = useRef(null);

  // ---------- Load slides once ----------
  useEffect(() => {
    if (didLoadRef.current) return;
    didLoadRef.current = true;

    const load = async () => {
      try {
        const data = await fetchSlider();
        // Normalize slides to match expected structure
        const formatted = (data || []).map((s, idx) => ({
          id: s.id ?? idx,
          title: s.title ?? s.header ?? "",
          subtitle: s.subtitle ?? s.header ?? "",
          bulletPoints:
            Array.isArray(s.speciality) && s.speciality.length
              ? s.speciality.map((sp) => (typeof sp === "string" ? sp : sp.name ?? ""))
              : [], // fallback empty
          image: s.slide_image || "", // expects full URL
        }));
        setSlides(formatted);
      } catch (err) {
        console.error("Failed to fetch slides:", err);
        setSlides([]); // fallback
      }
    };

    load();
  }, []);

  // ---------- Autoplay interval ----------
  useEffect(() => {
    // clear any existing interval
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }

    if (!isAutoPlaying || slides.length === 0) return;

    autoplayIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
        autoplayIntervalRef.current = null;
      }
    };
  }, [isAutoPlaying, slides]);

  // ---------- Navigation helpers ----------
  const pauseAutoPlayTemporarily = (ms = 10000) => {
    // stop autoplay immediately
    setIsAutoPlaying(false);

    // clear previous timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = null;
    }

    // restart autoplay after ms
    pauseTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
      pauseTimeoutRef.current = null;
    }, ms);
  };

  const goToSlide = (index) => {
    if (slides.length === 0) return;
    const normalized = ((index % slides.length) + slides.length) % slides.length;
    setCurrentSlide(normalized);
    pauseAutoPlayTemporarily(10000);
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  // cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, []);

  // ---------- Render ----------
  if (!slides || slides.length === 0) {
    // Simple loader / fallback
    return (
      <section className="position-relative vh-100 overflow-hidden container">
        {/* <div className="d-flex h-100 align-items-center justify-content-center">
          <div className="text-center">
            <div className="spinner-border" role="status" aria-hidden="true" />
            <p className="mt-3">Loading slides...</p>
          </div>
        </div> */}
      </section>
    );
  }

  return (
    <section className="position-relative vh-100 overflow-hidden container">
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
          {/* dark overlay */}
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

          <div className="container h-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">
              <div className={`col-lg-6 ${index % 2 === 0 ? "order-lg-1" : "order-lg-2"}`}>
                <div className="slidertextcolor p-5 bg-black bg-opacity-50 rounded-4 shadow-lg">
                  <h1 className="display-4 fw-bold slidertextcolor">{slide.subtitle}</h1>
                  <h4 className="mt-3 slidertextcolor">{slide.title}</h4>

                  {Array.isArray(slide.bulletPoints) &&
                    slide.bulletPoints.length > 0 &&
                    slide.bulletPoints.map((point, i) => (
                      <p key={i} className="lead mt-2 d-flex align-items-start slidertextcolor">
                        <i className="bi bi-dot text-warning fs-4 me-2 mt-1 bulletpoint"></i>
                        {point}
                      </p>
                    ))}
                </div>
              </div>

              {/* empty column for layout (keeps your current structure) */}
              <div className={`col-lg-6 ${index % 2 === 0 ? "order-lg-2" : "order-lg-1"}`}></div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        className="btn btn-light position-absolute top-50 start-0 sliderbtn translate-middle-y ms-3 z-3 p-3"
        style={{ borderRadius: "27%" }}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <i className="bi bi-chevron-left fs-4"></i>
      </button>
      <button
        className="btn btn-light position-absolute top-50 end-0 sliderbtn translate-middle-y me-3 z-3 p-3"
        style={{ borderRadius: "27%" }}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <i className="bi bi-chevron-right fs-4"></i>
      </button>

      {/* Slide Counter */}
      <div className="position-absolute top-0 end-0 mt-3 me-3 bg-dark bg-opacity-50 text-white px-3 py-1 rounded-pill z-3">
        {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
