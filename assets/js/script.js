// import { tasks } from './object.js';
// // import { saveTask } from './save_function.js';
// // import{submit} from './submit_event.js'; 



// let task_input = document.querySelectorAll('.task_input_element');
// console.log(task_input); 
// const category = document.querySelector('.task_input_option'); 

// /* Save tasks */
// function saveTask() {
//     const taskValue = task_input.value ;//Récupération des valeurs entrées dans les input
//     const taskToDo = {
//         value : taskValue, 
//     }
//     tasks.push(taskToDo);//Push des valeurs des input dans l'array 'tasks'
// }


/* Render tasks */

// let title = document.querySelector('.task_input_title'); 
// let date = document.querySelector('.task_input_date'); 
// let description = document.querySelector('.task_input_description'); 
// let card = document.querySelector('.container_tasks');

// function renderTask(){
//     card.innerHTML = ''; 
//     tasks.forEach((taskToDo, index) => {
//         card.innerHTML += `
//         <h2 class="task_name">${title.value}</h2>
//         <p class="task_category"></p>
//         <p class="task_date">${date.value}</p>
//         <p class="task_description">${description.value}</p>
//         <select class="task_statut">
//             <option>To do </option>
//             <option>Doing </option>
//             <option>Done </option>
//         </select>
//         <i class="bi bi-trash3" data-action="delete"></i>
//         `
//     })
// }

/* Event sur le bouton submit */
// const task_submit = document.querySelector('.task_submit');//Bouton submit '+'
// task_submit.addEventListener('click', submit); 

// function submit(event){//Add event click sur le bouton submit
//     event.preventDefault(); 
//     saveTask(); //Exécution de la fonction saveTask au click 
//     renderTask();
//     // console.log('test'); 
//     localStorage.setItem('tasks', JSON.stringify(tasks));//Save to localstorage
// }


// /* Création des options via un array */
// const select = document.querySelector('#task_input_element');
// const select_options = ["Home", "Work", "Hobby"]; 

// for (let i =0; i<select_options.length; i++){
//     let options = document.createElement('option'); 
//     options.setAttribute('class', 'task_input_option');  
//     let text = document.createTextNode(select_options[i]); 
//     options.appendChild(text); 
//     select.appendChild(options); 
// } 
// const optionSelectedValue = select_options.map(x => x.valueOf(select_options)); 
// console.log(optionSelectedValue); //ok 

/* Application de l'event 'change' sur les options */
/* NE FONCTIONNE PAS */

// const optionCategory = document.querySelector('.task_input_option');
// console.log(optionCategory); 

// optionCategory.addEventListener('onchange', changeOption); 

// export function changeOption (event){
//     const optionSelected = document.querySelector('.task_category'); 
//     optionSelected.textContent = `${event.target.value}`;
// }



// /* Cibler les éléments */

// card.addEventListener('click', targetTask);
// function targetTask(event){
//     const target = event.target;
//     const taskId = Number(tasks.id) ; 
//     const action = target.dataset.action ;
//     action === 'delete' && deleteTasks (taskId) ;
// }

// /* Suppresion des tâches */
// function deleteTasks(taskId){
//     tasks.splice(taskId, 1);
//     renderTask(); 
//     //Delete from the local storage
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }
