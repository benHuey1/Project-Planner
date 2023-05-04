import {tasks} from "./object.js";

let task_input = document.querySelectorAll('.task_input_element');//Sélection des inputs
// console.log(task_input); 
// let task_option = document.querySelectorAll('.task_input_option'); 
// console.log(task_option); 

export function saveTask() {
    const taskValue = task_input.value ;//Récupération des valeurs entrées dans les input
    const taskToDo = {
        value : taskValue, 
    }
    tasks.push(taskToDo);//Push des valeurs des input dans l'array 'tasks'
}
