import React, { useState } from "react";
import "./Header.css";
function Header() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActive] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Shobuj
        </a>

        <div className={Toggle ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActive("#home")}
                className={
                  activeNav === "#home" ? "nav__link active__link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActive("#about")}
                className={
                  activeNav === "#about"
                    ? "nav__link active__link"
                    : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills"  onClick={() => setActive("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active__link"
                    : "nav__link"
                }>
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" onClick={() => setActive("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active__link"
                    : "nav__link"
                }>
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" onClick={() => setActive("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active__link"
                    : "nav__link"
                }>
                <i className="uil uil-scenery nav__icon"></i>
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact"  onClick={() => setActive("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active__link"
                    : "nav__link"
                }>
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil- nav__icon"></i>
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
