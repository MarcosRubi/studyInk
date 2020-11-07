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

//COUNT 
$(function () {
    function countAnimated(id, end) {
        let start = 0;
        let speed = 3;
        setInterval(() => {
            if (start < end) {
                start++
                $("#count-" + id).html(start);
            }
        }, speed);
    }
    countAnimated(1, 300);
    countAnimated(2, 250);
    countAnimated(3, 320);
    countAnimated(4, 423);
});