$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 2,
    },
    720: {
      items: 3,
    },
    960: {
      items: 5,
    },
    1280: {
      items: 7,
    },
  },
});
