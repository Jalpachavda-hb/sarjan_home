import React from "react";
import { SiInstructure } from "react-icons/si";
import { FaTools, FaHome, FaWater, FaBolt, FaToilet, FaDoorClosed, FaLayerGroup } from "react-icons/fa"; // example icons
import { GiStoneWall } from "react-icons/gi";
const Specifications = () => {
  const specs = [
    {
      icon: SiInstructure,
      title: "Structure",
      content: "Earthquake-resistant RCC work."
    },
    {
      icon:GiStoneWall ,
      title: "Wall Finish",
      content:
        "Internal walls will be finished with double coat putty over mala plaster. All external walls will be finished with texture over mala plaster with acrylic paint."
    },
    {
      icon: FaHome,
      title: "Flooring",
      content:
        "Good quality designer tiles in the drawing, dining, kitchen, and all bedrooms."
    },
    {
      icon: FaTools,
      title: "Kitchen",
      content:
        "Platform made of granite/artificial stone with good quality SS sink. Designer glazed tiles dado up to beam bottom level."
    },
    {
      icon: FaWater,
      title: "Plumbing",
      content:
        "Concealed plumbing with good quality CPVC-uPVC pipes & fittings."
    },
    {
      icon: FaBolt,
      title: "Electrification",
      content:
        "Concealed copper wiring with LSL copper wires & good quality modular switches (TS). AC points in the drawing room and all bedrooms."
    },
    {
      icon: FaToilet,
      title: "Toilets",
      content:
        "Good quality glazed tiles up to the beam bottom. Good quality bath fitting and sanitary ware."
    },
    {
      icon: FaDoorClosed,
      title: "Doors & Windows",
      content:
        "Decorative polished main door. All other doors are colored finish with good quality fittings. Powder-coated good quality aluminum slider windows."
    },
    {
      icon: FaLayerGroup,
      title: "Terrace",
      content:
        "Open terrace finished with suitable waterproofing and china mosaic flooring."
    }
  ];

  return (
    <section className="specifications-section py-5" id="specifications">
      <div className="container">
        <div className="row">
          {specs.map((item, index) => {
            const Icon = item.icon; // get the icon component
            return (
              <div className="col-md-6 mb-4" key={index}>
                <div className="spec-card p-4 shadow-sm rounded h-100 d-flex align-items-start">
            {Icon && <Icon className="me-2 text-gold" size={36} />}
                  <div>
                    <h5 className="text-gold mb-2">{item.title}</h5>
                    <p className="para">{item.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specifications;
