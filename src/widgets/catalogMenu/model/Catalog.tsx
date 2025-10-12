// import React, { useState, useRef, useEffect } from "react";
// import catalogData, { CatalogCategory } from "../model/catalogData";
// import "./CatalogMenu.scss";

// type Props = {
//   headerRef: React.RefObject<HTMLDivElement | null>;
// };

// export const CatalogMenu: React.FC<Props> = ({ headerRef }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [menuTop, setMenuTop] = useState(0);
//   const [activeLeftIndex, setActiveLeftIndex] = useState<number | null>(null);

//   const menuRef = useRef<HTMLDivElement | null>(null);
//   const buttonRef = useRef<HTMLButtonElement | null>(null);

//   const updatePosition = () => {
//     if (headerRef?.current) {
//       const rect = headerRef.current.getBoundingClientRect();
//       setMenuTop(rect.bottom + window.scrollY);
//     } else {
//       setMenuTop(window.scrollY);
//     }
//   };

//   const toggleMenu = () => {
//     if (!isOpen) updatePosition();
//     setIsOpen((prev) => !prev);
//   };

//   useEffect(() => {
//     if (!isOpen) return;
//     const handler = () => updatePosition();
//     window.addEventListener("resize", handler);
//     window.addEventListener("scroll", handler, { passive: true });
//     return () => {
//       window.removeEventListener("resize", handler);
//       window.removeEventListener("scroll", handler);
//     };
//   }, [isOpen]);

//   useEffect(() => {
//     const handleClickOutside = (ev: MouseEvent) => {
//       const target = ev.target as Node;
//       if (
//         menuRef.current &&
//         !menuRef.current.contains(target) &&
//         buttonRef.current &&
//         !buttonRef.current.contains(target)
//       ) {
//         setIsOpen(false);
//         setActiveLeftIndex(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="catalog-wrapper">
//       <button
//         className="catalog-button"
//         onClick={toggleMenu}
//         ref={buttonRef}
//       >
//         Каталог
//       </button>

//       {isOpen && (
//         <>
//           <div
//             className="overlay"
//             style={{ top: menuTop, bottom: 0 }}
//           />
//           <div
//             className="catalog-dropdown"
//             style={{ top: menuTop }}
//             ref={menuRef}
//           >
//             {/* Left panel */}
//             <div className="catalog-left-panel">
//               <ul>
//                 {catalogData.map((cat, idx) => (
//                   <li
//                     key={idx}
//                     className={`left-item ${
//                       idx === activeLeftIndex ? "active" : ""
//                     }`}
//                     onMouseEnter={() => setActiveLeftIndex(idx)}
//                     onClick={() => setActiveLeftIndex(idx)}
//                   >
//                     {cat.title}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Right panel with subcategories */}
//             <div className="catalog-right-panel">
//               {activeLeftIndex !== null ? (
//                 <div className="full-subcategories">
//                   {catalogData[activeLeftIndex].subcategories?.map(
//                     (subcategory, subIdx) => (
//                       <div key={subIdx} className="subcategory-block">
//                         <h4 className="subcategory-title">
//                           {subcategory.title}
//                         </h4>
//                         <ul className="subcategory-items">
//                           {subcategory.subcategories?.map((item, itemIdx) => (
//                             <li key={itemIdx}>{item.title}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     )
//                   )}
//                 </div>
//               ) : (
//                 <div className="right-empty">Оберіть категорію зліва</div>
//               )}
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };



// .catalog-wrapper {
//   position: relative;
// }

// .catalog-button {
//   padding: 10px 20px;
//   cursor: pointer;
//   background: #f2f2f2;
//   border: 1px solid #ccc;
//   font-weight: bold;
// }

// .overlay {
//   position: fixed;
//   left: 0;
//   right: 0;
//   background: rgba(0, 0, 0, 0.1);
//   z-index: 999;
// }

// .catalog-dropdown {
//   position: fixed;
//   left: 0;
//   right: 0;
//   max-width: 1440px;
//   margin: 0 auto;
//   display: flex;
//   background: #fff;
//   z-index: 1000;
//   border: 1px solid #ccc;
//   min-height: 300px;
// }

// .catalog-left-panel {
//   width: 220px;
//   border-right: 1px solid #ddd;
//   background: #fafafa;

//   ul {
//     list-style: none;
//     padding: 0;
//     margin: 0;

//     .left-item {
//       padding: 12px 16px;
//       cursor: pointer;

//       &:hover,
//       &.active {
//         background-color: #e6e6e6;
//         font-weight: 500;
//       }
//     }
//   }
// }

// .catalog-right-panel {
//   flex: 1;
//   padding: 20px;
//   overflow-y: auto;

//   .full-subcategories {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 32px;
//   }

//   .subcategory-block {
//     min-width: 200px;

//     .subcategory-title {
//       font-weight: bold;
//       margin-bottom: 8px;
//       font-size: 16px;
//     }

//     .subcategory-items {
//       list-style: none;
//       padding: 0;
//       margin: 0;

//       li {
//         padding: 4px 0;
//         color: #333;
//         cursor: pointer;
//         font-size: 14px;

//         &:hover {
//           text-decoration: underline;
//         }
//       }
//     }
//   }

//   .right-empty {
//     color: #777;
//     padding: 20px;
//     font-size: 16px;
//   }
// }
