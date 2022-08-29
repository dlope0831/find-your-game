var gameInfo = document.getElementById("display-games")
var genreInfo = document.getElementById("display-genre")


 var displayGames = function(data) {
        gameInfo.innerHTML = "";
        for (var i = 0; i < data.length; i++){
            gameInfo.innerHTML += "<li>" + data[i].title + "</li>";
            gameInfo.innerHTML += "<li>" + data[i].salePrice + "</li>";
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
var players =["singleplayer","multiplayer"];

var displayGenre = function(genre) {
    genreInfo.innerHTML = "";
    for (var i = 0; i < genre.results.length; i++){
        genreInfo.innerHTML += "<li>" + genre.results[i].name + "</li>";
        
    }     
    }

fetch("https://api.rawg.io/api/games?genres="+players+search.join(",")+"&key=" + apiKey)
    .then(result => result.json())
    .then(genre => {
        // console.log('genre', genre.results);
        displayGenre(genre)
    })