// import React, { useEffect, useState } from "react";
// import GLightbox from "glightbox";
// import "glightbox/dist/css/glightbox.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./Project.css";

// import keyPlan from "../../assets/img/bg/KeyPlan.jpg";
// import layoutPlan from "../../assets/img/bg/layoutplan.jpg";
// import floorPlan from "../../assets/img/bg/floorplan.webp";

// const Buildingplans = () => {
//   const [activeFilter, setActiveFilter] = useState("keyplan");

//   useEffect(() => {
//     GLightbox({ selector: ".glightbox" });
//   }, []);

//   const images = {
//     keyplan: {
//       image: keyPlan,
//       title: "Key Plan",
//     },
//     layoutplan: {
//       image: layoutPlan,
//       title: "Layout Plan",
//     },
//     floorplan: {
//       image: floorPlan,
//       title: "Floor Plan",
//     },
//   };

//   return (
//     <main className="main ">
//       <div className="container">
//         <section className="portfolio section">
//           <ul className="portfolio-filters planfeatuer isotope-filters mb-4 text-center">
//             <li
//               className={activeFilter === "keyplan" ? "keyplan active" : ""}
//               onClick={() => setActiveFilter("keyplan")}
//             >
//               KEY PLAN
//             </li>
//             <li
//               className={activeFilter === "layoutplan" ? "keyplan active" : ""}
//               onClick={() => setActiveFilter("layoutplan")}
//             >
//               LAYOUT PLAN
//             </li>
//             <li
//               className={activeFilter === "floorplan" ? "keyplan active" : ""}
//               onClick={() => setActiveFilter("floorplan")}
//             >
//               FLOOR PLAN
//             </li>
//           </ul>

//        <div className="row justify-content-center">
//   {Object.keys(images).map((key) => (
//     <div
//       key={key}
//       className={`col-lg-8 col-md-10 text-center mb-4 ${
//         activeFilter === key ? "" : "d-none"
//       }`}
//     >
//       <a
//         href={images[key].image}
//         className="glightbox"
//         data-gallery="plans"
//         data-title={images[key].title}
//       >
//         <img
//           src={images[key].image}
//           className="img-fluid w-100"
//           alt={images[key].title}
//           style={{ maxHeight: "90vh", objectFit: "contain" }}
//         />
//       </a>
//     </div>
//   ))}
// </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Buildingplans;


import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    GLightbox({ selector: ".glightbox" });
    
    // Handle responsive slides per view
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

  // Default images if no API data


  // Use API data if available, otherwise use default images
  const getImagesByType = (type) => {
    switch (type) {
      case "keyplan":
        return birdViews.length > 0 
          ? birdViews.map((view, index) => ({
              image: view.bird_view_image,
              title: `Bird View ${index + 1}`
            }))
          : "No plan found";
      
      case "layoutplan":
        return unitPlans.length > 0
          ? unitPlans.map((plan, index) => ({
              image: plan.unit_plan_image,
              title: `Unit Plan ${index + 1}`
            }))
          : "No plan found";
      
      case "floorplan":
        return floorImages.length > 0
          ? floorImages.map((floor, index) => ({
              image: floor.floor_image,
              title: `Floor Plan ${index + 1}`
            }))
          :"No plan found";
      
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
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={slidesPerView}
                  centeredSlides={true}
                  navigation={currentImages.length > 1}
                  pagination={{ 
                    clickable: true,
                    dynamicBullets: true 
                  }}
                  autoplay={currentImages.length > 1 ? { delay: 4000 } : false}
                  loop={currentImages.length > 1}
                  className="building-plans-swiper"
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