const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // // load data
    fetch(url)
    .then (res => res.json())
    .then( data =>  displayMeals(data.meals))
}
// searchMeal();
const displayMeals = meals => {
    console.log(meals);
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        console.log(meal);
        mealDiv.className = 'single-result row align-items-center my-3 p-3';
        mealDiv.innerHTML = `
        <div class="col-md-9">

        <div id="imgBox">
        <img src="${meal.strMealThumb}">
        </div>
            <h3 class="meal-name">${meal.strMeal}</h3>
            <p>${meal.strCategory}</p>
        </div>
        <div class="col-md-3 text-md-right text-center">
                <button onclick="getLyric()" class="btn btn-success">Get Order</button>
        </div>
        `;
        mealContainer.appendChild(mealDiv);
        
    })
   
}