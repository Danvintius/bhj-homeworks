const clicker = document.querySelector('.clicker__cookie')
clicker.onclick = function() {
  let count = document.getElementById('clicker__counter')
  count.textContent++;
  }

