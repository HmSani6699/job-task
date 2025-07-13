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

          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <div className="position-relative">
                <img
                  src={about_image}
                  alt="Meeting"
                  className="img-fluid  shadow"
                />
                <div className="position-absolute bg-primary text-white p-4  shadow">
                  <div className="d-flex align-items-center">
                    <div className="bg-white text-primary rounded-circle px-3 py-2 font-weight-bold mr-3">
                      02
                    </div>
                    <div className="text-left">
                      <h5 className="mb-1">Schedule a Meeting</h5>
                      <p className="mb-0 small">
                        Sed ut perspiciatis unde omnis natus error sit volup
                        accusantium.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-4 p-4 bg-primary text-white rounded shadow text-left">
                <div className="d-flex align-items-center">
                  <div className="bg-white text-primary rounded-circle px-3 py-2 font-weight-bold mr-3">
                    01
                  </div>
                  <div>
                    <h5 className="mb-1">Make a Decision</h5>
                    <p className="mb-0 small">
                      Sed ut perspiciatis unde omnis natus error sit volup
                      accusantium.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-4 p-4 bg-white rounded shadow text-left">
                <div className="d-flex align-items-center">
                  <div className="bg-primary text-white rounded-circle px-3 py-2 font-weight-bold mr-3">
                    03
                  </div>
                  <div>
                    <h5 className="mb-1">Decision Analysis</h5>
                    <p className="mb-0 small">
                      Sed ut perspiciatis unde omnis natus error sit volup
                      accusantium.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded shadow text-left">
                <div className="d-flex align-items-center">
                  <div className="bg-primary text-white rounded-circle px-3 py-2 font-weight-bold mr-3">
                    04
                  </div>
                  <div>
                    <h5 className="mb-1">Transformation Completed</h5>
                    <p className="mb-0 small">
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
    </div>
  );
};

export default About;
