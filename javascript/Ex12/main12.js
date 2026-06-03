function sendData() {

    document.getElementById("message").innerHTML =
        "Please wait...";

    let userData = {
        name: "Nithisha",
        event: "Music Event"
    };

    setTimeout(function () {

        fetch("https://jsonplaceholder.typicode.com/posts", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(userData)
        })

            .then(function (response) {
                return response.json();
            })

            .then(function () {

                document.getElementById("message")
                    .innerHTML =
                    "Registration Successful";
            })

            .catch(function () {

                document.getElementById("message")
                    .innerHTML =
                    "Registration Failed";
            });

    }, 2000);
}