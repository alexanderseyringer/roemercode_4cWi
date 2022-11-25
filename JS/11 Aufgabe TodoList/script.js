let taskSaver = ["Gscheid Putzen", "Besser Putzen", "Genial Putzen"];

document.getElementById("taskAdder").addEventListener("click", function(){
    
});

getTasksToHTML();

function getTasksToHTML() {
    let html = "";

    taskSaver.forEach(element => {
        html += "<li>" + element + "";
    });

    document.getElementById("taskList").innerHTML = html;
}