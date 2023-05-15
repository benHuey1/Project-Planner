import { filterTasks } from './filter_function.js';

export function submitFilter(event){
    event.preventDefault(); 
    filterTasks(); 
}