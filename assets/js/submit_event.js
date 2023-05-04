import { renderTask } from "./render_function.js";
import { saveTask } from "./save_function.js";

const task_submit = document.querySelector('.task_submit');//Bouton submit '+'

task_submit.addEventListener('click', submit); 

function submit(event){//Add event click sur le bouton submit
    event.preventDefault(); 
    saveTask(); //Exécution de la fonction saveTask au click 
    renderTask();
    console.log('test'); 
}

