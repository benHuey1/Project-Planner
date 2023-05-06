import { tasks } from "./object.js";
import { renderTask } from "./render_function.js";
import { saveTask } from "./save_function.js";



export function submit(event){//Add event click sur le bouton submit
    event.preventDefault(); 
    saveTask(); //Exécution de la fonction saveTask au click 
    renderTask();
    // console.log('test'); 
    localStorage.setItem('tasks', JSON.stringify(tasks));//Save to localstorage
}
