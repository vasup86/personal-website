$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1,
        },
        900:{
            items: 2,
        },
        1400:{
            items: 3,
            loop: false,
        }
    }
});