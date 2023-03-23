$(".comentarios__card__container").slick({
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000,
  accessibility: false,
  dots: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

let menuBurger = document.querySelector(".menu-burger");
let nav = document.querySelector(".cabecalho__nav");
let body = document.querySelector(".fade");

menuBurger.addEventListener("click", (e) => {
  nav.classList.toggle("ativo");

  body.classList.toggle("ativo");
});
