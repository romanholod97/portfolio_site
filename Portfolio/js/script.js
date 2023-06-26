const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
})
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
})

const counters = document.querySelectorAll('.skill__ratings-counter'),
      lines = document.querySelectorAll('.skill__ratings-line span');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });

const $page = $('html, body');
    $('a[href*="#"]').click(function() {
        const href = $.attr(this, 'href');
        $page.animate({
            scrollTop: $(href).offset().top
        }, 1200, function () {
            window.location.hash = href;
        });
        return false;
});