import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import AOS from "aos";
import bannerBg from "../../assets/img/bg/aboutbg.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";
import "../Home/Hero.css";
import "./Aboutuspage.css";
import logo from "../../assets/img/logo-2.png";

import ThreeSteps from "../Home/WhyChoose";
import Aboutsection from "../Aboutus/Aboutsection";

import ServicesSection from './services';
import Footer from "../Home/Footer";
import Testimonial from "../Home/Testimonial";
import { Link } from "react-router-dom";


const Aboutpage = () => {
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
          <ul className="mainmenu d-flex align-items-center" id="mobilemenu">
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/Property">Our Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle d-lg-none" onClick={() => setMenuOpen(!menuOpen)}>
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
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/Property" onClick={() => setMenuOpen(false)}>Our Projects</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
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
                        <h1>About us</h1>
                        <p className="text-white">
                          Building Trust, Delivering Dreams – Where Quality
                          Meets Excellence in Every Home
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
      <Aboutsection />
      <span className="container section-title d-block mb-4 mt-5">
        Features
      </span>
      <p className="para container">Why Choose Sarjan Homes</p>
      <ThreeSteps />
         <span className="container section-title d-block mb-4 mt-5 ">
   Our services
      </span>
      <p className="para container mb-5">What we Provide</p>
      <ServicesSection /> 
      <Testimonial />
      <Footer />
    </>
  );
};

export default Aboutpage;
