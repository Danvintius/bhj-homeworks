const hasTooltip = document.querySelectorAll('.has-tooltip')

for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].onclick = function() {
        hasTooltip[i].classList.add('tooltip_active');
        return false;
    }
}