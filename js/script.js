
var containerEl = document.querySelector('.filtergal');
var mixer = mixitup(containerEl);

$('.slickService').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
  nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
});

$('.serviceSlick').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fa-solid fa-arrow-left prevSeond"></i>',
  nextArrow: '<i class="fa-solid fa-arrow-right nextSecond"></i>',
});

$('.serviceSlickThree').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fa-solid fa-arrow-left prevSeond"></i>',
  nextArrow: '<i class="fa-solid fa-arrow-right nextSecond"></i>',
});