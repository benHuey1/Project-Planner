export function echeance() {
    let divEcheance = document.querySelector(".date_output");
    let actualDate = new Date();
    let newDate = document.getElementById("date_input");
    let newDateValue = new Date(newDate.value);
    let dateInMs = newDateValue - actualDate;
    let dueDate = Math.round(dateInMs / (1000 * 60 * 60 * 24));
    divEcheance.insertAdjacentHTML("beforeEnd", `${dueDate} day(s)`);
    // console.log(newDateValue);
    // console.log(actualDate);
    // console.log(dateInMs);
}
