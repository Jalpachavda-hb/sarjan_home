import  { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import AOS from "aos";

import bannerBg2 from "../../assets/img/bg/index-4.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";
import "./Hero.css";
import AboutHome from "../Home/About";
import Projects from "../Home/Projects";
import VideoSection from "../Home/Vidiosection";
import Benifitsection from "../Home/Benifitsection";
import Footer from "../Home/Footer";
import Testimonial from "../Home/Testimonial";
import { Link } from "react-router-dom";
import { useLogo } from "../../contexts/LogoContext";
import defaultLogo from "../../assets/img/logo-2.png";
import squer from "../../assets/img/hero-slider-1.avif";

import { herosliders } from "../../utils/Api_path";
import Preloader from "../preloader/Preloader";
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logo, loading: logoLoading } = useLogo();
  const [slides, setSlides] = useState([]);
  const [apiLoading, setApiLoading] = useState(true);
 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    const handleScroll = () => {
      const header = document.querySelector(".header__sticky");
      if (header) {
        if (window.scrollY > 135) {
          header.classList.add("header__sticky-sticky-menu");
        } else {
          header.classList.remove("header__sticky-sticky-menu");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let loaded = false;

    const loadData = async () => {
      if (loaded) return;
      loaded = true;

      try {
        const res = await herosliders();
        setSlides(res || []);
      } finally {
        setApiLoading(false);
      }
    };

    loadData();
  }, []);

  if (apiLoading || logoLoading) {
    return <Preloader />;
  }

  return (
    <>
      {/* Navbar */}

      <header className="header__sticky one ">
        <div className="header__area  ">
          <div className="container  ">
            <div className="header__area-menubar d-flex justify-content-between align-items-center">
              {/* Logo */}
              <div className="header__area-menubar-left">
                <div className="header__area-menubar-left-logo">
                  <Link to="/">
                    <img src={logo || defaultLogo} alt="Logo" />
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
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="banner__slide-area swiper-slide">
                {/* Background image */}
                <div
                  className="banner__slide-area-image"
                  style={{
                    backgroundImage: `url(${item.background_image || bannerBg2})`,
                  }}
                ></div>

                <div className="container-fluid">
                  <div className="row align-items-center">
                    {/* LEFT TEXT */}
                    <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
                      <div className="banner__slide-content text-start">
                        <span className="hero_text" data-aos="fade-right">
                          {item.title}
                        </span>

                        <p data-aos="fade-left" className="para1">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT SLIDE IMAGE */}
                    <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0 pe-0">
                      <img
                        src={item.slide_image || squer}
                        alt="Hero Slide"
                        className="img-fluid banner__right-image"
                        data-aos="fade-up"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <AboutHome />

      <Projects />
      <div className="container ">
        <span className="section-title d-block mb-4 container">
          {" "}
          Why Choose Sarjan Homes
        </span>
        <p className="para mb-5">
          {" "}
          Experience Comfort, Class, and Convenience — All in One Place
        </p>
      </div>
      <Benifitsection />
      <VideoSection />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
