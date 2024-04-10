const recipeList = document.getElementById("recipeList");

const recipes = [
  {
    id: 1,
    title: "Pasta Carbonara",
    ingredients: ["Pasta", "Eggs", "Bacon", "Parmesan Cheese"],
    instructions:
      "1. Cook pasta according to package instructions.<br> 2. In a separate pan, cook bacon until crispy. <br> 3. Whisk eggs and Parmesan cheese in a bowl.<br> 4. Drain pasta and toss with egg mixture. <br> 5.Add cooked bacon and mix well. <br> 6. Serve hot.",
  },
  {
    id: 2,
    title: "Chicken Stir Fry",
    ingredients: ["Chicken", "Bell Peppers", "Broccoli", "Soy Sauce"],
    instructions:
      "1. Slice chicken and vegetables. <br> 2. Heat oil in a pan and cook chicken until browned. <br> 3. Add vegetables and stir fry until tender. <br> 4. Season with soy sauce and serve hot.",
  },
  {
    id: 3,
    title: "Grilled Salmon",
    ingredients: ["Salmon Fillet", "Lemon", "Olive Oil", "Salt", "Pepper"],
    instructions:
      "1. Preheat grill to medium-high heat. <br> 2. Brush salmon fillet with olive oil and season with salt and pepper. <br> 3. Grill salmon for 4-5 minutes on each side, or until cooked through. <br> 4. Squeeze lemon juice over salmon before serving.",
  },
  {
    id: 4,
    title: "Vegetable Curry",
    ingredients: [
      "Mixed Vegetables",
      "Coconut Milk",
      "Curry Paste",
      "Onion",
      "Garlic",
      "Ginger",
    ],
    instructions:
      "1. Heat oil in a pan and sauté chopped onion, garlic, and ginger until fragrant. <br> 2. Add mixed vegetables and cook until tender. <br> 3. Stir in curry paste and coconut milk. <br> 4. Simmer for 10-15 minutes, or until flavors are well combined. <br> 5. Serve hot with rice.",
  },
  {
    id: 5,
    title: "Caprese Salad",
    ingredients: [
      "Tomatoes",
      "Fresh Mozzarella",
      "Basil Leaves",
      "Balsamic Glaze",
      "Olive Oil",
      "Salt",
      "Pepper",
    ],
    instructions:
      "1. Slice tomatoes and fresh mozzarella. <br> 2. Arrange slices on a plate, alternating between tomato and mozzarella. <br> 3. Top with fresh basil leaves. <br> 4. Drizzle with balsamic glaze and olive oil. <br> 5. Season with salt and pepper to taste.",
  },
  {
    id: 6,
    title: "Beef Tacos",
    ingredients: [
      "Ground Beef",
      "Taco Seasoning",
      "Tortillas",
      "Lettuce",
      "Tomatoes",
      "Cheese",
      "Salsa",
      "Sour Cream",
    ],
    instructions:
      "1. Brown ground beef in a skillet over medium heat. <br> 2. Stir in taco seasoning and cook until meat is fully cooked. <br> 3. Warm tortillas in a separate skillet. <br> 4. Assemble tacos by adding beef, lettuce, tomatoes, cheese, salsa, and sour cream to each tortilla. <br> 5. Serve hot.",
  },
  {
    id: 7,
    title: "Mushroom Risotto",
    ingredients: [
      "Arborio Rice",
      "Mushrooms",
      "Onion",
      "Garlic",
      "Vegetable Broth",
      "White Wine",
      "Parmesan Cheese",
      "Butter",
    ],
    instructions:
      "1. Sauté chopped onion and garlic in butter until softened. <br> 2. Add sliced mushrooms and cook until tender. <br> 3. Stir in Arborio rice and cook for 1-2 minutes. <br> 4. Add white wine and cook until absorbed. <br> 5. Gradually add vegetable broth, stirring frequently, until rice is creamy and tender. <br> 6. Stir in grated Parmesan cheese before serving.",
  },
  {
    id: 8,
    title: "Shrimp Scampi",
    ingredients: [
      "Shrimp",
      "Linguine",
      "Garlic",
      "Butter",
      "Olive Oil",
      "Lemon",
      "Parsley",
      "Salt",
      "Pepper",
    ],
    instructions:
      "1. Cook linguine according to package instructions. <br> 2. Meanwhile, heat olive oil and butter in a skillet over medium heat. <br> 3. Add minced garlic and cook until fragrant. <br> 4. Add shrimp and cook until pink and opaque. <br> 5. Stir in lemon juice and chopped parsley. <br> 6. Season with salt and pepper. <br> 7. Serve shrimp over cooked linguine.",
  },
  {
    id: 9,
    title: "Chicken Caesar Salad",
    ingredients: [
      "Chicken Breast",
      "Romaine Lettuce",
      "Croutons",
      "Parmesan Cheese",
      "Caesar Dressing",
    ],
    instructions:
      "1. Season chicken breast with salt and pepper. <br> 2. Grill or pan-fry until cooked through. <br> 3. Slice chicken into strips. <br> 4. Toss chopped romaine lettuce with croutons, grated Parmesan cheese, and Caesar dressing. <br> 5. Top salad with sliced chicken breast.",
  },
  {
    id: 10,
    title: "Vegetable Lasagna",
    ingredients: [
      "Lasagna Noodles",
      "Marinara Sauce",
      "Ricotta Cheese",
      "Mozzarella Cheese",
      "Parmesan Cheese",
      "Spinach",
      "Zucchini",
      "Bell Peppers",
    ],
    instructions:
      "1. Preheat oven to 375°F (190°C). <br> 2. Slice zucchini, yellow squash, and bell peppers thinly. Slice mushrooms. <br> 3. Heat olive oil in a pan and sauté minced garlic until fragrant. <br> 4. Add sliced vegetables and spinach. Cook until vegetables are tender. Season with salt and pepper. <br> 5. In a separate bowl, mix ricotta cheese, mozzarella cheese, and Parmesan cheese. <br> 6. Spread a layer of marinara sauce on the bottom of a baking dish. <br> 7. Arrange lasagna noodles over the sauce. <br> 8. Spread a layer of ricotta cheese mixture over the noodles, followed by a layer of cooked vegetables. <br> 9. Repeat layers until all ingredients are used, ending with a layer of marinara sauce on top. <br> 10. Cover with aluminum foil and bake for 45 minutes. <br> 11. Remove foil and bake for an additional 15 minutes, or until cheese is bubbly and golden. <br> 12. Let cool for a few minutes before serving.",
  },
  {
    id: 11,
    title: "Vegetable Stir Fry",
    ingredients: [
      "Broccoli",
      "Bell Peppers",
      "Carrots",
      "Snap Peas",
      "Tofu",
      "Soy Sauce",
      "Ginger",
      "Garlic",
    ],
    instructions:
      "1. Cut tofu into cubes and marinate in soy sauce, ginger, and garlic. <br> 2. Heat oil in a pan and stir fry vegetables until tender-crisp. <br> 3. Add marinated tofu and cook until golden brown. <br> 4. Serve hot over rice or noodles.",
  },
  {
    id: 12,
    title: "Quinoa Salad",
    ingredients: [
      "Quinoa",
      "Cucumber",
      "Cherry Tomatoes",
      "Red Onion",
      "Feta Cheese",
      "Kalamata Olives",
      "Fresh Herbs",
      "Lemon Juice",
      "Olive Oil",
    ],
    instructions:
      "1. Cook quinoa according to package instructions and let it cool. <br> 2. Chop cucumber, cherry tomatoes, and red onion. <br> 3. Combine cooked quinoa with chopped vegetables, crumbled feta cheese, and pitted Kalamata olives. <br> 4. Dress with fresh herbs, lemon juice, and olive oil. <br> 5. Serve chilled.",
  },
  {
    id: 13,
    title: "Vegetable Curry",
    ingredients: [
      "Potatoes",
      "Carrots",
      "Peas",
      "Cauliflower",
      "Onion",
      "Tomatoes",
      "Coconut Milk",
      "Curry Powder",
      "Turmeric",
      "Cumin",
      "Coriander",
    ],
    instructions:
      "1. Dice potatoes, carrots, and cauliflower. <br> 2. Sauté chopped onion in a pan until translucent. <br> 3. Add diced vegetables, tomatoes, and spices. Cook until vegetables are tender. <br> 4. Stir in coconut milk and simmer until flavors meld. <br> 5. Serve hot with rice or bread.",
  },
  {
    id: 14,
    title: "Spinach and Mushroom Quesadillas",
    ingredients: [
      "Spinach",
      "Mushrooms",
      "Tortillas",
      "Monterey Jack Cheese",
      "Garlic",
      "Onion",
      "Olive Oil",
      "Salt",
      "Pepper",
    ],
    instructions:
      "1. Sauté sliced mushrooms, chopped spinach, and diced onion in olive oil until tender. <br> 2. Season with salt and pepper. <br> 3. Place a tortilla in a skillet, add a layer of cheese, followed by the spinach and mushroom mixture. <br> 4. Top with another tortilla and cook until golden brown and crispy. <br> 5. Cut into wedges and serve hot with salsa and sour cream.",
  },
  {
    id: 15,
    title: "Eggplant Parmesan",
    ingredients: [
      "Eggplant",
      "Marinara Sauce",
      "Mozzarella Cheese",
      "Parmesan Cheese",
      "Breadcrumbs",
      "Eggs",
      "Fresh Basil",
    ],
    instructions:
      "1. Slice eggplant into rounds and season with salt. <br> 2. Dip eggplant slices in beaten egg, then coat in breadcrumbs. <br> 3. Fry eggplant slices until golden brown. <br> 4. Layer fried eggplant in a baking dish with marinara sauce, mozzarella cheese, and Parmesan cheese. <br> 5. Bake until cheese is bubbly and golden. <br> 6. Garnish with fresh basil before serving.",
  },
  {
    id: 16,
    title: "Veg Chili",
    ingredients: [
      "Kidney Beans",
      "Black Beans",
      "Corn",
      "Bell Peppers",
      "Onion",
      "Garlic",
      "Tomatoes",
      "Vegetable Broth",
      "Chili Powder",
      "Cumin",
      "Paprika",
      "Cayenne Pepper",
    ],
    instructions:
      "1. Sauté chopped onion and minced garlic in a pot until softened. <br> 2. Add diced bell peppers, corn, tomatoes, and drained beans. <br> 3. Stir in chili powder, cumin, paprika, and cayenne pepper. <br> 4. Pour in vegetable broth and simmer for 30-40 minutes. <br> 5. Serve hot with your choice of toppings.",
  },
  {
    id: 17,
    title: "Vegetarian Pad Thai",
    ingredients: [
      "Rice Noodles",
      "Tofu",
      "Bean Sprouts",
      "Scallions",
      "Carrots",
      "Eggs",
      "Peanuts",
      "Tamarind Paste",
      "Soy Sauce",
      "Lime Juice",
      "Sugar",
      "Chili Flakes",
    ],
    instructions:
      "1. Soak rice noodles in warm water until softened. <br> 2. Drain and set aside. <br> 3. Press tofu to remove excess moisture, then dice into cubes. <br> 4. Heat oil in a wok and scramble eggs. <br> 5. Add diced tofu and stir fry until golden brown. <br> 6. Add soaked noodles, bean sprouts, sliced scallions, and julienned carrots. <br> 7. Stir in tamarind paste, soy sauce, lime juice, sugar, and chili flakes. <br> 8. Cook until noodles are heated through. <br> 9. Serve hot garnished with crushed peanuts.",
  },
  {
    id: 18,
    title: "Vegetarian Sushi Rolls",
    ingredients: [
      "Sushi Rice",
      "Nori Sheets",
      "Avocado",
      "Cucumber",
      "Carrot",
      "Bell Pepper",
      "Soy Sauce",
      "Wasabi",
      "Pickled Ginger",
    ],
    instructions:
      "1. Cook sushi rice according to package instructions and let it cool. <br> 2. Place a nori sheet on a bamboo sushi mat. <br> 3. Spread a layer of rice evenly over the nori, leaving a 1-inch border. <br> 4. Arrange thin strips of avocado, cucumber, carrot, and bell pepper along the bottom edge of the nori. <br> 5. Roll the sushi tightly using the bamboo mat, moistening the edge of the nori with water to seal. <br> 6. Slice the roll into bite-sized pieces. <br> 7. Serve with soy sauce, wasabi, and pickled ginger.",
  },
  {
    id: 19,
    title: "Veg Pizza",
    ingredients: [
      "Pizza Dough",
      "Tomato Sauce",
      "Mozzarella Cheese",
      "Bell Peppers",
      "Red Onion",
      "Mushrooms",
      "Olives",
      "Fresh Basil",
      "Olive Oil",
      "Salt",
      "Pepper",
    ],
    instructions:
      "1. Preheat oven to 425°F (220°C). <br> 2. Roll out pizza dough on a floured surface to desired thickness. <br> 3. Transfer dough to a greased baking sheet or pizza stone. <br> 4. Spread tomato sauce evenly over the dough, leaving a small border. <br> 5. Top with shredded mozzarella cheese, sliced bell peppers, red onion, mushrooms, and olives. <br> 6. Drizzle with olive oil and season with salt and pepper. <br> 7. Bake for 15-20 minutes, or until crust is golden brown and cheese is bubbly. <br> 8. Garnish with fresh basil before serving.",
  },
  {
    id: 20,
    title: "Vegetarian Burrito Bowl",
    ingredients: [
      "Rice",
      "Black Beans",
      "Corn",
      "Avocado",
      "Cherry Tomatoes",
      "Lettuce",
      "Red Onion",
      "Cilantro",
      "Lime",
      "Sour Cream",
      "Salsa",
    ],
    instructions:
      "1. Cook rice according to package instructions. <br> 2. Rinse and drain black beans and corn. <br> 3. Dice avocado and cherry tomatoes. <br> 4. Shred lettuce and thinly slice red onion. <br> 5. Chop fresh cilantro and cut lime into wedges. <br> 6. Assemble burrito bowls by layering rice, black beans, corn, avocado, cherry tomatoes, lettuce, and red onion in individual bowls. <br> 7. Garnish with fresh cilantro and lime wedges. <br> 8. Serve with sour cream and salsa on the side.",
  },
  {
    id: 21,
    title: "Vegetarian Stir Fry",
    ingredients: [
      "Tofu",
      "Broccoli",
      "Carrots",
      "Bell Peppers",
      "Snow Peas",
      "Onion",
      "Garlic",
      "Ginger",
      "Soy Sauce",
      "Sesame Oil",
      "Rice Vinegar",
      "Honey",
      "Cornstarch",
      "Water",
      "Cooked Rice or Noodles",
    ],
    instructions:
      "1. Press tofu to remove excess moisture, then cut into cubes. <br> 2. Heat oil in a large skillet or wok over medium-high heat. <br> 3. Add tofu and cook until golden brown on all sides. Remove tofu from skillet and set aside. <br> 4. In the same skillet, add more oil if needed, and stir fry chopped broccoli, carrots, bell peppers, snow peas, onion, minced garlic, and grated ginger until vegetables are tender-crisp. <br> 5. In a small bowl, whisk together soy sauce, sesame oil, rice vinegar, honey, cornstarch, and water. <br> 6. Pour sauce over the vegetables and cook until thickened. <br> 7. Add cooked tofu back to the skillet and toss to coat with sauce. <br> 8. Serve hot over cooked rice or noodles.",
  },
];

function displayRecipeList(recipes) {
  recipeList.innerHTML = recipes
    .map(
      (recipe) =>
        `<div class="recipe-card" onclick="displayRecipeDetails(${recipe.id})">${recipe.title}</div>`
    )
    .join("");
}

function displayRecipeDetails(recipeId) {
  const recipe = recipes.find((recipe) => recipe.id === recipeId);
  const recipeDetails = document.getElementById("recipeDetails");
  recipeDetails.innerHTML = `<h2>&bull; ${recipe.title}</h2>
                                <ul>
                                    ${recipe.ingredients
                                      .map(
                                        (ingredient) => `<li>${ingredient}</li>`
                                      )
                                      .join("")}
                                </ul>
                                <p>${recipe.instructions}</p>`;
}

function searchRecipes() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm)
  );
  displayRecipeList(filteredRecipes);
}

displayRecipeList(recipes);
