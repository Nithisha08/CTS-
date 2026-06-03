let events = [];

function addEvent(name, category) {
    events.push({
        name: name,
        category: category
    });
}

function registerUser(userName, eventName) {
    console.log(userName + " registered for " + eventName);
}

function filterEventsByCategory(category, callback) {

    let result = events.filter(function (event) {
        return event.category == category;
    });

    callback(result);
}

function totalRegistration() {

    let count = 0;

    return function () {
        count++;
        return count;
    };
}

let registerCount = totalRegistration();

addEvent("Music Show", "Music");
addEvent("Sports Meet", "Sports");
addEvent("Dance Program", "Dance");

registerUser("Nithisha", "Music Show");

console.log("Music Registration Count: " + registerCount());
console.log("Music Registration Count: " + registerCount());

filterEventsByCategory("Music", function (data) {

    let output = "";

    data.forEach(function (item) {
        output += item.name + "<br>";
    });

    document.getElementById("eventList").innerHTML = output;
});