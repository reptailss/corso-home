const sliders = document.querySelectorAll('.slide');

sliders.forEach((el) => {
    let swiper = new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: el.querySelector('.slide__pagination'),
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
        },
        slideClass: 'slide__card',
        wrapperClass: 'slide__wrap',
        containerClass: 'slide__container',
        autoplay: {
            delay: 5000,
        }

    });
});
$(function() {
    $('.burger').on('click', function() {
        $(this).find('.burger-span').toggleClass('active');
        $('.header__menu').toggleClass('active');
    })
    $(function() {
        var navMenu = $(".nav-menu"),
            b = 700;
        $(".submenu", navMenu)
            .each(function(a, c) {
            $(c).parent().on({
                mouseenter: function() {
                    $(c).stop(!0).delay(b).fadeIn(200);
                    b = 100
                },
                mouseleave: function() {
                    $(c).stop(!0).delay(300).fadeOut(200)
                }
            })
        }).hide();

        navMenu.on({
            mouseleave: function() {
                b = 200
            }
        })
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>140){
            $('.header-js').addClass('fixed-on');
        }
        else if ($(this).scrollTop()<140){
            $('.header-js').removeClass('fixed-on');
        }
    });
});