const scrollRevealItems = document.querySelectorAll("*[data-reveal]");


const observer = new IntersectionObserver(entries =>
    {
        entries.forEach(entry => 
            {
                entry.target.classList.toggle("active", entry.isIntersecting);
                if(entry.isIntersecting)
                {
                    observer.unobserve(entry.target);
                }
            })
    })

scrollRevealItems.forEach(item => observer.observe(item));

    /* data-reveal=top => {duration: 3000, delay:400} .home__data
       data-reveal=bottom
       data-reveal=left
       data-reveal=right
    */