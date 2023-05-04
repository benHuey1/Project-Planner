import { tasks } from "./object.js";
import { card } from "./const.js";
import "./save_function.js";

let title = document.querySelector('.task_input_title'); 
let date = document.querySelector('.task_input_date'); 
let description = document.querySelector('.task_input_description'); 
let card = document.querySelector('.container_tasks');

function renderTask(){
    card.innerHTML = ''; 
    tasks.forEach((taskToDo, index) => {
        card.innerHTML += `
        <h2 class="task_name">${title.value}</h2>
        <p class="task_category"> TEST </p>
        <p class="task_date">${date.value}</p>
        <p class="task_description">${description.value}</p>
        `
    })
}
