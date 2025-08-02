import React from 'react'
import houseImage from '../../assets/img/bg/homenight.jpg'
const AboutHome = () => {
  return (
    <div className="container my-5 mt-5">
      <span className="section-title d-block mb-4">About Us</span>

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
            becomes a reality.
          </p>

          <div className="d-flex gap-4 flex-wrap">
            <div>
              <h3 className="fw-bold counts">8K+</h3>
              <p className="countstext m-0">Houses Available</p>
            </div>
            <div>
              <h3 className="fw-bold counts">6K+</h3>
              <p className="countstext m-0">Houses Sold</p>
            </div>
            <div>
              <h3 className="fw-bold counts">2K+</h3>
              <p className="countstext m-0">Trusted Agents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHome