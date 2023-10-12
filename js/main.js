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

    $('.graphic .item').click(function(){
        $('#wrap').addClass('on');
        $(this).addClass('on');
        $('.graphic .pop').addClass('on');
        $('.graphic .pop').attr('src', $(this).find('img').attr('src'));
        $('.graphic .pop').attr('alt', $(this).find('img').attr('alt'));
    });

    $('.graphic .pop').click(function(){
        $('#wrap').removeClass('on');
        $(this).removeClass('on');
    });

    $(document).mouseup(function (e) {
        if ($('.graphic .pop').has(e.target).length === 0) {
          $('#wrap').removeClass('on');
          $('.graphic .pop').removeClass('on');
        };
      });

});// jquery end