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
    <div className="catalog-wrapper">
      <button className="catalog-button" onClick={toggleMenu} ref={buttonRef}>
        Каталог
      </button>

      {isOpen && (
        <>
          {/* overlay начинается под хедером */}
          <div
            className="overlay"
            style={{
              top: menuTop,
              bottom: 0,
            }}
          />

          {/* fixed, центр, max-width 1440px */}
          <div
            className="catalog-dropdown"
            ref={menuRef}
          >
            {catalogData.map((category: CatalogCategory, index: number) => (
              <div className="catalog-column" key={index}>
                <h3>{category.title}</h3>
                <ul>
                  {category.subcategories.map((item: string, subIndex: number) => (
                    <li key={subIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
