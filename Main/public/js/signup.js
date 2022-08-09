//Signup form
document.querySelector("#signup").addEventListener("submit", e => {
    console.log("signup button pressed");
    e.preventDefault();
    const userObj = {
        username: document.querySelector("#signup-name").value,
        email: document.querySelector("#signup-email").value,
        password: document.querySelector("#signup-password").value
    };
    console.log(userObj);
    fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            return res.json()
        } else {
            alert("trumpet sound")
        }
        // if (res.ok) {
        //     console.log("new user is created!");
        //     location.href = "/secretclub";
        // } else {
        //     alert("failed to register");
        //     location.href = "/";
        // }
    })
    .then(res => {
        console.log("just json", {res});
        location.href = "/secretclub";
    })
});
