$(function () {


    // class 각각에 scroll event에 따라 toggle Class 하기.
    // offset().top --> Y축 위치값 구하기.

    $(window).on('load scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        $('.sec').each(function () {
            if (sct > $(this).offset().top - 200) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        })
    })



})