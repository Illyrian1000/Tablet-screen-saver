const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const date = document.querySelector(".date");

const compressTime = function (time) {
  return time < 10 ? `0${time}` : time;
};

const updateTime = function () {
  const time = new Date();
  hours.innerHTML = compressTime(time.getHours());
  minutes.innerHTML = compressTime(time.getMinutes());
  seconds.innerHTML = ":" + compressTime(time.getSeconds());

  date.innerHTML = `${compressTime(time.getDate())}/${compressTime(
    time.getMonth() + 1
  )}/2023`;

  setInterval(updateTime, 1000);
};

updateTime();
