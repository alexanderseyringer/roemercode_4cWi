document.getElementById("loader").addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/todos").then((result)=> {
        result.json().then((data)=>{
            getHTMLForToDos(data);
            console.log(data.title);
        })
    })
})

    function getHTMLForToDos(data) {
        let html = "<ul>";
        data.forEach(todo => {
            html += "<li>" + todo.title + "</li>";
        });
        html += "</ul>";
        document.getElementById("content").innerHTML = html;
    }