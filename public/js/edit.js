const editFormHandler = async function(event) {
    event.preventDefault();

    
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('input[name="post-body"]').value;

    fetch(`/api/post/${id}`, {
        method: "put", 
        body: JSON.stringify({
            title,
            body,
        }),
        headers: { "Content-Type": "application/json"}
    })
       
            document.location.replace("/dashboard");
        
        
}

document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);