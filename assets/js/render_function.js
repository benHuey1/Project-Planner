import { tasks } from "./object.js";
import { card } from "./const.js";
import "./save_function.js";

let title = document.querySelector('.task_input_title'); 
let date = document.querySelector('.task_input_date'); 
let description = document.querySelector('.task_input_description'); 
// let card = document.querySelector('.container_tasks');

export function renderTask(){
    card.innerHTML = ''; 
    tasks.forEach((taskToDo, index) => {
        card.innerHTML += `
        <h2 class="task_name">${title.value}</h2>
        <p class="task_category"></p>
        <p class="task_date">${date.value}</p>
        <p class="task_description">${description.value}</p>
        <select class="task_statut">
            <option>To do </option>
            <option>Doing </option>
            <option>Done </option>
        </select>
        <i class="bi bi-trash3" data-action="delete"></i>
        `
    })
}