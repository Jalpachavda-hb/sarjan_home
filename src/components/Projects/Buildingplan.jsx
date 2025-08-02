import React, { useEffect, useState } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Project.css";

import keyPlan from "../../assets/img/bg/KeyPlan.jpg";
import layoutPlan from "../../assets/img/bg/layoutplan.jpg";
import floorPlan from "../../assets/img/bg/floorplan.webp";

const Buildingplans = () => {
  const [activeFilter, setActiveFilter] = useState("keyplan");

  useEffect(() => {
    GLightbox({ selector: ".glightbox" });
  }, []);

  const images = {
    keyplan: {
      image: keyPlan,
      title: "Key Plan",
    },
    layoutplan: {
      image: layoutPlan,
      title: "Layout Plan",
    },
    floorplan: {
      image: floorPlan,
      title: "Floor Plan",
    },
  };

  return (
    <main className="main ">
      <div className="container">
        <section className="portfolio section">
          <ul className="portfolio-filters planfeatuer isotope-filters mb-4 text-center">
            <li
              className={activeFilter === "keyplan" ? "keyplan active" : ""}
              onClick={() => setActiveFilter("keyplan")}
            >
              KEY PLAN
            </li>
            <li
              className={activeFilter === "layoutplan" ? "keyplan active" : ""}
              onClick={() => setActiveFilter("layoutplan")}
            >
              LAYOUT PLAN
            </li>
            <li
              className={activeFilter === "floorplan" ? "keyplan active" : ""}
              onClick={() => setActiveFilter("floorplan")}
            >
              FLOOR PLAN
            </li>
          </ul>

       <div className="row justify-content-center">
  {Object.keys(images).map((key) => (
    <div
      key={key}
      className={`col-lg-8 col-md-10 text-center mb-4 ${
        activeFilter === key ? "" : "d-none"
      }`}
    >
      <a
        href={images[key].image}
        className="glightbox"
        data-gallery="plans"
        data-title={images[key].title}
      >
        <img
          src={images[key].image}
          className="img-fluid w-100"
          alt={images[key].title}
          style={{ maxHeight: "90vh", objectFit: "contain" }}
        />
      </a>
    </div>
  ))}
</div>
        </section>
      </div>
    </main>
  );
};

export default Buildingplans;
