
$('.banner-section__slider').slick({
  dots: true,
  prevArrow: '<button class="banner-section__arrow banner-section__arrow--prev"><svg class="icon icon-arrow-left"><use xlink:href="images/sprite.svg#icon-arrow-left"></use></svg></button>',
  nextArrow: '<button class="banner-section__arrow banner-section__arrow--next"><svg class="icon icon-arrow-right"><use xlink:href="images/sprite.svg#icon-arrow-right"></use></svg></button>',
});

$('.tab').on('click', function(e){
  e.preventDefault(); 

  $($(this).siblings()).removeClass('active');
  $($(this).parent().siblings().find('div')).removeClass('active');

  $(this).addClass('active')
  $($(this).attr('href')).addClass('active');

});

$('.product-item__favorite').on('click', function(){
  $(this).toggleClass('active')
});

$('.popular-product__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button class="popular-product__arrow popular-product__arrow--prev"><svg class="icon icon-arrow-left"><use xlink:href="images/sprite.svg#icon-arrow-left"></use></svg></button>',
  nextArrow: '<button class="popular-product__arrow popular-product__arrow--next"><svg class="icon icon-arrow-right"><use xlink:href="images/sprite.svg#icon-arrow-right"></use></svg></button>',
});

$('.filter-style').styler();

$('.filters-form__title ').mousedown('click', function(){
  $(this).toggleClass('active')
  $(this).next().toggleClass('active')
  $(this).next().slideToggle(200)
});

$(".js-range-slider").ionRangeSlider();