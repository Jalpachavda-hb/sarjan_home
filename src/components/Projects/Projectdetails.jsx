import React, { useEffect, useState } from "react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import AOS from "aos";
import bannerBg from "../../assets/img/bg/projectbg.jfif";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";
import "../Home/Hero.css";
import "../Aboutus/Aboutuspage.css";
import { useParams } from "react-router-dom";
import { useProjectDetails } from "../../utils/useProjectDetails";
import Footer from "../Home/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useLogo } from "../../contexts/LogoContext";
import defaultLogo from "../../assets/img/logo-2.png";
import img1 from "../../assets/img/bg/bg1.webp";
import img2 from "../../assets/img/bg/homenight.jpg";
import img3 from "../../assets/img/bg/bg1.webp";
import img4 from "../../assets/img/bg/bg1.webp";
import Specificationsection from "./Specificationsection";
import Buildingplans from "./Buildingplan";
import Documents from "./Documents";
import Amenities from "./Amenities ";

const Property = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logo, loading } = useLogo();
  const { id } = useParams();
  const { projectData, error } = useProjectDetails(id);

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
    console.log("Full projectData:", projectData);
    if (projectData) {
      console.log("Site data:", projectData.site);
      console.log("Gallery images:", projectData.gallery_images);
      console.log("RERA documents:", projectData.rera_documents);
    }
  }, [projectData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!projectData) return <div>No project data found.</div>;

  // Destructure with proper fallbacks based on actual API structure
  const {
    site,
    gallery_images = [],
    rera_documents = [],
    bird_views = [],
    unit_plans = [],
    floor_images = [],
  } = projectData;

  if (!site) return <div>No site data found.</div>;

  const {
    title = "Project Title",
    descr = "Description not available",
    rera_number = "RERA number not available",
    banner = bannerBg,
    brochure = "#",
    amenities = "",
    specification = "",

    // bhk_details = ""
  } = site;

  // Get gallery image URLs or fallback to default images
  const galleryImages =
    gallery_images.length > 0
      ? gallery_images.map((img) => img.gallery_image)
      : [img1, img2, img3, img4];

  return (
    <>
      {/* Navbar - Keep your existing navbar code */}
      <header className="header__sticky one">
        <div className="header__area">
          <div className="container ">
            <div className="header__area-menubar d-flex justify-content-between align-items-center">
              <div className="header__area-menubar-left">
                <div className="header__area-menubar-left-logo">
                  <Link to="/">
                    <img src={logo || defaultLogo} alt="Logo" />
                  </Link>
                </div>
              </div>

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
          <SwiperSlide>
            <div className="banner__slide-area home__banner-aboutus">
              <div
                className="banner__slide-area-image"
                style={{ backgroundImage: `url(${banner || bannerBg})` }}
              ></div>
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 text-center">
                    <div className="home__banner-title" data-aos="fade-up">
                      <h1>Project Details</h1>
                      <p className="text-white">
                        Discover a place you'll love to live
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Project Details */}
      <div className="detailscontainer">
        <div className="container">
          <h1 className="projectname projectdetailpagetitle">{title}</h1>
        </div>

        <h2 className="container mb-4 mt-5 projectdetailparatitle">
          Built with Vision, Designed for Life
        </h2>
        <p className="para container mb-0 ">
          At Sarjan Homes, we don’t just build structures — we create spaces
          where families grow, dreams take shape, and life feels truly at home.
          Our buildings are crafted with a thoughtful blend of modern
          architecture, premium materials, and sustainable practices. Every
          detail, from the layout to the finish, reflects our commitment to
          quality, comfort, and long-term value. With a focus on safety,
          functionality, and elegant design, Sarjan Homes is more than a
          residence — it’s a lifestyle built to last.
        </p>
        <h3 className="para container mb-0">{descr}</h3>

        <h2 className="container mb-4 mt-5 projectdetailparatitle">
          Rera Number
        </h2>

        <p className="fs-2 container mb-0 text-dark">{rera_number}</p>

        <a
          href={brochure}
          download="Sarjan Era Brochure.pdf"
          className="container mt-5 w-50 btnsite btn d-flex align-items-center para justify-content-center px-4 py-2 fw-medium"
          onClick={(e) =>
            !brochure || brochure === "#" ? e.preventDefault() : null
          }
        >
          <i className="ri-calendar-line me-2"></i>
          {brochure && brochure !== "#"
            ? "Download brochure"
            : "Brochure not available"}
        </a>
      </div>

      {/* Gallery Section */}
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container section-title" data-aos="fade-up"></div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Left Side - Swiper */}
            <div className="col-lg-8">
              <div className="portfolio-details-slider">
                <Swiper
                  loop={true}
                  speed={600}
                  autoplay={{ delay: 5000 }}
                  slidesPerView="auto"
                  pagination={{ clickable: true }}
                  modules={[Pagination, Autoplay]}
                  className="init-swiper"
                >
                  {galleryImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            {/* Right Side - Info */}
            <div className="col-lg-4">
              <div
                className="portfolio-info"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="projectname">{title}</h3>
                <ul>
                  <li className="mb-3">
                    <strong>Category</strong>: {projectData.project_type}
                  </li>
                  {/* <li className="mb-3">
                    <strong>BHK Details</strong>: {bhk_details || "Not specified"}
                  </li> */}
                  <li className="mb-3">
                    <a
                      href="#amenities"
                      className="text-decoration-none text-dark"
                    >
                      <strong>Amenities</strong>: Your Need, Our Expertise
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#speciality"
                      className="text-decoration-none text-dark"
                    >
                      <strong>Speciality</strong>: Premium quality construction
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#building-plans"
                      className="text-decoration-none text-dark"
                    >
                      <strong>Building plans</strong>:{" "}
                      {unit_plans.length > 0
                        ? `${unit_plans.length} plans available`
                        : "No plans available"}
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#rara-document"
                      className="text-decoration-none text-dark"
                    >
                      <strong>Documents</strong>:{" "}
                      {rera_documents.length > 0
                        ? `${rera_documents.length} documents available`
                        : "No documents available"}
                    </a>
                  </li>
                </ul>
              </div>
              {/* {bhk_details && <h6 className="text3d">{bhk_details}</h6>} */}
            </div>
          </div>
        </div>
      </section>

      {/* Pass the actual data to your components */}
      <section id="amenities">
        <span className="container section-title d-block mb-4 mt-5">
          Amenities
        </span>
        <p className="para container mb-5">Your Need, Our Expertise</p>
        <Amenities amenitiesData={amenities} />
      </section>

      <section id="speciality">
        <span className="container section-title d-block mb-4 mt-5">
          Speciality
        </span>
        <p className="para container mb-5">Premium quality construction</p>
        <Specificationsection specificationData={specification} />
      </section>

      <section id="building-plans">
        <span className="container section-title d-block mb-4 mt-5">
          Building plans
        </span>
        <p className="para container mb-5">
          Flexible plans for future customization.
        </p>
        <Buildingplans
          birdViews={bird_views}
          unitPlans={unit_plans}
          floorImages={floor_images}
        />
      </section>

      <section id="rara-document">
        <span className="container section-title d-block mb-4 mt-5">
          Rera Documents
        </span>
        <p className="para container mb-5">
          Official project documents and certifications.
        </p>
        <Documents reraDocuments={rera_documents} />
      </section>

      <Footer />
    </>
  );
};

export default Property;
