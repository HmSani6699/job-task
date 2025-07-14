import man_img from "../../../../public/roleman.jpg";
import man_img1 from "../../../../public/roleman1.jpg";
import top_img from "../../../../public/roletop.png";
import student1 from "../../../../public/student1.png";
import student2 from "../../../../public/student2.png";

const RoleConditions = () => {
  return (
    <div className="role-container">
      <div className="main-box container_content">
        {/* ===== left <========= */}
        <div className="role-left-box">
          <button className="button-title">Rule & Conditions</button>
          <h2 className="role-title">
            How to Become a Our <br /> Pro Instructors
          </h2>
          <div className="becom-box">
            <div>
              <img src={student1} alt="" />
            </div>
            <div>
              <h2 className="sub-title"> Become an Instructor</h2>
              <p className="description">
                Amet consectetur adipiscing sed eius tempore dolore{" "}
                <br className="br-class" />
                suspens omnis natus.
              </p>
            </div>
          </div>
          <div className="becom-box">
            <div>
              <img src={student2} alt="" />
            </div>
            <div>
              <h2 className="sub-title">Instructor Rules</h2>
              <p className="description">
                Amet consectetur adipiscing sed eius tempore dolore{" "}
                <br className="br-class" />
                suspens omnis natus.
              </p>
            </div>
          </div>
          <div>
            <a href="#become" className="btn button_color btn-lg  ">
              Learn More Us <i className="fas fa-arrow-right ml-2" />
            </a>
            <a href="#become" className="btn work-button btn-lg  ">
              How It Work <i className="fas fa-arrow-right ml-2" />
            </a>
          </div>
        </div>
        {/* ========== Right +========== */}
        <div className="role-right-box">
          <div className="frist-img">
            <img className="" src={man_img} alt="" />
          </div>
          <div className="middle-role-img">
            <img src={top_img} alt="" />
          </div>
          <div className="middle-role-img2">
            <img src={man_img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleConditions;
