// Question: What does this code do?
$("#add-btn").on("click", function (event) {
    event.preventDefault();
    var newTable = {
        name: $("#name").val().trim(),
        phonenumber: $("#phone-number").val().trim(),
        email: $("#email").val().trim(),
        uniqueID: $("#unique-ID").val().trim()
    };

    // Question: What does this code do??
    $.post("/api/new", newTable)
        .done(function (data) {
            console.log(data);
            alert("Reserving Table...");
        });
});