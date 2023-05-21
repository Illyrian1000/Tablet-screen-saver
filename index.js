// TIME CONTAINER

const timeEl = document.querySelector(".hours");
const secondsEl = document.querySelector(".seconds");
const dateEl = document.querySelector(".date");

const bottomEl = document.querySelector(".bottomPart");
const cityTemp = document.querySelector(".cityTemp");

const cloudyArr = [804, 803];
const sunnyArr = [800, 701, 711, 721, 731, 742, 751, 761, 762, 771, 781];
const snowArr = [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622];
const rainnyArr = [
  500, 501, 502, 503, 504, 511, 520, 521, 522, 531, 300, 301, 302, 310, 311,
  312, 313, 314, 321,
];
const thunderstormArr = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232];
const partiallySunnyArr = [802, 801];

const cloudySvg = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M251 896q-88 0-149.5-61.5T40 685q0-78 50-137t127-71q20-97 94-158.5T482 257q112 0 189 81.5T748 534v24q72-2 122 46.5T920 727q0 69-50 119t-119 50H251Zm0-60h500q45 0 77-32t32-77q0-45-32-77t-77-32h-63v-84q0-91-61-154t-149-63q-88 0-149.5 63T267 534h-19q-62 0-105 43.5T100 685q0 63 44 107t107 44Zm229-260Z"/></svg>`;

const partiallySunnySvg = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M450 286V136h60v150h-60Zm256 106-42-43 106-106 42 43-106 106Zm64 214v-60h150v60H770Zm1 302L665 802l43-43 106 106-43 43ZM254 392 148 286l42-42 106 106-42 42Zm-14 484h180q33.333 0 56.667-23.265Q500 829.471 500 796.235 500 763 477.237 739 454.475 715 421 715h-44l-18-41q-15.145-35.75-47.6-56.875T240 596q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q100 794 140.833 835q40.834 41 99.167 41Zm0 60q-83 0-141.5-58.5T40 736q0-83 58.5-141.5T240 536q57.736 0 105.368 32.5T416 655q60.117 0 101.058 43.589Q558 742.178 558 803q-5 56-44.033 94.5Q474.935 936 420 936H240Zm318-133q-3-15.385-6-30t-6-30q52-20 83-65.538 31-45.539 31-101.324Q660 501 607.5 448.5T480 396q-67.215 0-117.627 42.674Q311.962 481.348 303 547q-16-3-31.5-5.5T240 536q14-88 82.5-144T480 336q100 0 170 70t70 170.342Q720 654 675.5 716 631 778 558 803Zm-77-227Z"/></svg>`;

const rainnySvg = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M558 973q-11 5-23.5 1T517 959l-69-138q-5-11-1.5-23.5T461 780q11-5 23.5-1t17.5 15l69 138q5 11 1.5 23.5T558 973Zm240-1q-11 5-23.5 1T757 958l-69-138q-5-11-1.5-23.5T701 779q11-5 23.5-1t17.5 15l69 138q5 11 1.5 23.5T798 972Zm-480 0q-11 5-23.5 1.5T277 959l-69-138q-5-11-1-23.5t15-17.5q11-5 23.5-1.5T263 793l69 139q5 11 1 23t-15 17Zm-28-256q-87 0-148.5-61.5T80 506q0-79 56.5-141T277 297q32-56 84.5-88.5T480 176q91 0 152.5 57.5T708 376q79 4 125.5 53.5T880 546q0 70-49.5 120T710 716H290Zm0-60h420q46 0 78-32.5t32-77.5q0-46-32-78t-78-32h-60v-30q0-71-49.5-120.5T480 236q-51 0-93.5 27.5T324 338l-8 18h-28q-62 2-105 45.5T140 506q0 62 44 106t106 44Zm190-210Z"/></svg>`;

const snowSvg = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M240 856q-14 0-24.5-10.5T205 821q0-14 10.5-24.5T240 786q14 0 24.5 10.5T275 821q0 14-10.5 24.5T240 856Zm480 0q-14 0-24.5-10.5T685 821q0-14 10.5-24.5T720 786q14 0 24.5 10.5T755 821q0 14-10.5 24.5T720 856Zm-360 160q-14 0-24.5-10.5T325 981q0-14 10.5-24.5T360 946q14 0 24.5 10.5T395 981q0 14-10.5 24.5T360 1016Zm120-160q-14 0-24.5-10.5T445 821q0-14 10.5-24.5T480 786q14 0 24.5 10.5T515 821q0 14-10.5 24.5T480 856Zm120 160q-14 0-24.5-10.5T565 981q0-14 10.5-24.5T600 946q14 0 24.5 10.5T635 981q0 14-10.5 24.5T600 1016ZM290 716q-86.864 0-148.432-61.52Q80 592.96 80 506.165 80 427 136.5 365 193 303 277 297q32-56 84.5-88.5T480.423 176Q571 176 632.5 233.5T708 376q79 4 125.5 53.5T880 545.623Q880 616 830.417 666 780.833 716 710 716H290Zm0-60h420q46.2 0 78.1-32.5 31.9-32.5 31.9-78T788.1 468q-31.9-32-78.1-32h-60v-30q0-71-49.5-120.5T480.212 236q-51.481 0-93.847 27.5Q344 291 324 338l-8 18h-28q-62 2-105 45.393t-43 104.464Q140 568 183.929 612 227.857 656 290 656Zm190-210Z"/></svg>`;

const sunnySvg = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M450 286V136h60v150h-60Zm256 106-42-42 106-107 42 43-106 106Zm64 214v-60h150v60H770Zm-320 410V866h60v150h-60ZM253 391 148 286l42-42 106 106-43 41Zm518 517L664 802l41-41 108 104-42 43ZM40 606v-60h150v60H40Zm151 302-43-42 105-105 22 20 22 21-106 106Zm289-92q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-60q75 0 127.5-52.5T660 576q0-75-52.5-127.5T480 396q-75 0-127.5 52.5T300 576q0 75 52.5 127.5T480 756Zm0-180Z"/></svg>`;

const thunderstormSvg = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m475 1056 97-110-80-40 113-130h80l-97 110 80 40-113 130h-80Zm-240 0 97-110-80-40 113-130h80l-97 110 80 40-113 130h-80Zm55-340q-86.864 0-148.432-61.52Q80 592.96 80 506.165 80 427 136.5 365 193 303 277 297q32-56 84.5-88.5T480.423 176Q571 176 632.5 233.5T708 376q79 4 125.5 53.5T880 545.623Q880 616 830.417 666 780.833 716 710 716H290Zm0-60h420q46.2 0 78.1-32.5 31.9-32.5 31.9-78T788.1 468q-31.9-32-78.1-32h-60v-30q0-71-49.5-120.5T480.212 236q-51.481 0-93.847 27.5Q344 291 324 338l-8 18h-28q-62 2-105 45.393t-43 104.464Q140 568 183.929 612 227.857 656 290 656Zm190-210Z"/></svg>`;

// UPDATE WEATHER IN THE CITY BY DAY

const cityDays = document.querySelectorAll(".weatherCard");

// update time function

const updateTime = function () {
  const todaysDate = new Date();
  const hourNow = todaysDate.getHours();
  const minNow = todaysDate.getMinutes();
  const secNow = todaysDate.getSeconds();
  const dateNow = todaysDate.getDate();
  const monthNow = todaysDate.getMonth() + 1;
  const yearNow = todaysDate.getFullYear();

  timeEl.textContent = `${hourNow < 10 ? "0" + hourNow : hourNow}:${
    minNow < 10 ? "0" + minNow : minNow
  }`;
  secondsEl.textContent = `:${secNow < 10 ? "0" + secNow : secNow}`;

  dateEl.textContent = `${dateNow < 10 ? "0" + dateNow : dateNow}/${
    monthNow < 10 ? "0" + monthNow : monthNow
  }/${yearNow < 10 ? "0" + yearNow : yearNow}`;
};

setInterval(updateTime, 1000);

// no errors until now

//FUNCTION TO UPDATE THE ICON

const iconUpdate = function (input) {
  if (cloudyArr.includes(input)) {
    return cloudySvg;
  }
  if (partiallySunnyArr.includes(input)) {
    return partiallySunnySvg;
  }
  if (rainnyArr.includes(input)) {
    return rainnySvg;
  }
  if (snowArr.includes(input)) {
    return snowSvg;
  }
  if (sunnyArr.includes(input)) {
    return sunnySvg;
  }
  if (thunderstormArr.includes(input)) {
    return thunderstormSvg;
  }
};

// FUNCTION TO CONVERT TIMESTAMP INTO THE HOUR

const updateTimeStamp = function (input) {
  const timestamp = input * 1000; // Convert timestamp to milliseconds
  const date = new Date(timestamp);
  return date.getUTCHours();
};

const getWeekDay = function (input) {
  const timestamp = input * 1000;
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-GB", { weekday: "short" });
};

const apiKey = "a7022dab0b8b2eb655da25e109cb53fc";
const fiveDayAPI =
  "https://api.openweathermap.org/data/2.5/forecast?q=Tirana&units=metric&appid=a7022dab0b8b2eb655da25e109cb53fc";

function updateWeather() {
  fetch(fiveDayAPI)
    .then((response) => response.json())
    .then((data) => {
      let weatherList = Object.entries(data.list);
      let i = 0;
      cityTemp.textContent = Math.round(weatherList[0][1].main.temp) + "°";
      weatherList.forEach((el) => {
        bottomEl.innerHTML += `<div class="weatherItem">
        <h2 class="weatherDayName">${getWeekDay(weatherList[i][1].dt)}</h2>
        <h3 class="weatherTime">${
          updateTimeStamp(weatherList[i][1].dt) < 10
            ? "0" + updateTimeStamp(weatherList[i][1].dt)
            : updateTimeStamp(weatherList[i][1].dt)
        }:00</h3>
        <span class="weatherIcons">${iconUpdate(
          weatherList[i][1].weather[0].id
        )}</span>
        <p class="weatherTemp">${Math.round(weatherList[i][1].main.temp)}°</p>
      </div>`;

        i++;
      });

      for (let i = 0; i < 5; i++) {
        cityDays[i].innerHTML = `<h2 class="cityDayName">${getWeekDay(
          weatherList[i * 8][1].dt
        )}</h2>
        <span class="weatherIcons cityIcon">${iconUpdate(
          weatherList[i * 8][1].weather[0].id
        )}</span>
        <p class="cityDayTemp">${Math.round(
          weatherList[i * 8][1].main.temp
        )}°</p>`;
      }
    })
    .catch((error) => console.error(error));
}

updateWeather();

const container = bottomEl;
let isDragging = false;
let startPosition = { x: 0, y: 0 };
let lastTimestamp = 0;

container.addEventListener("mousedown", startDrag);
container.addEventListener("mouseup", stopDrag);
container.addEventListener("mouseleave", stopDrag);
container.addEventListener("mousemove", drag);

function startDrag(event) {
  isDragging = true;
  startPosition = {
    x: event.clientX,
    y: event.clientY,
  };
  lastTimestamp = performance.now();
  requestAnimationFrame(scrollContent);
}

function stopDrag() {
  isDragging = false;
}

function drag(event) {
  if (!isDragging) return;

  event.preventDefault();

  const offsetX = event.clientX;
  const offsetY = event.clientY;

  const deltaX = offsetX - startPosition.x;
  const deltaY = offsetY - startPosition.y;

  container.scrollLeft -= deltaX;
  container.scrollTop -= deltaY;

  startPosition = {
    x: offsetX,
    y: offsetY,
  };
}

function scrollContent(timestamp) {
  if (!isDragging) return;

  const deltaTime = timestamp - lastTimestamp;
  lastTimestamp = timestamp;

  requestAnimationFrame(scrollContent);

  const speedFactor = 1;
  const mouseX = container.scrollLeft + startPosition.x;
  const mouseY = container.scrollTop + startPosition.y;
  const deltaX = (event.clientX - mouseX) * speedFactor;
  const deltaY = (event.clientY - mouseY) * speedFactor;

  container.scrollLeft -= deltaX;
  container.scrollTop -= deltaY;
}
