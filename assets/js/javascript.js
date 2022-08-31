var gameInfo = document.getElementById("display-games");
var genreInfo = document.getElementById("display-genre");
var surveyForm = document.querySelector(".quiz-body");
var modalForm = document.querySelector("modalresults")
var startBtn = document.querySelector("button is-primary");

var genresArrayEl = [
    {name:"Massively Multiplayer", class:"massively-multiplayer"},
    {name:"Shooter", class:"shooter"},
    {name:"Action", class:"action"},
    {name:"Adventure",class:"adventure"},
    {name:"Racing",class:"racing"},
    {name:"Strategy",class:"strategy"},
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

// The user starts the survey
startBtn = document.createElement("button");
startBtn.innerHTML = "Start survey";
startBtn.className = "button is-primary";

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
        
        buttonEl.addEventListener("click", sortGames)
    }
    startBtn.remove();
    
    
}

// The user selects genres that they are interested in
var sortGames = function(genreBtn) {
    var selectedGenre = genreBtn.target.className;
    console.log(selectedGenre)
    
    // This is the RAWG API that is used to search games by genre the user selects
    var apiKey = "d7abd65b5bef4c83850767b95d538795";

    var displayGenre = function(genre) {
    genreInfo.innerHTML = "";
    for (var i = 0; i < genre.results.length; i++){

        genreInfo.innerHTML += "<li>" + genre.results[i].name + "</li>";
        genreInfo.innerHTML += "<p> Rating: " + genre.results[i].rating + "/5 </p>";

        var gameName = genre.results[i].slug


    //    console.log(gameName)
    }     
        nameInput(gameName)
    };

    
    fetch("https://api.rawg.io/api/games?metacritic&genres="+ selectedGenre +"&key=" + apiKey)
    .then(result => result.json())
    .then(genre => {
    console.log('genre', genre.results);
    displayGenre(genre)
    });



    // end RAWG genre API fetch request

    var nameInput = function(gameName) {
        var displayGames = function(data) {
            gameInfo.innerHTML = "";
            for (var i = 0; i < data.length; i++){
                var gameID = data[i].gameID;
                gameInfo.innerHTML += "<li>" + data[i].cheapest + "</li>";
                // gameInfo.innerHTML += "<li>" + data[i].normalPrice + "</li>";
                // console.log(gameID)
            }
              
        }
        
        fetch("https://www.cheapshark.com/api/1.0/games?title=" + gameName + "&limit=1&exact=0")
        .then(result => result.json())
        .then(data => {
            console.log(data);
            displayGames(data)
        }
        )


}
}

// modal function

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });

startBtn.addEventListener("click", createGenresBtn);