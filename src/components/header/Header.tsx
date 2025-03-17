import { useState } from "react";
import "./header.css";
import HeaderJSON from './header.json';

const Header = () => {
    
    /* == Change background header == */
    window.addEventListener('scroll', () => {

        //Handle header properties when scrolling down
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 80) {
                header.classList.add('scroll-header');
            } else {
                header.classList.remove('scroll-header');
            }
        }

        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav__link');

        const scrollY = window.pageYOffset;

        sections.forEach((section) => {
            
            const sectionHeight = (section as HTMLElement).offsetHeight;
            const sectionTop = (section as HTMLElement).offsetTop - 72; // Adjust for header height
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    });

    /* == Toggle menu == */
    const [Toggle, showMenu] = useState(false);

    /* == Handle Active Navigation Link == */
    const [activeLink, setActiveLink] = useState('#home');

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">{HeaderJSON.logoTitle}</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveLink('#home')} className={activeLink === '#home' ? "nav__link active-link" : "nav__link"}>
                                {/*This is the icon found in iconscout (estate)*/}
                                <i className="uil uil-estate nav__icon"></i> {HeaderJSON.home}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveLink('#about')} className={activeLink === '#about' ? "nav__link active-link" : "nav__link"}>
                                {/*This is the icon found in iconscout (user)*/}
                                <i className="uil uil-user nav__icon"></i> {HeaderJSON.about}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveLink('#skills')} className={activeLink === '#skills' ? "nav__link active-link" : "nav__link"}>
                                {/*This is the icon found in iconscout (file-alt)*/}
                                <i className="uil uil-file-alt nav__icon"></i> {HeaderJSON.skills}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" onClick={() => setActiveLink('#services')} className={activeLink === '#services' ? "nav__link active-link" : "nav__link"}>
                                {/*This is the icon found in iconscout (briefcase-alt)*/}
                                <i className="uil uil-briefcase-alt nav__icon"></i> {HeaderJSON.services}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#qualification" onClick={() => setActiveLink('#qualification')} className={activeLink === '#qualification' ? "nav__link active-link" : "nav__link"}>
                                {/*This is the icon found in iconscout (scenery)*/}
                                <i className="bx bx-bookmarks nav__icon"></i> {HeaderJSON.qualification}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveLink('#contact')} className={activeLink === '#contact' ? "nav__link active-link" : "nav__link"}>
                                {/*This is the icon found in iconscout (message)*/}
                                <i className="uil uil-message nav__icon"></i> {HeaderJSON.contact}
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                {/*This section is for smaller screens??*/}
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;