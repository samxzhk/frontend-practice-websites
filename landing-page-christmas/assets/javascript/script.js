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
    if(toggle && nav)
    {
        toggle.addEventListener('click', ()=>
        {
            nav.classList.toggle('show-menu');
        })
    }
}

function linkAction(navMenu)
{
    navMenu.classList.remove('show-menu')
}
function scrollActive(sections)
{
    const scrollY = window.scrollY;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector(`.nav__menu a[href*='${sectionId}']`).classList.add('active-link');
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

function showScrollTop(scrollTop)
{
    if(this.scrollY >= 560)
    {
        scrollTop.classList.add('show-scroll');
    }
    else
    {
        scrollTop.classList.remove('show-scroll');
    }
}
navLink.forEach(item => item.addEventListener('click', linkAction.bind(this, nav)));
showMenu(toggle, nav);
window.addEventListener('scroll', scrollActive.bind(this, sections));
window.addEventListener('scroll', scrollHeader.bind(this, header));
window.addEventListener('scroll', showScrollTop.bind(this, scrolltop));

/* ============ DARK LIGHT THEME  =============== */

const themebutton = document.getElementById('theme-button');
const darkTheme = "dark-theme";
const iconTheme ='bx-toggle-right'
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');





if(selectedTheme)
{
    document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove'](darkTheme);
    /* this looks to me like a reversed logical thinking */
    themebutton.classList[selectedIcon == 'bx-toggle-left' ? 'add' : 'remove'](iconTheme);

}

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themebutton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right';

themebutton.addEventListener('click', ()=>
{
    /* - light theme  */
    document.body.classList.toggle(darkTheme); /* dark theme */
    themebutton.classList.toggle(iconTheme); /*adds box-toggle-right */
    localStorage.setItem('selected-theme', getCurrentTheme()); /* (selected-theme, 'dark') */
    localStorage.setItem('selected-icon', getCurrentIcon()); /* (selected-icon, 'bx-toggle-left') */
})


