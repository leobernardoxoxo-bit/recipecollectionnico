// ===============================
// LOADER
// ===============================

window.addEventListener("load",()=>{

setTimeout(()=>{

document
.getElementById("loader")
.style.display="none";

},1800);

});

// ===============================
// ACCOUNTS
// ===============================

const accounts=[

{
email:"leobernardoxoxo@gmail.com",
password:"12345",
name:"leobernardo"
},

{
email:"brylefilosofo@gmail.com",
password:"123456",
name:"brylefilosofo"
},

{
email:"nicojorolan@gmail.com",
password:"nico",
name:"nicojorolan"
}

];

// ===============================
// LOGIN
// ===============================

function login(){

const email=
document
.getElementById("email")
.value;

const password=
document
.getElementById("password")
.value;

const user=
accounts.find(account=>

account.email===email
&&
account.password===password

);

if(!user){

alert(
"Invalid email or password"
);

return;

}

// SAVE USER

localStorage.setItem(
"currentUser",
JSON.stringify(user)
);

// SHOW DASHBOARD

document
.getElementById("loginPage")
.style.display="none";

document
.getElementById("dashboard")
.style.display="block";

// CHANGE TITLE

document.querySelector(
".top-bar h2"
).innerHTML=

`🍽 Welcome, ${user.name}`;

// LOAD USER FAVORITES

loadFavorites();

displayRecipes();

updateFavorites();

}

// ===============================
// LOGOUT
// ===============================

function logout(){

localStorage.removeItem(
"currentUser"
);

document
.getElementById("dashboard")
.style.display="none";

document
.getElementById("loginPage")
.style.display="flex";

}

// ===============================
// PROFILE
// ===============================

function openProfile(){

const profile=
document
.getElementById("profile");

if(
profile.style.display==="block"
){

profile.style.display="none";

}else{

profile.style.display="block";

}

}

// ===============================
// RECIPES
// ===============================

const recipes=[

{
title:"Italian Pizza",

image:
"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200",

description:
"Cheesy pizza with fresh basil.",

ingredients:[
"Pizza Dough",
"Tomato Sauce",
"Mozzarella Cheese",
"Basil",
"Olive Oil"
],

steps:[
"Prepare the dough",
"Spread tomato sauce",
"Add cheese",
"Bake for 15 minutes",
"Serve hot"
]

},

{
title:"Healthy Salad",

image:
"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200",

description:
"Fresh healthy vegetables and herbs.",

ingredients:[
"Lettuce",
"Tomatoes",
"Cucumber",
"Onion",
"Olive Oil"
],

steps:[
"Wash vegetables",
"Slice ingredients",
"Mix together",
"Add dressing",
"Serve fresh"
]

},

{
title:"Burger Deluxe",

image:
"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200",

description:
"Juicy burger with crispy fries.",

ingredients:[
"Burger Bun",
"Beef Patty",
"Cheese",
"Lettuce",
"Tomato"
],

steps:[
"Cook beef patty",
"Toast buns",
"Add vegetables",
"Assemble burger",
"Serve"
]

},

{
title:"Pasta Special",

image:
"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200",

description:
"Creamy garlic pasta with cheese.",

ingredients:[
"Pasta",
"Garlic",
"Cream",
"Butter",
"Parmesan"
],

steps:[
"Boil pasta",
"Cook garlic",
"Add cream",
"Mix pasta",
"Serve"
]

},

{
title:"Chocolate Cake",

image:
"https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200",

description:
"Soft sweet chocolate cake.",

ingredients:[
"Flour",
"Cocoa Powder",
"Sugar",
"Eggs",
"Chocolate"
],

steps:[
"Mix ingredients",
"Bake cake",
"Cool cake",
"Decorate",
"Serve"
]

},

{
title:"Steak Special",

image:
"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200",

description:
"Juicy steak with garlic butter.",

ingredients:[
"Steak",
"Garlic",
"Butter",
"Salt",
"Pepper"
],

steps:[
"Season steak",
"Cook steak",
"Add butter",
"Rest meat",
"Serve"
]

},

{
title:"Chicken Alfredo",

image:
"https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1200",

description:
"Creamy chicken alfredo pasta.",

ingredients:[
"Chicken Breast",
"Fettuccine",
"Cream",
"Parmesan",
"Garlic"
],

steps:[
"Cook chicken",
"Boil pasta",
"Prepare sauce",
"Mix together",
"Serve hot"
]

},

{
title:"Sushi Deluxe",

image:
"https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200",

description:
"Fresh sushi rolls with seafood.",

ingredients:[
"Sushi Rice",
"Nori",
"Salmon",
"Avocado",
"Cucumber"
],

steps:[
"Cook rice",
"Prepare fillings",
"Roll sushi",
"Slice sushi",
"Serve"
]

},

{
title:"Pancake Stack",

image:
"https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1200",

description:
"Fluffy pancakes with syrup.",

ingredients:[
"Flour",
"Milk",
"Eggs",
"Butter",
"Syrup"
],

steps:[
"Prepare batter",
"Cook pancakes",
"Flip pancakes",
"Stack pancakes",
"Serve"
]

},

{
title:"Fruit Smoothie",

image:
"https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1200",

description:
"Cold fresh fruit smoothie.",

ingredients:[
"Banana",
"Strawberries",
"Milk",
"Ice",
"Honey"
],

steps:[
"Cut fruits",
"Blend ingredients",
"Add ice",
"Pour smoothie",
"Serve cold"
]

}

];

// ===============================
// VARIABLES
// ===============================

const recipeGrid=
document.getElementById("recipeGrid");

let favorites=[];

// ===============================
// LOAD FAVORITES
// ===============================

function loadFavorites(){

const currentUser=
JSON.parse(
localStorage.getItem("currentUser")
);

if(!currentUser) return;

favorites=
JSON.parse(
localStorage.getItem(
`favorites_${currentUser.email}`
)
) || [];

}

// ===============================
// SAVE FAVORITES
// ===============================

function saveFavorites(){

const currentUser=
JSON.parse(
localStorage.getItem("currentUser")
);

if(!currentUser) return;

localStorage.setItem(

`favorites_${currentUser.email}`,

JSON.stringify(favorites)

);

}

// ===============================
// DISPLAY RECIPES
// ===============================

function displayRecipes(){

recipeGrid.innerHTML="";

recipes.forEach(recipe=>{

const isFavorite=
favorites.includes(recipe.title);

recipeGrid.innerHTML+=`

<div class="recipe-card">

<div
class="favorite ${isFavorite ? 'active' : ''}"
onclick="toggleFavorite('${recipe.title}')">

${isFavorite ? '💚' : '❤'}

</div>

<img
src="${recipe.image}">

<div class="recipe-content">

<h3>
${recipe.title}
</h3>

<p>
${recipe.description}
</p>

<button
class="glow-btn"
onclick="showRecipe('${recipe.title}')">

View Recipe

</button>

</div>

</div>

`;

});

}

// ===============================
// FAVORITES
// ===============================

function toggleFavorite(title){

if(
favorites.includes(title)
){

favorites=
favorites.filter(
item=>item!==title
);

}else{

favorites.push(title);

}

saveFavorites();

displayRecipes();

updateFavorites();

}

// ===============================
// UPDATE FAVORITES
// ===============================

function updateFavorites(){

const list=
document.getElementById("favoriteList");

if(
favorites.length===0
){

list.innerHTML=`

<p class="empty-fav">

No favorite recipes yet

</p>

`;

return;

}

list.innerHTML="";

favorites.forEach(title=>{

const recipe=
recipes.find(
r=>r.title===title
);

if(recipe){

list.innerHTML+=`

<div class="favorite-item">

<img
src="${recipe.image}">

<div class="favorite-info">

<h3>
${recipe.title}
</h3>

<p>
${recipe.description}
</p>

<button
class="glow-btn"
onclick="showRecipe('${recipe.title}')">

View Recipe

</button>

</div>

</div>

`;

}

});

}

// ===============================
// SHOW RECIPE
// ===============================

function showRecipe(name){

const recipe=
recipes.find(
r=>r.title===name
);

const recipeView=
document.getElementById("recipeView");

const recipeDetails=
document.getElementById("recipeDetails");

recipeDetails.innerHTML=`

<button
class="back-btn"
onclick="closeRecipe()">

← Back

</button>

<img
src="${recipe.image}">

<h1>
${recipe.title}
</h1>

<p class="recipe-description">

${recipe.description}

</p>

<div class="ingredients-box">

<h2>
🥗 Ingredients
</h2>

<ul>

${recipe.ingredients.map(item=>

`<li>${item}</li>`

).join("")}

</ul>

</div>

<div class="steps-box">

<h2>
👨‍🍳 How To Cook
</h2>

${recipe.steps.map((step,index)=>`

<div class="step">

<span>
${index+1}
</span>

<p>
${step}
</p>

</div>

`).join("")}

</div>

`;

recipeView.classList.add("active");

}

// ===============================
// CLOSE RECIPE
// ===============================

function closeRecipe(){

document
.getElementById("recipeView")
.classList.remove("active");

}

// ===============================
// BACKGROUND CARDS
// ===============================

window.addEventListener("DOMContentLoaded",()=>{

const cards=
document.querySelectorAll(".bg-card");

cards.forEach(card=>{

card.onclick=()=>{

const img=
card
.querySelector("img")
.src;

document.body.style.transition=
"1s ease";

document.body.style.background=
`linear-gradient(
rgba(255,255,255,.72),
rgba(255,255,255,.72)
),
url('${img}')`;

document.body.style.backgroundSize=
"cover";

document.body.style.backgroundAttachment=
"fixed";

};

});

// AUTO LOGIN

const savedUser=
JSON.parse(
localStorage.getItem("currentUser")
);

if(savedUser){

document
.getElementById("loginPage")
.style.display="none";

document
.getElementById("dashboard")
.style.display="block";

document.querySelector(
".top-bar h2"
).innerHTML=

`🍽 Welcome, ${savedUser.name}`;

loadFavorites();

displayRecipes();

updateFavorites();

}

});

// ===============================
// ENTER KEY
// ===============================

document.addEventListener(
"keydown",
e=>{

if(
e.key==="Enter"
){

login();

}

}

);