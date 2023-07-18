const rotators = document.querySelectorAll(".rotator__case");
const rotatorMain = document.querySelector(".rotator");
let interval = 1000;

function rotation() {
  setTimeout(() => {
    for (let rot of rotators) {
          if (rot.nextElementSibling === null) {
        rotatorMain.firstElementChild.classList.add("rotator__case_active");
        rot.classList.remove("rotator__case_active");
      } else if (rot.classList.contains("rotator__case_active")) {
       rot.nextElementSibling.classList.add("rotator__case_active");
        rot.classList.remove("rotator__case_active");
        break;
      }
    }
  }, interval);
}
setInterval(rotation, interval);