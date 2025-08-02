import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const amenities = [
  "Sufficient Parking", "24 x 7 Security", "2 Lift for Each Block", "Ground Floor Toilet",
  "Floor Games for Children", "Gazebo Seating", "Zula Space", "Terrace Gazebo",
  "Multipurpose Terrace Court", "Well Design Entrance Foyer", "CCTV Surveillance", "Solar System",
  "Fire Safety", "Outdoor Chess & Carrom", "Landscape Garden", "Terrace Oxygen Pavilion",
  "Terrace Sundeck", "Terrace Walking Track", "24 x 7 Water Supply", "Video Door Phone",
  "Power Back for Lift & Common Lighting", "Podium Level Garden", "Box Cricket",
  "Outside Sit-Out Space", "Terrace Yoga Deck", "Terrace Sit-Out Area"
];

const Amenities = () => {
  return (
    <section className="amenities-section" id="amenities">
      <div className="container">
       
        <div className="amenities-grid">
          {amenities.map((item, index) => (
            <div className="amenity-card" key={index}>
              <FaCheckCircle className="icon" />
              <p  className="para">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
