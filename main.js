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
    `https://api.edamam.com/search?q=kale&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
  );
  const dataResponse = await requestUrl.json();
  console.log(dataResponse);
  return dataResponse;

  //--- write your code below ---
  //--- write your code above ---
}
