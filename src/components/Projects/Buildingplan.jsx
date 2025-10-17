import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Project.css";

import keyPlan from "../../assets/img/bg/KeyPlan.jpg";
import layoutPlan from "../../assets/img/bg/layoutplan.jpg";
import floorPlan from "../../assets/img/bg/floorplan.webp";

const Buildingplans = ({ birdViews = [], unitPlans = [], floorImages = [] }) => {
  const [activeFilter, setActiveFilter] = useState("keyplan");
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [swiperKey, setSwiperKey] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    GLightbox({ selector: ".glightbox" });
    
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesPerView(1.2);
      } else if (window.innerWidth >= 992) {
        setSlidesPerView(1.1);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset Swiper when filter changes
  useEffect(() => {
    setSwiperKey(prev => prev + 1);
    
    // Reinitialize GLightbox after a short delay
    setTimeout(() => {
      const newLightbox = GLightbox({ selector: ".glightbox" });
    }, 100);
  }, [activeFilter]);

  // Use API data if available, otherwise use default images
  const getImagesByType = (type) => {
    switch (type) {
      case "keyplan":
        return birdViews.length > 0 
          ? birdViews.map((view, index) => ({
              image: view.bird_view_image,
              title: `Bird View ${index + 1}`
            }))
          : [];
      
      case "layoutplan":
        return unitPlans.length > 0
          ? unitPlans.map((plan, index) => ({
              image: plan.unit_plan_image,
              title: `Unit Plan ${index + 1}`
            }))
          : [];
      
      case "floorplan":
        return floorImages.length > 0
          ? floorImages.map((floor, index) => ({
              image: floor.floor_image,
              title: `Floor Plan ${index + 1}`
            }))
          : [];
      
      default:
        return [];
    }
  };

  const currentImages = getImagesByType(activeFilter);

  return (
    <main className="main">
      <div className="container">
        <section className="portfolio section">
          {/* Filter Buttons */}
          <ul className="portfolio-filters planfeatuer isotope-filters mb-4 text-center">
            <li
              className={activeFilter === "keyplan" ? "keyplan active" : "keyplan"}
              onClick={() => setActiveFilter("keyplan")}
            >
              KEY PLAN {birdViews.length > 0 && `(${birdViews.length})`}
            </li>
            <li
              className={activeFilter === "layoutplan" ? "keyplan active" : "keyplan"}
              onClick={() => setActiveFilter("layoutplan")}
            >
              LAYOUT PLAN {unitPlans.length > 0 && `(${unitPlans.length})`}
            </li>
            <li
              className={activeFilter === "floorplan" ? "keyplan active" : "keyplan"}
              onClick={() => setActiveFilter("floorplan")}
            >
              FLOOR PLAN {floorImages.length > 0 && `(${floorImages.length})`}
            </li>
          </ul>

          {/* Swiper Slider */}
          <div className="row justify-content-center">
            <div className="col-12">
              {currentImages.length > 0 ? (
                <div className="building-plans-swiper-container position-relative">
                  <Swiper
                    key={swiperKey}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={slidesPerView}
                    centeredSlides={true}
                    navigation={{
                      prevEl: navigationPrevRef.current,
                      nextEl: navigationNextRef.current,
                    }}
                    pagination={{ 
                      clickable: true,
                      dynamicBullets: true 
                    }}
                    autoplay={currentImages.length > 1 ? { delay: 4000 } : false}
                    loop={currentImages.length > 1}
                    className="building-plans-swiper"
                    onInit={(swiper) => {
                      swiper.params.navigation.prevEl = navigationPrevRef.current;
                      swiper.params.navigation.nextEl = navigationNextRef.current;
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }}
                  >
                    {currentImages.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="plan-slide-container text-center">
                          <a
                            href={image.image}
                            className="glightbox"
                            data-gallery={activeFilter}
                            data-title={image.title}
                          >
                            <img
                              src={image.image}
                              className="img-fluid plan-image"
                              alt={image.title}
                              style={{ 
                                maxHeight: "70vh", 
                                objectFit: "contain",
                                borderRadius: "10px",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
                              }}
                            />
                          </a>
                          <p className="plan-title mt-3 mb-0 fw-medium">
                            {image.title}
                          </p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  {/* Custom Navigation Arrows */}
                  {currentImages.length > 1 && (
                    <>
                      <div 
                        ref={navigationPrevRef} 
                        className="swiper-button-prev swiper-button-prev-custom"
                      >
                        <i className="bi bi-chevron-left"></i>
                      </div>
                      <div 
                        ref={navigationNextRef} 
                        className="swiper-button-next swiper-button-next-custom"
                      >
                        <i className="bi bi-chevron-right"></i>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="text-center py-5">
                  <p className="text-muted">No {activeFilter} images available</p>
                </div>
              )}
            </div>
          </div>

          {/* Thumbnail Navigation for multiple images */}
          {currentImages.length > 1 && (
            <div className="row mt-4">
              <div className="col-12">
                <div className="thumbnails-container">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={4}
                    navigation={true}
                    watchSlidesProgress={true}
                    className="thumbnails-swiper"
                  >
                    
                  </Swiper>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Buildingplans;