$(document).ready(function () {

    if (sessionStorage.getItem('page')) {
        setPage(sessionStorage.getItem('page'));
    }else{
        setPage('main');
    }

    if (sessionStorage.getItem('page')=='linea') {
        $('#btn_linea').parent().addClass("hovered");
    }else if(sessionStorage.getItem('page')=='catvir'){
        $('#btn_catvir').parent().addClass("hovered");
    }else if(sessionStorage.getItem('page')=='contacto'){
        $('#btn_contacto').parent().addClass("hovered");
    }else{
        $('.btn-group').removeClass("hovered");
    }

    function setPage(page) {
        $('.contenido-pagina').empty();
        $('.contenido-pagina').load( page + '.html' );
        var breadcrumb_text=""
        if (page == 'linea') {
            breadcrumb_text="/ Línea Temporal"
        }
        $("#breadcrumb").text(breadcrumb_text);
        
    }  
    
    $('#btn_linea').on('click', function (e) {
        e.preventDefault();
        $('.btn-group').removeClass("hovered");
        $('#btn_linea').parent().addClass("hovered");
        sessionStorage.setItem('page', 'linea');
        setPage('linea');
        location.reload();
    })
    $('#btn_catvir').on('click', function (e) {
        e.preventDefault();
        $('.btn-group').removeClass("hovered");
        $('#btn_catvir').parent().addClass("hovered");
        sessionStorage.setItem('page', 'main');
        setPage('main');
        location.reload();
    })
    $('#inicio').on('click', function (e) {
        e.preventDefault();
        $('.btn-group').removeClass("hovered");
        sessionStorage.setItem('page', 'main');
        setPage('main');
        location.reload();
    })

})