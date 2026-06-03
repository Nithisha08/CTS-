document.getElementById("registerForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        let form = event.target;

        let name = form.elements["userName"].value;
        let email = form.elements["email"].value;
        let eventName = form.elements["eventName"].value;

        document.getElementById("nameError")
            .innerHTML = "";

        document.getElementById("emailError")
            .innerHTML = "";

        let valid = true;

        if (name == "") {

            document.getElementById("nameError")
                .innerHTML = " Enter Name";

            valid = false;
        }

        if (email == "") {

            document.getElementById("emailError")
                .innerHTML = " Enter Email";

            valid = false;
        }

        if (eventName == "") {

            valid = false;
        }

        if (valid) {

            document.getElementById("result")
                .innerHTML =
                "Registered Successfully for " + eventName;
        }
    });