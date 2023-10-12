$(function(){
    $('.mode').click(function(){
        $(this).toggleClass('on');
        $('button.top').toggleClass('on');
        $('body').toggleClass('on');
        $('section').toggleClass('on');
        $('footer').toggleClass('on');
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() > $('.resume').offset().top) {
            $('button.top').fadeIn();
        } else {
            $('button.top').fadeOut();
        };
    });

    $('button.top').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 400);
    });

});// jquery end