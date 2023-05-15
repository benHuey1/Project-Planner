import { tasks } from "./object.js";
import { renderTask } from "./render_function.js";
import { saveTask } from "./save_function.js";

let task_title = document.querySelector('.task_input_title');//Input title
let task_description = document.querySelector('.task_input_description'); //Input description

/**
 * 
 * @param {*} event 
 */
export function submit(event){//Add event click sur le bouton submit
    event.preventDefault();
    saveTask(); //Exécution de la fonction saveTask au click 
    renderTask();
    // console.log('test'); 
    localStorage.setItem('tasks', JSON.stringify(tasks));//Save to localstorage

    task_title.value = '';//Ré-initialise après avoir submit
    task_description.value = ''; 
}
