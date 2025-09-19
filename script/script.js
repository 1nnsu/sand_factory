

document.addEventListener("DOMContentLoaded", function(e){
    aboutSlide();
    reviewSlide();
    spaceSlide();
    floatingMenu();
})
// sec2
const aboutSlide = () => {
    var swiper = new Swiper(".aboutSwiper", {
        loop:true,
        spaceBetween: 0,
        slidesPerView: 6,
        centeredSlides: true,
        speed: 3000,
        autoplay: {
        delay: 0,
    },
        waitForTransition: false, // 클릭 후에도 즉시 이어서 이동
    });
}
// sec4
const reviewSlide = () => {
    var swiper = new Swiper(".reviewSwiper", {
        loop:true,
        spaceBetween: 10,
        slidesPerView: 3,
        centeredSlides: true,
        speed: 3000,
        // autoplay: {
        // delay: 0,
        // disableOnInteraction: false
        // }
    });
}
// sec5
const spaceSlide = () => {
    var swiper = new Swiper(".spaceSwiper", {
        loop:true,
        spaceBetween: 10,
        slidesPerView: 1,
        centeredSlides: true,
        speed: 1000,
        autoplay: {
        delay: 500,
        disableOnInteraction: false
        },
        navigation: {
        nextEl: ".sec5_next",
        prevEl: ".sec5_prev",
        },
        loopedSlides: 3
    });
}


const floatingMenu = () => {
    $('.float_menu .btnBox').click(function(){
        $('.float_menu').toggleClass('hide');
        // $('.float_menu ul').stop().slideToggle();
        // $('.f_click').toggleClass('on');
    })
}