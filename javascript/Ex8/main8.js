function registerEvent() {
    document.getElementById("result").innerHTML =
        "Registered Successfully";
}

function filterEvent() {

    let category =
        document.getElementById("category").value;

    document.getElementById("result").innerHTML =
        "Selected Category: " + category;
}

document.getElementById("searchBox")
    .addEventListener("keydown", function () {

        let name =
            document.getElementById("searchBox").value;

        document.getElementById("result").innerHTML =
            "Searching: " + name;
    });