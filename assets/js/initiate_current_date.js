export function initiateCurrentDate() {
    /* Display the min date in the calendar */
    const myDate = document.getElementById("date_input");
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10); // Convert in string & Remove the useless part after 10 letters : hours, minutes, seconds
    myDate.defaultValue = formattedDate;

    /* Block the dates before the min date in the calendar */
    myDate.min = formattedDate;
}
