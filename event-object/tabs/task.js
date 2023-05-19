const tabs = document.getElementsByClassName('tab');
const contents = document.getElementsByClassName('tab__content');

tabs[0].onclick = function() {
  tabs[0].classList.add('tab_active');
  contents[0].classList.add('tab__content_active');
  contents[1].classList.remove('tab__content_active');
  contents[2].classList.remove('tab__content_active');
}

tabs[1].onclick = function() {
  tabs[1].classList.add('tab_active');
  contents[1].classList.add('tab__content_active');
  contents[0].classList.remove('tab__content_active');
  contents[2].classList.remove('tab__content_active');
  }

tabs[2].onclick = function() {
    tabs[2].classList.add('tab_active');
    contents[2].classList.add('tab__content_active');
    contents[1].classList.remove('tab__content_active');
    contents[0].classList.remove('tab__content_active');
  }
