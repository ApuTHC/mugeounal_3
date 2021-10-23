$(document).ready(function () {

    setTimeout(function(){ footerTop(); }, 300);
    
    function footerTop(params) {
        var aux =$(".elements").offset().top+$(".elements").height();
        $('footer').css('top',aux+65);
        $('.footer-banner').css('top',aux);
    }
    
    $(window).resize(function () { 
        footerTop();
    });
    $(window).scroll(function () { 
        footerTop();
    });

    
})