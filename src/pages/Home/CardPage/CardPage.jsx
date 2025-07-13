import cardimg1 from "../../../../public/card-img1.png";
import cardimg2 from "../../../../public/card-img-2.png";

const CardPage = () => {
  return (
    <div className="row  container_content cart-container">
      <div className="col-md-6 mb-4">
        <div
          className="d-flex justify-content-between align-items-center p-4 rounded shadow"
          style={{ backgroundColor: "#e8fdf5" }}
        >
          <div className="text-left">
            <h4 className="font-weight-bold">Become An Instructor?</h4>
            <p className="mb-4">
              Sit amet consectetur adipiscing eiusmod tempore dolore magna
              suspendisse.
            </p>
            <a href="#" className="btn btn-success font-weight-bold">
              Join With Us <span className="ml-2">→</span>
            </a>
          </div>
          <div>
            <img
              src={cardimg1}
              alt="Instructor"
              className="img-fluid"
              style={{ maxHeight: "200px" }}
            />
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div
          className="d-flex justify-content-between align-items-center p-4 rounded shadow"
          style={{ backgroundColor: "#edf3fc" }}
        >
          <div className="text-left">
            <h4 className="font-weight-bold">Get Online Courses</h4>
            <p className="mb-4">
              Sit amet consectetur adipiscing eiusmod tempore dolore magna
              suspendisse.
            </p>
            <a href="#" className="btn btn-primary font-weight-bold">
              Join With Us <span className="ml-2">→</span>
            </a>
          </div>
          <div>
            <img
              src={cardimg2}
              alt="Courses"
              className="img-fluid"
              style={{ maxHeight: "200px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
