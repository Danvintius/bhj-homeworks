const dValue = document.querySelector('.dropdown__value')
const list = document.querySelector('.dropdown__list')
let item = document.querySelectorAll('.dropdown__item')
dValue.onclick = function() {
  list.classList.toggle('dropdown__list_active');
}

for (let i = 0; i < item.length; i++) {
  item[i].onclick = function() {
    list.classList.remove('dropdown__list_active');
    dValue.textContent = item[i].textContent;
    return false;
}
}