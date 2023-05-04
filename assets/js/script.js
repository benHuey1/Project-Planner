const navIcon = document.getElementById("nav_icon");
// const navIcon = document.getElementsByClassName("container");
console.log(navIcon);
const navTask = document.getElementById("nav_task");
const navTaskClose = document.getElementById("nav_task_close");

console.log(container);
navIcon.addEventListener("click", () => {
    navTask.style.transform = " translate(0%)";
    navTask.style.filter = "blur(0px)";
});
navTaskClose.addEventListener("click", () => {
    navTask.style.transform = " translate(-100%)";
    navTask.style.filter = "blur(3px)";
});
