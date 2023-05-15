import { openNavTask, closeNavTask } from "./open_close_navTask.js";
import { echeance } from "./get_echeance.js";
import { initiateCurrentDate } from "./initiate_current_date.js";
import { changeColorState } from "./task_state_color.js";
// import { timeNow } from "./local_time.js";
import { dateNow } from "./local_date.js";
import { clearDisplay, showAllTask, updateFilters } from "./filter.js";

const navIcon = document.getElementById("nav_icon");
const navTaskClose = document.getElementById("task_close");
const containerTask = document.querySelector(".container_tasks");
const taskState = document.querySelector(".task_element");
let filter;

/* Date & time */

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

// /* Filter */

let filterSelect = document.getElementById("task_filter_display");

filterSelect.addEventListener("mouseup", updateFilters);
