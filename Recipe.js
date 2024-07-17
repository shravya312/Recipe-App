const list=document.querySelector("#recipe-list");
const API_KEY="97b61a26480c474c812c312b9ac6e2ce";
async function getRecipes(){
    const response=await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    const data=await response.json();
    return data.recipes;
}
function displayRecipe(recipes){
    list.innerHTML="";
    recipes.forEach((recipes)=>{
        const recipeItemE1=document.createElement("li");
        recipeItemE1.classList.add("recipe-item");
        const recipeImageE1=document.createElement("img");
        recipeImageE1.src=recipes.image;
        recipeImageE1.alt="recipe image";
        const recipeTitle=document.createElement("h2");
        recipeTitle.innerText=recipes.title;
        const recipeIngredientE1=document.createElement("p");
        recipeIngredientE1.innerHTML=`
        <strong>Ingredients:</strong> ${recipes.extendedIngredients.map((ingreient)=>ingreient.original).join(", ")}
        `
        const recipeLink=document.createElement("a");
        recipeLink.href=recipes.sourceUrl;
        recipeLink.innerText="Veiw Recipe";
        recipeItemE1.appendChild(recipeImageE1);
        recipeItemE1.appendChild(recipeTitle);
        recipeItemE1.appendChild(recipeIngredientE1);
        recipeItemE1.appendChild(recipeLink);
        list.appendChild(recipeItemE1);
    });
}

async function init(){
    const recipes=await getRecipes();
    console.log(recipes);
    displayRecipe(recipes);
}
init()