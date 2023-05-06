import { tasks } from "./object.js";
import { renderTask } from "./render_function.js";

/**
 * 
 * @param {*} event 
 */
export function targetTask(event){
    const target = event.target;
    const taskId = Number(tasks.id) ; 
    const action = target.dataset.action ;
    action === 'delete' && deleteTasks (taskId) ;
}


/**
 * Définition de la fonction : deleteTasks permet de supprimer la card contenant la tâche, celle-ci est supprimée visuellement sur le site mais également en cache. 
 * 
 * @param {Number} taskId - Permet de cibler les taches dans l'objet tasks
 * 
 * @return {type} - description
 */
export function deleteTasks(taskId){
    tasks.splice(taskId, 1);
    renderTask(); 
    //Delete from the local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}