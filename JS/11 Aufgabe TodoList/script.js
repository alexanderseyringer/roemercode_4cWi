let taskSaver = ["Gscheid Putzen", "Besser Putzen", "Genial Putzen"];

document.getElementById("taskAdder").addEventListener("click", function(){
    let additionalTask = document.getElementById("newTaskTxt").value;
    taskSaver.push(additionalTask)
    document.getElementById("taskList").innerHTML = getTasksToHTML();
});

document.getElementById("taskList").innerHTML = getTasksToHTML();


function getTasksToHTML() {
    let html = "";

    taskSaver.forEach(element => {
        html += "<li>" + element + "";
    });

    return html;
}