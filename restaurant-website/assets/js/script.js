const navLink = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("section[id]");

const showMenu = (toggleId, navId) =>
{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav)
    {
        toggle.addEventListener('click', ()=>
        {
            nav.classList.toggle('show-menu');
        })
    }
}

function scrollActive()
{
    const scrollY = window.scrollY;
    sections.forEach((section) =>
    {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add("active-link");
        }
        else 
        {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove("active-link");
        }
    })
}
function scrollHeader()
{
    const nav = document.getElementById("header");
    if(this.scrollY >=200)
    {
        nav.classList.add("scroll-header")
    }
    else 
    {
        nav.classList.remove("scroll-header");
    }

}

const linkAction = () =>
{
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

function scrollTop()
{
    const scrollTop = document.getElementById("scroll-top");
    if(this.scrollY >=560)
    {
        scrollTop.classList.add("scroll-top");
    }
    else 
    {
        scrollTop.classList.remove("scroll-top");
    }
}

navLink.forEach(link => link.addEventListener("click", linkAction));

showMenu('nav-toggle', 'nav-menu');

window.addEventListener("scroll", scrollHeader);
window.addEventListener("scroll", scrollTop);
window.addEventListener("scroll", scrollActive);