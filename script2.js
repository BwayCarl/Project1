//Modal Variables____________________ (NEED FOUR TO HAVE DIFFERENT RESULTS)

var modalTitle1 = $("#recipe-name1"); //Recipe Title 1
var modalImage1 = $("#food-image1"); // Thumbnail
var modalIngredients1 = $("#ingredientsDiv1"); // Ingredients
var modalDirections1 = $("#directions1"); // Directions
var modalButton1 = $("#modal-btn-1-title") // Imports recipe name in modal button

var modalTitle2 = $("#recipe-name2"); //Recipe Title 2
var modalImage2 = $("#food-image2"); // Thumbnail
var modalIngredients2 = $("#ingredientsDiv2"); // Ingredients
var modalDirections2 = $("#directions2"); // Directions
var modalButton2 = $("#modal-btn-2-title") // Imports recipe name in modal button

var modalTitle3 = $("#recipe-name3"); //Recipe Title 3
var modalImage3 = $("#food-image3"); // Thumbnail
var modalIngredients3 = $("#ingredientsDiv3"); // Ingredients
var modalDirections3 = $("#directions3"); // Directions
var modalButton3 = $("#modal-btn-3-title") // Imports recipe name in modal button

var modalTitle4 = $("#recipe-name4"); //Recipe Title 4
var modalImage4 = $("#food-image4"); // Thumbnail
var modalIngredients4 = $("#ingredientsDiv4"); // Ingredients
var modalDirections4 = $("#directions4"); // Directions
var modalButton4 = $("#modal-btn-4-title") // Imports recipe name in modal button


$(document).ready(function () {
    var searchedMeal; //Search Button
    $("#search-btn").on("click", function () {
        event.preventDefault();
        searchedMeal = $("#ingredient").val(); //Search Button
        randomMeal1();
        randomMeal2();
        randomMeal3();
        randomMeal4();
        $("#modal-btn-1").removeClass("d-none");
        $("#modal-btn-2").removeClass("d-none");
        $("#modal-btn-3").removeClass("d-none");
        $("#modal-btn-4").removeClass("d-none");
        $("#results").removeClass("d-none");
    });

    // Recipe 1 ___________________________________________
    function randomMeal1() {
        modalIngredients1.html("");
        console.log("ingredient: " + searchedMeal);

        var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + searchedMeal;
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            var meal = response.meals;
            var randomMeal = meal[Math.floor(Math.random() * meal.length)];
            var recipeImg = randomMeal.strMealThumb;
            modalButton1.text(randomMeal.strMeal);
            modalTitle1.text(randomMeal.strMeal);
            modalImage1.attr("src", recipeImg);

            var mealID1 = randomMeal.idMeal;

            $.ajax({
                url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID1,
                method: "GET",
            }).then(function (response) {
                var i = 1;
                var food = response.meals[0];
                while (food["strIngredient" + i] != null) {
                    var strmeasure = food["strMeasure" + i];
                    var stringredient = food["strIngredient" + i];
                    console.log(stringredient);

                    if (strmeasure && stringredient) {
                        var newIngredient = $("<p>").text(strmeasure + "- " + stringredient);

                        modalIngredients1.append(newIngredient);
                    }
                    i++;
                }
                modalDirections1.text(food.strInstructions);
            })
        });
    }


    // Recipe 2_______________________________________

    function randomMeal2() {
        modalIngredients2.html("");
        console.log("ingredient: " + searchedMeal);

        var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + searchedMeal;
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            var meal = response.meals;
            var randomMeal = meal[Math.floor(Math.random() * meal.length)];
            var recipeImg = randomMeal.strMealThumb;
            modalButton2.text(randomMeal.strMeal);
            modalTitle2.text(randomMeal.strMeal);
            modalImage2.attr("src", recipeImg);

            var mealID2 = randomMeal.idMeal;

            $.ajax({
                url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID2,
                method: "GET",
            }).then(function (response) {
                var i = 1;
                var food = response.meals[0];
                while (food["strIngredient" + i] != null) {
                    var strmeasure = food["strMeasure" + i];
                    var stringredient = food["strIngredient" + i];
                    console.log(stringredient);

                    if (strmeasure && stringredient) {
                        var newIngredient = $("<p>").text(strmeasure + "- " + stringredient);

                        modalIngredients2.append(newIngredient);
                    }
                    i++;
                }
                modalDirections2.text(food.strInstructions);
            })
        });
    }

    // Recipe 3 _______________________________________

    function randomMeal3() {
        modalIngredients3.html("");
        console.log("ingredient: " + searchedMeal);

        var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + searchedMeal;
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            var meal = response.meals;
            var randomMeal = meal[Math.floor(Math.random() * meal.length)];
            var recipeImg = randomMeal.strMealThumb;
            modalButton3.text(randomMeal.strMeal);
            modalTitle3.text(randomMeal.strMeal);
            modalImage3.attr("src", recipeImg);

            var mealID3 = randomMeal.idMeal;

            $.ajax({
                url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID3,
                method: "GET",
            }).then(function (response) {
                var i = 1;
                var food = response.meals[0];
                while (food["strIngredient" + i] != null) {
                    var strmeasure = food["strMeasure" + i];
                    var stringredient = food["strIngredient" + i];
                    console.log(stringredient);

                    if (strmeasure && stringredient) {
                        var newIngredient = $("<p>").text(strmeasure + "- " + stringredient);

                        modalIngredients3.append(newIngredient);
                    }
                    i++;
                }
                modalDirections3.text(food.strInstructions);
            })
        });
    }

    // Recipe 4 _______________________________________

    function randomMeal4() {
        modalIngredients4.html("");
        console.log("ingredient: " + searchedMeal);

        var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + searchedMeal;
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            var meal = response.meals;
            var randomMeal = meal[Math.floor(Math.random() * meal.length)];
            var recipeImg = randomMeal.strMealThumb;
            modalButton4.text(randomMeal.strMeal);
            modalTitle4.text(randomMeal.strMeal);
            modalImage4.attr("src", recipeImg);

            var mealID4 = randomMeal.idMeal;

            $.ajax({
                url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID4,
                method: "GET",
            }).then(function (response) {
                var i = 1;
                var food = response.meals[0];
                while (food["strIngredient" + i] != null) {
                    var strmeasure = food["strMeasure" + i];
                    var stringredient = food["strIngredient" + i];
                    console.log(stringredient);

                    if (strmeasure && stringredient) {
                        var newIngredient = $("<p>").text(strmeasure + "- " + stringredient);

                        modalIngredients4.append(newIngredient);
                    }
                    i++;
                }
                modalDirections4.text(food.strInstructions);
            })
        });
    }


    //Drink Modal Variables____________________ (NEED FOUR TO HAVE DIFFERENT RESULTS)

    var modalTitle5 = $("#recipe-name5"); //Recipe Title 5
    var modalImage5 = $("#drink-image5"); // Thumbnail
    var modalIngredients5 = $("#ingredientsDiv5"); // Ingredients
    var modalDirections5 = $("#directions5"); // Directions
    var modalButton5 = $("#modal-btn-5-title") // Imports recipe name in modal button    

    var modalTitle6 = $("#recipe-name6"); //Recipe Title 6
    var modalImage6 = $("#drink-image6");
    var modalIngredients6 = $("#ingredientsDiv6");
    var modalDirections6 = $("#directions6");
    var modalButton6 = $("#modal-btn-6-title");
    
    var modalTitle7 = $("#recipe-name7"); //Recipe Title 7
    var modalImage7 = $("#drink-image7"); 
    var modalIngredients7 = $("#ingredientsDiv7"); 
    var modalDirections7 = $("#directions7"); 
    var modalButton7 = $("#modal-btn-7-title");  

    var modalTitle8 = $("#recipe-name7"); //Recipe Title 8
    var modalImage8 = $("#drink-image8");
    var modalIngredients8 = $("#ingredientsDiv8"); 
    var modalDirections8 = $("#directions8"); 
    var modalButton8 = $("#modal-btn-8-title");

        var searchedDrink; //Search Button
        $("#drink-search-btn").on("click", function () {
            event.preventDefault();
            searchedDrink = $("#liquor").val(); //Search Button
            randomDrink5();
            randomDrink6();
            randomDrink7();
            randomDrink8();

            $("#modal-btn-5").removeClass("d-none");
            $("#modal-btn-6").removeClass("d-none");
            $("#modal-btn-7").removeClass("d-none");
            $("#modal-btn-8").removeClass("d-none");
            $("#drink-results").removeClass("d-none")
        })

        // Recipe 5 ___________________________________________
        function randomDrink5() {
            modalIngredients5.html("");
            console.log("ingredient: " + searchedDrink);

            var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + searchedDrink;
            $.ajax({
                url: queryURL,
                method: "GET",
            }).then(function (response) {
                var drink = response.drinks;
                var randomDrink = drink[Math.floor(Math.random() * drink.length)];
                console.log(randomDrink);
                var recipeImg = randomDrink.strDrinkThumb;
                console.log(recipeImg);
                modalButton5.text(randomDrink.strDrink);
                modalTitle5.text(randomDrink.strDrink);
                modalImage5.attr("src", recipeImg);
                var drinkID5 = randomDrink.idDrink;


                $.ajax({
                    url: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID5,
                    method: "GET",
                }).then(function (response) {
                    var i = 1;
                    var drink = response.drinks[0];
                    while (drink["strIngredient" + i] != null) {
                        var strmeasure = drink["strMeasure" + i];
                        var stringredient = drink["strIngredient" + i];
                        console.log(stringredient);

                        if (strmeasure && stringredient) {
                            var newIngredient = $("<p>").text(strmeasure + "- " + stringredient);

                            modalIngredients5.append(newIngredient);
                        }
                        i++;
                    }
                    modalDirections5.text(drink.strInstructions);
                })
            });
        }
        // Recipe 6 ___________________________________________
        function randomDrink6() {
            modalIngredients6.html("");
            console.log("ingredient: " + searchedDrink);

            var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + searchedDrink;
            $.ajax({
                url: queryURL,
                method: "GET",
            }).then(function (response) {
                var drink = response.drinks;
                var randomDrink = drink[Math.floor(Math.random() * drink.length)];
                console.log(randomDrink);
                var recipeImg = randomDrink.strDrinkThumb;
                console.log(recipeImg);
                modalButton6.text(randomDrink.strDrink);
                modalTitle6.text(randomDrink.strDrink);
                modalImage6.attr("src", recipeImg);
                var drinkID6 = randomDrink.idDrink;


                $.ajax({
                    url: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID6,
                    method: "GET",
                }).then(function (response) {
                    var i = 1;
                    var drink = response.drinks[0];
                    while (drink["strIngredient" + i] != null) {
                        var strmeasure = drink["strMeasure" + i];
                        var stringredient = drink["strIngredient" + i];
                        console.log(stringredient);

                        if (strmeasure && stringredient) {
                            var newIngredient = $("<p>").text(strmeasure + "- " + stringredient);

                            modalIngredients6.append(newIngredient);
                        }
                        i++;
                    }
                    modalDirections6.text(drink.strInstructions);
                })
            });
        }
        // Recipe 7 ___________________________________________
        function randomDrink7() {
            modalIngredients7.html("");
            console.log("ingredient: " + searchedDrink);

            var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + searchedDrink;
            $.ajax({
                url: queryURL,
                method: "GET",
            }).then(function (response) {
                var drink = response.drinks;
                var randomDrink = drink[Math.floor(Math.random() * drink.length)];
                console.log(randomDrink);
                var recipeImg = randomDrink.strDrinkThumb;
                console.log(recipeImg);
                modalButton7.text(randomDrink.strDrink);
                modalTitle7.text(randomDrink.strDrink);
                modalImage7.attr("src", recipeImg);
                var drinkID7 = randomDrink.idDrink;


                $.ajax({
                    url: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID7,
                    method: "GET",
                }).then(function (response) {
                    var i = 1;
                    var drink = response.drinks[0];
                    while (drink["strIngredient" + i] != null) {
                        var strmeasure = drink["strMeasure" + i];
                        var stringredient = drink["strIngredient" + i];
                        console.log(stringredient);

                        if (strmeasure && stringredient) {
                            var newIngredient = $("<p>").text(strmeasure + "- " + stringredient);

                            modalIngredients7.append(newIngredient);
                        }
                        i++;
                    }
                    modalDirections7.text(drink.strInstructions);
                })
            });
        }
        // Recipe 8 ___________________________________________
        function randomDrink8() {
            modalIngredients7.html("");
            console.log("ingredient: " + searchedDrink);

            var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + searchedDrink;
            $.ajax({
                url: queryURL,
                method: "GET",
            }).then(function (response) {
                var drink = response.drinks;
                var randomDrink = drink[Math.floor(Math.random() * drink.length)];
                console.log(randomDrink);
                var recipeImg = randomDrink.strDrinkThumb;
                console.log(recipeImg);
                modalButton8.text(randomDrink.strDrink);
                modalTitle8.text(randomDrink.strDrink);
                modalImage8.attr("src", recipeImg);
                var drinkID8 = randomDrink.idDrink;


                $.ajax({
                    url: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID8,
                    method: "GET",
                }).then(function (response) {
                    var i = 1;
                    var drink = response.drinks[0];
                    while (drink["strIngredient" + i] != null) {
                        var strmeasure = drink["strMeasure" + i];
                        var stringredient = drink["strIngredient" + i];
                        console.log(stringredient);

                        if (strmeasure && stringredient) {
                            var newIngredient = $("<p>").text(strmeasure + "- " + stringredient);

                            modalIngredients8.append(newIngredient);
                        }
                        i++;
                    }
                    modalDirections8.text(drink.strInstructions);
                })
            });
        }
    })