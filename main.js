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
  const secondRecipe = recipes[1].recipe;
  const thirdRecipe = recipes[2].recipe;
  // console.log(firstRecipe);
  //--- write your code below ---
  //--- write your code above ---
  display(firstRecipe);
  display(secondRecipe);
  display(thirdRecipe);
  console.log(recipes);
}

const displayImage1 = document.getElementById("recipeImg1");
const linkTag1 = document.getElementById("recipe-label1");
const displayImage2 = document.getElementById("recipeImg2");
const linkTag2 = document.getElementById("recipe-label2");
const displayImage3 = document.getElementById("recipeImg3");
const linkTag3 = document.getElementById("recipe-label3");

function display(firstRecipe) {
  const label = firstRecipe.label;
  const recipeImage1 = firstRecipe.image;
  const recipeLink1 = firstRecipe.url;
  displayImage1.src = recipeImage1;
  linkTag1.href = recipeLink1;
  linkTag1.innerText = label;
}
function display(secondRecipe) {
  const label = secondRecipe.label;
  const recipeImage2 = secondRecipe.image;
  const recipeLink2 = secondRecipe.url;
  displayImage2.src = recipeImage2;
  linkTag2.href = recipeLink2;
  linkTag2.innerText = label;
}
function display(firstRecipe) {
  const label = firstRecipe.label;
  const recipeImage1 = firstRecipe.image;
  const recipeLink1 = firstRecipe.url;
  displayImage1.src = recipeImage1;
  linkTag1.href = recipeLink1;
  linkTag1.innerText = label;
}

// async function apiBG() {
//   const backG = await fetch(
//     "https://source.unsplash.com/1000x1200/?nature,black"
//   );
//   const scenery = await backG.json();
//   return scenery;
//   console.log(scenery);
// }

// function randomBG() {
//   document.body.style.background = apiBG();
// }
// randomBG();

function randomBG() {
  document.body.style.background =
    "#f3f3f3 url('https://source.unsplash.com/1000x1200/?nature,black') no-repeat center center/cover";
}
randomBG();

// async function backgroundImage() {
//   const
// }
const rightButton = document.getElementById("right");

function forwardRecipes() {
  for (let i = 0; i < recipes.length; i++) {}
}

// Get the name
// Get the image
// The actuall recipe
// Display in the HTML
// To display multiple images, use a for loop.
