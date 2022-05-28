$(function () {
    MobNav.init({
        openBtn: '.js-open-menu',
        headerId: 'header',
        closeLink: 'a.js-anchor, a.js-open-popup'
    });

    $('.js-introduce-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        responsive: [{
            breakpoint: 451,
            settings: {
                arrows: false,
                dots: true,
            }
        }]
    })

    $('.js-about-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 451,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })

    let footer = $('.footer')
    
    $(window).on('scroll', function() {
        let coordOfOpacity = footer.offset().top
        if (window.scrollY + window.innerHeight > coordOfOpacity && window.innerWidth < 1000) {
            $('.header__phone').fadeOut(100)
        } else {
            $('.header__phone').fadeIn(100)
        }
    })

})