let containerTask = document.querySelector(".container_tasks");
let taskState = document.querySelector(".task_element");

export function changeColorState() {
    // optionSelect.style.backgroundColor = "red";
    if (taskState.value == "To do") {
        // containerTask.style.backgroundColor = "red";
        containerTask.style.border = "solid red";
    } else if (taskState.value == "Doing") {
        // containerTask.style.backgroundColor = "yellow";
        containerTask.style.border = "solid yellow";
    } else if (taskState.value == "Done") {
        // containerTask.style.backgroundColor = "green";
        containerTask.style.border = "solid green";
    }
}
