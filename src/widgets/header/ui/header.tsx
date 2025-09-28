import { useState, useMemo, useRef } from 'react'
import logo from '../../../shared/assets/icons/cyper-logo.svg'
import '../../../pages/home/Home.scss'
import './header.scss'
import { CatalogMenu } from '../../catalogMenu'

export const Header = () => {
 const [query, setQuery] = useState("");
  const headerRef = useRef<HTMLDivElement | null>(null);
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <div className="banner">
        <span className="banner__badge">Special</span>
          <p className="banner__text">
            Get 10% <strong className="banner__highlight">DISCOUNT</strong> for first order&nbsp;
            <a href="/register" className="banner__link">Register Now</a>
          </p>
      </div>

      <div className='branding' ref={headerRef}>
        <div className="branding__logo">
          <img src= {logo} alt="logo" className="branding__image" />
          <div className="branding__text">
            <p className="branding__name">CYPER SHOP</p>
            <p className="branding__tagline">Your Tech. Your Vibe</p>
          </div>
        </div>

        <CatalogMenu headerRef={headerRef} />

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
                <li className="header-nav__item"><a href="/" className="header-nav__link">Home</a></li>
                <li className="header-nav__item"><a href="/login" className="header-nav__link">About</a></li>
                <li className="header-nav__item"><a href="/catalog" className="header-nav__link">Catalog</a></li>
                <li className="header-nav__item"><a href="/contacts" className="header-nav__link">Contacts</a></li>
              </ul>
            </nav>

        <div>
          <nav className="toolbar">
            <ul className="toolbar__list">
              <li className="toolbar__item">
                <a href="/login" className="toolbar__link">
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
    </>
  )
}

