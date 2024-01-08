function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function daysAgo(dateString) {
  const inputDate = new Date(dateString);
  const currentDate = new Date();
  const timeDifference = currentDate - inputDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();

  const suffix =
    (day >= 4 && day <= 20) || (day >= 24 && day <= 30)
      ? "th"
      : ["st", "nd", "rd"][(day % 10) - 1];

  const month = date.toLocaleString("default", { month: "long" });

  return day + suffix + " " + month;
}

export { getCurrentDate, daysAgo, formatDate };
