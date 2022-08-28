var gameInfo = document.getElementById("display-games");
var genreInfo = document.getElementById("display-genre");
var surveyForm = document.querySelector(".quiz-body");
var startBtn = document.querySelector(".btn-start");

var genresArrayEl = [
    {name:"Massively Multiplayer", class:"massively-multiplayer"},
    {name:"Shooter", class:"shooter"},
    {name:"Action", class:"action"},
    {name:"Adventure",class:"adventure"},
    {name:"Racing",class:"racing"},
    {name:"Strategy",class:"strategy"},
    {name:"MOBA",class:"moba"},
    {name:"Indie",class:"indie"},
    {name:"Role-playing",class:"role-playing-games-rpg"},
    {name:"Sports",class:"sports"},
    {name:"Simulation",class:"simulation"},
    {name:"Arcade", class:"arcade"},
    {name:"Horror",class:"horror"},
    {name:"Puzzle",class:"puzzle"},
    {name:"Fighting",class:"fighting"},
    {name:"Casual",class:"casual"},
    {name:"Family",class:"family"},
    {name:"Board Games",class:"board-games"},
    {name:"Educational",class:"educational"}
]

// var displayGames = function(data) {
//     gameInfo.innerHTML = "";
//     for (var i = 0; i < data.length; i++){
//         gameInfo.innerHTML += "<li>" + data[i].title + "</li>";
//         gameInfo.innerHTML += "<li>" + data[i].normalPrice + "</li>";
//         console.log(data[i].title);
//     }     
// }

// fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=50&sortBy=release')
// .then(result => result.json())
// .then(data => {
//     // console.log('data',data);
//     // displayGames(data)
// }
// )


// The user starts the survey
startBtn = document.createElement("button");
startBtn.innerHTML = "Start survey";
startBtn.className = "btn btn-start";

surveyForm.appendChild(startBtn);

// a class is assigned here and an event listener is attached to each of the buttons
var createGenresBtn = function(genreBtn) {
    console.log("start survey clicked")
    
    
    // The different catagories are added to a quiz container
    for (var i = 0; i < genresArrayEl.length; i++) {
        var genreBtn = genresArrayEl[i];
        
        var buttonEl = document.createElement("button");
        buttonEl.className = genreBtn.class;
        buttonEl.innerHTML = genreBtn.name;
        
        surveyForm.appendChild(buttonEl);
        
        buttonEl.addEventListener("click", sortGenres)
    }
    startBtn.remove();
    
    
}

// The user selects genres that they are interested in
var sortGenres = function(genreBtn) {
    var selectedGenre = genreBtn.target.className;
    console.log(selectedGenre)
    
    var apiKey = "d7abd65b5bef4c83850767b95d538795";
    // var search = ["action","horror", "indie"];

    var displayGenre = function(genre) {
    genreInfo.innerHTML = "";
    for (var i = 0; i < genre.results.length; i++){
        genreInfo.innerHTML += "<li>" + genre.results[i].name + "</li>";
        
    }     
    };

    fetch("https://api.rawg.io/api/games?genres="+ selectedGenre +"&key=" + apiKey)
    .then(result => result.json())
    .then(genre => {
        // console.log('genre', genre.results);
        displayGenre(genre)
    })
}

startBtn.addEventListener("click", createGenresBtn);