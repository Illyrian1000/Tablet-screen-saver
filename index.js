const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const date = document.querySelector(".date");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const tempNow = document.querySelector(".tempNow");
const temp1 = document.querySelector(".temp1");
const temp2 = document.querySelector(".temp2");
const temp3 = document.querySelector(".temp3");

const day1 = document.querySelector(".day1");
const day2 = document.querySelector(".day2");
const day3 = document.querySelector(".day3");

const compressTime = function (time) {
  return time < 10 ? `0${time}` : time;
};

//WEATHER OBJECT

let myObject;

const updateTime = function () {
  const time = new Date();
  hours.textContent = compressTime(time.getHours());
  minutes.textContent = compressTime(time.getMinutes());
  seconds.textContent = ":" + compressTime(time.getSeconds());

  date.textContent = `${compressTime(time.getDate())}/${compressTime(
    time.getMonth() + 1
  )}/2023`;

  const weekDay = time.getDay();
  day1.innerHTML = days[weekDay];
  day2.innerHTML = days[weekDay + 1];
  day3.innerHTML = days[weekDay + 2];

  setInterval(updateTime, 1000);
};

updateTime();

function fetchData() {
  fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=40ee7144f44e4531be3142014230605&q=Tirana&days=3&aqi=no&alerts=no"
  )
    .then((response) => response.json())
    .then((data) => {
      myObject = data;

      tempNow.innerHTML = `${myObject.current.temp_c}°`;
      temp1.innerHTML = `${myObject.current.temp_c}°`;
      temp2.innerHTML = `${Math.floor(
        myObject.forecast.forecastday[1].day.avgtemp_c
      )}°`;
      temp2.innerHTML = `${Math.floor(
        myObject.forecast.forecastday[2].day.avgtemp_c
      )}°`;
      console.log(myObject);
    })
    .catch((error) => console.error(error));
}

fetchData();
