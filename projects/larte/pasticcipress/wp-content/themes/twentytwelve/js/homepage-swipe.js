
window.carousel = jQuery('.swipe').Swipe({
  ready: function(){
    jQuery('.gallery').removeClass('dormant')
  },
  callback: function(index, element) {
    jQuery('.dots div').removeClass('on');
    jQuery('.dots div').eq(index).addClass('on')
  },
  continuous: false,
  // startSlide: 4,
  auto: 3000
  // continuous: true,
  // disableScroll: true,
  // stopPropagation: true,
  // transitionEnd: function(index, element) {}
}).data('Swipe');

for(x = 0; x < carousel.getNumSlides(); x++){
  jQuery('.dots').append('<div>')
}
jQuery('.dots div:first-child').addClass('on');

jQuery('.dots div').click(function(){
  carousel.slide( jQuery(this).index() )
});

