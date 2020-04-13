// открыть форму
$('.js-button-campaing').click(function(){
    $('main').addClass('active');
    $('.js-overlay-campaing').fadeIn();
    $('.js-overlay-campaing').addClass('disabled');
});

// закрыть форму крестиком
$('.js-close-campaing').click(function(){
    $('.js-overlay-campaing').fadeOut();
    $('main').removeClass('active');
});


// открыть сообщение
$('.js-submit-campaing').click(function(){
    $('main').addClass('active');
    $('.js-overlay-campaing').css('display', 'none');
    $('.js-message-overlay-campaing').fadeIn();
    $('.js-message-overlay-campaing').addClass('disabled');
    $('overlay').css('display', 'none');
});

// закрыть сообщение крестиком
$('.js-close-message-campaing').click(function(){
    $('.js-message-overlay-campaing').fadeOut();
    $('main').removeClass('active');
});


$('.slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

// Navigation active state on scroll
var nav_sections = $('section');
var main_nav = $('.collapse, .bottom-list');

$(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 300;

    nav_sections.each(function() {
        var top = $(this).offset().top,
            bottom = top + $(this).height();

        if (cur_pos >= top && cur_pos <= bottom) {
            if (cur_pos <= bottom) {
                main_nav.find('li').removeClass('active');
            }
            main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
        if (cur_pos < 300) {
            $(".collapse ul:first li:first").addClass('active');
        }
    });
});

$("input[type=tel]").mask("0(999) 99-99-99");
