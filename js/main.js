function openMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

//hamburger menu icon animation
$(document).ready(function () {
  $(".hamburger-shell").click(function () {
    $("#menu").slideToggle(300);
    $(".top").toggleClass("rotate");
    $(".middle").toggleClass("rotate-back");
    $(".menu-name").toggleClass("bump");
    $(".bg-cover").toggleClass("reveal");
  });
  $(".bg-cover").click(function () {
    $("#menu").slideToggle(300);
    $(".top").toggleClass("rotate");
    $(".middle").toggleClass("rotate-back");
    $(".menu-name").toggleClass("bump");
    $(".bg-cover").toggleClass("reveal");
  });
});

//slowscroll
SmoothScroll({
  stepSize: 50,
});

//adapte hamburger menu
$(document).on("scroll", function () {
  if ($(document).scrollTop() > 100) {
    $("header").addClass("small");
    $("#menu").addClass("menu-stretch ");
    $("#hamburger-shell").addClass("hamburger-shell-stretch");
    $("#header__logo").addClass("header__logo-stretch");
    $("#header__logo-text").addClass("header__logo-text-stretch");
    $("#header__language_switcher").addClass(
      "header__language_switcher-stretch"
    );
  } else {
    $("header").removeClass("small");
    $("#menu").removeClass("menu-stretch ");
    $("#hamburger-shell").removeClass("hamburger-shell-stretch");
    $("#header__logo").removeClass("header__logo-stretch");
    $("#header__logo-text").removeClass("header__logo-text-stretch");
    $("#header__language_switcher").removeClass(
      "header__language_switcher-stretch"
    );
  }
});


$(".counter-count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 5000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});


//слик слайдер

jQuery(document).ready(function ($) {
  $(".slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    nextArrow: '<img class="slick-prev" src="/img/right-arrow.png" alt="">',
    prevArrow: '<img class="slick-next" src="/img/left-arrow.png" alt="">',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});


$(document).ready(function () {
  $("a[href*=#]").bind("click", function (e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top,
        },
        600,
        function () {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
        }
      );

    return false;
  });
});

$(window)
  .scroll(function () {
    var scrollDistance = $(window).scrollTop();
    // Assign active class to nav links while scolling
    $(".page-section").each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $(".navigation a.active").removeClass("active");
        $(".navigation a").eq(i).addClass("active");
      }
    });
  })
  .scroll();
