const timers = function() {
  const timer = document.getElementById('timer');
  timer.textContent--;
  if (timer.textContent <=0) {
    alert("Вы победили в конкурсе!");
  }
  }

setInterval(timers,1000)
