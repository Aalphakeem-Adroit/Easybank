$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.header-links').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('.header-links').removeClass('nav-toggle');

        if($(window).scrollTop() > 68){
            $('header .header-2').addClass('header-active');
        }else{
            $('header .header-2').removeClass('header-active');
        }

        $('section').each(function(){

            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.header-links li').removeClass('active');
                $('.header-links').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

});