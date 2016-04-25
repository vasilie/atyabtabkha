$(function(){
  $(".header__menu-ico").click(function(){
    $(".w-nav").toggleClass("active");
    $(".header__menu-ico").toggleClass("active");
  });
  if($(window).width() > 640){
    appetizerSlider();
  } else {
    cookbooksSlider();
  }
});
var slider_position = 0;
function slide(direction, speed){
  var slidesLength = $(".sleekslider .slide").length,
      $slider = $(".sleekslider");
  if (direction == 'left' && slider_position <= slidesLength -2){
    slider_position++;
  } else if (direction=='right' && slider_position >= 1 ){
    slider_position--;
  }
  $slider.animate({left:slider_position*100+'vw'},speed);
}
function appetizerSlider(){
  var $slides = $(".w-appetizer__media"),
      $thumbs = $(".w-appetizer__nav > .w-appetizer__nav__item"),
      slide_interval;
    active_slide = 0;
    startInterval();
    $thumbs.click(function(){
      active_slide = $thumbs.index(this);
      animateSlider();
      startInterval();
    });
  function animateSlider(){
    $($slides).removeClass("active");
    $($slides[active_slide]).addClass("active");
    $($thumbs).removeClass("active");
    $($thumbs[active_slide]).addClass("active");
  }
  function startInterval(){
    clearInterval(slide_interval);
    slide_interval = setInterval(function(){
      active_slide++;
      active_slide = active_slide % 3;
      animateSlider();
    },5000);
  }
}
function cookbooksSlider(){
  var $cookbooks = $('.b-featured-cookbooks'),
      $cookbooks_list = $('.b-featured-cookbooks__list'),
      $cookbooks_list_item = $('.b-featured-cookbooks__item'),

      slider_position = 1;
  $cookbooks.swipe({
    allowPageScroll:"vertical",
    swipe:function(event, direction, distance, duration, fingerCount){
      if (direction == "left" && slider_position >0) {
        slider_position--;
      } else if (direction == "right" && slider_position < $cookbooks_list_item.length-1){
        slider_position++;
      }
      var left = 56 * slider_position + 7;
      $cookbooks_list.animate({"left":left + 'vw'});
    }
  });
}
