var startForm = document.querySelector(".container");
var startSurvery = document.querySelector(".btn-start")
// var selectedGenre = document.querySelector("#" + dataBtnId)
var dataBtnId = 0;

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

// console.log(genresArrayEl)
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