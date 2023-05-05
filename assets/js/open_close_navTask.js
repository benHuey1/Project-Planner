const navTask = document.getElementById("nav_task");
export function openNavTask() {
    navTask.style.transform = " translate(0%)";
    navTask.style.filter = "blur(0px)";
}
export function closeNavTask() {
    navTask.style.transform = " translate(-100%)";
    navTask.style.filter = "blur(3px)";
}
