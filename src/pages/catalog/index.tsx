import './catalog.scss'
import { Header } from '../../widgets/header/index.ts';
import { Footer } from '../../widgets/footer/index.ts';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  img: string;
}

const categories = ["Смартфони", "ПК / Ноутбуки", "Телевізори", "Аксесуари"];
const brands = ["Apple", "Samsung", "Xiaomi"];

const products: Product[] = [
  { id: 1, name: "iPhone 14", brand: "Apple", price: 999, img: "/images/iphone.jpg" },
  { id: 2, name: "Galaxy S23", brand: "Samsung", price: 899, img: "/images/galaxy.jpg" },
  { id: 3, name: "Redmi Note 12", brand: "Xiaomi", price: 299, img: "/images/redmi.jpg" },
];

import React, { useState, useEffect } from 'react';
export const Catalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Смартфони");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "Смартфони" ? true : true) && // тут можна додати фільтр по категорії
      (selectedBrands.length === 0 || selectedBrands.includes(p.brand))
  );

  return (
  <>
  <Header />
  {/* <div className="catalog-page">
    <aside className="sidebar">
      <h2>Категорії</h2>
      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            className={cat === selectedCategory ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>

      <h3>Бренди</h3>
      {brands.map((brand) => (
        <label key={brand}>
          <input
            type="checkbox"
            checked={selectedBrands.includes(brand)}
            onChange={() => toggleBrand(brand)}
          />
          {brand}
        </label>
      ))}
    </aside>

    <main className="product-grid">
      {filteredProducts.map((product) => (
        <article key={product.id} className="product-card">
          <img src={product.img} alt={product.name} />
          <h4>{product.name}</h4>
          <p>Ціна: ${product.price}</p>
          <button>Купити</button>
        </article>
      ))}
    </main>
  </div> */}
  <div className=''>
    
  </div>
  <Footer />
  </>
  )
}
