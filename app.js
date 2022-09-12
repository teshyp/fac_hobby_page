const headerDate = document.getElementById("headerDate");

const date = new Date();
const formatDate = date.toLocaleString("en-UK");

headerDate.textContent = formatDate;
