import {tasks} from "./object.js";
// console.log(tasks);//Ok

let task_input = document.querySelector('.task_input_element');//Sélection des inputs
// console.log(task_input); 
let task_option = document.querySelectorAll('.task_input_option'); 
console.log(task_option); 

export function saveTask() {
    const taskValue = task_input.value ;//Récupération des valeurs entrées dans les input
    const optionValue = task_option.value ; 
    if(optionValue === 'Home'){
        alert('Home'); 
    }else if (optionValue === 'Work'){
        alert('Work'); 
    } else if (optionValue === 'Hobby'){
        alert('Hobby'); 
    }
    const taskToDo = {
        value : taskValue, 
    }
    tasks.push(taskToDo);//Push des valeurs des input dans l'array 'tasks'
}
