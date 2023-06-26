$(document).ready(function(){
	$('.header__burger').click(function() {
		$('.header__burger').toggleClass('header__burger-active');
		$('.header__menu').toggleClass('header__menu-active');
		$('body').toggleClass('lock');
	})
	
	$('ul.menu__tabs').on('click', 'li:not(.menu__tab_activ)', function() {
		$(this)
			.addClass('menu__tab_activ').siblings().removeClass('menu__tab_activ')
			.closest('div.container').find('div.menu__item').removeClass('menu__item_active').eq($(this).index()).addClass('menu__item_active');
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
			})
})