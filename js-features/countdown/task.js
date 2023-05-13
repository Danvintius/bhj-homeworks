const timerFunc = function() {
  const timer = document.getElementById('timer');
  timer.textContent --;
  if (timer.textContent <= 0) {
    timer.textContent = 0;
    alert("Вы победили в конкурсе!");
    clearInterval(intervalId);
  }
  }

const intetvalId = setInterval(timerFunc, 1000);

