$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,  // 移除左右箭頭
        dots: true,  // 啟用指示器
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 4
            }
        }
    });
  });
  