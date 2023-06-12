let modal = document.querySelectorAll('.modal');
let modalClose = document.querySelectorAll('.modal__close');

if (!document.cookie.includes('modal=closed')) {
    modal[0].classList.add("modal_active");
    modalClose[0].addEventListener("click", () => {
       modal[0].classList.remove("modal_active");
       document.cookie = 'modal=closed';      
    })
 } 