document.querySelector("#new-blog").addEventListener("submit",e=>{
    e.preventDefault();
    const blogObj = {
        title: document.querySelector("#name").value,
        content: document.querySelector("#blog-content").value,
    }
    console.log(blogObj);
    fetch("/api/tweets",{
        method:"POST",
        body:JSON.stringify(blogObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})

