$(function(){
  $(".header__menu-ico").click(function(){
    $(".w-nav").toggleClass("active");
    $(".header__menu-ico").toggleClass("active");
  });
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
