import { tasks } from './object.js';
import { card } from './const.js';
import { submit } from './submit_event.js';
import { renderTask } from './render_function.js';
import { targetTask, deleteTasks } from './delete_function.js';


const task_submit = document.querySelector('.task_submit');//Bouton submit '+'
const select_options = ["Home", "Work", "Hobby"]; 
const select = document.querySelector('#task_input_element');

renderTask(); 

/* Création des options via un array */
for (let i =0; i<select_options.length; i++){
    let options = document.createElement('option'); 
    options.setAttribute('class', 'task_input_option');  
    let text = document.createTextNode(select_options[i]); 
    options.appendChild(text); 
    select.appendChild(options); 
} 
const optionSelectedValue = select_options.map(x => x.valueOf(select_options)); 
// console.log(optionSelectedValue); //ok 



task_submit.addEventListener('click', submit); 
card.addEventListener('click', targetTask);