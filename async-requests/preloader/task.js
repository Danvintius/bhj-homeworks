let valute;
const valuteContainer = document.getElementById('items');
const loader = document.getElementById('loader');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = "json";
xhr.send();

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        valute = xhr.response.response.Valute;
        console.log(valute);
        console.log(typeof(valute));    
    }

    loader.classList.toggle('loader_active');

    for (let valuteItem in valute) {
        valuteContainer.insertAdjacentHTML("afterBegin",
        `<div class="item__code">${valute[valuteItem]["CharCode"]}</div>
        <div class="item__value">${valute[valuteItem]["Value"]}</div>
        <div class="item__currency">руб.</div>`);
    }
}