import React from "react";

const ServicesSection = () => {
  return (
    <div className="container-fluid">
      <ul className="c-services">
        <li className="c-services__item">
          <h3>Property Buying Assistance</h3>
          <ul>
            <li className="cardcontain">Personalized property search based on your needs</li>
            <li className="cardcontain">Expert negotiation for the best price</li>
            <li className="cardcontain">Legal and documentation support</li>
          </ul>
        </li>
        <li className="c-services__item">
          <h3>Property Selling Services</h3>
          <ul>
            <li className="cardcontain" >Property listing on top platforms</li>
            <li className="cardcontain">Professional photography and virtual tours</li>
            <li className="cardcontain">Verified buyers and secure transactions</li>
          </ul>
        </li>
        <li className="c-services__item">
          <h3>Rental & Leasing</h3>
          <ul>
            <li className="cardcontain">Residential & commercial rentals</li>
            <li className="cardcontain">Verified tenants & background checks</li>
            <li className="cardcontain">Rental agreement support</li>
          </ul>
        </li>
        <li className="c-services__item">
          <h3> Investment Consulting</h3>
          <ul>
            <li className="cardcontain">Property registration & documentation</li>
            <li className="cardcontain">Loan & mortgage consultation</li>
            <li className="cardcontain">Tie-ups with top banks and legal advisors</li>
          </ul>
        </li>
        <li className="c-services__item">
          <h3> Interior & Vastu Consultation</h3>
          <ul>
            <li className="cardcontain">Affordable interior design packages</li>
            <li className="cardcontain">Vastu-compliant layout guidance</li>
            <li className="cardcontain">Turnkey project assistance</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ServicesSection;
