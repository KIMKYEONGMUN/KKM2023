$(function(){
    $('.web .item span').click(function(){
        if ($(this).text() == 'memo ∨') {
            $(this).next('div').stop().fadeIn();
            $(this).text('memo x');
            $(this).addClass('on');
        } else {
            $(this).next('div').stop().fadeOut();
            $(this).text('memo ∨');
            $(this).removeClass('on');
        };
    });

    $('.web .index > div').click(function(){
        $('.web .index > div').removeClass('on');
        $(this).addClass('on');
        $('.web .list .item').removeClass('on');
        $('.web .list .item').eq($(this).index()).addClass('on');
    });

    $('.resume .attendance').click(function(){
        $('#wrap').addClass('on');
        $('.pop').addClass('on');
        $('.pop').attr('src', 'img/출결_231012.jpg');
        $('.pop').attr('alt', '출결');
    });

    $('.graphic .item').click(function(){
        $('#wrap').addClass('on');
        $('.pop').addClass('on');
        $('.pop').attr('src', $(this).find('img').attr('src'));
        $('.pop').attr('alt', $(this).find('img').attr('alt'));
    });

    $('.pop').click(function(){
        $('#wrap').removeClass('on');
        $(this).removeClass('on');
    });

    $(document).mouseup(function (e) {
        if ($('.pop').has(e.target).length === 0) {
          $('#wrap').removeClass('on');
          $('.pop').removeClass('on');
        };
      });
    
    $('footer p.contact').click(function(){
        $('html, body').animate({
            scrollTop: $('.resume').offset().top
        }, 400);
    });

});// jquery end