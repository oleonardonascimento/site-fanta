// Create a timeline in GSAP With sync animations with a scroll
// Criação de uma Timeline  do GSAP com animaç~eos sincronizadas com o scroll

// tl = timeline

var tl = gsap.timeline ({
    scrollTrigger: {
        trigger: '.two', 
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        // Depuration
        markers: true, 
    },
});

tl.to(
    '#fanta',
    {
        top: '120%', // Move the element with id fanta for 120% to top
        left: '0%',
    },
    'orange'
    // Name that's animation's session with 'orange' for sync
);

tl.to(
    '#orange-cut',
    {
        top: '160%', // Move the element with id fanta for 120% to top
        left: '23%', //
        right:'10%',
    },
    'orange'
    // Name that's animation's session with 'orange' for sync
);



tl.to(
    '#orange',
    {
        width: '15%', // Move the element with id fanta for 120% to top
        top: '170%', //
        right:'10%',
    },
    'orange'
    // Name that's animation's session with 'orange' for sync
);



tl.to(
    '#leaf1',
    {
        top: '210%', // Move the element with id fanta for 120% to top
        rotate: '130deg', //
        left:'70%',
    },
    'orange'
    // Name that's animation's session with 'orange' for sync
);
