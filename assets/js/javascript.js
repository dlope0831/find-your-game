var getGamePrice = function() {
    var priceApi ="https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";
    fetch(priceApi).then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
            })
        }
    }
    )
};
// getGamePrice(priceData);
// var apiUrl = "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";
// fetch(apiUrl)
// .then(data => {
// return data.json();
// })
// .then(data => {
//     console.log(data.title);
// });