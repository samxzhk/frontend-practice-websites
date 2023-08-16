/** OPEN AND CLOSE THE MAIN MENU  */
const navMenu = document.querySelector('.nav');
const navToggle = document.querySelector('[data-nav-toggle]');
const openCloseIcon = document.querySelector('[data-nav-open]');

navToggle.addEventListener('click', () =>
{
    navMenu.classList.toggle('show-menu');
    if(openCloseIcon.classList.contains('ri-menu-line'))
    {
        openCloseIcon.classList.remove('ri-menu-line');
        openCloseIcon.classList.add('ri-close-line');
    }
    else 
    {
        openCloseIcon.classList.add('ri-menu-line');
        openCloseIcon.classList.remove('ri-close-line');
    }
})


/** OPEN AND CLOSE THE SUBMENU */
const itemWithSubMenu = document.querySelector('.nav__item.has-subnav');
const subNav = document.querySelector('.nav__subnav');

itemWithSubMenu.addEventListener('click', () =>
{
   itemWithSubMenu.classList.toggle('show-subnav');
})


/* ============ SWIPER JS ============= */
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
      grabCursor: true,
      autoplay:true,
      centeredSlides: true,
      loop:true,
      slidesPerView: 2,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      breakpoints:
      {
        270:
        {
            slidesPerView:1
        },
        600:
        {
            slidesPerView:2
        }

      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });