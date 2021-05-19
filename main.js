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
  display1(firstRecipe);
  display2(secondRecipe);
  display3(thirdRecipe);
  console.log(recipes);
  console.log(requestUrl);
}

const displayImage1 = document.getElementById("recipeImg1");
const linkTag1 = document.getElementById("recipe-label1");
const displayImage2 = document.getElementById("recipeImg2");
const linkTag2 = document.getElementById("recipe-label2");
const displayImage3 = document.getElementById("recipeImg3");
const linkTag3 = document.getElementById("recipe-label3");

function display1(firstRecipe) {
  const label = firstRecipe.label;
  const recipeImage1 = firstRecipe.image;
  const recipeLink1 = firstRecipe.url;
  displayImage1.src = recipeImage1;
  linkTag1.href = recipeLink1;
  linkTag1.innerText = label;
}
function display2(secondRecipe) {
  const label = secondRecipe.label;
  const recipeImage2 = secondRecipe.image;
  const recipeLink2 = secondRecipe.url;
  displayImage2.src = recipeImage2;
  linkTag2.href = recipeLink2;
  linkTag2.innerText = label;
}
function display3(thirdRecipe) {
  const label = thirdRecipe.label;
  const recipeImage3 = thirdRecipe.image;
  const recipeLink3 = thirdRecipe.url;
  displayImage3.src = recipeImage3;
  linkTag3.href = recipeLink3;
  linkTag3.innerText = label;
}
//Fetch random Background image every time the page loads. /////////////////////////////////
function randomBG() {
  document.body.style.background =
    "#f3f3f3 url('https://source.unsplash.com/1000x1200/?feast,food') no-repeat center center/cover";
}
randomBG();
// Scroll buttons///////////////////////////////////////////////////////////////////////////
const rightButton = document.getElementById("right");
const leftButton = document.getElementById("left");

function forwardRecipes() {
  recipes = dataResponse.hits;
  firstRecipe = recipes[3].recipe;
  secondRecipe = recipes[4].recipe;
  thirdRecipe = recipes[5].recipe;
  display1(firstRecipe);
  display2(secondRecipe);
  display3(thirdRecipe);
}
rightButton.addEventListener("click", forwardRecipes);
leftButton.addEventListener("click", previousRecipes);

// Get the name
// Get the image
// The actuall recipe
// Display in the HTML
// To display multiple images, use a for loop.
