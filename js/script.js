const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});
closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});


const counters = document.querySelectorAll(".skill__ratings-counter"),
  lines = document.querySelectorAll(".skill__ratings-line span");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

// to up 

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }

    $('a[href^="#up"]').bind("click", function (e) {
      const _href = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(_href.attr("href")).offset().top,
          },
          1500
        );
      e.preventDefault();
    });
    return false;
  });

  var $page = $("html, body");
  $('a[href*="#"]').click(function () {
    $page.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1500
    );
    return false;
  });

  // animation

  new WOW(
    {
      offset: 50,
      mobile: false
    }
  ).init();
});
