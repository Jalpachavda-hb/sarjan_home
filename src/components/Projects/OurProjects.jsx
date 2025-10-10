import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Project.css";
import imagesLoaded from "imagesloaded";
import { Link } from "react-router-dom";
import { fetchSiteList } from "../../utils/Api_path";
import LazyImage from "../common/LazyImage";
  
const OurProjects = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [filters, setFilters] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSites = async () => {
      try {
        setLoading(true);
        const sites = await fetchSiteList();
        setPortfolioItems(sites || []);

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

  // 🔹 Initialize Isotope and filters
 useEffect(() => {
  if (portfolioItems.length === 0) return;

  const grid = document.querySelector(".isotope-container");
  const imgLoad = imagesLoaded(grid);
  let iso;
  let lightbox; // 🔹 Keep a reference

  imgLoad.on("always", () => {
    iso = new Isotope(grid, {
      itemSelector: ".isotope-item",
      layoutMode: "masonry",
      transitionDuration: "0.6s",
    });

    // Filter buttons
    const filterButtons = document.querySelectorAll(".portfolio-filters li");
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        filterButtons.forEach((el) => el.classList.remove("filter-active"));
        this.classList.add("filter-active");

        const filterValue = this.getAttribute("data-filter");
        iso.arrange({
          filter: filterValue === "*" ? "*" : `.${filterValue}`,
        });
      });
    });
  });

  // ✅ Initialize GLightbox safely and store reference
  lightbox = GLightbox({ selector: ".glightbox" });

  // ✅ Cleanup function
  return () => {
    if (iso) iso.destroy();
    if (lightbox && typeof lightbox.destroy === "function") {
      lightbox.destroy();
      lightbox = null;
    }
  };
}, [portfolioItems]);

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
        <p className="para mb-5">Discover a place you’ll love to live</p>

        <section className="portfolio section">
          {/* 🔹 Dynamic Filter Buttons */}
          <ul className="portfolio-filters isotope-filters mb-4">
            {filters.map((type, index) => (
              <li
                key={index}
                // ✅ No leading dot in data-filter
                data-filter={type === "All" ? "*" : type.replace(/\s+/g, "-")}
                className={index === 0 ? "filter-active" : ""}
              >
                {type}
              </li>
            ))}
          </ul>

          {/* 🔹 Dynamic Project Cards */}
          <div className="row gy-4 isotope-container">
            {portfolioItems.map((item) => {
              const typeClass = item.project_type
                ? item.project_type.replace(/\s+/g, "-")
                : "";
              return (
                <div
                  key={item.id}
                  className={`col-lg-4 col-md-6 portfolio-item isotope-item ${typeClass}`}
                >
                  <Link
                    to={`/Projectdetails/${item.id}`}
                    className="project-card-link text-decoration-none"
                  >
                    <div className="project-card">
                      <LazyImage
                        src={item.banner}
                        className="img-fluid"
                        alt={item.title}
                      />
                      <div className="portfolio-info text-white">
                        <h4>{item.title}</h4>
                        <p>{item.project_category_name}</p>

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
