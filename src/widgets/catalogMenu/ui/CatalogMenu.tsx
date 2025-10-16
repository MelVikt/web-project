// src/widgets/catalogMenu/ui/CatalogMenu.tsx
import React, { useEffect, useRef, useState } from "react";
import "./CatalogMenu.scss";
import catalogData, { type CatalogCategory } from "../model/catalogData";

type Props = {
  headerRef: React.RefObject<HTMLDivElement | null>;
};

export const CatalogMenu: React.FC<Props> = ({ headerRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuTop, setMenuTop] = useState<number>(0);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

const updatePosition = () => {
  if (headerRef?.current) {
    const rect = headerRef.current.getBoundingClientRect();
    setMenuTop(rect.bottom); // без scrollY
  } else {
    setMenuTop(0);
  }
};

  const toggleMenu = () => {
    if (!isOpen) {
      updatePosition();
    }
    setIsOpen((p) => !p);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handler = () => updatePosition();
    window.addEventListener("resize", handler);
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("resize", handler);
      window.removeEventListener("scroll", handler);
    };
  }, [isOpen, headerRef]);

  // Закрытие по клику вне меню / вне кнопки
// Закрытие по клику вне меню / вне кнопки
useEffect(() => {
  const handleClickOutside = (ev: MouseEvent) => {
    const target = ev.target as Node;

    // 1. Якщо це клік по скролбару – ігноруємо
    if (ev.clientX >= document.documentElement.clientWidth) {
      return; // клік в області вертикального скролбара
    }

    if (
      menuRef.current &&
      !menuRef.current.contains(target) &&
      buttonRef.current &&
      !buttonRef.current.contains(target)
    ) {
      setIsOpen(false);
    }
  };

  document.addEventListener("click", handleClickOutside);
  return () => document.removeEventListener("click", handleClickOutside);
}, []);


  return (
    <div className="catalog">
      <button className="catalog__button" onClick={toggleMenu} ref={buttonRef}>
        Каталог
      </button>

      {isOpen && (
        <>
          <div
            className="catalog__overlay"
            style={{
              top: menuTop,
              bottom: 0,
            }}
          />

          <div
            className="catalog__dropdown"
            ref={menuRef}
          >
            <div className="catalog__left">
              <ul className="catalog__left-list">
                <li className="catalog__left-item"><a className="catalog__left-link" href="№">Mobile & Gadgets</a></li>
                <li className="catalog__left-item"><a className="catalog__left-link" href="№">Mobile & Gadgets</a></li>
                <li className="catalog__left-item"><a className="catalog__left-link" href="№">Mobile & Gadgets</a></li>
                <li className="catalog__left-item"><a className="catalog__left-link" href="№">Mobile & Gadgets</a></li>
                <li className="catalog__left-item"><a className="catalog__left-link" href="№">Mobile & Gadgets</a></li>
                <li className="catalog__left-item"><a className="catalog__left-link" href="№">Mobile & Gadgets</a></li>
                <li className="catalog__left-item"><a className="catalog__left-link" href="№">Mobile & Gadgets</a></li>
                <li className="catalog__left-item"><a className="catalog__left-link" href="№">Mobile & Gadgets</a></li>
              </ul>
            </div>
            <div className="catalog__right">
            <nav className="catalog__category">
              <h2 className="catalog__category-title"><a className="catalog__category-link" href="№">Smartphone</a></h2>
              <ul className="catalog__category-list">
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Apple iPhone</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Samsung</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Asus</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Xiaomi</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Nokia</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Motorola</a></li>
              </ul>
            </nav>
            <nav className="catalog__category">
              <h2 className="catalog__category-title"><a className="catalog__category-link" href="№">Smartphone</a></h2>
              <ul className="catalog__category-list">
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Apple iPhone</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Samsung</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Asus</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Xiaomi</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Nokia</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Motorola</a></li>
              </ul>
            </nav>
            <nav className="catalog__category">
              <h2 className="catalog__category-title"><a className="catalog__category-link" href="№">Smartphone</a></h2>
              <ul className="catalog__category-list">
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Apple iPhone</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Samsung</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Asus</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Xiaomi</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Nokia</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Motorola</a></li>
              </ul>
            </nav>
            <nav className="catalog__category">
              <h2 className="catalog__category-title"><a className="catalog__category-link" href="№">Smartphone</a></h2>
              <ul className="catalog__category-list">
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Apple iPhone</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Samsung</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Asus</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Xiaomi</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Nokia</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Motorola</a></li>
              </ul>
            </nav>
            <nav className="catalog__category">
              <h2 className="catalog__category-title"><a className="catalog__category-link" href="№">Smartphone</a></h2>
              <ul className="catalog__category-list">
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Apple iPhone</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Samsung</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Asus</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Xiaomi</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Nokia</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Motorola</a></li>
              </ul>
            </nav>
            <nav className="catalog__category">
              <h2 className="catalog__category-title"><a className="catalog__category-link" href="№">Smartphone</a></h2>
              <ul className="catalog__category-list">
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Apple iPhone</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Samsung</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Asus</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Xiaomi</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Nokia</a></li>
                <li className="catalog__category-item"><a className="catalog__category-link" href="№">Motorola</a></li>
              </ul>
            </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
};


