import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import AOS from "aos";
import bannerBg from "../../assets/img/bg/contactusbg.jpg";
import "swiper/css";
import "./contsct.css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";
import logo from "../../assets/img/logo-2.png";
import Footer from "../Home/Footer";
import { FaMapLocation } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa6";
import contactus from "../../assets/img/bg/contact.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Contactus = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    const handleScroll = () => {
      const header = document.querySelector(".header__sticky");
      if (window.scrollY > 135) {
        header.classList.add("header__sticky-sticky-menu");
      } else {
        header.classList.remove("header__sticky-sticky-menu");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",

    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only digits in phone
    if (name === "phone" && !/^\d*$/.test(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // ✅ Success
    console.log("Submitted data:", formData);
    toast.success("Form submitted successfully!", { autoClose: 3000 });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",

      message: "",
    });
    setErrors({});
  };

  return (
    <>
      {/* Navbar */}
      <header className="header__sticky one">
        <div className="header__area">
          <div className="container custom__container">
            <div className="header__area-menubar d-flex justify-content-between align-items-center">
              {/* Logo */}
              <div className="header__area-menubar-left">
                <div className="header__area-menubar-left-logo">
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="header__area-menubar-right-menu d-none d-lg-block">
                <ul
                  className="mainmenu d-flex align-items-center"
                  id="mobilemenu"
                >
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/Property">Our Projects</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Mobile Menu Toggle */}
              <div
                className="menu-toggle d-lg-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="menu-responsive-mobile d-lg-none">
              <ul>
                <li>
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setMenuOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/Property" onClick={() => setMenuOpen(false)}>
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
      {/* Banner Area */}
      <div className="home__banner">
        <Swiper
          className="banner__slide swiper banner-slide"
          modules={[Navigation, Autoplay, EffectFade]}
          navigation={{
            nextEl: ".home__banner-button-next",
            prevEl: ".home__banner-button-prev",
          }}
          autoplay={{ delay: 6000 }}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1200}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="banner__slide-area home__banner-aboutus">
              <div
                className="banner__slide-area-image"
                style={{ backgroundImage: `url(${bannerBg})` }}
              ></div>
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 text-center">
                    <div className="home__banner-title" data-aos="fade-up">
                      <div className="home__banner-title" data-aos="fade-up">
                        <h1>Contact Us</h1>
                        <p className="text-white">
                          We’re happy to answer your questions and guide you
                          every step of the way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <section className="contact-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="contact-info mt-3">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i>
                      <FaMapLocation />
                    </i>
                  </div>
                  <div className="contact-info-text ">
                    <h2 className="text-color">Address</h2>
                    <span>
                      Under Pass, Nr.Vaishnodevi-Zundal, Sardar Patel Ring Rd,
                      Khoraj, Gujarat
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="col-md-3">
              <div className="contact-info ">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i>
                      <MdEmail />
                    </i>
                  </div>
                  <div className="contact-info-text">
                    <h2 className="text-color">E-mail</h2>
                    <span>info@sarjan.com</span>
                    <span>contact@sarjanhomes</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i>
                      <FaYoutube />
                    </i>
                  </div>
                  <div className="contact-info-text">
                    <h2 className="text-color">YouTube</h2>
                    <span>
                      <a
                        href="https://www.youtube.com/watch?v=mDq5OvDkesk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-link"
                      >
                        Project Highlights
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i>
                      <FaPhoneAlt />
                    </i>
                  </div>
                  <div className="contact-info-text">
                    <h2 className="text-white">Contact Number</h2>
                    <span>+91 9662518738</span>
                    <span>+91 9898827988</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="contact-page-form">
                <h2>Contact us</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && (
                          <p className="error" style={{ color: "red" }}>
                            {errors.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <label htmlFor="email">E-mail</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="E-mail"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <p className="error" style={{ color: "red" }}>{errors.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <label htmlFor="subject">Contact Number</label>
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          maxLength="10"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && (
                          <p className="error" style={{ color: "red" }}>{errors.phone}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12"></div>
                    <div className="col-md-12 message-input">
                      <div className="single-input-field">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          placeholder="Write Your Message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                        {errors.message && (
                          <p className="error" style={{ color: "red", marginTop: "0px" }}>
                            {errors.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="single-input-fieldsbtn">
                      <input type="submit" value="Send Now" />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-4 d-flex">
              <div className="contact-page-map w-100 h-100">
                <img
                  src={contactus}
                  className="img-fluid contactimg object-fit-cover"
                  alt="Contact Us"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Contactus;
