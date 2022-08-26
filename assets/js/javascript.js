fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=50&sortBy=release')
    .then(result => result.json())
    .then(data => {
        console.log(data);
    });
    
