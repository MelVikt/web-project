export interface CatalogCategory {
  title: string;
  subcategories: string[];
}

const catalogData: CatalogCategory[] = [
  {
    title: "Mobile & Gadgets",
    subcategories: [
      "Смартфони",
      "Аксесуари до них",
      "Смартгодинники",
      "Планшети",
      "Навушники",
      "Портативна акустика",
      "Телефони (стаціонарні і не тільки)",
      "Павербанки",
    ],
  },
  {
    title: "Laptop and PC",
    subcategories: [
      "Планшети",
      "Ноутбуки",
      "ПК",
      "Комплектуючі",
      "Принтери",
      "Аксесуари для геймерів",
    ],
  },
  {
    title: "Gaming",
    subcategories: [
      "PlayStation",
      "Xbox",
      "Nintendo",
      "ПК аксесуари",
      "Ноутбуки",
      "Компоненти ПК",
      "Монітори",
      "VR",
      "Мікрофони",
    ],
  },
  {
    title: "Photo Video",
    subcategories: [
      "Навушники",
      "Фотоапарати",
      "Аксесуари",
      "Портативні колонки",
    ],
  },
  {
    title: "TV and Projectors",
    subcategories: [
      "Аксесуари",
      "Проектори",
      "Аудіотехніка",
    ],
  },
  {
    title: "Audio",
    subcategories: [
      "Бездротові та дротові навушники",
      "Мікрофони",
      "Аксесуари",
      "Акустика",
    ],
  },
  {
    title: "Аксесуари для гаджетів",
    subcategories: [
      "Павери та зарядні пристрої",
      "Кабелі",
      "Мережеве обладнання",
      "Чохли (смартфон, планшет, ноут)",
      "Плівки",
      "Накопичувачі і карти памʼяті",
      "Стилуси",
      "Перехідники",
    ],
  },
];

export default catalogData;
