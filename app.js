const headerDate = document.getElementById("headerDate");

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEPT",
  "OCT",
  "NOV",
  "DEC",
];
let current_datetime = new Date();
let formatted_date =
  current_datetime.getDate() +
  " " +
  months[current_datetime.getMonth()] +
  " " +
  current_datetime.getFullYear();

headerDate.textContent = formatted_date;
