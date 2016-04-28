$(function(){
  $(".header__menu-ico").click(function(){
    $(".w-nav").toggleClass("active");
    $(".header__menu-ico").toggleClass("active");
  });
  sleeksliderInit();
  if($(window).width() > 640){
    appetizerSlider();
  } else {
    cookbooksSlider();
  }

});
var slider_position = 0;
var $slider,
    $slide,
    $slidesLength;
function sleeksliderInit(){

  if($(window).width() < 480){
      $slider = $(".sleekslider-container.mobile .sleekslider");
  } else {
      $slider = $(".sleekslider-container.desk .sleekslider");
  }
    $slide = $slider.find(".slide");
    slidesLength = $slide.length;
    slider_width = slidesLength*100;
    $slider.css({"width":slider_width + '%'});
    $slide.css({"width":100/ slidesLength + '%', "display":"block"});
}
function slide(direction, speed){
  if (direction == 'left' && slider_position <= slidesLength -2){
    slider_position++;
    $slider.animate({left:slider_position*100+'%'},speed);
  } else if (direction=='right' && slider_position >= 1 ){
    slider_position--;
    $slider.animate({left:slider_position*100+'%'},speed);
  }
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
  var $cookbooks = $('.w-featured-cookbooks'),
      $cookbooks_list = $('.w-featured-cookbooks__list'),
      $cookbooks_list_item = $('.w-featured-cookbooks__item'),
      slider_position = 1;
  $cookbooks.swipe({
    // allowPageScroll:"vertical",
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
