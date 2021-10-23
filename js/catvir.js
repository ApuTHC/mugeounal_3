$(document).ready(function () {

    graficar("nativos");
    seleccionar("nativos");
    setTimeout(function(){ footerTop(); }, 100);
    $('.btn-group').removeClass("hovered");
    $('#btn_catvir').parent().addClass("hovered");
    $('#container_mainmenu_mobil .btn-group').removeClass("hovered");
    $('#container_mainmenu_mobil #btn_catvir').parent().addClass("hovered");
    
    function footerTop(params) {
        var aux = $(".catvir-body").offset().top + $(".catvir-body").height()+50;
        $('footer').css('top',aux+65);
        $('.footer-banner').css('top',aux);
    }
    
    $(window).resize(function () { 
        $('.control-modal').height($('.carousel-item.active .img-modal').height());
        footerTop();
    });
    $(window).scroll(function () { 
        $('.control-modal').height($('.carousel-item.active .img-modal').height());
        footerTop();
    });

    $('#catvirModal').on('show.bs.modal', function (event) {
        $('#services').hide();
        $('#carousel-modal .carousel-inner .carousel-item').remove();
        $('#carousel-modal .carousel-indicators').empty();
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        var modal = $(this)
        var dir=recipient.split(',');
        modal.find('.modal-title').text(minerales[dir[0]][dir[1]]['name1']);
        for (let i = 0; i < minerales[dir[0]][dir[1]]['modal'].length; i++) {
            var clase='carousel-item';
            var clase1='';
            if (i==0) {
                clase= clase + ' active';
                clase1= clase1 + 'active';
            }
            $('#carousel-modal .carousel-inner .carousel-control-prev').before(
                $('<div>',{'class':clase}).append(
                    $("<img>",{
                        src: minerales[dir[0]][dir[1]]['modal'][i]['img1'],
                        class: "d-block w-100 img-modal"                        
                    }),
                    $('<div>',{'class':'modal-descrip'}).append(
                        $('<h2>').text(minerales[dir[0]][dir[1]]['modal'][i]['name1']),
                        $('<h3>').html(minerales[dir[0]][dir[1]]['modal'][i]['name2']),
                        $('<p>').text('Clasificación de Strunz: '+minerales[dir[0]][dir[1]]['modal'][i]['strunz']),
                        $('<p>').text('Muestra: '+minerales[dir[0]][dir[1]]['modal'][i]['num_muestra']),
                        $('<p>').text('Lugar de Origen: '+minerales[dir[0]][dir[1]]['modal'][i]['lugar_recoleccion']),
                        $('<p>').text(minerales[dir[0]][dir[1]]['modal'][i]['como_ingresa']),
                        $('<p>').text('Año de Ingreso: '+minerales[dir[0]][dir[1]]['modal'][i]['año_ingreso'])
                    )
                )
            );  
            $('#carousel-modal .carousel-indicators').append(
                $('<li>',{'class':clase1})
                .attr( "data-target","#carousel-modal")
                .attr("data-slide-to", ""+i)
                .css("background-image",'url('+minerales[dir[0]][dir[1]]['modal'][i]['img2']+ ')')
            );  
        }
    });
    $('#catvirModal').on('shown.bs.modal', function (event) {
        $('.control-modal').height($('.carousel-item.active .img-modal').height());
    });
    $('#catvirModal').on('hide.bs.modal', function (event) {
        $('#services').show();
    });

    var clases = $('.catvir-menu span');
    for (let i = 0; i < clases.length; i++) {
        $(clases[i]).click(function (e) { 
            e.preventDefault();
            $('#carousel-catvir').fadeOut( 200, function() {
                $('#carousel-catvir .carousel-inner .carousel-item').remove();
                $('#carousel-catvir .carousel-indicators').empty();
                $('#carousel-modal .carousel-inner .carousel-item').remove();
                $('#carousel-modal .carousel-indicators').empty();
                graficar(clases[i].id);
                seleccionar(clases[i].id)
                setTimeout(function(){ footerTop(); }, 100);
            });
            
        });        
    }

    function seleccionar(id){
        $('.catvir-menu span').removeClass("hovered");
        $("#"+id).toggleClass("hovered");
        $(".catvir-menu span").prop('disabled', false);
        $("#"+id).prop('disabled', true);
    }

    function graficar(id) {
        for (let i = 0; i < minerales[id].length; i++) {
            var clase='carousel-item';
            var clase1='';
            if (i==0) {
                clase= clase + ' active';
                clase1= clase1 + 'active';
            }
            $('#carousel-catvir .carousel-inner .carousel-control-prev').before(
                $('<div>',{'class':clase}).append(
                    $("<img>",{
                        src: minerales[id][i]['img1'],
                        class: "d-block w-100"                        
                    }).attr("data-toggle","modal")
                      .attr("data-target","#catvirModal")
                      .attr("data-whatever", id+','+i),
                    $('<div>',{'class':'carousel-caption'}).append(
                        $('<h5>').text(minerales[id][i]['name1']),
                        $('<h4>',{'class':'d-table'}).html(minerales[id][i]['name2'])
                    )
                )
            );  
            $('#carousel-catvir .carousel-indicators').append(
                $('<li>',{'class':clase1})
                .attr( "data-target","#carousel-catvir")
                .attr("data-slide-to", ""+i)
                .css("background-image",'url('+minerales[id][i]['img2']+ ')').append(
                    $("<span>").text(minerales[id][i]['name1'])
                )
            );  
        }
        setTimeout(function(){ $('#carousel-catvir').fadeIn(200); }, 100);
        
    }

});