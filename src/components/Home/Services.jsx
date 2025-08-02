import React from "react";
// import icon21 from "../../assets/img/icons/icon-img/21.png";
// import icon22 from "../../assets/img/icons/icon-img/22.png";
// import icon23 from "../../assets/img/icons/icon-img/23.png";

const Services = () => {
  return (
    <div className="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                Our Services
              </h6>
              <h1 className="section-title">Our Main Focus</h1>
            </div>
          </div>
        </div>

        <div className="row ltn__custom-gutter--- justify-content-center">
          {/* Card 1 */}
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white box-shadow-1">
              <div className="ltn__feature-icon">
                <img src={icon21} alt="Buy & Sell Properties" />
              </div>
              <div className="ltn__feature-info">
                <h3><a href="#">Buy &amp; Sell Properties</a></h3>
                <p>
                  Seamless buying and selling experience with expert guidance
                  and verified listings.
                </p>
                <a className="ltn__service-btn" href="https://sarjanhomes.in/projects">
                  Find A Home <i className="flaticon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white box-shadow-1 active">
              <div className="ltn__feature-icon">
                <img src={icon22} alt="Rental Solutions" />
              </div>
              <div className="ltn__feature-info">
                <h3><a href="#">Rental Solutions</a></h3>
                <p>
                  Find the perfect home or commercial space for rent with
                  flexible options.
                </p>
                <a className="ltn__service-btn" href="https://sarjanhomes.in/projects">
                  Find A Home <i className="flaticon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white box-shadow-1">
              <div className="ltn__feature-icon">
                <img src={icon23} alt="Property Consultation" />
              </div>
              <div className="ltn__feature-info">
                <h3><a href="#">Property Consultation</a></h3>
                <p>
                  Get advice on real estate investments, legal documentation,
                  and market trends.
                </p>
                <a className="ltn__service-btn" href="https://sarjanhomes.in/projects">
                  Find A Home <i className="flaticon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
