import {tasks} from "./object.js";
import { renderTask } from "./render_function.js";

let task_input = document.querySelectorAll('.task_input');//Sélection des inputs
console.log(task_input); 

// let task_input = document.querySelectorAll('.task_element'); 
// console.log(task_input); 
/**
 * Récupère les valeurs des input et les places dans l'array taskToDo. Ces valeurs sont ensuite injecté dans tasks
 */
/* Save tasks */
export function saveTask() {
    const taskValue = task_input.value ;//Récupération des valeurs entrées dans les input
    console.log(taskValue); 
    const taskToDo = {
        value : taskValue, 
    }
    tasks.push(taskToDo);//Push des valeurs des input dans l'array 'tasks'

    localStorage.setItem('tasks', JSON.stringify(tasks));
}
