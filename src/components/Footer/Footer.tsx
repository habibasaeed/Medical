import React from "react";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import FooterLogo from "../../assets/images/footer_logo.svg";
import RecentPost1 from "../../assets/images/recent_post_1.png";
import RecentPost2 from "../../assets/images/recent_post_2.png";

function Footer() {
  return (
    <div>
      <section className="footer">
        <div className="footer-container footer-wrapper">
          <div className="special-col ">
            <div className="footer-logo">
              <img src={FooterLogo} />
            </div>
            <ul>
              <li>
                <i className="fa-regular fa-clock"></i>Open Hours of Government
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>13/A Miranta Halim
                City
              </li>
              <li>
                <i className="fa-solid fa-phone"></i> +20101344566
              </li>
            </ul>
            <div className="social-media-icons">
              <a href="#" target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="footer-cols">
            <h3>Service</h3>
            <ul>
              <li>Why choose us</li>
              <li>Our solutions</li>
              <li>Partners</li>
              <li>Care values</li>
              <li>Our projects</li>
            </ul>
          </div>
          <div className="footer-cols">
            <h3>Quick links</h3>
            <ul>
              <li>Residents</li>
              <li>Business</li>
              <li>Online payment</li>
              <li>Visiting</li>
              <li>Employment</li>
            </ul>
          </div>
          <div className="footer-cols recent-posts">
            <h3>Recent Posts</h3>
            <div className="recent-post1 ">
              <div className="col-md-4">
                <div>
                  <img src={RecentPost1} />
                </div>
              </div>
              <div className="col-md-8">
                <p className="recent-posts-date text-gray">23jan 2024</p>
                <h6>We round solution york</h6>
              </div>
            </div>
            <div className=" recent-post2 ">
              <div className="col-md-4">
                <div>
                  <img src={RecentPost2} />
                </div>
              </div>
              <div className="col-md-8">
                <p className="recent-posts-date text-grey">23jan 2024</p>
                <h6>The Medical Of This Working Health</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
