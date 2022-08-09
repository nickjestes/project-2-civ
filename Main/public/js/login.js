document.querySelector("#login-form").addEventListener("submit", e => {
    e.preventDefault();
    const userObj = {
        email: document.querySelector("#login-email").value,
        password: document.querySelector("#login-password").value,
    }
    console.log("inside js frontend");
    fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => {
            console.log("raw", { res });
            if (res.ok) {
                return res.json()
            } else {
                alert("trumpet sound")
            }
        })
        .then(res => {
            console.log("just json", { res });
            location.href = "/secretclub";


        }).catch(err => { console.error(err); });
})