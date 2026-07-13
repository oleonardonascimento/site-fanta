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
        markers: false, 
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
        top: '110%', // Move the element with id fanta for 120% to top
        rotate: '530deg', //
        left:'70%',
    },
    'orange'
    // Name that's animation's session with 'orange' for sync
);


tl.to(
    '#leaf2',
    {
        top: '110%', // Move the element with id fanta for 120% to top
        rotate: '530deg', //
        left:'0%',
    },
    'orange'
    // Name that's animation's session with 'orange' for sync
);

//Create other timeline

var tl2 = gsap.timeline ({
    scrollTrigger: {
        trigger: '.three', 
        start: '0% 95%',
        end: '20% 50%',
        scrub: true,
        // Depuration
        markers: false, 
    },
});

tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);


tl2.from(
    '#cocacola',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '.lemon2',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#pepsi',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.to(
    '#orange-cut',
    {
        width: '18%',
        left: '42%',
        top: '204%',
    },
    'ca'
);

tl2.to(
    '#fanta',
    {
        width: '35%',
        left: '33%',
        top: '210%',
    },
    'ca'
);