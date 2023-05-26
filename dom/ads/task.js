let rotatorCase = document.querySelectorAll('.rorator__case')

const rotation = function() {
  for (let i = 0; i < rotatorCase.length; i++) {
    rotatorCase[i].classList.add('rotator__case_active');
  }
}

const intervalId = setInterval(rotation, 1000);