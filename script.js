//Variables
var searchedMeal = $("#search-btn"); //Search Button

//Modal Variables____________________
var modalTitle = document.getElementById("#recipe-name") //Recipe Title
var modalImage = document.getElementById("#food-image") // Thumbnail
var modalMeasurements = document.getElementById("#measurement") // Measurements
var modalIngredients = document.getElementById("#ingredients") // Ingredients
var modalDirections = document.getElementById("#directions") // Directions

//API Variables____________________


$(document).ready(function() {
    
    if (localStorage.getItem("") === null) {
        var searchedMeal = [];
      
      } else {
        var searchedMeal = JSON.parse(localStorage.getItem(""));
        
      };
    
    function randomMeal1 () { 


        var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + searchedMeal;
            $.ajax({
                url: queryURL,
                method: "GET",
            }).then(function (response) {
                var meal=response.meals;
                var randomMeal = meal[Math.floor(Math.random() * meal.length)];
                console.log(randomMeal);
                var mealID = randomMeal.idMeal;
                console.log("run")
                
                // $.ajax({
                //     url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID,
                //     method: "GET",
                // }).then(function(response) {
                //     var i = 1;
                //     var food = response.meals[0];
                //     while (food["strIngredient" + i ] != null) {
                //         var stringredient= food["strIngredient" + i];
                //         console.log(stringredient);
                //         i ++;
                //     }
                // })
            });
    }
    randomMeal1();
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
