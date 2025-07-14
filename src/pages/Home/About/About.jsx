import about_image from "../../../../public/about-image.jpg";
import about_drow from "../../../../public/about-drow.png";

const About = () => {
  return (
    <div className="bg-light">
      <div className="py-5  text-center container_content">
        <div className="content-section">
          <div className="menu-derection position-relative">
            <p className=" ">How About Learn Us</p>
            <img src={about_drow} alt="" />
          </div>
          <h2 className="font-weight-bold mb-5">Discover More Benefits</h2>

          <div className=" main-box-content">
            <div className="col-md-6 mb-4">
              <div className="position-relative">
                <img
                  src={about_image}
                  alt="Meeting"
                  className="img-fluid  shadow"
                />

                <div className="d-flex list-cart list-cart2  gap-4">
                  <div>
                    <div className=" rounded-circle2 rounded-circle text-white font-weight-bold mr-3 border">
                      02
                    </div>
                  </div>
                  <div className="text-left  pr-3">
                    <h5 className="mb-2">Schedule a Meeting</h5>
                    <p className="mb-0 text-white">
                      Sed ut perspiciatis unde omnis natus error sit volup
                      accusantium.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-box">
              <div className="d-flex list-cart gap-4 hover-card">
                <div>
                  <div className=" rounded-circle1 rounded-circle text-white  font-weight-bold mr-3 border">
                    01
                  </div>
                </div>
                <div className="text-left  pr-3">
                  <h5 className="mb-2">Make a Decision</h5>
                  <p className="mb-0 ">
                    Sed ut perspiciatis unde omnis natus error sit volup
                    accusantium.
                  </p>
                </div>
              </div>

              <div className="d-flex list-cart list-cart-3  gap-4 hover-card">
                <div>
                  <div className="rounded-circle3  rounded-circle text-white font-weight-bold mr-3 border">
                    03
                  </div>
                </div>
                <div className="text-left  pr-3">
                  <h5 className="mb-2">Decision Analysis</h5>
                  <p className="mb-0 ">
                    Sed ut perspiciatis unde omnis natus error sit volup
                    accusantium.
                  </p>
                </div>
              </div>

              <div className="d-flex list-cart gap-4 hover-card  ">
                <div>
                  <div className="rounded-circle3  rounded-circle text-white font-weight-bold mr-3 border">
                    04
                  </div>
                </div>
                <div className="text-left pr-3">
                  <h5 className="mb-2">Transformation Completed</h5>
                  <p className="mb-0">
                    Sed ut perspiciatis unde omnis natus error sit volup
                    accusantium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
