const book = document.querySelector('.book');
const small = document.querySelector('.font-size_small');
const big = document.querySelector('.font-size_big');
const font = document.querySelectorAll('.font-size');
/*
for (let i = 0; i < font.length; i++) {
    font[i].onclick = function() {
      font[i].classList.add('font-size_active');
      if (font[i] == small) {
        book.classList.add('book_fs-small');
      } else if (font[i] == big) {
        book.classList.add('book_fs-big');
      }
      return false;
    }   
}*/

small.onclick = function() {
  small.classList.add('font-size_active');
  book.classList.add('book_fs-small');
  big.classList.remove('font-size_active');
  return false;
}

big.onclick = function() {
  big.classList.add('font-size_active');
  book.classList.add('book_fs-big');
  small.classList.remove('font-size_active');
  return false;
}