import React from "react";

const Specifications = () => {
  const specs = [
    {
      title: "Structure",
      content: "Earthquake-resistant RCC work."
    },
    {
      title: "Wall Finish",
      content:
        "Internal walls will be finished with double coat putty over mala plaster. All external walls will be finished with texture over mala plaster with acrylic paint."
    },
    {
      title: "Flooring",
      content:
        "Good quality designer tiles in the drawing, dining, kitchen, and all bedrooms."
    },
    {
      title: "Kitchen",
      content:
        "Platform made of granite/artificial stone with good quality SS sink. Designer glazed tiles dado up to beam bottom level."
    },
    {
      title: "Plumbing",
      content:
        "Concealed plumbing with good quality CPVC-uPVC pipes & fittings."
    },
    {
      title: "Electrification",
      content:
        "Concealed copper wiring with LSL copper wires & good quality modular switches (TS). AC points in the drawing room and all bedrooms."
    },
    {
      title: "Toilets",
      content:
        "Good quality glazed tiles up to the beam bottom. Good quality bath fitting and sanitary ware."
    },
    {
      title: "Doors & Windows",
      content:
        "Decorative polished main door. All other doors are colored finish with good quality fittings. Powder-coated good quality aluminum slider windows."
    },
    {
      title: "Terrace",
      content:
        "Open terrace finished with suitable waterproofing and china mosaic flooring."
    }
  ];

  return (
    <section className="specifications-section py-5" id="specifications">
      <div className="container">
       
        <div className="row">
          {specs.map((item, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="spec-card p-4 shadow-sm rounded h-100">
                <h5 className="text-gold mb-2">{item.title}</h5>
                <p  className="para">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specifications;
