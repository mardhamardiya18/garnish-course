$(document).ready(()=>{
    $(document).scroll(()=>{
       $('.navbar').toggleClass('active', $(this).scrollTop() > $('.navbar').height())
     
    })
})


const swiper = new Swiper(".mySwiperTesti", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
  });