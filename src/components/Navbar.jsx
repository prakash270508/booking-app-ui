import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ distance }) {
  const [active, setActive] = useState("home");

  const handleClickHome = () => {
    setActive("home");
    scrollTo(0, 0);
  };

  useEffect(() => {
    if (distance > 0 && distance < 570) {
      setActive("home");
    } else if (distance > 570 && distance < 1100) {
      setActive("about");
    } else if (distance > 1100 && distance < 2300) {
      setActive("service");
    } else if (distance > 2300 && distance < 3076) {
      setActive("package");
    } else if (distance > 3076 && distance < 4808) {
      setActive("booking");
    } else if (distance > 4808 && distance < 5300) {
      setActive("contact");
    }
  }, [distance]);

  return (
    <div>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-map-marker-alt me-3"></i>Tourist
            </h1>
            {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link
                to={"/"}
                className={
                  active == "home"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
                onClick={handleClickHome}
              >
                Home
              </Link>
              <a
                href="#about"
                className={
                  active == "about"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
                onClick={() => setActive("about")}
              >
                About
              </a>
              <a
                href="#service"
                className={
                  active == "service"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
                onClick={() => setActive("service")}
              >
                Services
              </a>
              <a
                href="#package"
                className={
                  active == "package"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
                onClick={() => setActive("package")}
              >
                Packages
              </a>
              <a
                href="#booking"
                className={
                  active == "booking"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
                onClick={() => setActive("booking")}
              >
                Booking
              </a>
              {/* <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                            <a href="destination.html" className="dropdown-item">Destination</a>
                            <a href="booking.html" className="dropdown-item">Booking</a>
                            <a href="team.html" className="dropdown-item">Travel Guides</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="404.html" className="dropdown-item">404 Page</a>
                        </div>
                    </div> */}
              <a
                href="#contact"
                className={
                  active == "contact"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
                onClick={() => setActive("contact")}
              >
                Contact
              </a>
            </div>
            <a href="" className="btn btn-primary rounded-pill py-2 px-4">
              Register
            </a>
          </div>
        </nav>

        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">
                  Enjoy Your Vacation With Us
                </h1>
                <p className="fs-4 text-white mb-4 animated slideInDown">
                  Tempor erat elitr rebum at clita diam amet diam et eos erat
                  ipsum lorem sit
                </p>
                <div className="position-relative w-75 mx-auto animated slideInDown">
                  <input
                    className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Eg: Thailand"
                  />
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                    style={{ marginTop: "7px" }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
