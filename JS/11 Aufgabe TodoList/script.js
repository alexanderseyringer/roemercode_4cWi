let taskJSON1 = {name: "Gscheid Putzen", isDone: true, responsible: "Fast niemand"}
let taskJSON2 = {name: "Besser Putzen", isDone: false, responsible: "Noch weniger"}
let taskJSON3 = {name: "Genial Putzen", isDone: false, responsible: "Niemand"}

let tasksArray = [taskJSON1, taskJSON2, taskJSON3];

writeTasks();

document.getElementById("taskAdder").addEventListener("click", function(){
    addTasks();
    writeTasks();
});

function writeTasks() {
    document.getElementById("taskList").innerHTML = getTasksToHTML();
}

function addTasks() {
    let additionalTask = document.getElementById("newTaskTxt").value;
    let additionalResponsible = document.getElementById("newResponsibleTxt").value;
    let task = {name: additionalTask, responsible: additionalResponsible, isDone: false}
    tasksArray.push(task)
}

function checkTask(element) {
    let index = element.attributes["data-index"].value;
    let isChecked = element.checked;

    tasksArray[index].isDone = isChecked;
    writeTasks();
}

function getTasksToHTML() {
    let html = "";
    let index = 0;

    tasksArray.forEach(element => {
        let checkerChecked = "";
        if(element.isDone) {
            checkerChecked = "checked";
        }
        html += "<li><input onClick='checkTask()' name='checkbox' data-index='" + index + "'input type='checkbox'" + checkerChecked + "/>" + " " + element.name + " - " + element.responsible + "";
        index++;
    });

    return html;
}