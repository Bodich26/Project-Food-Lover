$(function(){
    $('.mobile__btn').click(function (event) {
        $('.mobile__btn, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.menu li a').click(function () {
        $('body').removeClass('lock');
        $('.menu').toggleClass('open');
        $('.mobile__btn, .menu').removeClass('active');
    });


    $('.header__button').click(function () {
        $('.popup').css('display', 'block');
    });
    $('.popup__close').click(function () {
        $('.popup').css('display', 'none');
    });


    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        }
    });
});

$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top-90
        }, 500);
    });
});


$(window).scroll(function () {
    if ($(window).scrollTop() > 40){
        $('.header__top').addClass('menu-fixed');
        $('.menu').addClass('menu-transform');
        $('.logo').addClass('logo-transform');
        $('.menu__link').addClass('menu-color');
    }
    else {
        $('.header__top').removeClass('menu-fixed');
        $('.menu').removeClass('menu-transform');
        $('.logo').removeClass('logo-transform');
        $('.menu__link').removeClass('menu-color');
    }
    
    if ($(this).scrollTop() > 200){
        $('#scroller').fadeIn();
    }
    else {
        $('#scroller').fadeOut();
    }
    if($(window).width() < 769) {
        $('.header__top').removeClass('menu-fixed');
    }
});
