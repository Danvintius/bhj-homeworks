let rotatorCase = document.querySelectorAll('.rotator__case')

const rotation = function() {
//    setTimeout(() => {
        for (let i = 0; i < rotatorCase.length; i++) {
    rotatorCase[i].classList.add('rotator__case_active');
    rotatorCase[i].classList.remove('rotator__case_active');
  }//, 1000);
}

const intervalId = setInterval(rotation, 1000);