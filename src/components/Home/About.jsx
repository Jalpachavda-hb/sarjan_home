import React, { useEffect, useState } from "react";
import ThreeSteps from "../Home/WhyChoose";
import { gettesaboutus } from "../../utils/Api_path";

// ----------------------------------------------
// COUNTER COMPONENT (No API call here)
// ----------------------------------------------
const Counter = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const endValue = Number(value);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(endValue / (duration / 10));

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(counter);
      }
      setCount(start);
    }, 10);

    return () => clearInterval(counter);
  }, [endValue]);

  return (
    <div>
      <h3 className="fw-bold counts">{count}</h3>
      <p className="countstext m-0">{label}</p>
    </div>
  );
};

// ----------------------------------------------
// ABOUT HOME SECTION
// ----------------------------------------------
const AboutHome = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await gettesaboutus();
      setAbout(res);
    };
    loadData();
  }, []);

  if (!about) return null; // loader optional

  return (
    <>
      <div className="abouthome container-fluid">
        <div className="container">
          <span className="section-title mb-4 container">About Us</span>
          <p className="para mb-5">Dream Living Space Setting New Standards</p>
        </div>

        <div className="container my-5 mt-5">
          <div className="row align-items-center">
            {/* LEFT IMAGE (Dynamic from API) */}
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={about.about_image}
                alt="About Section"
                className="img-fluid border rounded shadow"
                style={{ border: "4px solid #1e90ff" }}
              />
            </div>

            {/* RIGHT SECTION */}
            <div className="col-md-6 p-2 ml-4 p-md-5">
              <h2 className="fw-bold title mb-3">{about.header}</h2>

              <p className="para mb-4">{about.description}</p>

              {/* COUNTERS */}
              <div className="d-flex gap-4 flex-wrap">
                <Counter
                  value={about.houses_available + "."}
                  label="Houses Available"
                />
                <Counter value={about.houses_sold} label="Houses Sold" />
                <Counter value={about.trusted_agents} label="Trusted Agents" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ThreeSteps />
    </>
  );
};

export default AboutHome;
