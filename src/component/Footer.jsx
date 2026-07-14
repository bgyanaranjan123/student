import "./Footer.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <h2>🍔 QuickBite</h2>
          <p>
            Fresh food from your favourite restaurants delivered
            fast to your doorstep.
          </p>

          <div className="social">
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
          </div>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-links">
          <h3>Discover</h3>
          <a href="#">Restaurants</a>
          <a href="#">Offers</a>
          <a href="#">Popular Foods</a>
        </div>

        <div className="footer-links">
          <h3>Get App</h3>
          <a href="#">App Store</a>
          <a href="#">Google Play</a>
        </div>

      </div>

      <hr />

      <div className="copyright">
        © 2026 QuickBite. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;