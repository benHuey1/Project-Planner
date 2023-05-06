let form = document.forms['my-form']; 
console.log(form)

let filterOption = form.filter; //On cible select avec les options
console.log(filterOption); 

let optionsTask = form.filter.options;
console.log(optionsTask); 

// form.onsubmit = function(e){
//     e.preventDefault(); 

//     let optionValue = this.filter.value; 
//     console.log(optionValue); //Ressort en console va leur de l'option qui a été sélectionnée
// }

filterOption.onchange = function (){
    let optionValue = this.value; 
    console.log(optionValue); 
    //Affiche les options sélectionnées en console sans submit
    let index = this.selectedIndex; 
    let optionText = this.optionsTask[index].innerHTML; 
    console.log(optionText, index); 
}