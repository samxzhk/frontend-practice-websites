const SUBNAV_TOGGLE = document.querySelector('.nav__item:has(span[data-subnav-toggle])');
const NAV_OPEN = document.querySelector('[data-nav-open]');
const NAV_CLOSE = document.querySelector('[data-nav-close]');
const NAV = document.querySelector('nav');

const NAV_ACTION = document.querySelector('.nav__action');
SUBNAV_TOGGLE.addEventListener('click', () =>
{
    console.log('this work');
    SUBNAV_TOGGLE.classList.toggle('show-subnav');
})

NAV_ACTION.addEventListener('click', () =>
{
    NAV.classList.toggle('show-menu');
    NAV_OPEN.classList.toggle('hidden');
    NAV_CLOSE.classList.toggle('hidden');
})