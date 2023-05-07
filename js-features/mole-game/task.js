const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

getHole = (index) => document.getElementById(hole$,{index});
for (index = 1; index < 10; index++) {
    let hole = getHole(index);
    return hole;
}

hole.onclick = function() {
    if (hole.classList.contains( 'hole_has-mole' )) {
        dead.textContent++;  
    } else {
        lost.textContent++;
    }
}

if (dead.textContent >= 10) {
    alert("Победа!");
    lost.textContent = 0;
}

if (lost.textContent >= 5) {
    alert("Вы проиграли");
    lost.textContent = 0;
}

