document.getElementById("loader").addEventListener("click") = fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json)
    .then(json)