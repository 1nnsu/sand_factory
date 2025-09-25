

document.addEventListener("DOMContentLoaded", function(e){
    aboutSlide();
    reviewSlide();
    spaceSlide();
    floatingMenu();
    videoSlide();
    edu_1_click();
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
        slidesPerView: 5,
        centeredSlides: true,
        speed: 4000,
        loopedSlides: 5,
        allowTouchMove: false,
        autoplay: {
        delay: 0,
        disableOnInteraction: false
        },
        breakpoints: {
            1250: {
                slidesPerView: 3,
                centeredSlides: true,
            },
            500: {
                slidesPerView: 2,
                centeredSlides: true,
            },
        },
    });
}
const videoSlide = () => {
    var swiper = new Swiper(".videoSwiper", {
        loop:true,
        spaceBetween: 30,
        slidesPerView: 3.3,
        centeredSlides: true,
        speed: 3000,
        // autoplay: {
        // delay: 0,
        // disableOnInteraction: false
        // },
        allowTouchMove: false,
    });
    const swiperEl = document.querySelector(".videoSwiper");
    swiperEl.addEventListener("mouseenter", () => swiper.autoplay.stop());
    swiperEl.addEventListener("mouseleave", () => swiper.autoplay.start());
    
}
// sec5
const spaceSlide = () => {
    var swiper = new Swiper(".spaceSwiper", {
        loop:true,
        // spaceBetween: 10,
        // slidesPerView: 'auto',
        centeredSlides: true,
        speed: 2000,
        // autoplay: {
        // delay: 0,
        // disableOnInteraction: false
        // },
        navigation: {
        nextEl: ".sec5_next",
        prevEl: ".sec5_prev",
        },
        loopedSlides: 3,
    });
}


const floatingMenu = () => {
    $('.float_menu .btnBox').click(function(){
        $('.float_menu').toggleClass('hide');
        // $('.float_menu ul').stop().slideToggle();
        // $('.f_click').toggleClass('on');
    })
}
// sec6

const edu_1_click = () => {
    $('.edu_1 li').click(function(){
        // $('.edu_1 li').removeClass('on');
        $(this).toggleClass('on');
    })
}