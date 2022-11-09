const form = document.getElementById("form")
const text = document.getElementById("input-text")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const value = text.value
    
    fetch("http://localhost:3000/list", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: '{"text": "' + value + '"}'
    }).then(response => response.json())
    .then(data => {
        console.log(data);
    })

});