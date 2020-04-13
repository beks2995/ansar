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



var map,
    myDivIcon;
DG.then(function () {
    map = DG.map('map', {
        center: [42.875276, 74.576069],
        zoom: 18
    });
    myIcon = DG.icon({
        iconUrl: 'https://s8.hostingkartinok.com/uploads/images/2020/04/889691442ceed02b985a2af9b657d8b3.png',
        iconSize: [35, 48]
    });
    DG.marker([42.87558, 74.57621], {
        icon: myIcon
    }).addTo(map);
});
