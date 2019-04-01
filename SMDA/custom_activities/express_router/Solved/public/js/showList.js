window.onload = function() {
    $.ajax({
        method: "GET",
        url: "/api/cards"
    }).then(function(response) {
        response.forEach(function(elem) {
            var newRow = document.createElement("tr");
            var cardName = document.createElement("td");
            cardName.innerHTML = elem.card;
            newRow.appendChild(cardName);
            var cardPrice = document.createElement("td");
            cardPrice.innerHTML = elem.price;
            newRow.appendChild(cardPrice);
            document.getElementById("list").appendChild(newRow);
        })
    }).catch(function(error) {
        console.log(error);
    })
}