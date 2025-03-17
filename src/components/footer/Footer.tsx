import './footer.css';
import FooterJSON from './footer.json';
import HomeJSON from '../home/home.json';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">{FooterJSON.title}</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">{FooterJSON.about}</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">{FooterJSON.skills}</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">{FooterJSON.services}</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href={HomeJSON.linkedInLink} className="footer__social-icon" target="_blank">
                        <i className="bx bxl-instagram-alt"></i>
                    </a>

                    <a href={HomeJSON.faceBookLink} className="footer__social-icon" target="_blank">
                        <i className="bx bxl-facebook-circle"></i>
                    </a>

                    <a href={HomeJSON.twitterLink} className="footer__social-icon" target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className="footer__copy">{HomeJSON.copyRight}</span>
            </div>
        </footer>
    )
}

export default Footer;