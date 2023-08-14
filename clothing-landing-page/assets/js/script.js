/* ============== CHANGE BACKGROUND HEADER ======== */


const scrollHeader = () =>
{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? 
        header.classList.add('scroll-header') :
        header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/* ======= SWIPER JS =========== */
const products_swiper = new Swiper(".products__container",
{
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides:true,
    slidesPerView:'auto',
    loop:true,
    navigation:
    {
        nextEl:".swipe-button-next",
        prevEl:".swipe-button-prev"
    },
    breakpoints:
    {
        630:
        {
            loop:true,
        },
        1024:
        {
            spaceBetween: 72,
        }
    }
});

/* active link when on a certain section */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>
{
    const scrollY = window.scrollY;
    sections.forEach(section =>
        {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 60;
            const sectionId = section.getAttribute('id');
            const navLinkForSection = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            {
                navLinkForSection.classList.add('active-link');
            }
            else 
            {
                navLinkForSection.classList.remove('active-link');
            }
        })
}

window.addEventListener('scroll', scrollActive);

/* =========== SHOW SCROLL UP ============= */
const scrollUp = () =>
{
    const scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);


/* ========= CHANGE THEME ========= */
const changeThemeButton = document.getElementById('change-theme');

changeThemeButton.addEventListener('click', ()=>
{
    if(changeThemeButton.classList.contains('ri-moon-line'))
     {
        document.body.classList.add('dark-theme');
        changeThemeButton.classList.remove('ri-moon-line');
        changeThemeButton.classList.add('ri-sun-line');
        return;
    }
    if(!changeThemeButton.classList.contains('ri-moon-line'))
    {
        document.body.classList.remove('dark-theme');
        changeThemeButton.classList.remove('ri-sun-line');
        changeThemeButton.classList.add('ri-moon-line');
    } 

})