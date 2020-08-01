// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://tasty.p.rapidapi.com/tags/list",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "046401ae33msh8cfac4a469f1c37p1e7662jsn7727754c52e7"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// {/* <div id="movie-view"></div>

//   // This .on("click") function will trigger the AJAX Call
//   $("#find-movie").on("click", function(event) {

//     // event.preventDefault() can be used to prevent an event's default behavior.
//     // Here, it prevents the submit button from trying to submit a form when clicked
//     event.preventDefault();

//     // Here we grab the text from the input box
//     var movie = $("#movie-input").val();

//     // Here we construct our URL
//     var queryURL = "https://tasty.p.rapidapi.com/tags/list" + movie + "&apikey=trilogy";

//     // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
//     // and display it in the div with an id of movie-view

//     // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

//     $.ajax({
//       url: queryURL,
//       method: "GET"
    // }).then(function(response) {
    //   $("#movie-view").text(JSON.stringify(response));
    // }); */}

// var results = $("#protein").val();
var results = "chicken";
var queryURL = "https://tasty.p.rapidapi.com/tags/list/" + results + "046401ae33msh8cfac4a469f1c37p1e7662jsn7727754c52e7";
var receipeDetailURL = "https://tasty.p.rapidapi.com/recipes/detail?id=5586"
var thirtyMinuteURL = "https://tasty.p.rapidapi.com/recipes/list?tags=under_30_minutes&from=0&sizes=20"




$("#search-btn").on("click", function(event){
    event.preventDefault();
    console.log("search button pressed");
    $.ajax({
        async: true,
        crossDomain: true,
        url: receipeDetailURL,
        method: "GET",
        headers: {
            "x-rapidapi-host": "tasty.p.rapidapi.com",
            "x-rapidapi-key": "046401ae33msh8cfac4a469f1c37p1e7662jsn7727754c52e7"
        }
    }).then(function(response) {
        console.log(response);
        // $("#movie-view").text(JSON.stringify(response));
      });
})