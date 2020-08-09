// $(document).ready(function() {
//     var searchedMeal = "chicken_breast";
//     //replace chicken breast with textarea input value
//     function randomMeal1 () {
//         var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + searchedMeal;
//             $.ajax({
//                 url: queryURL,
//                 method: "GET",
//             }).then(function (response) {
//                 var meal=response.meals;
//                 var randomMeal = meal[Math.floor(Math.random() * meal.length)];
//                 console.log(randomMeal);
//                 var mealID = randomMeal.idMeal;
//                 $.ajax({
//                     url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID,
//                     method: "GET",
//                 }).then(function(response) {
//                     var i = 1;
//                     var food = response.meals[0];
//                     while (food["strIngredient" + i ] != null) {
//                         var stringredient= food["strIngredient" + i];
//                         console.log(stringredient);
//                         i ++;
//                     }
//                 })
//             });
//     }

//     randomMeal1();
// })


//Variables


//Modal Variables____________________
var modalTitle = $("#recipe-name"); //Recipe Title
var modalImage = $("#food-image"); // Thumbnail
var modalMeasurements = $("#measurement"); // Measurements
var modalIngredients = $("#ingredientsDiv"); // Ingredients
var modalDirections = $("#directions"); // Directions

//API Variables____________________


$(document).ready(function() {
    var searchedMeal; //Search Button
    $("#search-btn").on("click", function() {
        event.preventDefault();
        searchedMeal = $("#ingredient").val(); //Search Button
        if (searchedMeal === "") {
            alert("input protein");
        } else {
            randomMeal1();
        }
    })
    function randomMeal1 () { 
        console.log("ingredient: " + searchedMeal);

        var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + searchedMeal;
            $.ajax({
                url: queryURL,
                method: "GET",
            }).then(function (response) {
                var meal = response.meals;
                var randomMeal = meal[Math.floor(Math.random() * meal.length)];
                console.log(randomMeal);
                var recipeImg = randomMeal.strMealThumb;
                console.log(recipeImg);
                modalTitle.text(randomMeal.strMeal);
                modalImage.attr("src", recipeImg);
                var mealID = randomMeal.idMeal;
                
                
                $.ajax({
                    url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID,
                    method: "GET",
                }).then(function(response) {
                    var i = 1;
                    var food = response.meals[0];
                    while (food["strIngredient" + i ] != null) {
                        var strmeasure = food["strMeasure" +i];
                        var stringredient = food["strIngredient" + i];
                        console.log(stringredient);
                        
                        var newIngredient = $("<p>").text(strmeasure + "- " + stringredient);
                        
                        modalIngredients.append(newIngredient);
                        i ++;
                    }
                    modalDirections.text(food.strInstructions);
                })
            });
    }
})

function recipeChoices() {
    $("#meal-button").empty();

    // Looping through the array of meals
    for (var i = 0; i < meals.length; i++) {

      // Generate buttons for each meal in the array.
        var newMeal = $("<li>");
        newMeal.addClass("list-group-item");
        newMeal.attr("data-name", meal[i]);
        newMeal.text(meals[i]);
        newMeal.val("search-history");
        
        $("#meal-button").append(newMeal);
      }
    }
