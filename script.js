// slick slider js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // sub menu all 
 $(".all-btn").click(function(){
  $(".all-sub-menu").addClass("all-menu")
 })

 $(".all-close-btn").click(function(){
  $(".all-sub-menu").removeClass("all-menu")
 })