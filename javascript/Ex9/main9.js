function getEvents() {

    document.getElementById("loading").innerHTML =
        "Loading...";

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {

            let output = "";

            data.slice(0, 5).forEach(function (item) {
                output += item.name + "<br>";
            });

            document.getElementById("loading").innerHTML =
                "";

            document.getElementById("result").innerHTML =
                output;
        })

        .catch(function () {

            document.getElementById("result").innerHTML =
                "Error loading data";
        });
}

async function loadEvents() {

    try {

        document.getElementById("loading").innerHTML =
            "Loading...";

        let response =
            await fetch("https://jsonplaceholder.typicode.com/users");

        let data = await response.json();

        console.log(data);

        document.getElementById("loading").innerHTML =
            "";

    }
    catch {

        console.log("Error");
    }
}

setTimeout(function () {
    console.log("Data loaded");
}, 2000);