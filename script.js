$(document).ready(function() {
    var searchedMeal = "chicken_breast";
    //replace chicken breast with textarea input value
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
                $.ajax({
                    url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID,
                    method: "GET",
                }).then(function(response) {
                    var i = 1;
                    var food = response.meals[0];
                    while (food["strIngredient" + i ] != null) {
                        var stringredient= food["strIngredient" + i];
                        console.log(stringredient);
                        i ++;
                    }
                })
            });
    }
    randomMeal1();
})