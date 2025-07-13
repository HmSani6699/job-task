import { FaRegClock } from "react-icons/fa";
import logo from "../../../public/logo.png";

const Navber = () => {
  return (
    <div className="navber_container">
      {/* ---------- TOP BAR ---------- */}
      <div className="top-bar  text-white ">
        <div className="container d-flex flex-wrap justify-content-between pt-2">
          {/* Left: office hours */}

          <div className="d-flex align-items-center gap-2">
            <p>
              <FaRegClock />
            </p>
            <p className=" ">Monday – Friday, 08 am – 05 pm</p>
          </div>

          {/* Right: mini menu + socials */}
          <ul className="list-inline mb-0">
            <li className="list-inline-item mx-2 d-none d-md-inline">
              <a href="#privacy" className="text-white">
                Privacy
              </a>
            </li>
            <li className="list-inline-item mx-2 d-none d-md-inline">
              <a href="#faqs" className="text-white">
                Faqs
              </a>
            </li>
            <li className="list-inline-item mx-2 d-none d-md-inline">
              <a href="#about" className="text-white">
                About
              </a>
            </li>

            <li className="list-inline-item mx-2 d-none d-md-inline"></li>

            <li className="list-inline-item mx-2">
              <a href="https://facebook.com" className="text-white">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://x.com" className="text-white">
                <i className="fab fa-x-twitter" />
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://pinterest.com" className="text-white">
                <i className="fab fa-pinterest-p" />
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://instagram.com" className="text-white">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item mx-2 br-2"></li>

            <li className="list-inline-item mr-4">
              <div className="d-flex gap-1 align-items-center">
                <i className="far fa-user mr-2" />
                <a href="#login" className="text-white">
                  Login / Register
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* ---------- MAIN NAVBAR ---------- */}
      <nav class="navbar navbar-light  container">
        <img
          src={logo}
          alt="Wellearn logo"
          width={165} /* exact width you wanted */
          className="img-fluid"
        />
        <form className="form-inline">
          {" "}
          <ul className="d-flex align-items-center">
            {/* --- Plain link --- */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#home"
                id="homeDropdown"
                data-toggle="dropdown"
              >
                Home
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#home-1">
                  Home 1
                </a>
                <a className="dropdown-item" href="#home-2">
                  Home 2
                </a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#courses"
                id="courseDropdown"
                data-toggle="dropdown"
              >
                Courses
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#course-grid">
                  Course Grid
                </a>
                <a className="dropdown-item" href="#course-single">
                  Single Course
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link active text-primary" href="#about">
                About
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#pages"
                id="pagesDropdown"
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#team">
                  Team
                </a>
                <a className="dropdown-item" href="#pricing">
                  Pricing
                </a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#news"
                id="newsDropdown"
                data-toggle="dropdown"
              >
                News
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#blog">
                  Blog
                </a>
                <a className="dropdown-item" href="#article">
                  Single Article
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link" href="#search">
                <i className="fas fa-search" />
              </a>
            </li>

            <li className="nav-item mx-2 position-relative">
              <a className="nav-link" href="#cart">
                <i className="fas fa-shopping-cart" />
                <span className="badge badge-primary badge-pill cart-badge">
                  0
                </span>
              </a>
            </li>

            <li className="nav-item mt-3 mt-lg-0 mx-lg-2">
              <a className="btn btn-primary btn-block px-4" href="#get-started">
                Get Started <i className="fas fa-arrow-right ml-1" />
              </a>
            </li>
          </ul>
        </form>
      </nav>
    </div>
  );
};

export default Navber;
