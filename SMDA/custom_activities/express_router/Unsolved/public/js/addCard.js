window.onload = function() {
    document.getElementById("submitBtn").onclick = function(e) {
        e.preventDefault();
        $.ajax({
            method: "POST",
            url: "/api/cards",
            data: {
                card: document.getElementById("formName").value,
                price: document.getElementById("formNum").value
            }
        }).then(function(response) {
            console.log(response);
            window.location.href = "/list"
        }).catch(function(error) {
            console.log(error);
        })
    }
}