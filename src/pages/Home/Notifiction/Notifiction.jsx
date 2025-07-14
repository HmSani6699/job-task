import img from "../../../../public/notifiction.jpg";
import drow from "../../../../public/about-drow.png";

const Notifiction = () => {
  return (
    <div className="container_content">
      <div class="notifiction-container">
        <div class="left">
          <img src={img} alt="Newsletter Promo" />
          <div class="play-button2">
            <i class="fa-solid fa-play"></i>
          </div>
        </div>
        <div class="right">
          <h4>Newsletters</h4>
          <img className="drow-img" src={drow} alt="" />
          <h1>Get Our Every Single Notifications</h1>
          <div class="features">
            <div className="feature-box">
              <i class="fa-solid fa-circle-check"></i>
              <span>Regular Updates</span>
            </div>
            <div className="feature-box">
              <i class="fa-solid fa-circle-check"></i>
              <span>Weekly Updates</span>
            </div>
          </div>
          <div class="subscribe">
            <input type="email" placeholder="Email Address" />
            <button>Subscribe →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifiction;
