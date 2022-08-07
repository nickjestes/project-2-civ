document.querySelector("#login-form").addEventListener("submit", e => {
    e.preventDefault();
    const userObj = {
        email: document.querySelector("#login-email").value,
        password: document.querySelector("#login-password").value,
    }
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        console.log({res});
        if(res.ok){
          location.href = "/secretclub"
        } else {
            alert("trumpet sound")
        }
    }).catch(err => {console.error(err);});
})