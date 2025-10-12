// export interface CatalogCategory {
//   title: string;
//   subcategories: string[];
// }

// const catalogData: CatalogCategory[] = [
//   {
//     title: "Mobile & Gadgets",
//     subcategories: [
//       "Смартфони",
//       "Аксесуари до них",
//       "Смартгодинники",
//       "Планшети",
//       "Навушники",
//       "Портативна акустика",
//       "Телефони (стаціонарні і не тільки)",
//       "Павербанки",
//     ],
//   },
//   {
//     title: "Laptop and PC",
//     subcategories: [
//       "Планшети",
//       "Ноутбуки",
//       "ПК",
//       "Комплектуючі",
//       "Принтери",
//       "Аксесуари для геймерів",
//     ],
//   },
//   {
//     title: "Gaming",
//     subcategories: [
//       "PlayStation",
//       "Xbox",
//       "Nintendo",
//       "ПК аксесуари",
//       "Ноутбуки",
//       "Компоненти ПК",
//       "Монітори",
//       "VR",
//       "Мікрофони",
//     ],
//   },
//   {
//     title: "Photo Video",
//     subcategories: [
//       "Навушники",
//       "Фотоапарати",
//       "Аксесуари",
//       "Портативні колонки",
//     ],
//   },
//   {
//     title: "TV and Projectors",
//     subcategories: [
//       "Аксесуари",
//       "Проектори",
//       "Аудіотехніка",
//     ],
//   },
//   {
//     title: "Audio",
//     subcategories: [
//       "Бездротові та дротові навушники",
//       "Мікрофони",
//       "Аксесуари",
//       "Акустика",
//     ],
//   },
//   {
//     title: "Аксесуари для гаджетів",
//     subcategories: [
//       "Павери та зарядні пристрої",
//       "Кабелі",
//       "Мережеве обладнання",
//       "Чохли (смартфон, планшет, ноут)",
//       "Плівки",
//       "Накопичувачі і карти памʼяті",
//       "Стилуси",
//       "Перехідники",
//     ],
//   },
// ];

// export default catalogData;


export interface CatalogCategory {
  title: string;
  subcategories?: CatalogCategory[]; // рекурсивно
}

const catalogData: CatalogCategory[] = [
  {
    title: "Mobile & Gadgets",
    subcategories: [
      {
        title: "Smartphones", 
        subcategories: [
          {title: "Apple iPhone",},
          {title: "Samsung",},
          {title: "Asus",},
          {title: "Xiaomi",},
          {title: "Nokia",},
          {title: "Motorola",}
        ], 
      },

      {
        title: "Tablets",
        subcategories: [
          { title: "Apple iPad" },
          { title: "Samsung" },
          { title: "Lenovo" },
          { title: "Blackview" }
        ]
      },

       {
        title: "Smart Watches",
        subcategories: [
          { title: "Apple Watch" },
          { title: "Samsung" },
          { title: "Xiaomi" },
          { title: "Huawei" },
          { title: "OPPO" },
          { title: "Amazfit" },
          { title: "Garmin" }
        ]
      },

      {
        title: "Headphones",
        subcategories: [
          { title: "Apple AirPods" },
          { title: "Sony" },
          { title: "JBL" },
          { title: "Philips" },
          { title: "Panasonic" },
          { title: "Samsung" },
        ]
      },
      
      {
        title: "Power banks and charging stations",
        subcategories: [
          { title: "Universal mobile batteries" },
          { title: "Charging stations" }
        ]
      },

      {
        title: "Smartphone Accessories",
        subcategories: [
          { title: "Chargers for Phones and Tablets" },
          { title: "Cables and Adapters" },
          { title: "3G/4G Modems" },
          { title: "Memory Cards for Smartphones" },        
          { title: "Chargers for Phones and Tablets" },
          { title: "Protective Films and Glass" }

        ]
      },
    ],
    
  },
  {
    title: "Laptop and PC",
    subcategories: [
      {
        title: "Laptops", 
        subcategories: [
          {title: "Apple Macbook",},
          {title: "Asus",},
          {title: "Lenovo",},
          {title: "Acer",},
          {title: "HP (Hewlett Packard)",},
          {title: "Dell",},
          {title: "Gigabyte",}
        ], 
      },

      {
        title: "PC", 
        subcategories: [
          {title: "Apple Macbook",},
          {title: "Asus",},
          {title: "Lenovo",},
          {title: "Acer",},
          {title: "HP (Hewlett Packard)",},
          {title: "Dell",},
          {title: "Gigabyte",}
        ], 
      },

      {
        title: "Monitors", 
        subcategories: [
          {title: "Samsung",},
          {title: "Asus",},
          {title: "MSI",},
          {title: "Acer",},
          {title: "Philips",},
          {title: "Dell",},
          {title: "Lenovo",}
        ], 
      },
      {
        title: "Computer components", 
        subcategories: [
          {title: "Processor (CPU)",},
          {title: "Motherboards ",},
          {title: "Memory (RAM)",},
          {title: "Graphics Cards (GPUs)",},
          {title: "Storage (SSDs & HDDs)",},
          {title: "Power Supplies (PSUs)",},
          {title: "Cases",},
          {title: "Cooling Systems",},
          {title: "Disk Arrays / RAID Systems",}
        ], 
      },
      {
        title: "Accessories and peripherals for PCs and laptops", 
        subcategories: [
          {title: "Keyboards",},
          {title: "Mice",},
          {title: "Graphics Tablets",},
          {title: "Styluses & Pens",},
          {title: "Game Controllers / Gamepads",},
          {title: "USB Flash Drives",},
          {title: "Memory Card Readers",},
          {title: "Adapters & Cables",},
          {title: "Replacement Batteries",},
          {title: "Keyboard Covers",},
          {title: "Laptop Bags & Backpacks",}
        ], 
      },
    ],
  },
  {
    title: "Gaming",
    subcategories: [
      {
        title: "PlayStation",
        subcategories: [
          { title: "PlayStation consoles" },
          { title: "PlayStation 5 consoles" },
          { title: "PlayStation 4 consoles" },
          { title: "PlayStation controllers" },
          { title: "PlayStation VR headsets" },
          { title: "PlayStation headsets" },
          { title: "PlayStation accessories" },
          { title: "Games for PlayStation 5" },
          { title: "Games for PlayStation 4" }
        ]
      },
      
      {
        title: "Xbox",
        subcategories: [
          { title: "Xbox consoles" },
          { title: "Xbox Series X|S consoles" },
          { title: "Xbox One consoles" },
          { title: "Xbox controllers" },
          { title: "Xbox headsets" },
          { title: "Xbox accessories" },
          { title: "Games for Xbox Series X|S" },
          { title: "Games for Xbox One" }
        ]
      },
      {
        title: "Nintendo",
        subcategories: [
          { title: "Nintendo consoles" },
          { title: "Nintendo Switch OLED" },
          { title: "Nintendo Switch" },
          { title: "Nintendo Switch Lite" },
          { title: "Nintendo controllers" },
          { title: "Nintendo accessories" },
          { title: "Games for Nintendo Switch" }
        ]
      },

      {
        title: "Gaming laptops",
        subcategories: [
          { title: "Dell" },
          { title: "Lenovo" },
          { title: "ASUS" },
          { title: "Acer" },
          { title: "MSI" },
          { title: "HP" },
          { title: "Razer" }
        ]
      },

      {
        title: "Gaming PCs",
        subcategories: [
          { title: "Alienware" },
          { title: "Lenovo" },
          { title: "ASUS ROG" },
          { title: "MSI" },
          { title: "Acer Predator" },
          { title: "HP Omen" },
          { title: "CyberPowerPC" },
          { title: "iBUYPOWER" },
          { title: "Corsair" },
          { title: "NZXT" }
        ]
      },     
      {
        title: "Gaming monitors",
        subcategories: [
          { title: "ASUS" },
          { title: "Acer" },
          { title: "MSI" },
          { title: "Dell" },
          { title: "Alienware" },
          { title: "Samsung" },
          { title: "LG" },
          { title: "Gigabyte" },
          { title: "AOC" },
          { title: "ViewSonic" },
          { title: "BenQ" }
        ]
      },   
      {
        title: "Gaming accessories and peripherals",
        subcategories: [
          { title: "Keyboards" },
          { title: "Mice" },
          { title: "Mouse pads" },
          { title: "Headsets" },
          { title: "Controllers" },
          { title: "Gaming chairs" },
          { title: "Webcams" },
          { title: "Microphones" },
          { title: "VR accessories" },
          { title: "Streaming accessories" },
          { title: "External storage" },
          { title: "Cooling stands & docks" }
        ]
      },   
    ],
  },
  {
    title: "Photo Video",
    subcategories: [
      {
        title: "Фотоапарати",
        subcategories: [
          { title: "Бездзеркальні фотоапарати" },
          { title: "Дзеркальні фотоапарати" },
          { title: "Компактні фотоапарати" },
          { title: "Sony" },
          { title: "Canon" },
          { title: "Panasonic" },
          { title: "Nikon " },
          { title: "Fujifilm" },
          { title: "kodak" },
        ]
      },     
      {
        title: "Відеокамери",
        subcategories: [
          { title: "Екшн-камери" },
          { title: "Портативні камери" },
          { title: "Камкордери" },
          { title: "Panasonic" },
          { title: "Камери для влогів і стрімінгу" }, 
          { title: "Кінематографічні камери" },
          { title: "SJCAM" },
          { title: "Sony" },
          { title: "GoPro" },
          { title: "DJI" },
          { title: "Canon" },
        ]
      },    
      {
        title: "Об'єктиви",
        subcategories: [
          { title: "Макрооб’єктиви" },
          { title: "Телеоб’єктиви" },
          { title: "Ширококутні об’єктиви" },
          { title: "Об’єктиви з ефектом «риб’яче око»" },
          { title: "Об’єктиви з фіксованою фокусною відстанню" },
          { title: "Об’єктиви зі змінною фокусною відстанню"},
        ]
      },        
      {
        title: "Аксесуари до фото/відео",
        subcategories: [
          { title: "Штативи" },
          { title: "Фільтри" },
          { title: "Спалахи" },
          { title: "Ремені та тримачі" },
          { title: "Сумки та чохли" },
          { title: "Зарядні пристрої та акумулятори" },
          { title: "Карти пам’яті" },
          { title: "Очистка оптики" }
        ]
      }
    ],
  },
  {
    title: "TV and Projectors",
    subcategories: [
      {
        title: "Телевізори",
        subcategories: [
          { title: "Samsung" },
          { title: "LG"},
          { title: "OLED / QLED телевізори" },
          { title: "Sony" },
          { title: "2Е" },
          { title: "TCL" },
          { title: "Hisense" },
        ]
      },        
      {
        title: "Projectors",
        subcategories: [
          { title: "Samsung" },
          { title: "Acer" },          
          { title: "Asus" },
          { title: "Epson" },          
          { title: "Panasonic" },
          { title: "Проєкційні екрани" },          
          { title: "Опції до проєкторів" },
          { title: "Тримач для проєктора" },          
        ]
      },   
      {
        title: "Аудіосистеми для ТВ",
        subcategories: [
          { title: "Саундбари"},
          { title: "Сабвуфери"},
          { title: "Бездротові колонки для ТВ"},
          { title: "Акустичні системи"},
          { title: "AV-ресивери" },
          { title: "Підсилювачі звуку" }
        ]
      },
      {
        title: "Аксесуари для ТБ",
        subcategories: [
          { title: "Настінне кріплення для TV"},
          { title: "Рамки для телевізорів Frame"},
          { title: "Кабелі"},
          { title: "Спеціальні пульти ДК"},
          { title: "Елементи живлення та зарядні пристрої"},
          { title: "Джерело безперебійного живлення (ДБЖ)"},
          { title: "Роутери" },
          { title: "Мережеві фільтри" },
        ]
      },   
    ],
  },
  {
    title: "Audio",
    subcategories: [
      {
        title: "Навушники",
        subcategories: [
          { title: "Apple"},
          { title: "JBL"},
          { title: "Sony"},
          { title: "Samsung"},
          { title: "Xiaomi"},
          { title: "Beats"},

        ]
      },  
      {
        title: "Акустика",
        subcategories: [
          { title: "Портативна акустика"},
          { title: "Саундбари"},
          { title: "Bluetooth колонки"},
          { title: "Мультирум системи"},
          { title: "Автомобільна акустика"},
          { title: ""},

        ]
      },  
    {
      "title": "Мікрофони",
      subcategories: [
        { title: "Студійні мікрофони" },
        { title: "Петличні мікрофони" },
        { title: "USB-мікрофони" },
        { title: "Мікрофони для стрімінгу" },
        { title: "Бездротові мікрофони" },
        { title: "Конденсаторні мікрофони" }
      ]
    }, 
      {
        title: "Аксесуари для навушників",
        subcategories: [
          { title: "Амбушюри"},
          { title: "Чохли"},
          { title: "Кабелі"},
          { title: "Адаптери"},
          { title: "Зарядні кейси"},
          { title: "Тримачі для навушників"},

        ]
      },  
    ],
  },
  {
    title: "Портативна електроніка",
    subcategories: [
      {
        title: "Мобільні пристрої",
        subcategories: [
          { title: "Смартфони"},
          { title: "планшети "},
          { title: "електронні книги"},
          { title: "Розумні годинники"},
          { title: "Фітнес-браслети"},
          { title: "GPS-навігатори"},

        ]
      },  
            {
        title: "Носимі пристрої",
        subcategories: [
          { title: "MP3-плеєри"},
          { title: "портативні колонки"},
          { title: "навушники"},
          { title: "камери"},
          { title: "портативні ігрові консолі"},
          { title: "Портативні зарядні станції:"},

        ]
      },  
            {
        title: "Інше",
        subcategories: [
          { title: "Портативні сканери"},
          { title: "принтери"},
          { title: "автомобільні відеореєстратори"},
          { title: "Портативні проектори"},
          { title: "Електронні перекладачі"},
          { title: "Портативні Wi-Fi роутери"},

        ]
      },  
    ],
  },
];
export default catalogData;
