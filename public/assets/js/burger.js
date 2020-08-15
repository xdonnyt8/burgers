$(function () {
    $(".devour-burger").on("click", function (e) {
        let id = $(this).data("id")
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(function () {
            console.log("WORKS")

        });
    })

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        console.log("works")
        let newBurger = {
            name: $("#bur").val().trim()
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("added burger!")
            location.reload();
        })

    })

})