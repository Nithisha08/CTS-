function Event(name, seats) {
    this.name = name;
    this.seats = seats;
}

Event.prototype.checkAvailability = function () {

    if (this.seats > 0) {
        return "Seats Available";
    }
    else {
        return "No Seats Available";
    }
};

let event1 = new Event("Music Event", 20);

let output = "";

output += "Event Name: " + event1.name + "<br>";
output += "Availability: " + event1.checkAvailability() + "<br><br>";

let eventDetails = Object.entries(event1);

eventDetails.forEach(function (item) {
    output += item[0] + " : " + item[1] + "<br>";
});

document.getElementById("result").innerHTML = output;