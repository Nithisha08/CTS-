const events = [
    {
        name: "Music Event",
        date: "15 June",
        seats: 20
    },
    {
        name: "Sports Event",
        date: "20 June",
        seats: 15
    }
];

function showEvent(eventName = "No Event") {
    return eventName;
}

let output = "";

events.forEach(function (event) {

    let { name, date, seats } = event;

    output += "Event Name: " + name + "<br>";
    output += "Date: " + date + "<br>";
    output += "Seats: " + seats + "<br><br>";
});

let copyEvents = [...events];

output += "Copied Event Count: " + copyEvents.length + "<br>";

output += "Default Function Value: " +
    showEvent();

document.getElementById("result").innerHTML =
    output;