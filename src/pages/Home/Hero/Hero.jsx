import { FaCheckCircle } from "react-icons/fa";
import hero1 from "../../../../public/hero1.jpg";
import hero2 from "../../../../public/hero2.jpg";
import hero3 from "../../../../public/hero3.jpg";

const Hero = () => {
  return (
    <div className="experience-section ">
      <div className="container_content">
        <div className="row ">
          {/* ───────────────── Left column ───────────────── */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <p className="text-primary font-weight-bold mb-2">Join Our Team</p>

            <h2 className=" font-weight-bold mb-4 ">
              We’ve Experience Team <br /> Become an Instructor
            </h2>

            <p className="text-muted mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut.
            </p>

            {/* feature bullets */}
            <div className="row mb-4">
              <div className="col-sm-6 d-flex gap-3">
                <FaCheckCircle className="text-primary mr-3 mt-1" size={30} />
                <div>
                  <h5 className="font-weight-bold mb-1">Exclusive Coach</h5>
                  <p className="text-muted mb-0">
                    Sit consectetur adipiscing eiese tempor incidies.
                  </p>
                </div>
              </div>

              <div className="col-sm-6 d-flex mt-4 mt-sm-0 gap-3">
                <FaCheckCircle className="text-primary mr-3 mt-1" size={30} />
                <div>
                  <h5 className="font-weight-bold mb-1">Creative Minds</h5>
                  <p className="text-muted mb-0">
                    Sit consectetur adipiscing eiese tempor incidies.
                  </p>
                </div>
              </div>
            </div>

            <a href="#become" className="btn button_color btn-lg  ">
              Become An Instructor <i className="fas fa-arrow-right ml-2" />
            </a>
          </div>

          {/* ───────────────── Right column ───────────────── */}
          <div className="col-lg-6 position-relative">
            <div className="image-grid d-flex flex-wrap justify-content-between">
              <h2 className="title-box">COACH</h2>

              {/* big image */}
              <div className="main-img-wrapper">
                <img
                  src={hero1}
                  alt="Main coach"
                  className="img-fluid  shadow-sm"
                />
              </div>

              {/* small right‑top */}
              <div className="small-img1">
                <img
                  src={hero2}
                  alt="Coach portrait"
                  className="img-fluid  shadow-sm  "
                />
              </div>

              {/* small right‑bottom */}
              <img
                src={hero3}
                alt="Coach collaboration"
                className="img-fluid  shadow-sm small-img2"
              />

              {/* overlay badge */}
              <div className="years-badge d-flex  justify-content-center text-white gap-3 ">
                <h3 className="display-4 font-weight-bold line-height-1">25</h3>
                <div className="text-left">
                  <p className="h5 mb-0">Years Of</p>
                  <p className="h5 mb-0">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
