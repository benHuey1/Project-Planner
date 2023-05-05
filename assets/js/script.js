import { openNavTask, closeNavTask } from "./open_close_navTask.js";
import { echeance } from "./get_echeance.js";
import { initiateCurrentDate } from "./initiate_current_date.js";
import { changeColorState } from "./task_state_color.js";

const navIcon = document.getElementById("nav_icon");
const navTaskClose = document.getElementById("nav_task_close");
const containerTask = document.querySelector(".container_tasks");
const taskState = document.querySelector(".task_filter_element");
let filter;

/* Function that ininiate the current date by default in the calendar */
initiateCurrentDate();

/* Open/close the aside window */
navIcon.addEventListener("click", openNavTask);
navTaskClose.addEventListener("click", closeNavTask);

/* Submit the attibutes of the task */
let mySubmit = document.getElementById("submit");
mySubmit.addEventListener("click", echeance);

/* Try to output the value of a select to change a background */
taskState.addEventListener("mouseup", changeColorState);

/* Filter */
/* Filter-All */
function showAllTasks() {
    const AllTasks = document.querySelectorAll(".container_tasks");

    for (let i = 0; i < AllTasks.length; i++) {
        AllTasks[i].style.display = "block";
    }

    filter = "tout";
}

// fonction pour mettre à jour les filtres et afficher les résultats filtrés
function updateFilters() {
    if (filter == "To do") {
        showWokSections();
    } else if (filter == "Doing") {
        showFishSections();
    } else if (filter == "Done") {
        showDessertSections();
    } else {
        showAllSections();
    }
}
