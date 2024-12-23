$(document).ready(function(){

// search sm
$('#smSearchBtn').click(function(){
    $('.searchSm').addClass('active')
})
$('.searchSm .closeBtn').click(function(){
    $('.searchSm').removeClass('active')
})


// mobile bottom header
$('.mobileBottomIcon').click(function(){
    $('#mobileBottom').addClass('.active')
})

 // BANNER Section
 $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 20000,
    prevArrow: "#bannerLeftArrow",
    nextArrow: "#bannerRightArrow",
    dots: true,
    dotsClass: "banner-dots",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          
          dots: false,
        },
      },
     
    ],
  });

  



})