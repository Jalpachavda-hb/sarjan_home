import React, { useEffect } from "react";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Project.css";
import imagesLoaded from "imagesloaded";
import project1 from "../../assets/img/bg/bg1.webp";
import project2 from "../../assets/img/bg/sarjanera.jpg";
import project3 from "../../assets/img/bg/homenight.jpg";
import project4 from "../../assets/img/bg/index-4.jpg";
import project5 from "../../assets/img/bg/sarjancrystal.jpg";
import project6 from "../../assets/img/bg/Akshatparedais.jpg";
import project7 from "../../assets/img/bg/sarjandreams.webp";
import { Link } from "react-router-dom";
const OurProjects = () => {


  const portfolioItems = [
    {
      id: 1,
      title: "Sarjan Era",
      category: "Ongoing-Project",
      image: project1,
      contain: "Residential & Retails Space",
    },
    {
      id: 2,
      title: "Sarjan Tower",
      category: "Completed-Project",
      image: project2,
      contain: "Residential Project",
    },
    {
      id: 3,
      title: "Skywalk @ Chenpur",
      category: "Completed-Project",
      image: project3,
      contain: "Residential & Commercial Project",
    },
    {
      id: 4,
      title: "Skywalk @ Zundal",
      category: "Completed-Project",
      image: project4,
      contain: "Residential & Commercial Project",
    },
    {
      id: 5,
      title: "Swara Crystal",
      category: "Completed-Project",
      image: project5,
      contain: "Residential Project",
    },
    {
      id: 6,
      title: "Akshat Paradise",
      category: "Completed-Project",
      image: project6,
      contain: "Residential Project",
    },
    {
      id: 7,
      title: "Sarjan DREAMS",
      category: "Ongoing-Project",
      image: project7,
      contain: "Residential Commercial Mix",
    },
  ];

  useEffect(() => {
    const grid = document.querySelector(".isotope-container");
    const filters = document.querySelectorAll(".portfolio-filters li");

    const imgLoad = imagesLoaded(grid);

    let iso;

    imgLoad.on("always", () => {
      iso = new Isotope(grid, {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
        transitionDuration: "0.6s",
      });

      filters.forEach((filter) => {
        filter.addEventListener("click", function () {
          filters.forEach((el) => el.classList.remove("filter-active"));
          this.classList.add("filter-active");
          const filterValue = this.getAttribute("data-filter");
          iso.arrange({ filter: filterValue });
        });
      });
    });

    GLightbox({ selector: ".glightbox" });

    // Cleanup on unmount
    return () => {
      if (iso) iso.destroy();
    };
  }, []);

  return (
    <main className="main">
      <div className="container">
        <h2 className="section-title mb-4 mt-5">Our Projects</h2>
        <p className="para mb-5">Discover a place you’ll love to live</p>

        <section className="portfolio section">
          <ul className="portfolio-filters isotope-filters mb-4">
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".Ongoing-Project">Ongoing Project</li>
            <li data-filter=".Completed-Project">Completed Project</li>
          </ul>

          <div className="row gy-4 isotope-container">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}
              >
                <img src={item.image} className="img-fluid" alt={item.title} />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.contain}</p>
                  <a
                    href={item.image}
                    title={item.contain}
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>

                  <Link
                    to="/Projectdetails"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default OurProjects;
