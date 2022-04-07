$(document).ready(function () {
    
    footerTop();
    $(".lineamenu").css('padding-right',0);
    $(".lineaindice h4").css('margin-left', '-60px');
    $('.btn-group').removeClass("hovered");
    $('#btn_linea').parent().addClass("hovered");
    $('#container_mainmenu_mobil .btn-group').removeClass("hovered");
    $('#container_mainmenu_mobil #btn_linea').parent().addClass("hovered");
    $.each($('a.disabled'), function(index, value) {
        $(this).css('pointer-events','none');
        $(this).css('cursor','not-allowed');
    });
    
    $(window).scroll(function () { 
        linea();
        footerTop();
        if ($(window).scrollTop()<$("header").height() || $(window).scrollTop()>$(".footer-banner").offset().top-650) {
            $(".lineamenu").css('padding-right',0);
            $(".lineaindice h4").css('margin-left', '-60px');
        }else{
            $(".lineamenu a").css('margin-left', '-60px');
            $(".lineamenu").css('padding-right','45px');
            $(".lineaindice h4").css('margin-left', 0);
        }         
        
    });
    
    $(window).resize(function () { 
        linea();
        footerTop();
    });

    function linea(){
        if($(window).scrollTop() >= $(".linea1").offset().top-300 ){
            $(".gotop").css('margin-right', '0px');
        }
        if ($(window).scrollTop() <= $(".linea1").offset().top-500) {
            $("#banner").css('background-image', 'url("img/images/grupo.jpg")');
            $(".gotop").css('margin-right', '-60px');
        }
        else if ($(window).scrollTop() >= $(".linea1").offset().top-300 && $(window).scrollTop() <= $(".linea2").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea1.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea2").offset().top-300 && $(window).scrollTop() <= $(".linea3").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea2.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea3").offset().top-300 && $(window).scrollTop() <= $(".linea4").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea3.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea4").offset().top-300 && $(window).scrollTop() <= $(".linea5").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea4.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea5").offset().top-300 && $(window).scrollTop() <= $(".linea6").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea5.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea6").offset().top-300 && $(window).scrollTop() <= $(".linea7").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea6.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea7").offset().top-300 && $(window).scrollTop() <= $(".linea8").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea7.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea8").offset().top-300 && $(window).scrollTop() <= $(".linea9").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea8.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea9").offset().top-300 && $(window).scrollTop() <= $(".linea10").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea9.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea10").offset().top-300 && $(window).scrollTop() <= $(".linea11").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea10.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea11").offset().top-300 && $(window).scrollTop() <= $(".linea12").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea11.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea12").offset().top-300 && $(window).scrollTop() <= $(".linea13").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea12.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea13").offset().top-300 && $(window).scrollTop() <= $(".linea14").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea13.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea14").offset().top-300 && $(window).scrollTop() <= $(".linea15").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea14.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea15").offset().top-300 && $(window).scrollTop() <= $(".linea16").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea15.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea16").offset().top-300 && $(window).scrollTop() <= $(".linea17").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea16.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea17").offset().top-300 && $(window).scrollTop() <= $(".linea18").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea17.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea18").offset().top-300 && $(window).scrollTop() <= $(".linea19").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea18.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea19").offset().top-300 && $(window).scrollTop() <= $(".linea20").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea19.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea20").offset().top-300 && $(window).scrollTop() <= $(".linea21").offset().top-300) {
            $("#banner").css('background-image', 'url("img/images/linea20.jpg")');
        }
        else if ($(window).scrollTop() >= $(".linea21").offset().top-300 && $(window).scrollTop() <= $(".linea21").offset().top+1000) {
            $("#banner").css('background-image', 'url("img/images/linea21.jpg")');
        }
    }

    function footerTop() {
        var aux =$(".timeline-main").height()+$(".timeline-main").offset().top+150;
        $('.footer-banner').css('top',aux-68);
        $('footer').css('top',aux);
    }

    $('.gotop').on('click', function (e) {
        e.preventDefault();
        if ($(window).scrollTop()!=0) {
            $('html, body').stop().animate({scrollTop:0},1000);
        }
    })

    $(".lineamenu").hover(function () {
        $(".lineamenu a").css('margin-left', 5);
        $(".lineamenu").css('padding-right', 5);
        $(".lineaindice h4").css('margin-left', '-60px');
            
    }, function () {
        $(".lineamenu a").css('margin-left', '-60px');
        $(".lineamenu").css('padding-right','45px');
        $(".lineaindice h4").css('margin-left', 0);
    }
    );

    $('.lineamenu a').on('click', function (e) {
        e.preventDefault();
        var seccion = $($(this).attr('href')).offset().top; //Distancia entre el top y el elemento
        if ($(this).attr('href') == '#linea0' ) {
            seccion= seccion- 250;
        }else if($(window).width()<559) {
            seccion= seccion - 200;
        }else if($(window).width()>=559) {
            seccion= seccion - 67;
        }
        $('html, body').stop().animate({scrollTop:seccion},1000);
    });

});