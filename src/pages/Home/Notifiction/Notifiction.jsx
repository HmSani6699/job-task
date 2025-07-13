import img from "../../../../public/notifiction.jpg";

const Notifiction = () => {
  return (
    <div>
      <div class="notifiction-container">
        <div class="left">
          <img src={img} alt="Newsletter Promo" />
          <div class="play-button"></div>
        </div>
        <div class="right">
          <h4>Newsletters</h4>
          <h1>Get Our Every Single Notifications</h1>
          <div class="features">
            <span>Regular Updates</span>
            <span>Weekly Updates</span>
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
