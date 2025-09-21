import { useState, useMemo } from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import './Home.scss'
import logo from '../../shared/assets/icons/cyper-logo.svg'

import {apple, acer, asus, lenovo, samsung, sony, phones, smartwatches, cameras, headphones, computers, gaming, camera, earbuds, microphone, speaker, monitor, chair, controller, keyboard, printer, network, security, projector, slide1, slide2, slide3} from './imagesHome.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faYoutube, faInstagram, faCcPaypal, faCcVisa, faCcMastercard, faCcApplePay, faGooglePlay, faAppStoreIos} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../../widgets/header/index.ts';
import { Footer } from '../../widgets/footer/index.ts';

function Home() {
  
//  const [query, setQuery] = useState("");

//   const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
//     setQuery(e.target.value);
//   };


const items = [
  { img: phones, text: 'Phones' },
  { img: smartwatches, text: 'Smart Watches' },
  { img: cameras, text: 'Cameras' },
  { img: headphones, text: 'Headphones' },
  { img: computers, text: 'Computers' },
  { img: gaming, text: 'Gaming' },
];


  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;
  const totalItems = items.length;

  const handlePrev = () => {
    setStartIndex((prev) =>
      (prev - 1 + totalItems) % totalItems
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      (prev + 1) % totalItems
    );
  };

const visibleItems = useMemo(() => (
  Array.from({ length: visibleCount }, (value , i) =>
    items[(startIndex + i) % totalItems]
  )
), [items, startIndex, visibleCount]);

  return (
  <>
    {/* <header className="header">
      <div className="banner">
        <span className="banner__badge">Special</span>
          <p className="banner__text">
            Get 10% <strong className="banner__highlight">DISCOUNT</strong> for first order&nbsp;
            <a href="#register" className="banner__link">Register Now</a>
          </p>
      </div>

      <div className='branding'>
        <div className="branding__logo">
          <img src= {logo} alt="logo" className="branding__image" />
          <div className="branding__text">
            <p className="branding__name">CYPER SHOP</p>
            <p className="branding__tagline">Your Tech. Your Vibe</p>
          </div>
        </div>


        <div className="search">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search__input"
            placeholder="Пошук..."
          />
          {query && (
            <button onClick={() => setQuery("")} className="search__clear">
            </button>
          )}
          <button className="search__button">Знайти</button>
        </div>

            <nav className="header-nav">
              <ul className="header-nav__list">
                <li className="header-nav__link">Home</li>
                <li className="header-nav__link">About</li>
                <li className="header-nav__link">Catalog</li>
                <li className="header-nav__link">Contacts</li>
              </ul>
            </nav>

        <div>
          <nav className="toolbar">
            <ul className="toolbar__list">
              <li className="toolbar__item">
                <a href="#" className="toolbar__link">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3333 14V8.16669H25.6666V15.1667H23.3333M23.3333 19.8334H25.6666V17.5H23.3333M11.6666 15.1667C14.7816 15.1667 21 16.73 21 19.8334V23.3334H2.33331V19.8334C2.33331 16.73 8.55165 15.1667 11.6666 15.1667ZM11.6666 4.66669C12.9043 4.66669 14.0913 5.15835 14.9665 6.03352C15.8416 6.90869 16.3333 8.09568 16.3333 9.33335C16.3333 10.571 15.8416 11.758 14.9665 12.6332C14.0913 13.5084 12.9043 14 11.6666 14C10.429 14 9.24198 13.5084 8.36682 12.6332C7.49164 11.758 6.99998 10.571 6.99998 9.33335C6.99998 8.09568 7.49164 6.90869 8.36682 6.03352C9.24198 5.15835 10.429 4.66669 11.6666 4.66669Z" fill="black"/>
                  </svg>                
                </a>
              </li>
              <li className="toolbar__item">
                <a href="#" className="toolbar__link">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.5 24.5L19.2663 19.257M22.1666 12.25C22.1666 14.88 21.1219 17.4024 19.2621 19.2621C17.4024 21.1219 14.88 22.1666 12.25 22.1666C9.61992 22.1666 7.09757 21.1219 5.23784 19.2621C3.3781 17.4024 2.33331 14.88 2.33331 12.25C2.33331 9.61992 3.3781 7.09757 5.23784 5.23784C7.09757 3.3781 9.61992 2.33331 12.25 2.33331C14.88 2.33331 17.4024 3.3781 19.2621 5.23784C21.1219 7.09757 22.1666 9.61992 22.1666 12.25V12.25Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                  </svg>               
                </a>
              </li>
              <li className="toolbar__item">
                <a href="#" className="toolbar__link">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.2355 19.1926H8.95234L9.76991 17.5273L23.3543 17.5027C23.8137 17.5027 24.2074 17.1746 24.2894 16.7207L26.1707 6.19062C26.2199 5.91445 26.1461 5.63008 25.9656 5.41406C25.8764 5.30775 25.7652 5.22211 25.6396 5.16309C25.514 5.10407 25.377 5.07308 25.2383 5.07227L7.95702 5.01484L7.80937 4.32031C7.7164 3.87734 7.31718 3.55469 6.86328 3.55469H2.63867C2.38267 3.55469 2.13716 3.65638 1.95614 3.8374C1.77513 4.01841 1.67343 4.26393 1.67343 4.51992C1.67343 4.77592 1.77513 5.02143 1.95614 5.20245C2.13716 5.38346 2.38267 5.48516 2.63867 5.48516H6.08124L6.72656 8.55312L8.31523 16.2449L6.26992 19.5836C6.1637 19.727 6.09972 19.8972 6.08523 20.075C6.07073 20.2528 6.10629 20.4312 6.18788 20.5898C6.35195 20.9152 6.68281 21.1203 7.04921 21.1203H8.7664C8.40032 21.6065 8.20258 22.1988 8.20312 22.8074C8.20312 24.3551 9.46093 25.6129 11.0086 25.6129C12.5562 25.6129 13.8141 24.3551 13.8141 22.8074C13.8141 22.1977 13.6117 21.6043 13.2508 21.1203H17.6559C17.2898 21.6065 17.092 22.1988 17.0926 22.8074C17.0926 24.3551 18.3504 25.6129 19.898 25.6129C21.4457 25.6129 22.7035 24.3551 22.7035 22.8074C22.7035 22.1977 22.5012 21.6043 22.1402 21.1203H25.2383C25.7687 21.1203 26.2035 20.6883 26.2035 20.1551C26.2019 19.8994 26.0993 19.6546 25.9179 19.4743C25.7366 19.294 25.4913 19.1927 25.2355 19.1926Z" fill="black"/>
                  </svg>               
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header> */}
    <Header />
    <main className="main">

      <section className="main-top">
        <div className="main-top__categories">
          <h2 className="main-top__title">Top Categories</h2>
          <ul className="main-top__list">
            <li className="main-top__item"><a href="#" className="main-top__link">Laptops</a></li>
            <li className="main-top__item"><a href="#" className="main-top__link">PC & Computers</a></li>
            <li className="main-top__item"><a href="#" className="main-top__link">Cell Phones</a></li>
            <li className="main-top__item"><a href="#" className="main-top__link">Tablets</a></li>
            <li className="main-top__item"><a href="#" className="main-top__link">Gaming & VR</a></li>
            <li className="main-top__item"><a href="#" className="main-top__link">Networks</a></li>
            <li className="main-top__item"><a href="#" className="main-top__link">Cameras</a></li>
            <li className="main-top__item"><a href="#" className="main-top__link">Sounds</a></li>
            <li className="main-top__item"><a href="#" className="main-top__link">Office</a></li>
          </ul>
        </div>

        <div className="main-top__slider">
          <div className="main-top__slider-wrapper">
            <div className="main-top__slide"><img src={slide1} alt="Slide 1" /></div>
            <div className="main-top__slide"><img src={slide2} alt="Slide 2" /></div>
            <div className="main-top__slide"><img src={slide3} alt="Slide 3" /></div>
          </div>
        </div>
      </section>


      <section className="promo"> 
        <div className="promo__main">
          <div className="promo__card promo__card--large">
            <h2 className="promo__title promo__title--large">
              <span>Big Summer Sale:</span>
              <span>EKO 40" Android TV</span>
            </h2>
            <p className="promo__text promo__text--large">
              <span>SMART FULL HD</span>
              <span>ANDROID TV WITH</span>
              <span>GOOGLE ASSISTANT</span>
            </p>
            <button className="promo__button promo__button--large">Discover Now</button>
            <p className="promo__meta promo__meta--large">
              <span>200+</span> Different models
            </p>
          </div>
        </div>

        <div className="promo__side">
          <div className="promo__card promo__card--medium">
            <div className="promo__card-inner promo__card-inner--medium">
              <h2 className="promo__title promo__title--medium">
                <span>Xiaomi Redmi Watch 5</span>
              </h2>
              <p className="promo__text promo__text--medium">
                <span>Sport Water</span>
                <span>Resistance</span>
                <span>Watch</span>
              </p>
              <p className="promo__price promo__price--medium">From <span>$169</span></p>
              <button className="promo__button promo__button--medium">Shop Now</button>
            </div>
          </div>

          <div className="promo__card promo__card--small">
            <div className="promo__card-inner promo__card-inner--small">
              <h2 className="promo__title promo__title--small">Sony PlayStation 5</h2>
              <p className="promo__price promo__price--small">From <span>$559</span></p>
              <button className="promo__button promo__button--small">Shop Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-filter">
        <div className="brand-filter__list">
          <a href="#" className="brand-filter__option">
            <img src={apple} alt="apple" />  
          </a>
          <a href="#" className="brand-filter__option">
            <img src={acer} alt="Acer" />
          </a>
          <a href="#" className="brand-filter__option">
            <img src={asus} alt="Asus" />
          </a>
          <a href="#" className="brand-filter__option">
            <img src={lenovo} alt="Lenovo" />           
          </a>  
          <a href="#" className="brand-filter__option">
            <img src={samsung} alt="Samsung" />            
          </a>
          <a href="#" className="brand-filter__option">
            <img src={sony} alt="Sony" />           
          </a>
          <a href="#" className="brand-filter__option">
            <p>OTHER</p>           
          </a>
        </div>
      </section>

      <section className="category-selector">
        <div className="category-selector__header">
          <h2 className="category-selector__title">Browse By Category</h2>
          <div className="category-selector__arrows">
            <div className="category-selector__arrow category-selector__arrow--left" onClick={handlePrev} />
            <div className="category-selector__arrow category-selector__arrow--right" onClick={handleNext} />
          </div>
        </div>
        <div className="category-selector__list">
          {visibleItems.map(({ img, text }, index) => (
            <a key={index} href="#" className="category-selector__item">
              <img src={img} alt={text} className="category-selector__image" />
              <p className="category-selector__text">{text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="best-seller">
        <div className="best-seller__header">
          <h2 className="best-seller__title">Best Seller</h2>
          <a href="#" className="best-seller__view-all">View All</a>
        </div>

        <div className="best-seller__categories">
          {["Top 30", "Televisions", "PC Gaming", "Computers", "Cameras", "Gadgets", "Smart Home", "Sport Equipments"].map((category, index) => (
            <button
              key={index}
              className={`best-seller__category ${index === 0 ? "best-seller__category--active" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="best-seller__products">
          <div className="product-card">
            <div className="product-card__top-bar">
              <span className="product-card__installment">0% Installment</span>
              <button className="product-card__wishlist">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#999999" strokeOpacity="0.6"/>
                  <path d="M20.6717 10.6371C21.5151 11.3549 21.9637 12.2701 22.0175 13.3826C22.0714 14.4952 21.7125 15.4373 20.9409 16.2089L15.746 21.5922C15.5666 21.7716 15.3602 21.8613 15.1269 21.8613C14.8936 21.8613 14.6873 21.7716 14.5078 21.5922L9.31295 16.2089C8.54135 15.4373 8.18246 14.4952 8.23629 13.3826C8.29012 12.2701 8.73873 11.3549 9.58212 10.6371C10.3178 10.0091 11.1612 9.73993 12.1123 9.82965C13.0813 9.90143 13.9067 10.2872 14.5886 10.9871L15.1269 11.5254L15.6652 10.9871C16.3471 10.2872 17.1636 9.90143 18.1146 9.82965C19.0836 9.73993 19.936 10.0091 20.6717 10.6371Z" fill="rgb(244, 145, 19)"/>
                </svg>  

                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#999999" strokeOpacity="0.6"/>
                  <path 
                    d="M20.6717 10.6371C21.5151 11.3549 21.9637 12.2701 22.0175 13.3826C22.0714 14.4952 21.7125 15.4373 20.9409 16.2089L15.746 21.5922C15.5666 21.7716 15.3602 21.8613 15.1269 21.8613C14.8936 21.8613 14.6873 21.7716 14.5078 21.5922L9.31295 16.2089C8.54135 15.4373 8.18246 14.4952 8.23629 13.3826C8.29012 12.2701 8.73873 11.3549 9.58212 10.6371C10.3178 10.0091 11.1612 9.73993 12.1123 9.82965C13.0813 9.90143 13.9067 10.2872 14.5886 10.9871L15.1269 11.5254L15.6652 10.9871C16.3471 10.2872 17.1636 9.90143 18.1146 9.82965C19.0836 9.73993 19.936 10.0091 20.6717 10.6371Z"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>
            <div className="product-card__image">
              <img src={apple} alt="Coffee Machine" />
            </div>
            <div className="product-card__info">
              <div className="product-card__badges">
                <p className="product-card__badge product-card__badge--red">15% OFF</p>
                <p className="product-card__badge product-card__badge--purple">BEST SELLER</p>
                <p className="product-card__badge product-card__badge--green">TOP RATED</p>
                {/* <p className="product-card__badge product-card__badge--new">NEW</p> */}
              </div>

              <div className="product-card__title">
                Durotan Manual Espresso Machine, Coffee Maker
              </div>

              <div className="product-card__rating">
                ⭐⭐⭐⭐⭐ (34)
              </div>

              <div className="product-card__price">
                $489.00 <span className="product-card__old-price">$619.00</span>
              </div>
            </div>
          </div>
          
        </div>

      </section>
      

      <section className="featured-departments">
        <div className="featured-departments__group">
          <div className="featured-departments__header">
            <h2 className="featured-departments__title">Audios & Cameras</h2>
            <a className="featured-departments__view-all" href="#">View All</a>
          </div>

          <div className="featured-departments__content">
            <a href='#' className="featured-departments__banner-link">
            <div className="featured-departments__banner featured-departments__banner--microphone">
              <h3 className="featured-departments__banner-title featured-departments__banner-title--microphone">Best Speaker 2025</h3>
            </div>
            </a>

            <div className="featured-departments__list">
              <a className="featured-departments__item" href="#">
                <img src={speaker} alt="Speaker" className="featured-departments__image" />
                <h4 className="featured-departments__item-title">Speaker</h4>
                <p className="featured-departments__item-count">22 items</p>
              </a>
              <a className="featured-departments__item" href="#">
                <img src={camera} alt="" className="featured-departments__image" />
                <h4 className="featured-departments__item-title">DSLR Camera</h4>
                <p className="featured-departments__item-count">22 items</p>
              </a>
              <a className="featured-departments__item" href="#">
                <img src={earbuds} alt="" className="featured-departments__image" />
                <h4 className="featured-departments__item-title">Earbuds</h4>
                <p className="featured-departments__item-count">22 items</p>
              </a>
              <a className="featured-departments__item" href="#">
                <img src={microphone} alt="" className="featured-departments__image" />
                <h4 className="featured-departments__item-title">Microphone</h4>
                <p className="featured-departments__item-count">22 items</p>
              </a>
            </div>
          </div>
        </div>

        <div className="featured-departments__group">
          <div className="featured-departments__header">
            <h2 className="featured-departments__title">Gaming</h2>
            <a className="featured-departments__view-all" href="#">View All</a>
          </div>

          <div className="featured-departments__content">
            <a href='#' className="featured-departments__banner-link">
            <div className="featured-departments__banner featured-departments__banner--mouse">
              <h3 className="featured-departments__banner-title featured-departments__banner-title--mouse">Wireless RGB Gaming Mouse</h3>
            </div>
            </a>


            <div className="featured-departments__list">
              <a className="featured-departments__item" href="#">
                <img src={monitor} alt="Monitor" className="featured-departments__image" />
                <h4 className="featured-departments__item-title">Monitors</h4>
                <p className="featured-departments__item-count">22 items</p>
              </a>
              <a className="featured-departments__item" href="#">
                <img src={chair} alt="Chair" className="featured-departments__image" />
                <h4 className="featured-departments__item-title">Chair</h4>
                <p className="featured-departments__item-count">22 items</p>
              </a>
              <a className="featured-departments__item" href="#">
                <img src={controller} alt="Controller" className="featured-departments__image" />
                <h4 className="featured-departments__item-title">Controller</h4>
                <p className="featured-departments__item-count">22 items</p>
              </a>
              <a className="featured-departments__item" href="#">
                <img src={keyboard} alt="Keyboard" className="featured-departments__image" />
                <h4 className="featured-departments__item-title">Keyboards</h4>
                <p className="featured-departments__item-count">22 items</p>
              </a>
            </div>
          </div>
        </div>

        <div className="featured-departments__group">
          <div className="featured-departments__header">
            <h2 className="featured-departments__title">Office Equipments</h2>
            <a className="featured-departments__view-all" href="#">View All</a>
          </div>

          <div className="featured-departments__content">
            <a href='#' className="featured-departments__banner-link">
            <div className="featured-departments__banner featured-departments__banner--projector">
              <h3 className="featured-departments__banner-title featured-departments__banner-title--projector">
                Home Theater 4k <span className="featured-departments__banner-title--highlight">Laser Projector</span>
              </h3>
            </div>
            </a>

            <div className="featured-departments__list">
              <a className="featured-departments__item" href="#">
                <img src={printer} alt="Printer" className="featured-departments__image" />
                <h4 className="featured-departments__item-title">Printers</h4>
                <p className="featured-departments__item-count">22 items</p>
              </a>
              <a className="featured-departments__item" href="#">
                <img src={network} alt="Network" className="featured-departments__image" />
                <h4 className="featured-departments__item-title">Network</h4>
                <p className="featured-departments__item-count">22 items</p>
              </a>
              <a className="featured-departments__item" href="#">
                <img src={security} alt="Security" className="featured-departments__image" />
                <h4 className="featured-departments__item-title">Security</h4>
                <p className="featured-departments__item-count">22 items</p>
              </a>
              <a className="featured-departments__item" href="#">
                <img src={projector} alt="Projectors" className="featured-departments__image" />
                <h4 className="featured-departments__item-title">Projectors</h4>
                <p className="featured-departments__item-count">22 items</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="register-prompt">
        <h2 className="register-prompt__title">See personalized recommendations</h2>
        <button className="register-prompt__button">Sign in</button>
        <p className="register-prompt__text">
          New customer? <a href="#" className="register-prompt__link">Start here.</a>
        </p>
      </section>

      <section className="product-recommendation">
        <div className="product-recommendation__header">
          <h2 className="product-recommendation__title">Your personal recommendations</h2>
          <a href="#" className="product-recommendation__view-all">View All</a>
        </div>
        
        <div className="product-recommendation__list">
          <div className="product-recommendation__item">
            <a href="#" className="product-recommendation__link">
              <img src={speaker} alt="Xomie Remid 8 Sport Water Resistance Watch" className="product-recommendation__image" />              
              <h2 className="product-recommendation__name">Xomie Remid 8 Sport Water Resistance Watch</h2>
              <p className="product-recommendation__price">$579.00</p>
            </a>
          </div>
          <div className="product-recommendation__item">
            <a href="#" className="product-recommendation__link">
              <img src={speaker} alt="Xomie Remid 8 Sport Water Resistance Watch" className="product-recommendation__image" />              
              <h2 className="product-recommendation__name">Xomie Remid 8 Sport Water Resistance Watch</h2>
              <p className="product-recommendation__price">$579.00</p>
            </a>
          </div>
          <div className="product-recommendation__item">
            <a href="#" className="product-recommendation__link">
              <img src={speaker} alt="Xomie Remid 8 Sport Water Resistance Watch" className="product-recommendation__image" />              
              <h2 className="product-recommendation__name">Xomie Remid 8 Sport Water Resistance Watch</h2>
              <p className="product-recommendation__price">$579.00</p>
            </a>
          </div>
          <div className="product-recommendation__item">
            <a href="#" className="product-recommendation__link">
              <img src={speaker} alt="Xomie Remid 8 Sport Water Resistance Watch" className="product-recommendation__image" />              
              <h2 className="product-recommendation__name">Xomie Remid 8 Sport Water Resistance Watch</h2>
              <p className="product-recommendation__price">$579.00</p>
            </a>
          </div>
          <div className="product-recommendation__item">
            <a href="#" className="product-recommendation__link">
              <img src={speaker} alt="Xomie Remid 8 Sport Water Resistance Watch" className="product-recommendation__image" />              
              <h2 className="product-recommendation__name">Xomie Remid 8 Sport Water Resistance Watch</h2>
              <p className="product-recommendation__price">$579.00</p>
            </a>
          </div>
        </div>
      </section>


    </main>


    <Footer />
    {/* <footer className="footer">
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
    </footer> */}
  </>
  )
}

export default Home
