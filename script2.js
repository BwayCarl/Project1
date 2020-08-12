//Modal Variables____________________ (NEED FOUR TO HAVE DIFFERENT RESULTS)

var modalTitle1 = $("#recipe-name1"); //Recipe Title 1
var modalImage1 = $("#food-image1"); // Thumbnail
var modalMeasurements1 = $("#measurement1"); // Measurements
var modalIngredients1 = $("#ingredientsDiv1"); // Ingredients
var modalDirections1 = $("#directions1"); // Directions
var modalButton1 = $("#modal-btn-1-title") // Imports recipe name in modal button

var modalTitle2 = $("#recipe-name2"); //Recipe Title 2
var modalImage2 = $("#food-image2"); // Thumbnail
var modalMeasurements2 = $("#measurement2"); // Measurements
var modalIngredients2 = $("#ingredientsDiv2"); // Ingredients
var modalDirections2 = $("#directions2"); // Directions
var modalButton2 = $("#modal-btn-2-title") // Imports recipe name in modal button

var modalTitle3 = $("#recipe-name3"); //Recipe Title 3
var modalImage3 = $("#food-image3"); // Thumbnail
var modalMeasurements3 = $("#measurement3"); // Measurements
var modalIngredients3 = $("#ingredientsDiv3"); // Ingredients
var modalDirections3 = $("#directions3"); // Directions
var modalButton3 = $("#modal-btn-3-title") // Imports recipe name in modal button

var modalTitle4 = $("#recipe-name4"); //Recipe Title 4
var modalImage4 = $("#food-image4"); // Thumbnail
var modalMeasurements4 = $("#measurement4"); // Measurements
var modalIngredients4 = $("#ingredientsDiv4"); // Ingredients
var modalDirections4 = $("#directions4"); // Directions
var modalButton4 = $("#modal-btn-4-title") // Imports recipe name in modal button


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
        $("#modal-btn-1").removeClass("d-none");
        $("#results").removeClass("d-none")
    })

// Recipe 1 ___________________________________________
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
            modalButton1.text(randomMeal.strMeal);
            modalTitle1.text(randomMeal.strMeal);
            modalImage1.attr("src", recipeImg);
            var mealID1 = randomMeal.idMeal;
            
            
            $.ajax({
                url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID1,
                method: "GET",
            }).then(function(response) {
                var i = 1;
                var food = response.meals[0];
                while (food["strIngredient" + i ] != null) {
                    var strmeasure = food["strMeasure" +i];
                    var stringredient = food["strIngredient" + i];
                    console.log(stringredient);
                    
                    if (strmeasure && stringredient) {
                    var newIngredient = $("<p>").text(strmeasure + "- " + stringredient);
                    
                    modalIngredients1.append(newIngredient);
                    }
                    i ++;
                }
                modalDirections1.text(food.strInstructions);
            })
        });
}
})

 // Recipe 2_______________________________________

var searchedMeal; //Search Button
$("#search-btn").on("click", function() {
    event.preventDefault();
    searchedMeal = $("#ingredient").val(); //Search Button
    if (searchedMeal === "") {
        alert("input protein");
    } else {
        randomMeal2();
    }
    $("#modal-btn-2").removeClass("d-none");
})
function randomMeal2 () { 
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
            modalButton2.text(randomMeal.strMeal);
            modalTitle2.text(randomMeal.strMeal);
            modalImage2.attr("src", recipeImg);
            var mealID2 = randomMeal.idMeal;
            
            
            $.ajax({
                url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID2,
                method: "GET",
            }).then(function(response) {
                var i = 1;
                var food = response.meals[0];
                while (food["strIngredient" + i] != null) {
                    var strmeasure = food["strMeasure" +i];
                    var stringredient = food["strIngredient" + i];
                    console.log(stringredient);
                    
                    if (strmeasure && stringredient) {
                    var newIngredient = $("<p>").text(strmeasure + "- " + stringredient);
                    
                    modalIngredients2.append(newIngredient);
                    }
                    i ++;
                }
                modalDirections2.text(food.strInstructions);
            })
        });
}

// Recipe 3 _______________________________________
    var searchedMeal; //Search Button
    $("#search-btn").on("click", function() {
    event.preventDefault();
    searchedMeal = $("#ingredient").val(); //Search Button
    if (searchedMeal === "") {
        alert("input protein");
    } else {
        randomMeal3();
    }
    $("#modal-btn-3").removeClass("d-none");
    })
    
    function randomMeal3 () { 
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
            modalButton3.text(randomMeal.strMeal);
            modalTitle3.text(randomMeal.strMeal);
            modalImage3.attr("src", recipeImg);
            var mealID3 = randomMeal.idMeal;
            
            
            $.ajax({
                url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID3,
                method: "GET",
            }).then(function(response) {
                var i = 1;
                var food = response.meals[0];
                while (food["strIngredient" + i ] != null) {
                    var strmeasure = food["strMeasure" +i];
                    var stringredient = food["strIngredient" + i];
                    console.log(stringredient);
                    
                    if (strmeasure && stringredient) {
                    var newIngredient = $("<p>").text(strmeasure + "- " + stringredient);
                    
                    modalIngredients3.append(newIngredient);
                    }
                    i ++;
                }
                modalDirections3.text(food.strInstructions);
            })
        });
    }

    // Recipe 4 _______________________________________
    var searchedMeal; //Search Button
    $("#search-btn").on("click", function() {
        event.preventDefault();
        searchedMeal = $("#ingredient").val(); //Search Button
        if (searchedMeal === "") {
            alert("input protein");
        } else {
            randomMeal4();
        }
        $("#modal-btn-4").removeClass("d-none");
    })

    function randomMeal4 () { 
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
                modalButton4.text(randomMeal.strMeal);
                modalTitle4.text(randomMeal.strMeal);
                modalImage4.attr("src", recipeImg);
                var mealID4 = randomMeal.idMeal;
                
                
                $.ajax({
                    url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID4,
                    method: "GET",
                }).then(function(response) {
                    var i = 1;
                    var food = response.meals[0];
                    while (food["strIngredient" + i ] != null) {
                        var strmeasure = food["strMeasure" +i];
                        var stringredient = food["strIngredient" + i];
                        console.log(stringredient);
                        
                        if (strmeasure && stringredient) {
                        var newIngredient = $("<p>").text(strmeasure + "- " + stringredient);
                        
                        modalIngredients4.append(newIngredient);
                        }
                        i ++;
                    }
                    modalDirections4.text(food.strInstructions);
                })
            });
    }