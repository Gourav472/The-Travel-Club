function openNav() {
  document.getElementById("navbar").classList.toggle("start-0");
  document.body.classList.toggle("overflow_hidden");
  document.querySelector(".menu").classList.toggle("cross")
}
function upside() {
  document.getElementById("mini-svg").classList.toggle("translate_up")
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$('.responsive_1').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay:false,
  speed: 900,
  prevArrow: ".prev-btn",
  nextArrow: ".next-btn",
  responsive: [
    {
      breakpoint:1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

      }
    }
  ]
});