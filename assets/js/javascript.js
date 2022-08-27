var gameInfo = document.getElementById("display-games")
var genreInfo = document.getElementById("display-genre")
var startForm = document.querySelector(".container");
var startSurvery = document.querySelector(".btn-start")
var dataBtnId = 0;

 var displayGames = function(data) {
        gameInfo.innerHTML = "";
        for (var i = 0; i < data.length; i++){
            gameInfo.innerHTML += "<li>" + data[i].title + "</li>";
            gameInfo.innerHTML += "<li>" + data[i].normalPrice + "</li>";
            // console.log(data[i].title);
        }     
        }
fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=50&sortBy=release')
    .then(result => result.json())
    .then(data => {
        console.log('data',data);
        displayGames(data)
    }
    )


var apiKey = "d7abd65b5bef4c83850767b95d538795";
var search = ["action","horror", "indie"];

var displayGenre = function(genre) {
    genreInfo.innerHTML = "";
    for (var i = 0; i < genre.results.length; i++){
        genreInfo.innerHTML += "<li>" + genre.results[i].name + "</li>";
        
    }     
    }

fetch("https://api.rawg.io/api/games?genres="+search.join(",")+"&key=" + apiKey)
    .then(result => result.json())
    .then(genre => {
        console.log('genre', genre.results);
        displayGenre(genre)
    })


var genresArrayEl = [
    "Single Player",
    "Multi-player",
    "First Person Shooter",
    "Action",
    "Adventure",
    "Racing",
    "Third-person",
    "Sandbox",
    "Real-time strategy",
    "MOBA",
    "Role-playing",
    "Sports",
    "Simulation",
    "Horror",
    "Survival"
]

// The user is presented with the option to take a brief survey on what games they would like to play

// The user starts the quiz
var startSurvery = document.createElement("button");
startSurvery.innerHTML = "Start survey"
startSurvery.className = "btn btn-start";

startForm.appendChild(startSurvery);

// array is iterated and an id assigned to each of the array items
var createGenreBtn = function(genreBtn) {
    
    // The different catagories are added to a quiz container
    for (var i = 0; i < genresArrayEl.length; i++) {
        var genreBtn = genresArrayEl[i];
        
        var buttonEl = document.createElement("button");
        buttonEl.className = "btn";
        buttonEl.setAttribute("data-btn-id", i);
        buttonEl.innerHTML = genreBtn;

        startForm.appendChild(buttonEl);
    }
    console.log(genreBtn);

    startSurvery.remove();
}

// The user selects genres that they are interested in
function genrePool() {
    console.log(selectedGenre)
}

// all of the users selections are pooled

// the pooled results are added to a for loop

// selectedGenre.addEventListener("click", genrePool);
startSurvery.addEventListener("click", createGenreBtn);