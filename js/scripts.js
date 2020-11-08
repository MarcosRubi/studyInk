window.sr = ScrollReveal();
sr.reveal('.toTop', {
    duration: 2000,
    origin: 'top',
    distance: '100px'
});
sr.reveal('.toLeft', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
});
sr.reveal('.toRight', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.toBottom', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
});
sr.reveal('.reveal', {
    duration: 2000,
    origin: 'bottom'
});

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    //COUNT 
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    if (scroll > 10) {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.trunc(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    count.innerText = target;
                }
            }
            updateCount();
        });
    }
    //MENU
    const menu = $('#menu');
    if (scroll > 10) {
        menu.addClass("navbar-dark bg-dark py-2");
        menu.removeClass("navbar-light bg-light py-4");
    } else {
        menu.addClass("navbar-light bg-light py-4");
        menu.removeClass("navbar-dark bg-dark py-2");
    }
});
