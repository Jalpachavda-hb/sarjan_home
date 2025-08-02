import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import AOS from "aos";
import bannerBg from "../../assets/img/bg/bg1.webp";
import bannerBg2 from "../../assets/img/bg/index-4.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";
import "./Hero.css";
import logo from "../../assets/img/logo-2.png";
import AboutHome from "../Home/About";
import ThreeSteps from "../Home/WhyChoose";
import Projects from "../Home/Projects";
import VideoSection from "../Home/Vidiosection";
import Benifitsection from "../Home/Benifitsection";
import Footer from "../Home/Footer";
import Testimonial from "../Home/Testimonial";
import { Link } from "react-router-dom";

const Home = () => {
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
            <div className="banner__slide-area swiper-slide">
              <div
                className="banner__slide-area-image"
                style={{ backgroundImage: `url(${bannerBg})` }}
              ></div>
              <div className="container">
                <div className="row align-items-center">
                  {/* Left: Text */}
                  <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
                    <div className="banner__slide-content text-start">
                      <span className="subtitle__one" data-aos="fade-right">
                        Blending Comfort with Nature
                      </span>
                      <p data-aos="fade-left " className="para1">
                        At Sarjan Homes, every brick speaks of trust and
                        excellence. Discover elegant living spaces designed for
                        comfort, convenience, and community living — all in
                        prime locations.
                      </p>
                      <a
                        href="#about"
                        className="btn explore-btn mt-3"
                        data-aos="fade-up"
                      >
                        Explore More
                      </a>
                    </div>
                  </div>
                  {/* Right: Image */}
                  <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
                    <img
                      src={require("../../assets/img/squer.png")}
                      alt="Hexagon"
                      className="img-fluid banner__right-image"
                      data-aos="fade-up"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div className="banner__slide-area swiper-slide">
              <div
                className="banner__slide-area-image"
                style={{ backgroundImage: `url(${bannerBg2})` }}
              ></div>
              <div className="container">
                <div className="row align-items-center">
                  {/* Left: Text */}
                  <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
                    <div className="banner__slide-content text-start">
                      <span className="subtitle__one" data-aos="fade-right">
                       Find Your Dream Home
                      </span>
                      <p data-aos="fade-left " className="para1">
                        Welcome to Sarjan Homes — your trusted partner in
                        turning dreams into reality. Whether you're seeking your
                        first home or a luxurious retreat, we offer thoughtfully
                        designed residences that blend comfort, elegance, and
                        functionality.
                      </p>
                      <a
                        href="#about"
                        className="btn explore-btn mt-3"
                        data-aos="fade-up"
                      >
                        Explore More
                      </a>
                    </div>
                  </div>
                  {/* Right: Image */}
                  <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
                    <img
                      src={require("../../assets/img/hero-hexagon.png")}
                      alt="Hexagon"
                      className="img-fluid banner__right-image"
                      data-aos="fade-up"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <AboutHome />
      <ThreeSteps />
      <Projects />
      <Benifitsection />
      <VideoSection />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
