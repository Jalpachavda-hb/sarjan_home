// import React from "react";
// import { SiInstructure } from "react-icons/si";
// import { FaTools, FaHome, FaWater, FaBolt, FaToilet, FaDoorClosed, FaLayerGroup } from "react-icons/fa";
// import { GiStoneWall } from "react-icons/gi";

// const Specifications = ({ specificationData }) => {
//   const defaultSpecs = [
//     {
//       icon: SiInstructure,
//       title: "Structure",
//       description: "Earthquake-resistant RCC work."
//     },
//     {
//       icon: GiStoneWall,
//       title: "Wall Finish",
//       description: "Internal walls will be finished with double coat putty over mala plaster."
//     },
//     // ... rest of your default specs
//   ];
  
//   // Handle specification data - if it's a string or empty, use defaults
//   const specs = specificationData && specificationData !== '' 
//     ? (typeof specificationData === 'string' ? [{ title: "Specifications", description: specificationData }] : specificationData)
//     : defaultSpecs;

//   return (
//     <section className="specifications-section py-5" id="specifications">
//       <div className="container">
//         <div className="row">
//           {specs.map((item, index) => {
//             const Icon = item.icon || FaHome;
//             return (
//               <div className="col-md-6 mb-4" key={index}>
//                 <div className="spec-card p-4 shadow-sm rounded h-100 d-flex align-items-start">
//                   <Icon className="me-2 text-gold" size={36} />
//                   <div>
//                     <h5 className="text-gold mb-2">{item.title || item.name}</h5>
//                     <p className="para">{item.description || item.description}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Specifications;


import React from "react";
import { FaListAlt } from "react-icons/fa";
import specification from "../../assets/img/specification.png"


const Specifications = ({ specificationData }) => {
  // Normalization function - only uses API data
  const normalizeSpecs = (data) => {
    if (!data || data === '') {
      return [];
    }

    // If it's a string, try to parse it as JSON
    if (typeof data === 'string') {
      try {
        const parsedData = JSON.parse(data);
        return Array.isArray(parsedData) ? parsedData : [{ title: "Specifications", description: data }];
      } catch (error) {
        // If parsing fails, treat it as a simple string
        return [{ title: "Specifications", description: data }];
      }
    }

    // If it's already an array, normalize the structure
    if (Array.isArray(data)) {
      return data.map(item => ({
        title: item.title || item.name || "Specification",
        description: item.description || item.description || item.desc || "No description available"
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
                  className="me-3"
                  style={{
                    width: "40px",
                    height: "40px",
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