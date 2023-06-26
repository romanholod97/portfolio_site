$(document).ready(function(){
    $('.slider').slick({
      speed: 1200,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000
          }
        }
      ]  
    });

    //tabs

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_activ)', function() {
      $(this)
        .addClass('catalog__tab_activ').siblings().removeClass('catalog__tab_activ')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
        })
      })
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //modal window

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    })

    $('#consultation-form form').validate();

    // form validation

    function validateForms(form){
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: {
            required: "Пожалуйста, введите свое имя",
            minlength: jQuery.validator.format("Введите минимум {0} символа!")
          },
          phone: "Пожалуйста, введите свой номер телефона",
          email: {
            required: "Пожалуйста, введите свою почту",
            email: "Неправильно введен адрес почты. Пример: 'name@domain.com'"
          }
        }
      });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("(999) 999-99-99");

    // submit mail

    $('form').submit(function(e) {
      e.preventDefault();

      if (!$(this).valid()) {
        return;
      }

      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn();

        $('form').trigger('reset');
      });
      return false;
    });

    // page up and scroll smooth

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }

      $('a[href^="#up"]').bind("click", function(e){
        const _href = $(this);
        $('html, body').stop().animate({
        scrollTop: $(_href.attr('href')).offset().top
        }, 1500);
        e.preventDefault();
      });
        return false;
    });
    
    // wow animations
    
    new WOW().init();
});