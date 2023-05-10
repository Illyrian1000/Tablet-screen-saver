const timeEl = document.querySelector(".hour");
const secondsEl = document.querySelector(".seconds");
const dateEl = document.querySelector(".date");

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
};

setInterval(updateTime, 1000);

// no errors until now
