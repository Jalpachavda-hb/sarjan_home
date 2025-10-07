import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Amenities = ({ amenitiesData }) => {
  // Function to normalize amenities data
  const normalizeAmenities = (data) => {
    if (!data) return [];
    
    let amenitiesArray = [];
    
    // Handle different data formats
    if (Array.isArray(data)) {
      amenitiesArray = data;
    } else if (typeof data === 'string') {
      try {
        // Clean the string and parse JSON
        const cleanString = data.replace(/\\/g, '').replace(/^"+|"+$/g, '');
        const parsed = JSON.parse(cleanString);
        amenitiesArray = Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        // If JSON parsing fails, try comma separation
        if (data.includes(',')) {
          amenitiesArray = data.split(',').map(item => item.trim().replace(/^"+|"+$/g, ''));
        } else if (data.includes('"')) {
          // Handle quoted strings in array format
          const matches = data.match(/"([^"]+)"/g);
          amenitiesArray = matches ? matches.map(match => match.replace(/"/g, '')) : [];
        } else {
          amenitiesArray = [data];
        }
      }
    } else if (typeof data === 'object') {
      amenitiesArray = [data];
    }
    
    // Filter out empty values and extract string values
    return amenitiesArray
      .map(item => {
        if (typeof item === 'string') return item.trim();
        if (item && typeof item === 'object') return item.name || item.title || item.amenity || JSON.stringify(item);
        return String(item);
      })
      .filter(item => item && item !== '');
  };

  const amenities = normalizeAmenities(amenitiesData);

  // Return null if no amenities
  if (amenities.length === 0) {
    return null;
  }

  return (
    <section className="amenities-section" id="amenities">
      <div className="container">
        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <div className="amenity-card" key={index}>
              <FaCheckCircle className="icon" />
              <p className="para">{amenity}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;