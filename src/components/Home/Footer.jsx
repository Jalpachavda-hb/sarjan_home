import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/img/logo-2.png";

const Footer = () => {
  return (
    <>
    
    <footer className="real-footer bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row text-center text-md-start align-items-center">
          {/* Logo */}
          <div className="col-md-4 mb-4 mb-md-0 d-flex justify-content-center justify-content-md-start align-items-center">
            <img src={logo} alt="Company Logo" className="footer-logo" />
          </div>

          {/* Contact Info */}
          <div className="col-md-5 footer-contact">
            <div className="footer-info-item d-flex align-items-start mb-2">
              <FaMapMarkerAlt className="footer-icon me-2 mt-1" />
              <span>
                F.P No. 95, T.P 409-A, Lubi Corporate House Lane, SP Ring Road,
                Khoraj, Gandhinagar
              </span>
            </div>
            <div className="footer-info-item d-flex align-items-center mb-2">
              <FaPhoneAlt className="footer-icon me-2" />
              <span>+91 9099065666</span>
            </div>
            <div className="footer-info-item d-flex align-items-center">
              <FaEnvelope className="footer-icon me-2" />
              <span>contact@sarjanhomes.in</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="col-md-3 text-center text-md-end mt-4 mt-md-0">
            <div className="footer-socials d-flex justify-content-center justify-content-md-end gap-3">
              <a href="/" className="footer-social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="/" className="footer-social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="/" className="footer-social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>     
        <div className="row mt-4">
          <div className="col text-center footer-bottom small">
            © {new Date().getFullYear()} Copyright Sarjan Homes. All rights
            reserved. Designed & Developed by Fairytale Software.
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
