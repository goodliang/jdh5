/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-18 16:07:35
 * @version $Id$
 */
var bgMusic 
var bgM = document.getElementById("bgMusic")
function play() {
    var audio = document.getElementById("bgMusic");
    //播放
    audio.play();
}
function boxPlay() {
    var audio = document.getElementById("openBox");
    //播放
    audio.load()
    audio.play();
}
var playOff = true

function audioAutoPlay(id){
      var audio = document.getElementById(id);
      audio.play();

      document.addEventListener("WeixinJSBridgeReady", function () {
              audio.play();
      }, false);
}
audioAutoPlay('chilun')
var swiperV = new Swiper('.swiper-container-v', {
    pagination: {
        el: '.swiper-pagination-v',
        clickable: true,
    },
    direction: 'vertical',
    //effect: 'fade',
    allowTouchMove: false,
    //initialSlide: 0,
    on: {
        slideChange: function() {
            console.log(this.activeIndex)
            if (this.activeIndex == 1) {
                $('#jewel-box').addClass('jewel-box')
            }
        },
    }
})
$('#xfhf').on('click', function() {
    swiperV.slideTo(2);
});
$('#kqhl').on('click', function() {
    swiperV.slideTo(3);
});
$('#grhl').on('click', function() {
    swiperV.slideTo(4);
});
$('#sthl').on('click', function() {
    swiperV.slideTo(5);
});
$('.back-btn').on('click', function() {
    swiperV.slideTo(1);
});
var swiperH = new Swiper('.swiper-container-h', {
    pagination: {
        el: '.swiper-pagination-h',
        clickable: true,
    },  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    direction: 'horizontal',
    initialSlide: 0
})
move('.loading-line').translate(0, 0).duration('5s').end(function() {
    $('.loading-title').hide()
    $('.loading-bar').hide()
    $('.page1_logo_bg').fadeIn()
    // $('.page1_logo_bg').animate({opacity: '0.7'},2000);
    move('.page1_logo').scale(1).duration('.3s').delay('.4s').end();
});

$('.page1_logo').on('click', function() {
    move('.page1_top').y(-300).ease('out').duration('.5s').end(function() {
        swiperV.slideNext();
    });
    move('.page1_bottom').y(300).ease('out').duration('.5s').end()
    document.getElementById('chilun').pause();
    var bgN = 1
    bgM.volume = 0.2
    bgM.play();
    bgMusic = setInterval(function(){
        bgN++
        bgM.volume= '0.'+bgN;
        if(bgN == 9){
            clearInterval(bgMusic)
        }
        console.log(bgN)
    },1000);
   //  if (playOff) {
   //        audioAutoPlay('bgMusic')
	  //     playOff = false
	  // }
})

// $('.baohe-box-click,.photo-frame').on('click', function() {
//     $(this).parents('.goodsView').addClass('goodsViewOn');
// })
$('.baohe-box-click').on('click', function() {
    $(this).parents('.goodsView').addClass('goodsViewOn');
})
$('.goodsView .baohe-box-click').on('click', boxPlay)

if (window.location.hash === '#callback') {
    swiperV.slideTo(1)	
}