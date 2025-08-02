import React from "react";
import doc1 from "../../assets/img/masterplan.jpg";
import doc2 from "../../assets/img/doc2.jpg";
import doc3 from "../../assets/img/doc3.jpg";
import doc4 from "../../assets/img/doc4.jpg";
import doc5 from "../../assets/img/doc5.jpg";
import { IoIosHelpCircleOutline } from "react-icons/io";
const documents = [
  {
    title: "Project Master Plan",
    description: "Comprehensive site layout and development plan",
    fileSize: "2.4 MB",
    fileType: "PDF",
    image: doc1,
    link: "#",
  },
  {
    title: "Floor Plans",
    description: "Unit-wise floor plans with dimensions",
    fileSize: "3.1 MB",
    fileType: "PDF",
    image: doc2,
    link: "#",
  },
  {
    title: "Price Sheet",
    description: "Detailed pricing of all available units",
    fileSize: "500 KB",
    fileType: "PDF",
    image: doc3,
    link: "#",
  },
  {
    title: "Legal Documents",
    description: "RERA, approval certificates & other legal docs",
    fileSize: "1.8 MB",
    fileType: "PDF",
    image: doc4,
    link: "#",
  },
  {
    title: "Legal Documents",
    description: "RERA, approval certificates & other legal docs",
    fileSize: "1.8 MB",
    fileType: "PDF",
    image: doc5,
    link: "#",
  },
];

const Documents = () => {
  return (
    <section className="py-5 bg-light documents-section">
      <div className="container">
        <div className="row g-4">
          {documents.map((doc, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 document-card border-0 shadow-sm">
                <div className="position-relative overflow-hidden doc-img-wrapper">
                  <img
                    src={doc.image}
                    alt={doc.title}
                    className="card-img-top object-fit-cover h-100"
                  />
                  <div className="position-absolute top-0 end-0 m-2 d-flex gap-2">
                    <span className="badge bg-white text-dark fw-medium small-badge">
                      {doc.fileType}
                    </span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column mb-5">
                  <h5 className="card-title text-dark doc-title">
                    {doc.title}
                  </h5>
                  <p className="card-text text-muted flex-grow-1 doc-desc">
                    {doc.description}
                  </p>
                  <a
                    href={doc.link}
                    className="btn  mt-auto text-white p-3  download-btn "
                  >
                    <i className="bi bi-download me-2 "></i>Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
     
      </div>
         <div className="infocard">
          <div className="info-section-container  text-center py-5">
            <div className="info-box bg-white shadow-lg rounded-4 p-4 p-sm-5 border border-light-subtle">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="info-icon-circle rounded-circle d-flex align-items-center justify-content-center">
                  <IoIosHelpCircleOutline className="ri-information-line iconhelp " />
                </div>
              </div>
              <h3 className="h5 h4-sm fw-semibold text-dark mb-3">
                Need Additional Information?
              </h3>
              <p
                className="text-secondary small mb-3 mb-sm-4 mx-auto"
                style={{ maxWidth: "650px" }}
              >
                Our sales team is available to provide personalized project
                presentations, site visits, and answer any questions about the
                development.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 gap-sm-3">
                <button className="btn btncall d-flex align-items-center justify-content-center px-4 py-2  ">
                  <i className="ri-phone-line me-2"></i> Schedule a Call
                </button>
                <button className=" btnsite btn d-flex align-items-center justify-content-center px-4 py-2  fw-medium">
                  <i className="ri-calendar-line me-2"></i> Book Site Visit
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Documents;
