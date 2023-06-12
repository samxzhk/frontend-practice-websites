const {log, dir} = console;

/* ========= GLOBAL VARIABLES =========== */
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section[id]');
const header = document.getElementById('header');
const scrolltop = document.getElementById('scroll-top');
/* ===========  FUNCTIONS ========== */
function showMenu(toggle, nav)
{
    // check if the element exists
    if(toggle && nav)
    {
        toggle.addEventListener('click', ()=>
        {
            nav.classList.toggle('show-menu');
        })
    }
}
function removeMenuOnClick(navMenu)
{
    navMenu.classList.remove('show-menu');
}

function activeSectionScroll(sections)
{
    const scrollY = window.scrollY;
    sections.forEach(section =>
        {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 50;
            const sectionId = section.getAttribute('id');

           
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            {
                document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
            }
            else 
            {
                document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
            }
        })
}
function scrollHeader(nav)
{
    if(this.scrollY >= 200)
    {
        nav.classList.add('scroll-header');
    }
    else 
    {
        nav.classList.remove('scroll-header');
    }
}
function showScrollTop(scrolltop)
{
    if(this.scrollY >= 560)
    {
        scrolltop.classList.add('show-scroll');
    }
    else 
    {
        scrolltop.classList.remove('show-scroll');
    }
}
/* ======== FUNCTION INVOCATION ====== */
showMenu(toggle, nav);
navLink.forEach(link => link.addEventListener('click', removeMenuOnClick.bind(null, nav)));
window.addEventListener('scroll', activeSectionScroll.bind(null, sections));
window.addEventListener('scroll', scrollHeader.bind(this, header));
window.addEventListener('scroll', showScrollTop.bind(this, scrolltop));