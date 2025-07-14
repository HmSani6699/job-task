import footer1 from "../../../public/footer1.jpg";
import footer2 from "../../../public/footer2.jpg";
import footer_img from "../../../public/footermainimg.jpg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container_content">
        <div class="contact-container">
          <div class="contact-box">
            <div className="icon-circel-box">
              <div class="icon-circle">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/marker.png"
                  alt="Address Icon"
                />
              </div>
            </div>
            <div class="contact-info">
              <h4>Office Address</h4>
              <p>4648 Rocky Road PA, 1920</p>
            </div>
          </div>
          <div class="contact-box">
            <div className="icon-circel-box">
              <div class="icon-circle">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/new-post.png"
                  alt="Email Icon"
                />
              </div>
            </div>

            <div class="contact-info">
              <h4>Send Email</h4>
              <p>contact@example.com</p>
            </div>
          </div>
          <div class="contact-box">
            <div className="icon-circel-box">
              {" "}
              <div class="icon-circle">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/phone.png"
                  alt="Phone Icon"
                />
              </div>
            </div>

            <div class="contact-info">
              <h4>Call Emergency</h4>
              <p>+88 0123 654 99</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========> Middle part <========== */}
      <footer class="footer container_content">
        <div class="footer-top">
          <div className="footer-left">
            <div class="footer-section">
              <div className="video-thumbnail">
                <img src={footer_img} alt="Video thumbnail" />
                <div class="play-button2">
                  <i class="fa-solid fa-play"></i>
                </div>
              </div>
              <div class="social d-flex gap-4">
                <p>Follow on</p>
                <div class="icons">
                  <a href="#" className="social-icon-box">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon-box">
                    <i class="fab fa-x-twitter"></i>
                  </a>
                  <a href="#" className="social-icon-box">
                    <i class="fab fa-pinterest"></i>
                  </a>
                  <a href="#" className="social-icon-box">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="footer-section">
              <h3>Courses</h3>
              <ul>
                <li>Art & Design</li>
                <li>Business</li>
                <li>Marketing</li>
                <li>Web Design</li>
                <li>Photography</li>
              </ul>
            </div>
          </div>

          <div className="footer-right">
            <div class="footer-section">
              <h3>Resources</h3>
              <ul>
                <li>About</li>
                <li>Our Team</li>
                <li>Instructor</li>
                <li>Gallery</li>
                <li>Contact</li>
              </ul>
            </div>

            <div class="footer-section news">
              <h3>Recent News</h3>
              <div class="news-item">
                <img src={footer2} alt="News 1" />
                <div>
                  <p>
                    <i class="fa-regular fa-comments"></i> 0 Comments
                  </p>
                  <h4>
                    What is data analytics and its <br /> future scope
                  </h4>
                </div>
              </div>
              <div class="news-item">
                <img src={footer1} alt="News 2" />
                <div>
                  <p className="mb-0">
                    <i class="fa-regular fa-comments"></i> 0 Comments
                  </p>
                  <h4>
                    How to build a data analyst <br /> best portfolio
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2024 Copyrights by GaviasThemes. All Rights Reserved</p>
          <div class="footer-links">
            <a href="#">Faqs</a>
            <a href="#">Courses</a>
            <a href="#">About</a>
            <a href="#">Payments</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
