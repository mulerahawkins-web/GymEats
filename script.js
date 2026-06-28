// ==============================
// GYMEATS — KENYAN GYM TRACKER
// ==============================

// ==============================
// FOOD DATABASE (per 100g)
// ==============================
const kenyanFoods = [
  // HIGH PROTEIN — Gym Priority
  {
    name: "Eggs (Boiled)",
    category: "🥚 Protein",
    per100g: { calories: 155, protein: 13, carbs: 1.1, fat: 11, fiber: 0 },
  },
  {
    name: "Chicken Breast (Grilled)",
    category: "🍗 Protein",
    per100g: { calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0 },
  },
  {
    name: "Kuku wa Kienyeji",
    category: "🍗 Protein",
    per100g: { calories: 185, protein: 28, carbs: 0, fat: 7.5, fiber: 0 },
  },
  {
    name: "Tilapia (Grilled)",
    category: "🐟 Protein",
    per100g: { calories: 128, protein: 26, carbs: 0, fat: 2.7, fiber: 0 },
  },
  {
    name: "Omena (Dried Silver Cyprinid)",
    category: "🐟 Protein",
    per100g: { calories: 290, protein: 60, carbs: 0, fat: 8, fiber: 0 },
  },
  {
    name: "Tuna (Canned in Water)",
    category: "🐟 Protein",
    per100g: { calories: 116, protein: 26, carbs: 0, fat: 1, fiber: 0 },
  },
  {
    name: "Beef Lean (Cooked)",
    category: "🥩 Protein",
    per100g: { calories: 218, protein: 30, carbs: 0, fat: 10, fiber: 0 },
  },
  {
    name: "Nyama Choma - Beef",
    category: "🥩 Protein",
    per100g: { calories: 250, protein: 26, carbs: 0, fat: 15, fiber: 0 },
  },
  {
    name: "Nyama Choma - Goat",
    category: "🥩 Protein",
    per100g: { calories: 231, protein: 27, carbs: 0, fat: 13, fiber: 0 },
  },
  {
    name: "Maziwa (Whole Milk)",
    category: "🥛 Dairy",
    per100g: { calories: 61, protein: 3.2, carbs: 4.8, fat: 3.3, fiber: 0 },
  },
  {
    name: "Mtindi (Fermented Milk)",
    category: "🥛 Dairy",
    per100g: { calories: 52, protein: 3.5, carbs: 4, fat: 2.5, fiber: 0 },
  },
  {
    name: "Groundnuts (Peanuts)",
    category: "🥜 Nuts",
    per100g: { calories: 567, protein: 26, carbs: 16, fat: 49, fiber: 8.5 },
  },
  {
    name: "Peanut Butter",
    category: "🥜 Nuts",
    per100g: { calories: 588, protein: 25, carbs: 20, fat: 50, fiber: 6 },
  },
  {
    name: "Maharage (Beans)",
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

  // CARBS — Fuel
  {
    name: "Ugali (Maize Meal)",
    category: "🍚 Staples",
    per100g: { calories: 119, protein: 2.5, carbs: 27, fat: 0.5, fiber: 0.8 },
  },
  {
    name: "Oats (Cooked)",
    category: "🌾 Breakfast",
    per100g: { calories: 71, protein: 2.5, carbs: 12, fat: 1.5, fiber: 1.7 },
  },
  {
    name: "Brown Rice (Cooked)",
    category: "🍚 Staples",
    per100g: { calories: 123, protein: 2.7, carbs: 26, fat: 0.9, fiber: 1.8 },
  },
  {
    name: "Wali (White Rice)",
    category: "🍚 Staples",
    per100g: { calories: 130, protein: 2.7, carbs: 28, fat: 0.3, fiber: 0.4 },
  },
  {
    name: "Viazi Vitamu (Sweet Potato)",
    category: "🍠 Staples",
    per100g: { calories: 86, protein: 1.6, carbs: 20, fat: 0.1, fiber: 3 },
  },
  {
    name: "Chapati",
    category: "🫓 Bread",
    per100g: { calories: 306, protein: 8, carbs: 50, fat: 9, fiber: 2 },
  },
  {
    name: "Githeri (Maize & Beans)",
    category: "🫘 Staples",
    per100g: { calories: 152, protein: 7, carbs: 28, fat: 1.5, fiber: 5 },
  },
  {
    name: "Mukimo",
    category: "🥔 Staples",
    per100g: { calories: 95, protein: 3, carbs: 18, fat: 2, fiber: 2.5 },
  },
  {
    name: "Irio (Mashed Peas & Potatoes)",
    category: "🥔 Staples",
    per100g: { calories: 110, protein: 4, carbs: 20, fat: 1.5, fiber: 3 },
  },
  {
    name: "Matoke (Plantain)",
    category: "🍚 Staples",
    per100g: { calories: 122, protein: 1, carbs: 31, fat: 0.3, fiber: 2.3 },
  },
  {
    name: "Muhogo (Cassava)",
    category: "🍚 Staples",
    per100g: { calories: 159, protein: 1.4, carbs: 38, fat: 0.3, fiber: 1.8 },
  },
  {
    name: "Pilau (Spiced Rice)",
    category: "🍚 Staples",
    per100g: { calories: 180, protein: 4, carbs: 35, fat: 3, fiber: 0.8 },
  },
  {
    name: "Uji (Sorghum Porridge)",
    category: "🌾 Breakfast",
    per100g: { calories: 70, protein: 2, carbs: 15, fat: 0.5, fiber: 1.5 },
  },

  // VEGETABLES
  {
    name: "Sukuma Wiki (Kale)",
    category: "🥬 Vegetables",
    per100g: { calories: 28, protein: 2.2, carbs: 3.5, fat: 0.5, fiber: 2 },
  },
  {
    name: "Spinach (Mchicha)",
    category: "🥬 Vegetables",
    per100g: { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2 },
  },
  {
    name: "Cabbage",
    category: "🥬 Vegetables",
    per100g: { calories: 25, protein: 1.3, carbs: 5.8, fat: 0.1, fiber: 2.5 },
  },
  {
    name: "Tomatoes",
    category: "🍅 Vegetables",
    per100g: { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2 },
  },

  // FRUITS
  {
    name: "Avocado",
    category: "🥑 Fruits",
    per100g: { calories: 160, protein: 2, carbs: 9, fat: 15, fiber: 7 },
  },
  {
    name: "Banana",
    category: "🍌 Fruits",
    per100g: { calories: 89, protein: 1.1, carbs: 23, fat: 0.3, fiber: 2.6 },
  },
  {
    name: "Mango",
    category: "🥭 Fruits",
    per100g: { calories: 60, protein: 0.8, carbs: 15, fat: 0.4, fiber: 1.6 },
  },

  // SNACKS
  {
    name: "Mandazi",
    category: "🍩 Snacks",
    per100g: { calories: 320, protein: 7, carbs: 52, fat: 10, fiber: 1.5 },
  },
  {
    name: "Samosa",
    category: "🥟 Snacks",
    per100g: { calories: 262, protein: 6, carbs: 30, fat: 13, fiber: 2 },
  },
  {
    name: "Bhajia (Potato Bhajia)",
    category: "🥟 Snacks",
    per100g: { calories: 280, protein: 5, carbs: 32, fat: 14, fiber: 2.5 },
  },
  {
    name: "Viazi Karai (Fried Potatoes)",
    category: "🥟 Snacks",
    per100g: { calories: 312, protein: 3.8, carbs: 38, fat: 16, fiber: 2.8 },
  },
];
// ==============================
// NATURAL SERVING UNITS
// ==============================
const servingUnits = {
  "Eggs (Boiled)": { plural: "eggs", grams: 50 },
  "Chicken Breast (Grilled)": { plural: "pieces", grams: 150 },
  "Kuku wa Kienyeji": { plural: "pieces", grams: 200 },
  "Tilapia (Grilled)": { plural: "fillets", grams: 150 },
  Chapati: { plural: "pieces", grams: 80 },
  Mandazi: { plural: "pieces", grams: 60 },
  Samosa: { plural: "samosas", grams: 50 },
  Banana: { plural: "bananas", grams: 120 },
  Avocado: { plural: "avocados", grams: 200 },
  Mango: { plural: "mangoes", grams: 300 },
  "Bhajia (Potato Bhajia)": { plural: "pieces", grams: 20 },
  "Viazi Karai (Fried Potatoes)": { plural: "pieces", grams: 30 },
  "Nyama Choma - Beef": { plural: "portions", grams: 250 },
  "Nyama Choma - Goat": { plural: "portions", grams: 250 },
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
  } else {
    hint.textContent = "";
  }

  document.getElementById("servingSize").placeholder = "e.g. 200";
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
  dailyLog = dailyLog.filter((e) => e.id !== id);
  saveToStorage();
  renderLog();
  updateTotals();
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
