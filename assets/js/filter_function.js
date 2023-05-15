import { tasks } from "./object.js";
import {select} from "./render_function.js"
import { filterTask } from "./object.js";

const selectValue = select.value; 
const filter = document.querySelector('#task_filter'); 
const filterValue = filter.value; 

/**
 * Pour chaque élément contenu dans l'objet 'task', un filtre est appliqué. Si la valeur du filtre est strictement égale à la valeur de la catégorie sélectionée, la card est injecté dans l'objet 'filterTask'.
 * @returns Retoure l'array 'filerTask' avec les cards filtrées
 */
export function filterTasks(){
    tasks.forEach(element => {
        const selectedCategory = tasks.filter(tasks => filterValue === selectValue); 
        filterTask.push(selectedCategory); 
    });
    return filterTask; 
}
