document.getElementById("registerForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        console.log("Form submission started");

        let name =
            document.getElementById("name").value;

        let email =
            document.getElementById("email").value;

        console.log("Name:", name);
        console.log("Email:", email);

        let userData = {
            name: name,
            email: email
        };

        console.log("Payload:", userData);

        fetch("https://jsonplaceholder.typicode.com/posts", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(userData)
        })

            .then(function (response) {

                console.log("Request sent");

                return response.json();
            })

            .then(function (data) {

                console.log("Response received", data);

                document.getElementById("message")
                    .innerHTML =
                    "Registration Successful";
            })

            .catch(function (error) {

                console.log("Error:", error);

                document.getElementById("message")
                    .innerHTML =
                    "Registration Failed";
            });
    });