$(document).ready(function () {
    $('.btn-group').removeClass("hovered");
    $('#btn_contacto').parent().addClass("hovered");
    $('#container_mainmenu_mobil .btn-group').removeClass("hovered");
    $('#container_mainmenu_mobil #btn_contacto').parent().addClass("hovered");
    setTimeout(function(){ footerTop(); }, 300);
    
    function footerTop() {
        var aux =$(".banner-principal").height();
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