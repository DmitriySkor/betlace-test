// Mobile menu

$(document).ready(function(){
    $(".menu_icon").click(function(){
        $(".menu_icon").toggleClass("active")
    })
    $(".menu_icon").click(function(){
        $(".menu_mobile").toggleClass("active")
    })
    $(".phone_ico").click(function(){
        $(".phone_list").toggleClass("active")
    })
});




// Owl-carousel

$('.main_carousel').owlCarousel({
  loop:true,
  nav:true,
  dots:true,
  // autoWidth:true,
  loop:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})