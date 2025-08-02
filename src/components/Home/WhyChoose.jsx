import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { GrUserExpert } from "react-icons/gr";

const ThreeSteps = () => {
  return (
    <div className="three-steps-container container text-center">
      <h2 className="steps-title fw-bold">
        Delivering More Than Just Properties
      </h2>

      <div className="row justify-content-center mt-5 gx-4 gy-4">
        {/* Step 1 */}
        <div className="col-md-4 col-sm-6 col-12">
          <div className="step-card custom-shadow p-4 h-100">
            <IoHomeOutline className="step-icon green" />
            <h5 className="step-heading mt-3 fw-bold">The Perfect Residency</h5>
            <p className="step-description para">
              Experience sophisticated and well-planned living spaces that offer
              both functionality and aesthetic appeal. Your dream home is
              crafted to match your lifestyle.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="col-md-4 col-sm-6 col-12">
          <div className="step-card custom-shadow p-4 h-100">
            <GrUserExpert className="step-icon orange" />
            <h5 className="step-heading mt-3 fw-bold">Global Architect Experts</h5>
            <p className="step-description para">
              Our team of renowned architects transforms visions into reality,
              designing homes that reflect modern trends, efficiency, and
              innovation.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="col-md-4 col-sm-6 col-12">
          <div className="step-card custom-shadow p-4 h-100">
            <CiLocationOn className="step-icon purple" />
            <h5 className="step-heading mt-3 fw-bold">Best Location</h5>
            <p className="step-description para">
              Nestled in prime neighborhoods, our properties offer unmatched
              connectivity to schools, hospitals, shopping hubs, and major
              transit routes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSteps;
