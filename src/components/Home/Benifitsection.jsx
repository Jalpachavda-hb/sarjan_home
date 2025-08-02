import React from "react";
import homeplan from "../../assets/img/bg/homenight.jpg";
import { FaLocationArrow } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaOm } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { TbHomeStar } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa6";

const Benifitsection = () => {
  return (
    <div className="container-fluid" id="achivement">
      <div className="container">
        <div className="sec-skill">
          <span className="container section-title d-block mb-4 mt-5">
            Why Choose Sarjan Homes
          </span>
          <p className="para container">
            Experience Comfort, Class, and Convenience — All in One Place
          </p>
        </div>
      </div>

      <section id="features-2" className="features-2 section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center">
            {/* Left column */}
            <div className="col-lg-4">
              <div
                className="feature-item text-end mb-5"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3 className="awardh3">Prime Locations</h3>
                    <p className="awardp">
                      All our projects are strategically located with easy
                      access to highways, schools, hospitals, and shopping hubs
                      — giving you unmatched convenience.
                    </p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <FaLocationArrow />
                  </div>
                </div>
              </div>

              <div
                className="feature-item text-end mb-5"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3 className="awardh3">Modern Architecture</h3>
                    <p className="awardp">
                      Our homes are built with contemporary design principles,
                      offering spacious layouts, large windows for natural
                      light, and sustainable materials.
                    </p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <BsFillBuildingsFill />
                  </div>
                </div>
              </div>

              <div
                className="feature-item text-end"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3 className="awardh3">Vastu Compliant Homes</h3>
                    <p className="awardp">
                      Every Sarjan Home is thoughtfully planned to align with
                      Vastu principles, promoting positive energy, well-being,
                      and harmony in your space.
                    </p>
                  </div>
                        <div className="feature-icon flex-shrink-0">
                    <FaOm />
                  </div>
                </div>
              </div>
            </div>

            {/* Center column image */}
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <img src={homeplan} width="100%" alt="Sarjan Homes Plan" />
            </div>

            {/* Right column */}
            <div className="col-lg-4">
              <div
                className="feature-item mb-5"
                data-aos="fade-left"
                data-aos-delay="200"
              >

                <div className="d-flex align-items-center gap-4">
                     <div className="feature-icon flex-shrink-0">
                    <MdOutlineSecurity />
                  </div>
                  <div className="feature-content">
                    <h3 className="awardh3">Gated Community & Security</h3>
                    <p className="awardp">
                      Enjoy peace of mind with 24/7 security, CCTV surveillance,
                      gated entry points, and a safe environment for families
                      and children.
                    </p>
                  </div>
                  
                </div>
              </div>

              <div
                className="feature-item mb-5"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="d-flex align-items-center gap-4">
                     <div className="feature-icon flex-shrink-0">
                   <TbHomeStar />
                  </div>
                  <div className="feature-content">
                    <h3 className="awardh3">Amenities That Matter</h3>
                    <p className="awardp">
                      From landscaped gardens to play areas, gyms, and
                      clubhouses — our projects are designed for a balanced,
                      fulfilling lifestyle.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="feature-item mb-5"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="d-flex align-items-center gap-4">
                     <div className="feature-icon flex-shrink-0">
                    <FaHandshake />
                  </div>
                  <div className="feature-content">
                    <h3 className="awardh3">Trusted Legacy</h3>
                    <p className="awardp">
                      Sarjan Homes has delivered quality projects for over a
                      decade, earning trust through transparency, timely
                      delivery, and customer-first values.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End right column */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benifitsection;
