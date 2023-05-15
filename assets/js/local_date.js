export let dateNow = setInterval(function date() {
    let headerDate = document.getElementById("header_date");
    const event = new Date();
    let timeFormatDayMonthYear = event.toLocaleDateString("fr-EU");
    headerDate.textContent = timeFormatDayMonthYear;
}, 1000);
