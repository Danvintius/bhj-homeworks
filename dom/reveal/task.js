const revealE = document.querySelectorAll('.reveal');

const isInViewport = function(element){
   const viewportHeight = window.innerHeight;
   const elementTop = element.getBoundingClientRect().top;
   const elementBottom = element.getBoundingClientRect().bottom;

   return viewportHeight > elementTop && elementBottom > 0;
};

document.onscroll = function() {
   revealE.forEach(element => {
       if(isInViewport(element)) {
           element.classList.add('reveal_active');
       } else {
           element.classList.remove('reveal_active');
       }
   });
}