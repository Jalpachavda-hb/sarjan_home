import React, { useEffect, useState } from "react";
import houseImage from "../../assets/img/bg/homenight.jpg";

const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const endValue = parseInt(target.replace("K+", "000"));

  useEffect(() => {
    let start = 0;
    const duration = 2000; // total duration of count (ms)
    const increment = Math.ceil(endValue / (duration / 10)); // step every 10ms

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

  const displayValue = count >= 1000 ? `${(count / 1000).toFixed(1)}K+` : count;

  return (
    <div>
      <h3 className="fw-bold counts">{displayValue}</h3>
      <p className="countstext m-0">{label}</p>
    </div>
  );
};


const AboutHome = () => {
  return (
    <div className="abouthome container-fluid">
      <div className="container my-5 mt-5">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={houseImage}
              alt="Modern House"
              className="img-fluid border rounded shadow"
              style={{ border: "4px solid #1e90ff" }}
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <h2 className="fw-bold title mb-3">
              We Help You To Find Your Dream Home
            </h2>
            <p className="para mb-4">
              From cozy cottages to luxurious estates, our dedicated team guides
              you through every step of the journey, ensuring your dream home
              becomes a reality. With access to the most desirable properties
              and up-to-date market insights, we take pride in offering
              personalized support tailored to your needs. Whether you're a
              first-time buyer or an experienced investor, we’re here to make
              your home buying experience smooth, transparent, and rewarding.
            </p>

            <div className="d-flex gap-4 flex-wrap">
              <Counter target="8K+" label="Houses Available" />
              <Counter target="6K+" label="Houses Sold" />
              <Counter target="2K+" label="Trusted Agents" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
