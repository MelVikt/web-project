import '../../../pages/home/Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faYoutube, faInstagram, faCcPaypal, faCcVisa, faCcMastercard, faCcApplePay, faGooglePlay, faAppStoreIos} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export const Footer = () => {


  return (
  <footer className="footer">
    <div className="subscribe-banner">
      <p className="subscribe-banner__text">Subscribe & Get 10% OFF for first order</p>
      <form className="subscribe-banner__form" action="#">
        <label className="subscribe-banner__label">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
            className="subscribe-banner__input"
            type="email"
            placeholder="Enter Your Email Address"
            required
            onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => {
              e.currentTarget.setCustomValidity("Please fill out this field.");
            }}
            onInput={(e: React.FormEvent<HTMLInputElement>) => {
              e.currentTarget.setCustomValidity(''); 
            }}/>
          <button className="subscribe-banner__button" type="submit">Subscribe</button>
        </label>
      </form>
    </div>

  <div className="footer-nav__wrapper"> 

    <div className="footer-nav">
      <div className="footer-nav__column">
        <h2 className="footer-nav__title">Top Categories</h2>
        <ul className="footer-nav__list">
          <li className="footer-nav__item"><a href="#">Laptops</a></li>
          <li className="footer-nav__item"><a href="#">PC & Computers</a></li>
          <li className="footer-nav__item"><a href="#">Cell Phones</a></li>
          <li className="footer-nav__item"><a href="#">Tablets</a></li>
          <li className="footer-nav__item"><a href="#">Gaming & VR</a></li>
          <li className="footer-nav__item"><a href="#">Networks</a></li>
          <li className="footer-nav__item"><a href="#">Cameras</a></li>
          <li className="footer-nav__item"><a href="#">Sounds</a></li>
          <li className="footer-nav__item"><a href="#">Office</a></li>
        </ul>
      </div>

      <div className="footer-nav__column">
        <h2 className="footer-nav__title">Company</h2>
        <ul className="footer-nav__list">
          <li className="footer-nav__item"><a href="#">About</a></li>
          <li className="footer-nav__item"><a href="#">Contact</a></li>
          <li className="footer-nav__item"><a href="#">Career</a></li>
          <li className="footer-nav__item"><a href="#">Store Locations</a></li>
        </ul>
      </div>

      <div className="footer-nav__column">
        <h2 className="footer-nav__title">Help center</h2>
        <ul className="footer-nav__list">
          <li className="footer-nav__item"><a href="#">Customer Service</a></li>
          <li className="footer-nav__item"><a href="#">Policy</a></li>
          <li className="footer-nav__item"><a href="#">Terms & Conditions</a></li>
          <li className="footer-nav__item"><a href="#">FAQs</a></li>
          <li className="footer-nav__item"><a href="#">My Account</a></li>
          <li className="footer-nav__item"><a href="#">Product Support</a></li>
          <li className="footer-nav__item"><a href="#">Payments</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-info"> 
      <h2 className="footer-info__title">CYPER SHOP - Leading Online Market of the Digital Era</h2>
      <p className="footer-info__text">Hotline 24/7: <span>(+325) 3686 25 16</span></p>
      <p className="footer-info__text">Work Hours: <span>Monday-Saturday: 9.00am - 5.00pm</span></p>
      <p className="footer-info__text">Mail: <span>contact@swatbabymall.com</span></p>
      <div className="footer-info__socials">
        <a href="#" className="footer-info__social-link footer-info__social-link--facebook"><FontAwesomeIcon icon={faFacebook}/></a>
        <a href="#" className="footer-info__social-link footer-info__social-link--twitter"><FontAwesomeIcon icon={faXTwitter}/></a>
        <a href="#" className="footer-info__social-link footer-info__social-link--youtube"><FontAwesomeIcon icon={faYoutube}/></a>
        <a href="#" className="footer-info__social-link footer-info__social-link--instagram"><FontAwesomeIcon icon={faInstagram}/></a>
      </div>
    </div>
  </div>

  <div className="footer-utilities">
    
    <div className="footer-utilities__copyright">
      <p>© 2024 Shawonetc3 . All Rights Reserved</p>
    </div>

    <div className="footer-utilities__payments">
      <FontAwesomeIcon icon={faCcPaypal} className="footer-utilities__payment-icon" />
      <FontAwesomeIcon icon={faCcVisa} className="footer-utilities__payment-icon" />
      <FontAwesomeIcon icon={faCcMastercard} className="footer-utilities__payment-icon" />
      <FontAwesomeIcon icon={faCcApplePay} className="footer-utilities__payment-icon" />
    </div>

    <div className="footer-utilities__apps">
      <FontAwesomeIcon icon={faGooglePlay} className="footer-utilities__app-icon" />
      <FontAwesomeIcon icon={faAppStoreIos} className="footer-utilities__app-icon" />
    </div>
    <select className="footer-utilities__select">
      <option>Light</option>               
      <option>Dark</option>
    </select>

    <select className="footer-utilities__select">
      <option>euro</option>               
      <option>dollar</option>
    </select>

    <div className="footer-utilities__theme">
      Mobile Site
    </div>
  </div>
  </footer>
  )
}