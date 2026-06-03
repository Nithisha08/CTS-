let events = [
    "Music Event",
    "Sports Event",
    "Dance Event"
];

events.push("Workshop on Baking");

let musicEvents = events.filter(function (event) {
    return event.includes("Music");
});

let displayEvents = events.map(function (event) {
    return "Event: " + event;
});

let output = "";

output += "<h3>All Events</h3>";

displayEvents.forEach(function (item) {
    output += item + "<br>";
});

output += "<br><h3>Music Events</h3>";

musicEvents.forEach(function (item) {
    output += item + "<br>";
});

document.getElementById("result").innerHTML = output;