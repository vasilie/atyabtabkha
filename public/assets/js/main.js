$(function(){
  $(".header__menu-ico").click(function(){
    $(".nav").toggleClass("active");
    $(".header__menu-ico").toggleClass("active");
  });
});
// $(window).resize(function(){
//   if ($(window).width()<997){
//     var percent =  $(window).width() /997;
//     var left = (100 - (100 * percent)) / 2;
//     $(".mpu").css({"transform":"scale("+percent+")"});
//   }
// });
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
