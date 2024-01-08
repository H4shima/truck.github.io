document.addEventListener("DOMContentLoaded", function() {
  const firstNumber = document.getElementById("first-number");
  const secondNumber = document.getElementById("second-number");
  const thirdNumber = document.getElementById("third-number");
  const fourthNumber = document.getElementById("fourth-number");

  let targetCounter = firstNumber;

  window.addEventListener("scroll", function () {
    const counter = document.querySelector(".counter");
    const counterCoords = counter.getBoundingClientRect();

    if (counterCoords.top <= window.innerHeight && targetCounter === firstNumber) {
      startCounter(7, firstNumber, 1000);
      targetCounter = secondNumber;
    }

    if (counterCoords.top <= window.innerHeight && targetCounter === secondNumber) {
      startCounter(758, secondNumber, 500);
      targetCounter = thirdNumber;
    }

    if (counterCoords.top <= window.innerHeight && targetCounter === thirdNumber) {
      startCounter(1153, thirdNumber, 500);
      targetCounter = fourthNumber;
    }

    if (counterCoords.top <= window.innerHeight && targetCounter === fourthNumber) {
      startCounter(125, fourthNumber, 1000);
      targetCounter = null;
    }
  });

  function startCounter(end, element, interval) {
    let current = 0;
    const counterInterval = setInterval(function () {
      if (current === end) {
        clearInterval(counterInterval);
      }

      if (element) {
        element.innerHTML = current;
      }

      current++;
    }, interval / end);
  }
});
