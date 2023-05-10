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

const thunderstormArr = [1087, 1273, 1276, 1279, 1282];
const snowingArr = [
  1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1255, 1258, 1261,
  1264, 1069,
];
const rainyArr = [
  1063, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1240,
  1243, 1246,
];
const partiallySunnyArr = [1003];
const cloudyArr = [1006, 1009, 1030];
const sunnyArr = [1000];

const sunny = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M450 286V136h60v150h-60Zm256 106-42-42 106-107 42 43-106 106Zm64 214v-60h150v60H770Zm-320 410V866h60v150h-60ZM253 391 148 286l42-42 106 106-43 41Zm518 517L664 802l41-41 108 104-42 43ZM40 606v-60h150v60H40Zm151 302-43-42 105-105 22 20 22 21-106 106Zm289-92q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-60q75 0 127.5-52.5T660 576q0-75-52.5-127.5T480 396q-75 0-127.5 52.5T300 576q0 75 52.5 127.5T480 756Zm0-180Z"/></svg>`;
const cloudy = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M251 896q-88 0-149.5-61.5T40 685q0-78 50-137t127-71q20-97 94-158.5T482 257q112 0 189 81.5T748 534v24q72-2 122 46.5T920 727q0 69-50 119t-119 50H251Zm0-60h500q45 0 77-32t32-77q0-45-32-77t-77-32h-63v-84q0-91-61-154t-149-63q-88 0-149.5 63T267 534h-19q-62 0-105 43.5T100 685q0 63 44 107t107 44Zm229-260Z"/></svg>`;
const cold = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M450 976V781L301 930l-43-42 192-192v-90h-90L172 794l-44-41 147-147H80v-60h195L125 396l43-43 192 193h90v-91L262 267l42-44 146 147V176h60v194l150-150 42 43-192 192v91h91l189-189 43 42-147 147h194v60H686l148 149-41 43-192-192h-91v90l192 193-41 43-151-151v195h-60Z"/></svg>`;
const partialySunny = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M450 286V136h60v150h-60Zm256 106-42-43 106-106 42 43-106 106Zm64 214v-60h150v60H770Zm1 302L665 802l43-43 106 106-43 43ZM254 392 148 286l42-42 106 106-42 42Zm-14 484h180q33.333 0 56.667-23.265Q500 829.471 500 796.235 500 763 477.237 739 454.475 715 421 715h-44l-18-41q-15.145-35.75-47.6-56.875T240 596q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q100 794 140.833 835q40.834 41 99.167 41Zm0 60q-83 0-141.5-58.5T40 736q0-83 58.5-141.5T240 536q57.736 0 105.368 32.5T416 655q60.117 0 101.058 43.589Q558 742.178 558 803q-5 56-44.033 94.5Q474.935 936 420 936H240Zm318-133q-3-15.385-6-30t-6-30q52-20 83-65.538 31-45.539 31-101.324Q660 501 607.5 448.5T480 396q-67.215 0-117.627 42.674Q311.962 481.348 303 547q-16-3-31.5-5.5T240 536q14-88 82.5-144T480 336q100 0 170 70t70 170.342Q720 654 675.5 716 631 778 558 803Zm-77-227Z"/></svg>`;
const rainy = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M558 973q-11 5-23.5 1T517 959l-69-138q-5-11-1.5-23.5T461 780q11-5 23.5-1t17.5 15l69 138q5 11 1.5 23.5T558 973Zm240-1q-11 5-23.5 1T757 958l-69-138q-5-11-1.5-23.5T701 779q11-5 23.5-1t17.5 15l69 138q5 11 1.5 23.5T798 972Zm-480 0q-11 5-23.5 1.5T277 959l-69-138q-5-11-1-23.5t15-17.5q11-5 23.5-1.5T263 793l69 139q5 11 1 23t-15 17Zm-28-256q-87 0-148.5-61.5T80 506q0-79 56.5-141T277 297q32-56 84.5-88.5T480 176q91 0 152.5 57.5T708 376q79 4 125.5 53.5T880 546q0 70-49.5 120T710 716H290Zm0-60h420q46 0 78-32.5t32-77.5q0-46-32-78t-78-32h-60v-30q0-71-49.5-120.5T480 236q-51 0-93.5 27.5T324 338l-8 18h-28q-62 2-105 45.5T140 506q0 62 44 106t106 44Zm190-210Z"/></svg>`;
const snowing = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M240 856q-14 0-24.5-10.5T205 821q0-14 10.5-24.5T240 786q14 0 24.5 10.5T275 821q0 14-10.5 24.5T240 856Zm480 0q-14 0-24.5-10.5T685 821q0-14 10.5-24.5T720 786q14 0 24.5 10.5T755 821q0 14-10.5 24.5T720 856Zm-360 160q-14 0-24.5-10.5T325 981q0-14 10.5-24.5T360 946q14 0 24.5 10.5T395 981q0 14-10.5 24.5T360 1016Zm120-160q-14 0-24.5-10.5T445 821q0-14 10.5-24.5T480 786q14 0 24.5 10.5T515 821q0 14-10.5 24.5T480 856Zm120 160q-14 0-24.5-10.5T565 981q0-14 10.5-24.5T600 946q14 0 24.5 10.5T635 981q0 14-10.5 24.5T600 1016ZM290 716q-86.864 0-148.432-61.52Q80 592.96 80 506.165 80 427 136.5 365 193 303 277 297q32-56 84.5-88.5T480.423 176Q571 176 632.5 233.5T708 376q79 4 125.5 53.5T880 545.623Q880 616 830.417 666 780.833 716 710 716H290Zm0-60h420q46.2 0 78.1-32.5 31.9-32.5 31.9-78T788.1 468q-31.9-32-78.1-32h-60v-30q0-71-49.5-120.5T480.212 236q-51.481 0-93.847 27.5Q344 291 324 338l-8 18h-28q-62 2-105 45.393t-43 104.464Q140 568 183.929 612 227.857 656 290 656Zm190-210Z"/></svg>`;
const thunderstorm = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m475 1056 97-110-80-40 113-130h80l-97 110 80 40-113 130h-80Zm-240 0 97-110-80-40 113-130h80l-97 110 80 40-113 130h-80Zm55-340q-86.864 0-148.432-61.52Q80 592.96 80 506.165 80 427 136.5 365 193 303 277 297q32-56 84.5-88.5T480.423 176Q571 176 632.5 233.5T708 376q79 4 125.5 53.5T880 545.623Q880 616 830.417 666 780.833 716 710 716H290Zm0-60h420q46.2 0 78.1-32.5 31.9-32.5 31.9-78T788.1 468q-31.9-32-78.1-32h-60v-30q0-71-49.5-120.5T480.212 236q-51.481 0-93.847 27.5Q344 291 324 338l-8 18h-28q-62 2-105 45.393t-43 104.464Q140 568 183.929 612 227.857 656 290 656Zm190-210Z"/></svg>`;

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

const updateIcon = function (day) {};

function fetchData() {
  fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=40ee7144f44e4531be3142014230605&q=Tirana&days=3&aqi=no&alerts=no"
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
setInterval(fetchData(), 1000);
