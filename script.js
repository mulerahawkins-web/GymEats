// ==============================
// GYMEATS — KENYAN GYM TRACKER
// ==============================

// ==============================
// FOOD DATABASE (per 100g)
// ==============================
const kenyanFoods = [
  // ==============================
  // 🥚 EGGS — Multiple Preparations
  // ==============================
  {
    name: "Eggs — Raw (Whole)",
    category: "🥚 Eggs",
    per100g: { calories: 134, protein: 12.7, carbs: 2.4, fat: 8.1, fiber: 0 },
  },
  {
    name: "Eggs — Boiled",
    category: "🥚 Eggs",
    per100g: { calories: 155, protein: 13, carbs: 1.1, fat: 11, fiber: 0 },
  },
  {
    name: "Eggs — Fried (in oil)",
    category: "🥚 Eggs",
    per100g: { calories: 196, protein: 13.6, carbs: 0.8, fat: 14.8, fiber: 0 },
  },
  {
    name: "Eggs — Scrambled (with milk)",
    category: "🥚 Eggs",
    per100g: { calories: 166, protein: 10.6, carbs: 2.1, fat: 12.2, fiber: 0 },
  },
  {
    name: "Eggs — Omelette (plain)",
    category: "🥚 Eggs",
    per100g: { calories: 154, protein: 10.6, carbs: 0.5, fat: 12, fiber: 0 },
  },
  {
    name: "Egg Whites Only",
    category: "🥚 Eggs",
    per100g: { calories: 52, protein: 11, carbs: 0.7, fat: 0.2, fiber: 0 },
  },
  {
    name: "Egg Yolk Only",
    category: "🥚 Eggs",
    per100g: { calories: 322, protein: 15.9, carbs: 3.6, fat: 26.5, fiber: 0 },
  },

  // ==============================
  // 🍗 CHICKEN — Multiple Preparations
  // ==============================
  {
    name: "Chicken Breast — Grilled",
    category: "🍗 Chicken",
    per100g: { calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0 },
  },
  {
    name: "Chicken Breast — Boiled",
    category: "🍗 Chicken",
    per100g: { calories: 150, protein: 29, carbs: 0, fat: 3, fiber: 0 },
  },
  {
    name: "Chicken Breast — Fried",
    category: "🍗 Chicken",
    per100g: { calories: 219, protein: 25, carbs: 7.8, fat: 9.6, fiber: 0.3 },
  },
  {
    name: "Chicken Leg — Grilled",
    category: "🍗 Chicken",
    per100g: { calories: 195, protein: 26, carbs: 0, fat: 9.7, fiber: 0 },
  },
  {
    name: "Chicken Wings — Grilled",
    category: "🍗 Chicken",
    per100g: { calories: 203, protein: 24, carbs: 0, fat: 11.5, fiber: 0 },
  },
  {
    name: "Kuku wa Kienyeji — Boiled",
    category: "🍗 Chicken",
    per100g: { calories: 185, protein: 28, carbs: 0, fat: 7.5, fiber: 0 },
  },
  {
    name: "Kuku wa Kienyeji — Grilled",
    category: "🍗 Chicken",
    per100g: { calories: 200, protein: 29, carbs: 0, fat: 9, fiber: 0 },
  },
  {
    name: "Chicken Stew",
    category: "🍗 Chicken",
    per100g: { calories: 145, protein: 18, carbs: 5, fat: 6, fiber: 1 },
  },

  // ==============================
  // 🥩 BEEF — Multiple Preparations
  // ==============================
  {
    name: "Beef — Raw (Medium Fat)",
    category: "🥩 Beef",
    per100g: { calories: 151, protein: 19.7, carbs: 1.8, fat: 7.2, fiber: 0 },
  },
  {
    name: "Beef — Lean, Boiled",
    category: "🥩 Beef",
    per100g: { calories: 218, protein: 30, carbs: 0, fat: 10, fiber: 0 },
  },
  {
    name: "Nyama Choma — Beef",
    category: "🥩 Beef",
    per100g: { calories: 250, protein: 26, carbs: 0, fat: 15, fiber: 0 },
  },
  {
    name: "Beef Stew",
    category: "🥩 Beef",
    per100g: { calories: 175, protein: 20, carbs: 6, fat: 8, fiber: 1.5 },
  },
  {
    name: "Matumbo (Tripe) — Boiled",
    category: "🥩 Beef",
    per100g: { calories: 96, protein: 14.8, carbs: 0, fat: 4, fiber: 0 },
  },
  {
    name: "Liver — Beef, Fried",
    category: "🥩 Beef",
    per100g: { calories: 208, protein: 26, carbs: 5.9, fat: 8.8, fiber: 0 },
  },
  {
    name: "Sausages — Beef",
    category: "🥩 Beef",
    per100g: { calories: 326, protein: 13.7, carbs: 2.7, fat: 28.7, fiber: 0 },
  },

  // ==============================
  // 🐑 GOAT & PORK
  // ==============================
  {
    name: "Nyama Choma — Goat",
    category: "🐑 Goat",
    per100g: { calories: 231, protein: 27, carbs: 0, fat: 13, fiber: 0 },
  },
  {
    name: "Goat Meat — Boiled",
    category: "🐑 Goat",
    per100g: { calories: 185, protein: 27, carbs: 0, fat: 8, fiber: 0 },
  },
  {
    name: "Goat Meat — Stew",
    category: "🐑 Goat",
    per100g: { calories: 160, protein: 22, carbs: 4, fat: 6.5, fiber: 0.8 },
  },
  {
    name: "Pork — Lean, Boiled",
    category: "🐷 Pork",
    per100g: { calories: 242, protein: 27, carbs: 0, fat: 14, fiber: 0 },
  },
  {
    name: "Pork Ribs — Grilled",
    category: "🐷 Pork",
    per100g: { calories: 290, protein: 20, carbs: 0, fat: 22, fiber: 0 },
  },

  // ==============================
  // 🐟 FISH — Multiple Types & Preparations
  // ==============================
  {
    name: "Tilapia — Raw",
    category: "🐟 Fish",
    per100g: { calories: 96, protein: 20, carbs: 0, fat: 1.7, fiber: 0 },
  },
  {
    name: "Tilapia — Grilled",
    category: "🐟 Fish",
    per100g: { calories: 128, protein: 26, carbs: 0, fat: 2.7, fiber: 0 },
  },
  {
    name: "Tilapia — Fried",
    category: "🐟 Fish",
    per100g: { calories: 196, protein: 26, carbs: 0, fat: 10, fiber: 0 },
  },
  {
    name: "Tilapia — Boiled",
    category: "🐟 Fish",
    per100g: { calories: 112, protein: 23, carbs: 0, fat: 2.3, fiber: 0 },
  },
  {
    name: "Omena — Dried, Raw",
    category: "🐟 Fish",
    per100g: { calories: 290, protein: 60, carbs: 0, fat: 8, fiber: 0 },
  },
  {
    name: "Omena — Fried",
    category: "🐟 Fish",
    per100g: { calories: 320, protein: 55, carbs: 2, fat: 12, fiber: 0 },
  },
  {
    name: "Omena — Stew",
    category: "🐟 Fish",
    per100g: { calories: 180, protein: 35, carbs: 3, fat: 7, fiber: 0.5 },
  },
  {
    name: "Nile Perch (Mbuta) — Grilled",
    category: "🐟 Fish",
    per100g: { calories: 125, protein: 26.7, carbs: 0, fat: 2.2, fiber: 0 },
  },
  {
    name: "Mackerel — Grilled",
    category: "🐟 Fish",
    per100g: { calories: 205, protein: 19, carbs: 0, fat: 13.8, fiber: 0 },
  },
  {
    name: "Tuna — Canned in Water",
    category: "🐟 Fish",
    per100g: { calories: 116, protein: 26, carbs: 0, fat: 1, fiber: 0 },
  },
  {
    name: "Tuna — Canned in Oil",
    category: "🐟 Fish",
    per100g: { calories: 198, protein: 24, carbs: 0, fat: 11, fiber: 0 },
  },
  {
    name: "Prawns — Boiled",
    category: "🐟 Fish",
    per100g: { calories: 99, protein: 21, carbs: 0.9, fat: 1.1, fiber: 0 },
  },
  {
    name: "Sardines — Canned",
    category: "🐟 Fish",
    per100g: { calories: 208, protein: 24.6, carbs: 0, fat: 11.5, fiber: 0 },
  },

  // ==============================
  // 🌾 CEREALS & UGALI VARIETIES
  // ==============================
  {
    name: "Ugali — Refined Maize",
    category: "🌾 Cereals",
    per100g: { calories: 148, protein: 3.4, carbs: 27.3, fat: 1.9, fiber: 1.6 },
  },
  {
    name: "Ugali — Whole Maize",
    category: "🌾 Cereals",
    per100g: { calories: 141, protein: 3.2, carbs: 26, fat: 1.8, fiber: 2.1 },
  },
  {
    name: "Ugali — Sorghum",
    category: "🌾 Cereals",
    per100g: { calories: 138, protein: 3.5, carbs: 27, fat: 1.5, fiber: 2.5 },
  },
  {
    name: "Ugali — Millet (Wimbi)",
    category: "🌾 Cereals",
    per100g: { calories: 142, protein: 3.3, carbs: 28, fat: 1.2, fiber: 2.3 },
  },
  {
    name: "Wali — White Rice",
    category: "🌾 Cereals",
    per100g: { calories: 130, protein: 2.7, carbs: 28, fat: 0.3, fiber: 0.4 },
  },
  {
    name: "Wali — Brown Rice",
    category: "🌾 Cereals",
    per100g: { calories: 123, protein: 2.7, carbs: 26, fat: 0.9, fiber: 1.8 },
  },
  {
    name: "Pilau — Spiced Rice",
    category: "🌾 Cereals",
    per100g: { calories: 180, protein: 4, carbs: 35, fat: 3, fiber: 0.8 },
  },
  {
    name: "Biryani — Chicken",
    category: "🌾 Cereals",
    per100g: { calories: 220, protein: 12, carbs: 30, fat: 6, fiber: 1.5 },
  },
  {
    name: "Oats — Cooked",
    category: "🌾 Cereals",
    per100g: { calories: 71, protein: 2.5, carbs: 12, fat: 1.5, fiber: 1.7 },
  },
  {
    name: "Corn Flakes",
    category: "🌾 Cereals",
    per100g: { calories: 357, protein: 6, carbs: 84, fat: 0.4, fiber: 1.2 },
  },

  // ==============================
  // 🫓 BREADS & PASTRIES
  // ==============================
  {
    name: "Chapati",
    category: "🫓 Breads",
    per100g: { calories: 306, protein: 8, carbs: 50, fat: 9, fiber: 2 },
  },
  {
    name: "Mandazi",
    category: "🫓 Breads",
    per100g: { calories: 320, protein: 7, carbs: 52, fat: 10, fiber: 1.5 },
  },
  {
    name: "Mahamri",
    category: "🫓 Breads",
    per100g: { calories: 310, protein: 7, carbs: 50, fat: 9.5, fiber: 1.8 },
  },
  {
    name: "Mkate — White Bread",
    category: "🫓 Breads",
    per100g: { calories: 265, protein: 9, carbs: 49, fat: 3.2, fiber: 2.7 },
  },
  {
    name: "Mkate — Brown Bread",
    category: "🫓 Breads",
    per100g: { calories: 247, protein: 10, carbs: 47, fat: 3.5, fiber: 5.6 },
  },

  // ==============================
  // 🥔 STARCHY ROOTS & TUBERS
  // ==============================
  {
    name: "Viazi Vitamu — Boiled",
    category: "🥔 Tubers",
    per100g: { calories: 86, protein: 1.6, carbs: 20, fat: 0.1, fiber: 3 },
  },
  {
    name: "Muhogo (Cassava) — Boiled",
    category: "🥔 Tubers",
    per100g: { calories: 159, protein: 1.4, carbs: 38, fat: 0.3, fiber: 1.8 },
  },
  {
    name: "Irish Potato — Boiled",
    category: "🥔 Tubers",
    per100g: { calories: 87, protein: 1.9, carbs: 20, fat: 0.1, fiber: 1.8 },
  },
  {
    name: "Viazi Karai — Fried",
    category: "🥔 Tubers",
    per100g: { calories: 312, protein: 3.8, carbs: 38, fat: 16, fiber: 2.8 },
  },
  {
    name: "Matoke — Boiled",
    category: "🥔 Tubers",
    per100g: { calories: 122, protein: 1, carbs: 31, fat: 0.3, fiber: 2.3 },
  },
  {
    name: "Nduma (Arrowroot) — Boiled",
    category: "🥔 Tubers",
    per100g: { calories: 112, protein: 1.5, carbs: 26, fat: 0.2, fiber: 4.1 },
  },

  // ==============================
  // 🫘 LEGUMES & PULSES
  // ==============================
  {
    name: "Maharage (Kidney Beans)",
    category: "🫘 Legumes",
    per100g: { calories: 132, protein: 8.7, carbs: 24, fat: 0.5, fiber: 6 },
  },
  {
    name: "Ndengu (Green Grams)",
    category: "🫘 Legumes",
    per100g: { calories: 105, protein: 7.5, carbs: 19, fat: 0.4, fiber: 4.5 },
  },
  {
    name: "Kunde (Cowpeas)",
    category: "🫘 Legumes",
    per100g: { calories: 116, protein: 8, carbs: 21, fat: 0.5, fiber: 5 },
  },
  {
    name: "Njahi (Black Beans)",
    category: "🫘 Legumes",
    per100g: { calories: 132, protein: 8.9, carbs: 24, fat: 0.5, fiber: 6.5 },
  },
  {
    name: "Pigeon Peas (Mbaazi)",
    category: "🫘 Legumes",
    per100g: { calories: 116, protein: 6.8, carbs: 21, fat: 0.4, fiber: 4.3 },
  },
  {
    name: "Lentils (Dengu)",
    category: "🫘 Legumes",
    per100g: { calories: 116, protein: 9, carbs: 20, fat: 0.4, fiber: 7.9 },
  },
  {
    name: "Soybean — Boiled",
    category: "🫘 Legumes",
    per100g: { calories: 173, protein: 17, carbs: 10, fat: 9, fiber: 6 },
  },
  {
    name: "Githeri (Maize & Beans)",
    category: "🫘 Legumes",
    per100g: { calories: 152, protein: 7, carbs: 28, fat: 1.5, fiber: 5 },
  },
  {
    name: "Nyoyo (Maize & Beans)",
    category: "🫘 Legumes",
    per100g: { calories: 145, protein: 6.5, carbs: 26, fat: 1.2, fiber: 4.5 },
  },

  // ==============================
  // 🥬 VEGETABLES
  // ==============================
  {
    name: "Sukuma Wiki — Stir-Fried",
    category: "🥬 Vegetables",
    per100g: { calories: 54, protein: 2.5, carbs: 2.1, fat: 3.2, fiber: 2 },
  },
  {
    name: "Sukuma Wiki — Steamed",
    category: "🥬 Vegetables",
    per100g: { calories: 25, protein: 2.2, carbs: 3.5, fat: 0.5, fiber: 2 },
  },
  {
    name: "Spinach (Mchicha) — Boiled",
    category: "🥬 Vegetables",
    per100g: { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2 },
  },
  {
    name: "Managu (African Nightshade)",
    category: "🥬 Vegetables",
    per100g: { calories: 33, protein: 3.1, carbs: 5, fat: 0.5, fiber: 2.1 },
  },
  {
    name: "Terere (Amaranth Leaves)",
    category: "🥬 Vegetables",
    per100g: { calories: 23, protein: 2.5, carbs: 3.5, fat: 0.4, fiber: 2.3 },
  },
  {
    name: "Mrenda (Jute Mallow)",
    category: "🥬 Vegetables",
    per100g: { calories: 29, protein: 2, carbs: 4.5, fat: 0.5, fiber: 2 },
  },
  {
    name: "Cabbage — Boiled",
    category: "🥬 Vegetables",
    per100g: { calories: 25, protein: 1.3, carbs: 5.8, fat: 0.1, fiber: 2.5 },
  },
  {
    name: "Tomatoes — Raw",
    category: "🥬 Vegetables",
    per100g: { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2 },
  },
  {
    name: "Onions — Raw",
    category: "🥬 Vegetables",
    per100g: { calories: 40, protein: 1.1, carbs: 9.3, fat: 0.1, fiber: 1.7 },
  },
  {
    name: "Carrots — Boiled",
    category: "🥬 Vegetables",
    per100g: { calories: 35, protein: 0.8, carbs: 8.2, fat: 0.2, fiber: 3 },
  },
  {
    name: "Capsicum (Pilipili Hoho)",
    category: "🥬 Vegetables",
    per100g: { calories: 31, protein: 1, carbs: 6, fat: 0.3, fiber: 2.1 },
  },
  {
    name: "Pumpkin (Boga) — Boiled",
    category: "🥬 Vegetables",
    per100g: { calories: 26, protein: 1, carbs: 6.5, fat: 0.1, fiber: 0.5 },
  },
  {
    name: "Cowpea Leaves (Kunde Leaves)",
    category: "🥬 Vegetables",
    per100g: { calories: 42, protein: 4.3, carbs: 7, fat: 0.4, fiber: 2.5 },
  },

  // ==============================
  // 🥑 FRUITS
  // ==============================
  {
    name: "Avocado — Ripe",
    category: "🥑 Fruits",
    per100g: { calories: 185, protein: 1.6, carbs: 0, fat: 19.6, fiber: 7 },
  },
  {
    name: "Banana — Ripe",
    category: "🍌 Fruits",
    per100g: { calories: 89, protein: 1.1, carbs: 23, fat: 0.3, fiber: 2.6 },
  },
  {
    name: "Mango — Ripe",
    category: "🥭 Fruits",
    per100g: { calories: 60, protein: 0.8, carbs: 15, fat: 0.4, fiber: 1.6 },
  },
  {
    name: "Pawpaw (Papaya)",
    category: "🍈 Fruits",
    per100g: { calories: 43, protein: 0.5, carbs: 11, fat: 0.3, fiber: 1.7 },
  },
  {
    name: "Pineapple",
    category: "🍍 Fruits",
    per100g: { calories: 50, protein: 0.5, carbs: 13, fat: 0.1, fiber: 1.4 },
  },
  {
    name: "Orange",
    category: "🍊 Fruits",
    per100g: { calories: 47, protein: 0.9, carbs: 12, fat: 0.1, fiber: 2.4 },
  },
  {
    name: "Guava",
    category: "🍈 Fruits",
    per100g: { calories: 68, protein: 2.6, carbs: 14, fat: 1, fiber: 5.4 },
  },
  {
    name: "Passion Fruit",
    category: "🍈 Fruits",
    per100g: { calories: 97, protein: 2.2, carbs: 23, fat: 0.7, fiber: 10.4 },
  },
  {
    name: "Watermelon",
    category: "🍉 Fruits",
    per100g: { calories: 30, protein: 0.6, carbs: 7.6, fat: 0.2, fiber: 0.4 },
  },

  // ==============================
  // 🥛 DAIRY
  // ==============================
  {
    name: "Maziwa — Whole Fresh Milk",
    category: "🥛 Dairy",
    per100g: { calories: 61, protein: 3.2, carbs: 4.8, fat: 3.3, fiber: 0 },
  },
  {
    name: "Mtindi (Fermented Milk)",
    category: "🥛 Dairy",
    per100g: { calories: 52, protein: 3.5, carbs: 4, fat: 2.5, fiber: 0 },
  },
  {
    name: "Mursik",
    category: "🥛 Dairy",
    per100g: { calories: 58, protein: 3.1, carbs: 3.6, fat: 3.5, fiber: 0 },
  },
  {
    name: "Maziwa Lala (Soured Milk)",
    category: "🥛 Dairy",
    per100g: { calories: 56, protein: 3.3, carbs: 4.2, fat: 2.8, fiber: 0 },
  },
  {
    name: "Yogurt — Plain",
    category: "🥛 Dairy",
    per100g: { calories: 61, protein: 3.5, carbs: 4.7, fat: 3.3, fiber: 0 },
  },
  {
    name: "Maziwa — Skimmed",
    category: "🥛 Dairy",
    per100g: { calories: 34, protein: 3.4, carbs: 5, fat: 0.2, fiber: 0 },
  },
  {
    name: "Cheese — Processed",
    category: "🥛 Dairy",
    per100g: { calories: 350, protein: 25, carbs: 1.3, fat: 27, fiber: 0 },
  },

  // ==============================
  // 🥜 NUTS & SEEDS
  // ==============================
  {
    name: "Groundnuts — Roasted",
    category: "🥜 Nuts",
    per100g: { calories: 567, protein: 26, carbs: 16, fat: 49, fiber: 8.5 },
  },
  {
    name: "Peanut Butter",
    category: "🥜 Nuts",
    per100g: { calories: 588, protein: 25, carbs: 20, fat: 50, fiber: 6 },
  },
  {
    name: "Sunflower Seeds",
    category: "🥜 Nuts",
    per100g: { calories: 584, protein: 20.8, carbs: 20, fat: 51.5, fiber: 8.6 },
  },
  {
    name: "Simsim (Sesame Seeds)",
    category: "🥜 Nuts",
    per100g: {
      calories: 573,
      protein: 17.7,
      carbs: 23.5,
      fat: 49.7,
      fiber: 11.8,
    },
  },
  {
    name: "Cashew Nuts",
    category: "🥜 Nuts",
    per100g: {
      calories: 553,
      protein: 18.2,
      carbs: 30.2,
      fat: 43.9,
      fiber: 3.3,
    },
  },
  {
    name: "Macadamia Nuts",
    category: "🥜 Nuts",
    per100g: {
      calories: 718,
      protein: 7.9,
      carbs: 13.8,
      fat: 75.8,
      fiber: 8.6,
    },
  },
  {
    name: "Almonds",
    category: "🥜 Nuts",
    per100g: {
      calories: 579,
      protein: 21.2,
      carbs: 21.6,
      fat: 49.9,
      fiber: 12.5,
    },
  },
  {
    name: "Coconut — Desiccated",
    category: "🥜 Nuts",
    per100g: {
      calories: 660,
      protein: 6.9,
      carbs: 23.7,
      fat: 64.5,
      fiber: 16.3,
    },
  },

  // ==============================
  // 🥣 PORRIDGE & BREAKFAST
  // ==============================
  {
    name: "Uji — Maize Porridge",
    category: "🥣 Porridge",
    per100g: { calories: 55, protein: 1.2, carbs: 12, fat: 0.3, fiber: 0.8 },
  },
  {
    name: "Uji — Sorghum Porridge",
    category: "🥣 Porridge",
    per100g: { calories: 70, protein: 2, carbs: 15, fat: 0.5, fiber: 1.5 },
  },
  {
    name: "Uji — Millet Porridge",
    category: "🥣 Porridge",
    per100g: { calories: 68, protein: 2.2, carbs: 14, fat: 0.6, fiber: 1.8 },
  },
  {
    name: "Uji wa Mahindi (Thick Porridge)",
    category: "🥣 Porridge",
    per100g: { calories: 90, protein: 2, carbs: 20, fat: 0.5, fiber: 1.2 },
  },

  // ==============================
  // 🍲 MIXED DISHES & SNACKS
  // ==============================
  {
    name: "Mukimo",
    category: "🍲 Mixed Dishes",
    per100g: { calories: 95, protein: 3, carbs: 18, fat: 2, fiber: 2.5 },
  },
  {
    name: "Irio (Mashed Peas & Potatoes)",
    category: "🍲 Mixed Dishes",
    per100g: { calories: 110, protein: 4, carbs: 20, fat: 1.5, fiber: 3 },
  },
  {
    name: "Maharagwe (Bean Stew)",
    category: "🍲 Mixed Dishes",
    per100g: { calories: 148, protein: 8, carbs: 25, fat: 2.5, fiber: 6.5 },
  },
  {
    name: "Viazi Masala (Spiced Potatoes)",
    category: "🍲 Mixed Dishes",
    per100g: { calories: 130, protein: 3, carbs: 24, fat: 3, fiber: 2.8 },
  },
  {
    name: "Samosa",
    category: "🍲 Mixed Dishes",
    per100g: { calories: 262, protein: 6, carbs: 30, fat: 13, fiber: 2 },
  },
  {
    name: "Bhajia (Potato Bhajia)",
    category: "🍲 Mixed Dishes",
    per100g: { calories: 280, protein: 5, carbs: 32, fat: 14, fiber: 2.5 },
  },

  // ==============================
  // ☕ BEVERAGES
  // ==============================
  {
    name: "Chai (Tea with Milk & Sugar)",
    category: "☕ Drinks",
    per100g: { calories: 65, protein: 1.5, carbs: 10, fat: 1.5, fiber: 0 },
  },
  {
    name: "Tea — Black (No Sugar)",
    category: "☕ Drinks",
    per100g: { calories: 1, protein: 0, carbs: 0.2, fat: 0, fiber: 0 },
  },
  {
    name: "Coffee — Black",
    category: "☕ Drinks",
    per100g: { calories: 2, protein: 0.3, carbs: 0.3, fat: 0, fiber: 0 },
  },
  {
    name: "Fresh Orange Juice",
    category: "☕ Drinks",
    per100g: { calories: 45, protein: 0.7, carbs: 10.4, fat: 0.2, fiber: 0.2 },
  },

  // ==============================
  // 🫒 OILS & FATS
  // ==============================
  {
    name: "Cooking Oil — Vegetable",
    category: "🫒 Oils",
    per100g: { calories: 884, protein: 0, carbs: 0, fat: 100, fiber: 0 },
  },
  {
    name: "Butter",
    category: "🫒 Oils",
    per100g: { calories: 717, protein: 0.9, carbs: 0.1, fat: 81, fiber: 0 },
  },
  {
    name: "Margarine",
    category: "🫒 Oils",
    per100g: { calories: 717, protein: 0.2, carbs: 0.7, fat: 80.7, fiber: 0 },
  },
  {
    name: "Coconut Oil",
    category: "🫒 Oils",
    per100g: { calories: 862, protein: 0, carbs: 0, fat: 100, fiber: 0 },
  },

  // ==============================
  // 🦗 TRADITIONAL KENYAN INSECTS
  // ==============================
  {
    name: "Nsenene (Grasshoppers) — Dried",
    category: "🦗 Insects",
    per100g: { calories: 560, protein: 35, carbs: 20, fat: 35, fiber: 3.2 },
  },
  {
    name: "Kumbi Kumbi (Flying Ants)",
    category: "🦗 Insects",
    per100g: { calories: 580, protein: 40, carbs: 8, fat: 45, fiber: 2.8 },
  },
  {
    name: "Mopane Worms — Dried",
    category: "🦗 Insects",
    per100g: { calories: 430, protein: 48, carbs: 10, fat: 15, fiber: 4.5 },
  },
];
// ==============================
// NATURAL SERVING UNITS
// ==============================
const servingUnits = {
  "Eggs — Raw (Whole)": { plural: "eggs", grams: 55 },
  "Eggs — Boiled": { plural: "eggs", grams: 55 },
  "Eggs — Fried (in oil)": { plural: "eggs", grams: 55 },
  "Eggs — Scrambled (with milk)": { plural: "eggs", grams: 55 },
  "Eggs — Omelette (plain)": { plural: "eggs", grams: 55 },
  Chapati: { plural: "chapatis", grams: 80 },
  Mandazi: { plural: "mandazis", grams: 60 },
  Mahamri: { plural: "mahamris", grams: 65 },
  Samosa: { plural: "samosas", grams: 50 },
  "Banana — Ripe": { plural: "bananas", grams: 120 },
  "Avocado — Ripe": { plural: "avocados", grams: 200 },
  "Mango — Ripe": { plural: "mangoes", grams: 300 },
  "Chicken Breast — Grilled": { plural: "pieces", grams: 150 },
  "Chicken Breast — Boiled": { plural: "pieces", grams: 150 },
  "Chicken Leg — Grilled": { plural: "pieces", grams: 120 },
  "Chicken Wings — Grilled": { plural: "wings", grams: 80 },
  "Kuku wa Kienyeji — Boiled": { plural: "pieces", grams: 200 },
  "Kuku wa Kienyeji — Grilled": { plural: "pieces", grams: 200 },
  "Nyama Choma — Beef": { plural: "portions", grams: 250 },
  "Nyama Choma — Goat": { plural: "portions", grams: 250 },
  "Tilapia — Grilled": { plural: "fillets", grams: 150 },
  "Tilapia — Fried": { plural: "fillets", grams: 150 },
  "Tilapia — Boiled": { plural: "fillets", grams: 150 },
  "Bhajia (Potato Bhajia)": { plural: "pieces", grams: 20 },
  "Mkate — White Bread": { plural: "slices", grams: 35 },
  "Mkate — Brown Bread": { plural: "slices", grams: 35 },
  "Sausages — Beef": { plural: "sausages", grams: 55 },
};
// ==============================
// STATE
// ==============================
let selectedFood = null;
let dailyLog = [];
let userGoals = null;
let dailyTargets = null;
let selectedGoalType = "maintain";

// ==============================
// INIT
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  function updateClock() {
    const now = new Date();

    const date = now.toLocaleDateString("en-KE", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });

    const time = now.toLocaleTimeString("en-KE", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    document.getElementById("dateDisplay").textContent = `${date} · ${time}`;
  }

  updateClock();
  setInterval(updateClock, 1000);

  document.getElementById("foodSearch").addEventListener("input", handleSearch);
  document
    .getElementById("servingSize")
    .addEventListener("input", updatePreview);

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".input-group")) {
      document.getElementById("dropdown").classList.remove("active");
    }
  });

  loadFromStorage();
  loadSavedTheme();

  if (!userGoals) openGoalSetup();
});

// ==============================
// STORAGE
// ==============================
function loadFromStorage() {
  const savedGoals = localStorage.getItem("gymEatsGoals");
  const savedLog = localStorage.getItem("gymEatsLog");
  const savedDate = localStorage.getItem("gymEatsDate");

  if (savedGoals) {
    userGoals = JSON.parse(savedGoals);
    selectedGoalType = userGoals.goalType;
    calculateTargets();
    updateProgressUI();
    document.getElementById("setupNotice").style.display = "none";
    document.getElementById("progressSection").style.display = "block";
  }

  const today = new Date().toDateString();
  if (savedLog && savedDate === today) {
    dailyLog = JSON.parse(savedLog);
    renderLog();
    updateTotals();
  }
}

function saveToStorage() {
  localStorage.setItem("gymEatsLog", JSON.stringify(dailyLog));
  localStorage.setItem("gymEatsDate", new Date().toDateString());
}

// ==============================
// GOAL SETUP
// ==============================
function openGoalSetup() {
  document.getElementById("modalOverlay").classList.add("active");
  if (userGoals) {
    document.getElementById("goalWeight").value = userGoals.weight;
    document.getElementById("goalActivity").value = userGoals.activityLevel;
    selectGoal(userGoals.goalType);
  }
}

function closeGoalSetup() {
  document.getElementById("modalOverlay").classList.remove("active");
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById("modalOverlay") && userGoals) {
    closeGoalSetup();
  }
}

function selectGoal(type) {
  selectedGoalType = type;
  document
    .querySelectorAll(".goal-btn")
    .forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.goal === type),
    );
}

function saveGoals() {
  const weight = parseFloat(document.getElementById("goalWeight").value);
  const activityLevel = parseFloat(
    document.getElementById("goalActivity").value,
  );

  if (!weight || weight < 30 || weight > 200) {
    alert("Please enter a valid body weight between 30 and 200 kg");
    return;
  }

  userGoals = { weight, goalType: selectedGoalType, activityLevel };
  localStorage.setItem("gymEatsGoals", JSON.stringify(userGoals));

  calculateTargets();
  updateProgressUI();
  updateTotals();

  document.getElementById("setupNotice").style.display = "none";
  document.getElementById("progressSection").style.display = "block";
  // Pop the goal badge
  const badge = document.getElementById("goalBadge");
  badge.classList.add("pop");
  setTimeout(() => badge.classList.remove("pop"), 400);

  showToast("💪🏾 Goals saved!");
  closeGoalSetup();
}

// ==============================
// CALCULATE MACRO TARGETS
// ==============================
function calculateTargets() {
  if (!userGoals) return;
  const { weight, goalType, activityLevel } = userGoals;

  const bmr = weight * 22;
  const tdee = Math.round(bmr * activityLevel);

  let calories, protein;

  if (goalType === "bulk") {
    calories = tdee + 300;
    protein = Math.round(weight * 2.0);
  } else if (goalType === "cut") {
    calories = tdee - 400;
    protein = Math.round(weight * 2.2);
  } else {
    calories = tdee;
    protein = Math.round(weight * 1.8);
  }

  const fat = Math.round((calories * 0.25) / 9);
  const carbs = Math.round((calories - protein * 4 - fat * 9) / 4);

  dailyTargets = { calories, protein, carbs, fat };

  const labels = {
    bulk: "💪🏾 Bulking",
    cut: "🔥 Cutting",
    maintain: "⚖️ Maintain",
  };
  document.getElementById("goalBadge").textContent = labels[goalType];
}

// ==============================
// SEARCH
// ==============================
function handleSearch() {
  const query = document
    .getElementById("foodSearch")
    .value.toLowerCase()
    .trim();
  const dropdown = document.getElementById("dropdown");

  selectedFood = null;
  document.getElementById("nutrientPreview").style.display = "none";

  if (!query) {
    dropdown.classList.remove("active");
    return;
  }

  const results = kenyanFoods
    .filter(
      (f) =>
        f.name.toLowerCase().includes(query) ||
        f.category.toLowerCase().includes(query),
    )
    .slice(0, 8);

  if (!results.length) {
    dropdown.innerHTML =
      '<div class="dropdown-item" style="color:#aaa;justify-content:center;">No foods found</div>';
    dropdown.classList.add("active");
    return;
  }

  dropdown.innerHTML = results
    .map((food, i) => {
      const idx = kenyanFoods.indexOf(food);
      return `<div class="dropdown-item" onclick="selectFoodByIndex(${idx})">
            <span>${food.name}</span>
            <span class="dropdown-category">${food.category}</span>
        </div>`;
    })
    .join("");

  dropdown.classList.add("active");
}

function selectFoodByIndex(idx) {
  selectedFood = kenyanFoods[idx];
  document.getElementById("foodSearch").value = selectedFood.name;
  document.getElementById("dropdown").classList.remove("active");

  // Show helpful gram tip for foods people think in pieces
  const unitData = servingUnits[selectedFood.name];
  const hint = document.getElementById("gramHint");

  if (unitData) {
    hint.textContent = `💡 1 ${unitData.plural.slice(0, -1)} ≈ ${unitData.grams}g`;
    document.getElementById("servingSize").placeholder = "e.g. 3";
  } else {
    hint.textContent = "";
    document.getElementById("servingSize").placeholder = "e.g. 200";
  }

  updatePreview();
}
// ==============================
// NUTRIENT PREVIEW
// ==============================
function updatePreview() {
  if (!selectedFood) return;
  const grams = parseFloat(document.getElementById("servingSize").value);
  if (!grams || grams <= 0) {
    document.getElementById("nutrientPreview").style.display = "none";
    return;
  }

  const r = grams / 100;
  const n = selectedFood.per100g;

  document.getElementById("previewFoodName").textContent =
    `— ${selectedFood.name}`;
  document.getElementById("servingNote").textContent = `Per ${grams}g serving`;
  document.getElementById("previewCalories").textContent = Math.round(
    n.calories * r,
  );
  document.getElementById("previewProtein").textContent =
    (n.protein * r).toFixed(1) + "g";
  document.getElementById("previewCarbs").textContent =
    (n.carbs * r).toFixed(1) + "g";
  document.getElementById("previewFat").textContent =
    (n.fat * r).toFixed(1) + "g";
  document.getElementById("previewFiber").textContent =
    (n.fiber * r).toFixed(1) + "g";

  document.getElementById("nutrientPreview").style.display = "block";
}

// ==============================
// ADD FOOD
// ==============================
function addFood() {
  if (!selectedFood) {
    alert("Please select a food from the list!");
    return;
  }

  // Pulse the button
  const btn = document.getElementById("addBtn");
  btn.classList.add("clicked");
  setTimeout(() => btn.classList.remove("clicked"), 200);
  const grams = getGrams();
  if (!grams) {
    alert("Please enter a valid amount!");
    return;
  }

  const meal = document.getElementById("mealTime").value;
  const r = grams / 100;
  const n = selectedFood.per100g;

  dailyLog.push({
    id: Date.now(),
    name: selectedFood.name,
    meal,
    grams,
    calories: Math.round(n.calories * r),
    protein: parseFloat((n.protein * r).toFixed(1)),
    carbs: parseFloat((n.carbs * r).toFixed(1)),
    fat: parseFloat((n.fat * r).toFixed(1)),
    fiber: parseFloat((n.fiber * r).toFixed(1)),
  });

  saveToStorage();
  renderLog();
  updateTotals();
  showToast(`✅ ${selectedFood.name} added!`);

  document.getElementById("foodSearch").value = "";
  document.getElementById("servingSize").value = "";
  document.getElementById("nutrientPreview").style.display = "none";
  selectedFood = null;
}

// ==============================
// RENDER LOG
// ==============================
function renderLog() {
  const logList = document.getElementById("logList");
  if (!dailyLog.length) {
    logList.innerHTML =
      '<p class="empty-log">No foods logged yet — search above to get started! 💪</p>';
    return;
  }

  const mealOrder = [
    "Breakfast",
    "Pre-Workout",
    "Post-Workout",
    "Lunch",
    "Dinner",
    "Snack",
  ];
  const mealIcons = {
    Breakfast: "🌅",
    "Pre-Workout": "⚡",
    "Post-Workout": "💪",
    Lunch: "☀️",
    Dinner: "🌙",
    Snack: "🍎",
  };

  const grouped = {};
  mealOrder.forEach((m) => (grouped[m] = []));
  dailyLog.forEach((e) => {
    if (grouped[e.meal]) grouped[e.meal].push(e);
  });

  let html = "";
  mealOrder.forEach((meal) => {
    const items = grouped[meal];
    if (!items.length) return;
    const mealKcal = items.reduce((s, i) => s + i.calories, 0);

    html += `<div class="meal-group">
            <div class="meal-group-title">
                ${mealIcons[meal]} ${meal}
                <span class="meal-kcal">${mealKcal} kcal</span>
            </div>`;

    items.forEach((e) => {
      html += `<div class="log-item" id="entry-${e.id}">
                <div class="log-item-info">
                    <div class="log-item-name">${e.name}</div>
                    <div class="log-item-details">
                        ${e.grams}g &nbsp;·&nbsp;
                        <span class="highlight-protein">${e.protein}g protein</span> &nbsp;·&nbsp;
                        ${e.carbs}g carbs &nbsp;·&nbsp; ${e.fat}g fat
                    </div>
                </div>
                <div class="log-item-right">
                    <span class="log-item-calories">${e.calories} kcal</span>
                    <button class="remove-btn" onclick="removeEntry(${e.id})">✕</button>
                </div>
            </div>`;
    });

    html += `</div>`;
  });

  logList.innerHTML = html;
}

// ==============================
// REMOVE & CLEAR
// ==============================
function removeEntry(id) {
  // Animate out first then remove
  const el = document.getElementById(`entry-${id}`);
  if (el) {
    el.classList.add("removing");
    setTimeout(() => {
      dailyLog = dailyLog.filter((e) => e.id !== id);
      saveToStorage();
      renderLog();
      updateTotals();
    }, 280);
  } else {
    dailyLog = dailyLog.filter((e) => e.id !== id);
    saveToStorage();
    renderLog();
    updateTotals();
  }
}

function clearLog() {
  if (!dailyLog.length) return;
  if (confirm("Clear today's entire food log?")) {
    dailyLog = [];
    saveToStorage();
    renderLog();
    updateTotals();
  }
}

// ==============================
// TOTALS & PROGRESS BARS
// ==============================
function updateTotals() {
  const totals = dailyLog.reduce(
    (acc, e) => ({
      calories: acc.calories + e.calories,
      protein: acc.protein + e.protein,
      carbs: acc.carbs + e.carbs,
      fat: acc.fat + e.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  );
  updateProgressUI(totals.calories, totals.protein, totals.carbs, totals.fat);
}

function updateProgressUI(calories = 0, protein = 0, carbs = 0, fat = 0) {
  if (!dailyTargets) return;
  const t = dailyTargets;
  const pct = (v, max) => Math.min(100, Math.round((v / max) * 100));

  // Protein
  document.getElementById("proteinNumbers").textContent =
    `${protein.toFixed(1)} / ${t.protein}g`;
  document.getElementById("proteinBar").style.width =
    pct(protein, t.protein) + "%";
  const pLeft = Math.max(0, t.protein - protein);
  document.getElementById("proteinRemaining").textContent =
    pLeft > 0 ? `${pLeft.toFixed(1)}g remaining` : "✅ Protein goal reached!";

  // Calories
  document.getElementById("calNumbers").textContent =
    `${calories} / ${t.calories} kcal`;
  document.getElementById("calBar").style.width =
    pct(calories, t.calories) + "%";
  const cLeft = t.calories - calories;
  document.getElementById("calRemaining").textContent =
    cLeft > 0
      ? `${cLeft} remaining`
      : cLeft === 0
        ? "✅ Goal reached!"
        : `${Math.abs(cLeft)} over target`;

  // Carbs
  document.getElementById("carbNumbers").textContent =
    `${carbs.toFixed(1)} / ${t.carbs}g`;
  document.getElementById("carbBar").style.width = pct(carbs, t.carbs) + "%";
  const carbLeft = Math.max(0, t.carbs - carbs);
  document.getElementById("carbRemaining").textContent =
    carbLeft > 0 ? `${carbLeft.toFixed(1)}g remaining` : "✅ Done";

  // Fat
  document.getElementById("fatNumbers").textContent =
    `${fat.toFixed(1)} / ${t.fat}g`;
  document.getElementById("fatBar").style.width = pct(fat, t.fat) + "%";
  const fatLeft = Math.max(0, t.fat - fat);
  document.getElementById("fatRemaining").textContent =
    fatLeft > 0 ? `${fatLeft.toFixed(1)}g remaining` : "✅ Done";
}
// ==============================
// DARK MODE
// ==============================

function toggleDarkMode() {
  // Check what theme is currently active
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    // Switch to light mode
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("gymEatsTheme", "light");
  } else {
    // Switch to dark mode
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("gymEatsTheme", "dark");
  }
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem("gymEatsTheme");

  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}
// ==============================
// UNIT HELPERS
// ==============================

function getGrams() {
  const val = parseFloat(document.getElementById("servingSize").value);
  if (!val || val <= 0) return null;
  return val;
}
// ==============================
// TOAST NOTIFICATION
// ==============================
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}
