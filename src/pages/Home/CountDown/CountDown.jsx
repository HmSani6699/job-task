import icon1 from "../../../../public/icon1.png";
import icon2 from "../../../../public/icon2.png";
import icon3 from "../../../../public/icon3.png";
import icon4 from "../../../../public/icon4.png";

const CountDown = () => {
  return (
    <div className="bg-light">
      <section className="  text-center countDown-container">
        <div className="container_content">
          {/* Stats Section */}
          <div className="row  mt-5">
            <div className="col-md-3 mb-4 count-box">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <img src={icon1} alt="icon" className="mb-3 icon-img" />
                <h3 className="font-weight-bold">2658+</h3>
                <p className="mb-0">Enrolled Student</p>
              </div>
            </div>
            <div className="col-md-3 mb-4 count-box">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <img src={icon2} alt="icon" className="mb-3 icon-img" />
                <h3 className="font-weight-bold">9862+</h3>
                <p className=" mb-0">Experts Advisors</p>
              </div>
            </div>
            <div className="col-md-3 mb-4 count-box">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <img src={icon3} alt="icon" className="mb-3 icon-img" />
                <h3 className="font-weight-bold">785+</h3>
                <p className=" mb-0">Premium Lectures</p>
              </div>
            </div>
            <div className="col-md-3 mb-4 count-box">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <img src={icon4} alt="icon" className="mb-3 icon-img" />
                <h3 className="font-weight-bold">4583+</h3>
                <p className=" mb-0">Global Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountDown;
