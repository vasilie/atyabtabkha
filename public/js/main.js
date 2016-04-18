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
