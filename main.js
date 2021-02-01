$(function() {

    var headerCross = $('#header_cross');

    headerCross.click(function(){
        var faTimes = $('.fa-times');
        var faBars = $('.fa-bars');
        var header_menu = $('#header_menu');
        var display = header_menu.css('display');

        header_menu.toggle('slide');
        
        if(display === 'none'){
            faTimes.show();
            faBars.hide();
        }else{
            faTimes.hide();
            faBars.show();
        }
    });

    var topBtn = $('#top_btn')

    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            topBtn.fadeIn();
        }else{
            topBtn.fadeOut();
        };
    });

    topBtn.click(function(){
        $('html,body').animate({
            scrollTop : 0
        },500);
        return false;
    });

    $(window).scroll(function(){
        $('.scroll').each(function(){
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if(scroll > target - windowHeight + 100){
                $(this).addClass('animated');
            }else{
                $(this).removeClass('animated');
            }
        });
    });

    $(window).on('load',function(){
        $('body').fadeIn('slow');
    })

    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href =="" ? 'html' : href);
        var position = target.offset().top;

        $("html, body").animate({
            scrollTop : position},speed, "swing");
            return false;
    });
});