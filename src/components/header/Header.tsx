import React, { useState } from "react";
import "./Header.css";

const Header = () => {

    /* == Toggle menu == */
    const [Toggle, showMenu] = useState(false);


  return (
      <header className="header">
          <nav className="nav container">
              <a href="index.html" className="nav__logo">Chris</a>

              <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                  <ul className="nav__list grid">
                      <li className="nav__item">
                          <a href="#home" className="nav__link active-link">
                              {/*This is the icon found in iconscout (estate)*/}
                              <i className="uil uil-estate nav__icon"></i> Home
                          </a>
                      </li>

                      <li className="nav__item">
                          <a href="#about" className="nav__link">
                              {/*This is the icon found in iconscout (user)*/}
                              <i className="uil uil-user nav__icon"></i> About
                          </a>
                      </li>

                      <li className="nav__item">
                          <a href="#skills" className="nav__link">
                              {/*This is the icon found in iconscout (file-alt)*/}
                              <i className="uil uil-file-alt nav__icon"></i> Skills
                          </a>
                      </li>

                      <li className="nav__item">
                          <a href="#services" className="nav__link">
                              {/*This is the icon found in iconscout (briefcase-alt)*/}
                              <i className="uil uil-briefcase-alt nav__icon"></i> Services
                          </a>
                      </li>

                      <li className="nav__item">
                          <a href="#portfolio" className="nav__link">
                              {/*This is the icon found in iconscout (scenery)*/}
                              <i className="uil uil-scenery nav__icon"></i> Portfolio
                          </a>
                      </li>

                      <li className="nav__item">
                          <a href="#contact" className="nav__link">
                              {/*This is the icon found in iconscout (message)*/}
                              <i className="uil uil-message nav__icon"></i> Contact
                          </a>
                      </li>
                  </ul>
                  
                  <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
              </div>

              {/*This section is for smaller screens??*/}
              <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                  <i class="uil uil-apps"></i>
              </div>
          </nav>
    </header>
  );
};

export default Header;