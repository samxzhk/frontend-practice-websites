const {log, dir} = console;

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");
const header = document.getElementById("header");
const scrollup = document.getElementById("scroll-up");
const sections = document.querySelectorAll("section[id]");

if(navToggle)
{
    navToggle.addEventListener("click", ()=>
    {
        navMenu.classList.add("show-menu");
    })
}
if(navClose)
{
    navClose.addEventListener("click", ()=>
    {
        navMenu.classList.remove("show-menu");
    })
}

function linkAction(navMenu)
{
    navMenu.classList.remove("show-menu");

}

function scrollActiveSection(sections)
{
    const scrollY = window.scrollY;
    sections.forEach(section => 
        {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 58;
            const sectionId = section.getAttribute("id");
            const sectionClassLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            {
                sectionClassLink.classList.add("active-link");
            } 
            else 
            {
                sectionClassLink.classList.remove("active-link");
            }
        })
}

function blurHeader(header)
{
    this.scrollY >= 50 ? header.classList.add("blur-header") : 
                         header.classList.remove("blur-header"); 
}
function scrollUpFunc(scrollupItem)
{
    this.scrollY >= 350 ?
    scrollupItem.classList.add("show-scroll") :
    scrollupItem.classList.remove("show-scroll");
}

navLink.forEach(link => link.addEventListener('click', linkAction.bind(this, navMenu)));
window.addEventListener("scroll", blurHeader.bind(this, header));
window.addEventListener("scroll", scrollUpFunc.bind(this, scrollup));
window.addEventListener("scroll", scrollActiveSection.bind(this, sections));