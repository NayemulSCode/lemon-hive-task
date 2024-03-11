export function formatDate(inputDate, format) {
  if (inputDate) {
    const [year, month, day] = inputDate?.split("-");
    const date = new Date(year, month - 1, day);

    if (format === "longDate") {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const formattedDate = `${
        monthNames[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;
      return formattedDate;
    } else if (format === "weekday") {
      const weekdayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const weekdayName = weekdayNames[date.getDay()];
      return weekdayName;
    } else {
      return "Invalid format";
    }
  } else {
    return "Invalid format";
  }
}
