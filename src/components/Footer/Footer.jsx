import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mahmud..</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonial" className="footer__link">
              Testimonial
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instragram.com/" className="footer__social-link">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.facebook.com/" className="footer__social-link">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.tiktok.com/" className="footer__social-link">
            <i className="bx bxl-tiktok"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; Minal Ahmed.....</span>
      </div>
    </footer>
  );
}

export default Footer;
