$(function () {


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        $('.main_visual .slide_num span').text(c ? (c + 1) : 1);
        $('.main_visual .slide_num strong').text(s.slideCount);

        console.log(s.slideCount)

        $('.main_visual .menu li').eq(0).addClass('on');
        $('.main_visual .menu li').eq(c).addClass('on').siblings().removeClass('on');
    });


    $('.main_slide').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        fade: true,
        arrows: false,

    });

    $('.main_visual .arrows .left').on('click', function (e) {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_visual .arrows .right').on('click', function (e) {
        $('.main_slide').slick('slickNext')
    });

    $('.main_visual .menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index(); // 0,1,2
        $('.main_slide').slick('slickGoTo', idx)
    })



    $('.product_slide').slick({
        slidesToShow: 1,
        asNavFor: ".pic_slide",
        focusOnSelect: true,
        arrows: false,
        centerMode: true,
        centerPadding: '150px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]


    });

    $('.product_slide02').slick({
        slidesToShow: 3,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]


    });

    $('.main_big_product .arrows .left').on('click', function () {
        $('.product_slide02').slick('slickPrev');
    })
    $('.main_big_product .arrows .right').on('click', function () {
        $('.product_slide02').slick('slickNext');
    })



    $('.pic_slide').slick({
        vertical: true,
        asNavFor: ".product_slide",
        arrows: false,

    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    })

    $('.scr').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st }, 600)
    });

    $('.history_menu li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.history_content li').eq(idx).addClass('on').siblings().removeClass('on');
    })


})