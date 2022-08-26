var startForm = document.querySelector(".container");
var startSurvery = document.querySelector(".btn-start")
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
    
    for (var i = 0; i < genresArrayEl.length; i++) {
        var genreBtn = genresArrayEl[i];
        console.log(genreBtn)
        
        
        var buttonEl = document.createElement("button");
        buttonEl.className = "btn";
        buttonEl.setAttribute("data-btn-id", dataBtnId);
        buttonEl.innerHTML = genreBtn;

    }
    
    
    
    startForm.appendChild(buttonEl)
}

// The different catagories are added to a quiz container

// console.log(genresArrayEl);
// The user selects genres that they are interested in

// all of the users selections are pooled

// the pooled results are added to a for loop
startSurvery.addEventListener("click", createGenreBtn)