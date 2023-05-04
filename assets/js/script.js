import { tasks } from './object.js';
// import { saveTask } from './save_function.js';
// import{submit} from './submit_event.js'; 



let task_input = document.querySelectorAll('.task_input_element');
console.log(task_input); 

function saveTask() {
    const taskValue = task_input.value ;//Récupération des valeurs entrées dans les input
    const taskToDo = {
        value : taskValue, 
    }
    tasks.push(taskToDo);//Push des valeurs des input dans l'array 'tasks'
}



let title = document.querySelector('.task_input_title'); 
let date = document.querySelector('.task_input_date'); 
let description = document.querySelector('.task_input_description'); 
let card = document.querySelector('.container_tasks');

function renderTask(){
    card.innerHTML = ''; 
    tasks.forEach((taskToDo, index) => {
        card.innerHTML += `
        <h2 class="task_name">${title.value}</h2>
        <p class="task_category"> TEST </p>
        <p class="task_date">${date.value}</p>
        <p class="task_description">${description.value}</p>
        `
    })
}


const task_submit = document.querySelector('.task_submit');//Bouton submit '+'

task_submit.addEventListener('click', submit); 

function submit(event){//Add event click sur le bouton submit
    event.preventDefault(); 
    saveTask(); //Exécution de la fonction saveTask au click 
    renderTask();
    console.log('test'); 
}


