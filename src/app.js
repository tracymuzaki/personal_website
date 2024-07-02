function updateTimeAndDay() {
  const now = new Date();
  const utcTime = now.toUTCString();
  const dayOfWeek = now.toLocaleString("en-US", { weekday: "long" });

  document.getElementById(
    "currentTimeUTC"
  ).innerHTML = `<strong>Current Time (UTC):</strong> ${utcTime}`;
  document.getElementById(
    "currentDay"
  ).innerHTML = `<strong>Today is:</strong> ${dayOfWeek}`;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 60000);
