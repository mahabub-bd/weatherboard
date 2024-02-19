// timeStamp.js
function timeStamp(value) {
  const date = new Date(value * 1000);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Month is zero-based, so we add 1
  const day = ("0" + date.getDate()).slice(-2);
  let hours = date.getHours();
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
  return formattedDateTime;
}

export { timeStamp };
