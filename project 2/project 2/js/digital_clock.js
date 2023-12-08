function padNumber(number) {
  return number.toString().padStart(2, '0');
}

function getCurrentTime() {
  const date = new Date();
  const hours = date.getHours();
  const formattedHours = padNumber(hours);
  const formattedMinutes = padNumber(date.getMinutes());
  const formattedSeconds = padNumber(date.getSeconds());

  if (hours >= 12) {
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} PM`;
  } else {
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} AM`;
  }
}

function clock() {
  const clockElement = document.getElementById('clock');

  if (clockElement === null) {
    return;
  }

  setInterval(() => {
    clockElement.innerText = getCurrentTime();
  }, 1000);
}