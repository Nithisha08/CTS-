let events = [
    { name: "Music Event", seats: 20, status: "upcoming" },
    { name: "Sports Event", seats: 0, status: "upcoming" },
    { name: "Dance Event", seats: 15, status: "past" },
    { name: "Food Festival", seats: 10, status: "upcoming" }
];

let output = "";

events.forEach(function (event) {

    if (event.status == "upcoming" && event.seats > 0) {
        output += event.name + " - Seats Available: " + event.seats + "<br>";
    }

});

document.getElementById("eventList").innerHTML = output;

try {

    let registerSeats = 2;

    if (registerSeats > events[0].seats) {
        throw "Not enough seats available";
    }

    events[0].seats--;

    console.log("Registration successful");

}
catch (error) {

    console.log(error);

}