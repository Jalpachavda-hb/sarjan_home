// import React, { useEffect, useState } from "react";
// import Isotope from "isotope-layout";
// import GLightbox from "glightbox";
// import "glightbox/dist/css/glightbox.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./Project.css";
// import imagesLoaded from "imagesloaded";
// import { Link } from "react-router-dom";
// import { fetchSiteList } from "../../utils/Api_path";
// import LazyImage from "../common/LazyImage";
  
// const OurProjects = () => {
//   const [portfolioItems, setPortfolioItems] = useState([]);
//   const [filters, setFilters] = useState(["All"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadSites = async () => {
//       try {
//         setLoading(true);
//         const sites = await fetchSiteList();
//         setPortfolioItems(sites || []);

//         const uniqueTypes = [
//           ...new Set(
//             sites.map((item) => item.project_type?.trim()).filter(Boolean)
//           ),
//         ];
//         setFilters(["All", ...uniqueTypes]);
//         setError(null);
//       } catch (error) {
//         console.error("Failed to load sites:", error);
//         setError("Failed to load projects");
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadSites();
//   }, []);

//   // 🔹 Initialize Isotope and filters
//  useEffect(() => {
//   if (portfolioItems.length === 0) return;

//   const grid = document.querySelector(".isotope-container");
//   const imgLoad = imagesLoaded(grid);
//   let iso;
//   let lightbox; // 🔹 Keep a reference

//   imgLoad.on("always", () => {
//     iso = new Isotope(grid, {
//       itemSelector: ".isotope-item",
//       layoutMode: "masonry",
//       transitionDuration: "0.6s",
//     });

//     // Filter buttons
//     const filterButtons = document.querySelectorAll(".portfolio-filters li");
//     filterButtons.forEach((btn) => {
//       btn.addEventListener("click", function () {
//         filterButtons.forEach((el) => el.classList.remove("filter-active"));
//         this.classList.add("filter-active");

//         const filterValue = this.getAttribute("data-filter");
//         iso.arrange({
//           filter: filterValue === "*" ? "*" : `.${filterValue}`,
//         });
//       });
//     });
//   });

//   // ✅ Initialize GLightbox safely and store reference
//   lightbox = GLightbox({ selector: ".glightbox" });

//   // ✅ Cleanup function
//   return () => {
//     if (iso) iso.destroy();
//     if (lightbox && typeof lightbox.destroy === "function") {
//       lightbox.destroy();
//       lightbox = null;
//     }
//   };
// }, [portfolioItems]);

//   if (loading) {
//     return (
//       <div
//         className="d-flex justify-content-center align-items-center"
//         style={{ height: "50vh" }}
//       >
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div
//         className="d-flex justify-content-center align-items-center"
//         style={{ height: "50vh" }}
//       >
//         <div className="text-center">
//           <h3>Error Loading Projects</h3>
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="main">
//       <div className="container">
//         <h2 className="section-title mb-4 mt-5">Our Projects</h2>
//         <p className="para mb-5">Discover a place you’ll love to live</p>

//         <section className="portfolio section">
//           {/* 🔹 Dynamic Filter Buttons */}
//           <ul className="portfolio-filters isotope-filters mb-4">
//             {filters.map((type, index) => (
//               <li
//                 key={index}
//                 // ✅ No leading dot in data-filter
//                 data-filter={type === "All" ? "*" : type.replace(/\s+/g, "-")}
//                 className={index === 0 ? "filter-active" : ""}
//               >
//                 {type}
//               </li>
//             ))}
//           </ul>

//           {/* 🔹 Dynamic Project Cards */}
//           <div className="row gy-4 isotope-container">
//             {portfolioItems.map((item) => {
//               const typeClass = item.project_type
//                 ? item.project_type.replace(/\s+/g, "-")
//                 : "";
//               return (
//                 <div
//                   key={item.id}
//                   className={`col-lg-4 col-md-6 portfolio-item isotope-item ${typeClass}`}
//                 >
//                   <Link
//                     to={`/Projectdetails/${item.id}`}
//                     className="project-card-link text-decoration-none"
//                   >
//                     <div className="project-card">
//                       <LazyImage
//                         src={item.banner}
//                         className="img-fluid"
//                         alt={item.title}
//                       />
//                       <div className="portfolio-info text-white">
//                         <h4>{item.title}</h4>
//                         <p>{item.project_category_name}</p>

//                         {/* Lightbox Preview */}
//                         <span
//                           className="preview-link"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <a
//                             href={item.banner}
//                             title={item.project_category_name}
//                             className="glightbox"
//                             onClick={(e) => e.stopPropagation()}
//                           >
//                             <i className="bi bi-zoom-in text-white me-2"></i>
//                           </a>
//                         </span>

//                         {/* Link Icon */}
//                         <span
//                           className="details-link"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <i className="bi bi-link-45deg text-white"></i>
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default OurProjects;

import React, { useEffect, useState } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Project.css";
import { Link } from "react-router-dom";
import { fetchSiteList } from "../../utils/Api_path";
import LazyImage from "../common/LazyImage";

const OurProjects = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filters, setFilters] = useState(["All"]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    const loadSites = async () => {
      try {
        setLoading(true);
        const sites = await fetchSiteList();
        setPortfolioItems(sites || []);
        setFilteredItems(sites || []);

        const uniqueTypes = [
          ...new Set(
            sites.map((item) => item.project_type?.trim()).filter(Boolean)
          ),
        ];
        setFilters(["All", ...uniqueTypes]);
        setError(null);
      } catch (error) {
        console.error("Failed to load sites:", error);
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };
    loadSites();
  }, []);

  // 🔹 Filter items with animation
  const handleFilterClick = async (filterType) => {
    if (filterType === activeFilter || isFiltering) return;
    
    setIsFiltering(true);
    setActiveFilter(filterType);
    
    // Add fade-out animation
    const container = document.querySelector('.isotope-container');
    if (container) {
      container.style.opacity = '0.5';
      container.style.transform = 'scale(0.98)';
      container.style.transition = 'all 0.3s ease';
    }

    // Wait for fade-out to complete
    await new Promise(resolve => setTimeout(resolve, 300));

    // Filter items
    if (filterType === "All") {
      setFilteredItems(portfolioItems);
    } else {
      const filtered = portfolioItems.filter(
        (item) => item.project_type === filterType
      );
      setFilteredItems(filtered);
    }

    // Wait for state update and then fade in
    setTimeout(() => {
      if (container) {
        container.style.opacity = '1';
        container.style.transform = 'scale(1)';
      }
      setIsFiltering(false);
    }, 50);
  };

  // 🔹 Card entrance animation
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // 🔹 Initialize GLightbox
  useEffect(() => {
    const lightbox = GLightbox({ selector: ".glightbox" });

    return () => {
      if (lightbox && typeof lightbox.destroy === "function") {
        lightbox.destroy();
      }
    };
  }, [filteredItems]);

  // 🔹 Add CSS animations dynamically
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeInScale {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      @keyframes buttonPulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }
      
      .portfolio-item {
        animation: fadeInUp 0.6s ease-out forwards;
        opacity: 0;
      }
      
      .portfolio-item:nth-child(1) { animation-delay: 0.1s; }
      .portfolio-item:nth-child(2) { animation-delay: 0.2s; }
      .portfolio-item:nth-child(3) { animation-delay: 0.3s; }
      .portfolio-item:nth-child(4) { animation-delay: 0.4s; }
      .portfolio-item:nth-child(5) { animation-delay: 0.5s; }
      .portfolio-item:nth-child(6) { animation-delay: 0.6s; }
      .portfolio-item:nth-child(7) { animation-delay: 0.7s; }
      .portfolio-item:nth-child(8) { animation-delay: 0.8s; }
      .portfolio-item:nth-child(9) { animation-delay: 0.9s; }
      
      .filter-active {
        position: relative;
        overflow: hidden;
      }
      
      .filter-active::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        
        animation: slideIn 0.3s ease-out;
      }
      
      @keyframes slideIn {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(0);
        }
      }
      
      .portfolio-filters li {
        transition: all 0.3s ease;
        position: relative;
      }
      
      .portfolio-filters li:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }
      
      .portfolio-filters li:active {
        animation: buttonPulse 0.3s ease;
      }
      
      .project-card {
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transform-origin: center;
      }
      
      .project-card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      }
      
      .portfolio-info {
        transition: all 0.3s ease;
        transform: translateY(10px);
        opacity: 0;
      }
      
      .project-card:hover .portfolio-info {
        transform: translateY(0);
        opacity: 1;
      }
      
      .isotope-container {
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      /* Loading animation for filtering */
      .filtering {
        pointer-events: none;
      }
      
      .filtering::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        border: 2px solid #f3f3f3;
    
        border-radius: 50%;
        animation: spin 1s linear infinite;
        z-index: 10;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <div className="text-center">
          <h3>Error Loading Projects</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="main">
      <div className="container">
        <h2 className="section-title mb-4 mt-5">Our Projects</h2>
        <p className="para mb-5">Discover a place you'll love to live</p>

        <section className="portfolio section">
          {/* 🔹 Dynamic Filter Buttons */}
          <ul className={`portfolio-filters isotope-filters mb-4 ${isFiltering ? 'filtering' : ''}`}>
            {filters.map((type, index) => (
              <li
                key={index}
                onClick={() => handleFilterClick(type)}
                className={activeFilter === type ? "filter-active" : ""}
                style={{ 
                  cursor: isFiltering ? 'not-allowed' : 'pointer',
                  opacity: isFiltering ? 0.7 : 1
                }}
              >
                {type}
              </li>
            ))}
          </ul>

          {/* 🔹 Dynamic Project Cards */}
          <div className="row gy-4 isotope-container">
            {filteredItems.map((item, index) => {
              const typeClass = item.project_type
                ? item.project_type.replace(/\s+/g, "-")
                : "";
              return (
                <div
                  key={item.id}
                  className={`col-lg-4 col-md-6 portfolio-item isotope-item ${typeClass}`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <Link
                    to={`/Projectdetails/${item.id}`}
                    className="project-card-link text-decoration-none"
                  >
                    <div className="project-card position-relative overflow-hidden">
                      <LazyImage
                        src={item.banner}
                        className="img-fluid"
                        alt={item.title}
                      />
                      <div className="portfolio-info text-white position-absolute bottom-0 start-0 end-0 p-3">
                        <h4 className="mb-1">{item.title}</h4>
                        <p className="mb-2">{item.project_category_name}</p>

                        {/* Lightbox Preview */}
                        <span
                          className="preview-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a
                            href={item.banner}
                            title={item.project_category_name}
                            className="glightbox"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="bi bi-zoom-in text-white me-2"></i>
                          </a>
                        </span>

                        {/* Link Icon */}
                        <span
                          className="details-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="bi bi-link-45deg text-white"></i>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default OurProjects;