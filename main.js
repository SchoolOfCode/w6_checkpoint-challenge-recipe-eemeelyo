const YOUR_APP_ID = "2a5d65c7";
const YOUR_APP_KEY = "b94095accb136e0638ba880341dd3584";
let foodToSearch = null;

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
  const requestUrl = await fetch(
    `https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
  );
  const dataResponse = await requestUrl.json();
  const recipes = dataResponse.hits;
  const firstRecipe = recipes[0].recipe;
  console.log(firstRecipe);
  display(firstRecipe);
  // return dataResponse;

  //--- write your code below ---
  //--- write your code above ---
}

const displayImage = document.getElementById("recipeImg");
const linkTag = document.getElementById("recipe-label");

function display(firstRecipe) {
  const label = firstRecipe.label;
  const recipeImage = firstRecipe.image;
  const recipeLink = firstRecipe.url;

  displayImage.src = recipeImage;
  linkTag.href = recipeLink;
  linkTag.innerText = label;
}

// Get the name
// Get the image
// The actuall recipe
// Display in the HTML
// To display multiple images, use a for loop.
