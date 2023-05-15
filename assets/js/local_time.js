export let timeNow = setInterval(function clock() {
    let headerTime = document.getElementById("header_date_time");
    const event = new Date();
    let timeFormatHoursMinutesSeconds = event.toLocaleTimeString("fr-EU");
    headerTime.innerText = timeFormatHoursMinutesSeconds;
}, 1000);
