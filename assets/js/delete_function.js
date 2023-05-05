import { tasks } from "./object.js";
import { renderTask } from "./render_function.js";


export function targetTask(event){
    const target = event.target;
    const taskId = Number(tasks.id) ; 
    const action = target.dataset.action ;
    action === 'delete' && deleteTasks (taskId) ;
}

/* Suppresion des tâches */
export function deleteTasks(taskId){
    tasks.splice(taskId, 1);
    renderTask(); 
    //Delete from the local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}