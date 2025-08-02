import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TbLifebuoyFilled } from "react-icons/tb";

const Ourmission = () => {
  return (
    <>
      <span className="container section-title d-block mb-4 mt-5">Our Main Focus</span>
        <p className="para container ">We are on a mission to transform the way the world views real estate</p>
    <div className="three-steps-container container text-center">
      <div className="row justify-content-center  gx-4 gy-4">
        {/* Step 1 */}
        <div className="col-md-4 col-sm-6 col-12">
          <div className="step-card custom-shadow p-4 h-100">
            <GiReceiveMoney className="step-icon green" />
            <h5 className="step-heading mt-3 fw-bold">Investment Value</h5>
            <p className="step-description para">
            Projects designed not just for living, but for long-term value and growth.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="col-md-4 col-sm-6 col-12">
          <div className="step-card custom-shadow p-4 h-100">
            <TbLifebuoyFilled className="step-icon orange" />
            <h5 className="step-heading mt-3 fw-bold">
            Modern Lifestyle Integration
            </h5>
            <p className="step-description para">
           Building long-term relationships through honesty, integrity, and clear communication.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="col-md-4 col-sm-6 col-12">
          <div className="step-card custom-shadow p-4 h-100">
            <VscWorkspaceTrusted  className="step-icon purple" />
            <h5 className="step-heading mt-3 fw-bold">Transparency & Trust</h5>
            <p className="step-description para">
              Nestled in prime neighborhoods, our properties offer unmatched
              connectivity to schools, hospitals, shopping hubs, and major
              transit routes.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Ourmission;
