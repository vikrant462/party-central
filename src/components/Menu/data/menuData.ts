import { MenuItem, MenuCategory } from '../types';

export const categories: MenuCategory[] = [
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Refreshing drinks to quench your thirst',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'mocktails',
    name: 'Mocktails',
    description: 'Non-alcoholic party favorites',
    image: 'https://images.unsplash.com/photo-1536599424071-0b215a388ba7?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'starters',
    name: 'Starters',
    description: 'Begin your party with these delicious appetizers',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'main-course',
    name: 'Main Course',
    description: 'Hearty meals for the perfect celebration',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet endings to your festive meal',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'party-combos',
    name: 'Party Combos',
    description: 'Special combinations for group celebrations',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=300&q=80'
  }
];

export const menuItems: MenuItem[] = [
  // Beverages
  {
    id: 101,
    name: "Party Punch",
    price: 4.99,
    description: "Refreshing blend of tropical fruits with sparkles",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    category: "beverages",
    calories: 120
  },
  {
    id: 102,
    name: "Rainbow Smoothie",
    price: 5.99,
    description: "Layered fruit smoothie with natural colors",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
    category: "beverages",
    calories: 180
  },
  {
    id: 103,
    name: "Sparkle Soda",
    price: 3.99,
    description: "Fizzy drink with edible glitter and fruit syrup",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    category: "beverages",
    calories: 90
  },
  {
    id: 104,
    name: "Celebration Iced Tea",
    price: 4.49,
    description: "Color-changing butterfly pea flower tea with lemon",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    category: "beverages",
    calories: 60
  },

  // Mocktails
  {
    id: 201,
    name: "Carnival Sunrise",
    price: 6.99,
    description: "Orange juice, grenadine, and sprite with candy rim",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80",
    category: "mocktails",
    calories: 160
  },
  {
    id: 202,
    name: "Berry Blast",
    price: 7.99,
    description: "Mixed berries, mint, and lime with soda",
    image: "https://images.unsplash.com/photo-1508254627334-d4fa3a515b22?auto=format&fit=crop&w=800&q=80",
    category: "mocktails",
    calories: 140
  },
  {
    id: 203,
    name: "Tropical Paradise",
    price: 8.99,
    description: "Coconut cream, pineapple juice, and blue curacao syrup",
    image: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?auto=format&fit=crop&w=800&q=80",
    category: "mocktails",
    calories: 200
  },
  {
    id: 204,
    name: "Unicorn Dream",
    price: 9.99,
    description: "Layered fruit juices with cotton candy topping",
    image: "https://images.unsplash.com/photo-1563223771-375783ee91ad?auto=format&fit=crop&w=800&q=80",
    category: "mocktails",
    calories: 280
  },

  // Starters
  {
    id: 301,
    name: "Party Platter",
    price: 12.99,
    description: "Assorted appetizers perfect for sharing",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    category: "starters",
    calories: 450
  },
  {
    id: 302,
    name: "Disco Nachos",
    price: 9.99,
    description: "Loaded nachos with colorful toppings",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80",
    category: "starters",
    calories: 380
  },
  {
    id: 303,
    name: "Rainbow Spring Rolls",
    price: 8.99,
    description: "Colorful vegetables in rice paper with dipping sauce",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    category: "starters",
    isVegetarian: true,
    calories: 220
  },
  {
    id: 304,
    name: "Fiesta Wings",
    price: 11.99,
    description: "Crispy wings with choice of party sauces",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80",
    category: "starters",
    spiceLevel: 2,
    calories: 420
  },

  // Main Course
  {
    id: 401,
    name: "Party Burger",
    price: 8.99,
    description: "Double patty with special party sauce and crispy onions",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    category: "main-course",
    calories: 650
  },
  {
    id: 402,
    name: "Carnival Pizza",
    price: 14.99,
    description: "Cheese-filled crust with vibrant party toppings",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    category: "main-course",
    calories: 800
  },
  {
    id: 403,
    name: "Celebration Pasta",
    price: 13.99,
    description: "Rainbow pasta with creamy alfredo sauce",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80",
    category: "main-course",
    isVegetarian: true,
    calories: 560
  },
  {
    id: 404,
    name: "Fiesta Tacos",
    price: 12.99,
    description: "Three colorful tacos with different fillings",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
    category: "main-course",
    spiceLevel: 1,
    calories: 480
  },

  // Desserts
  {
    id: 501,
    name: "Rainbow Cake",
    price: 6.99,
    description: "Colorful layered cake with vanilla frosting",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    category: "desserts",
    calories: 350
  },
  {
    id: 502,
    name: "Party Shake",
    price: 4.99,
    description: "Color-changing shake with sparkle sprinkles",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    category: "desserts",
    calories: 420
  },
  {
    id: 503,
    name: "Confetti Sundae",
    price: 7.99,
    description: "Ice cream with birthday cake pieces and sprinkles",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    category: "desserts",
    calories: 480
  },
  {
    id: 504,
    name: "Carnival Churros",
    price: 5.99,
    description: "Colorful churros with dipping sauces",
    image: "https://images.unsplash.com/photo-1626198226928-95f80d4c2678?auto=format&fit=crop&w=800&q=80",
    category: "desserts",
    calories: 320
  },

  // Party Combos
  {
    id: 601,
    name: "Ultimate Party Pack",
    price: 39.99,
    description: "4 Party Burgers + 2 Festival Fries + 4 Party Shakes",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80",
    category: "party-combos",
    isSpecial: true,
    calories: 2400
  },
  {
    id: 602,
    name: "Kids Party Combo",
    price: 24.99,
    description: "4 Mini Burgers + 2 Fries + 4 Rainbow Smoothies",
    image: "https://images.unsplash.com/photo-1561758033-7e924f619b47?auto=format&fit=crop&w=800&q=80",
    category: "party-combos",
    isSpecial: true,
    calories: 1800
  },
  {
    id: 603,
    name: "Birthday Special",
    price: 49.99,
    description: "1 Rainbow Cake + 6 Party Burgers + 3 Sides + 6 Beverages",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80",
    category: "party-combos",
    isSpecial: true,
    calories: 3200
  },
  {
    id: 604,
    name: "Celebration Pack",
    price: 34.99,
    description: "2 Pizzas + 2 Sides + 4 Mocktails + 1 Dessert",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80",
    category: "party-combos",
    isSpecial: true,
    calories: 2800
  }
];