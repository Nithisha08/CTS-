const eventName = "Music Event";
const eventDate = "15 June 2025";

let seats = 50;

let eventDetails = `Event Name: ${eventName} | Date: ${eventDate} | Seats Available: ${seats}`;

document.getElementById("eventInfo").innerHTML = eventDetails;

seats--;

document.getElementById("seatCount").innerHTML =
    "Seats Remaining After Registration: " + seats;