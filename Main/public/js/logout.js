document.querySelector("#logout").addEventListener("click", e=>{
    e.preventDefault();
    console.log("in logout");
    fetch("/api/users/logout",{
        method:"POST",
    }).then(res=>{
        console.log("logout res", res);
        if(res.ok){
           location.href="/";
        } else {
            alert("you are not logged in!");
           location.href="/";
        }
    })
})