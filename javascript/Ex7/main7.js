let events = [
    "Music Event",
    "Sports Event",
    "Food Festival"
];

let box = document.querySelector("#eventBox");

events.forEach(function (event) {

    let card = document.createElement("div");

    card.innerHTML = event;

    card.style.border = "1px solid black";
    card.style.padding = "10px";
    card.style.margin = "10px";

    box.appendChild(card);
});

function registerEvent() {
    document.querySelector("h1").innerHTML =
        "Registered Successfully";
}

function cancelEvent() {
    document.querySelector("h1").innerHTML =
        "Registration Cancelled";
}