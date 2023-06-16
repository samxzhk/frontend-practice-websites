const observer = new IntersectionObserver(entries =>
    {
        entries.forEach(entry =>
            {
                entry.target.classList.toggle('active', entry.isIntersecting);
                if(entry.isIntersecting)
                {
                    observer.unobserve(entry.target);
                }
            })
})

const revealItems = document.querySelectorAll('.top-reveal-item, .left-reveal-item, .right-reveal-item')

revealItems.forEach(item => observer.observe(item));

