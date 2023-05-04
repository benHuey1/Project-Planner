import { saveTask } from "./save_function";

const submit = document.querySelector('.task_submit');//Bouton submit '+'

submit.addEventListener('click', function(event){//Add event click sur le bouton submit
    event.preventDefault(); 
    saveTask(); //Exécution de la fonction saveTask au click 
})
console.log(saveTask()); 