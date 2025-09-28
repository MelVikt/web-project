import React, { useEffect, useRef, useState } from "react";
import "./CatalogMenu.scss";
import catalogData, { type CatalogCategory } from "../model/catalogData";

export const CatalogMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0});


  const menuRef = useRef <HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect() 
      setMenuPosition({
        top: rect.bottom,
        left: rect.left,
      });
    }    
      setIsOpen((prev) => !prev);
  };
  
  
  useEffect (() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };  
    document.addEventListener("mousedown", handleClickOutside);  
      return () => {
        document.removeEventListener ("mousedown", handleClickOutside);
      };
    }, []);

  return (
    <>
      <div className="catalog-wrapper">
        <button className="catalog-button" onClick={toggleMenu} ref={buttonRef}>Каталог</button>

        {isOpen && (
          <>
          <div className="catalog-menu-container" ref={menuRef}></div>
            <div className="overlay" />
            <div className="catalog-dropdown" ref={menuRef} style={{ position: "absolute", top: menuPosition.top, left: menuPosition.left }}>
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
    </>
  );
};

