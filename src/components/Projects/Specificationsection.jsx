
import React from "react";
import { FaListAlt } from "react-icons/fa";
import specification from "../../assets/img/specification.png";

const Specifications = ({ specificationData }) => {
  // Normalization function - only uses API data
  const normalizeSpecs = (data) => {
    if (!data || data === "") {
      return [];
    }

    // If it's a string, try to parse it as JSON
    if (typeof data === "string") {
      try {
        const parsedData = JSON.parse(data);
        return Array.isArray(parsedData)
          ? parsedData
          : [{ title: "Specifications", description: data }];
      } catch (error) {
        // If parsing fails, treat it as a simple string
        return [{ title: "Specifications", description: data }];
      }
    }

    // If it's already an array, normalize the structure
    if (Array.isArray(data)) {
      return data.map((item) => ({
        title: item.title || item.name || "Specification",
        description:
          item.description ||
          item.description ||
          item.desc ||
          "No description available",
      }));
    }

    // Fallback to empty array if no valid data
    return [];
  };

  const normalizedSpecs = normalizeSpecs(specificationData);

  // Don't render anything if no specifications data
  if (!normalizedSpecs || normalizedSpecs.length === 0) {
    return null;
  }

  return (
    <section className="specifications-section py-5" id="specifications">
      <div className="container">
        <div className="row">
          {normalizedSpecs.map((item, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="spec-card p-4 shadow-sm rounded h-100 d-flex align-items-start">
                <img
                  src={specification}
                  alt="Specification Icon"
                  className="me-2"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
                <div>
                  <h5 className="text-gold mb-2">{item.title}</h5>
                  <p className="para">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specifications;
