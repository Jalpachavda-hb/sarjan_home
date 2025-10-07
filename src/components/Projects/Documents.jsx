import React from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";
import commonDocImage from "../../assets/img/docimg.png"; // common image for all docs

const Documents = ({ reraDocuments = [] }) => {
  // Ensure documents is always an array
  const documents = reraDocuments || [];
  const handleDownload = async (url, filename) => {
    console.log(url);
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      window.URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback: open in new tab
      window.open(url, "_blank");
    }
  };
  return (
    <section className="py-5 bg-light documents-section">
      <div className="container">
        <div className="row g-4">
          {documents.length > 0 ? (
            documents.map((doc, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 document-card border-0 shadow-sm">
                  <div className="position-relative overflow-hidden doc-img-wrapper">
                    <img
                      src={commonDocImage} // common image for all documents
                      alt={doc.document_name || "Document"}
                      className="card-img-top object-fit-cover h-100"
                    />
                    <div className="position-absolute top-0 end-0 m-2 d-flex gap-2">
                      <span className="badge bg-white text-dark fw-medium small-badge">
                        PDF
                      </span>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column mb-5">
                    <h5 className="card-title text-dark doc-title">
                      {doc.document_name || "RERA Certificate"}
                    </h5>
                    <p className="card-text text-muted flex-grow-1 doc-desc">
                      {/* You can add description if available */}
                      {doc.description || "Official RERA document"}
                    </p>

                    <button
                      onClick={() =>
                        handleDownload(
                          doc.rera_documents, // <-- correct field from API
                          doc.document_name || "RERA_Certificate.pdf"
                        )
                      }
                      className="btn mt-auto text-white p-3 download-btn"
                    >
                      <i className="bi bi-download me-2"></i>Download
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No documents available.</p>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="infocard">
        <div className="info-section-container text-center py-5">
          <div className="info-box bg-white shadow-lg rounded-4 p-4 p-sm-5 border border-light-subtle">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="info-icon-circle rounded-circle d-flex align-items-center justify-content-center">
                <IoIosHelpCircleOutline className="ri-information-line iconhelp" />
              </div>
            </div>
            <h3 className="mb-3 para text-dark text-bold fs-3">
              Need Additional Information?
            </h3>
            <p
              className="text-secondary small mb-3 mb-sm-4 mx-auto para"
              style={{ maxWidth: "650px" }}
            >
              Our sales team is available to provide personalized project
              presentations, site visits, and answer any questions about the
              development.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 gap-sm-3">
              <button className="btn btncall d-flex align-items-center para justify-content-center px-4 py-2">
                <i className="ri-phone-line me-2"></i> Schedule a Call
              </button>
              <button className="btn btnsite d-flex align-items-center para justify-content-center px-4 py-2 fw-medium">
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
