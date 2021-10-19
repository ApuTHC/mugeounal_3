$(document).ready(function () {
    
    var aux=0;
    setInterval(function () {
        if (aux==0) {
            $("#main-text").fadeToggle(1000, function () {
                $("#main-text").css('display','none'); 
            });
            setTimeout(function(){
                $("#banner").css('background-image', 'url("img/images/36.jpg")');
                $("#text").html('¡Conoce Nuestra <span>Línea</span> Temporal!');
                $("#main-text").css('display','block'); 
            }, 1000);
            $("#main-text").fadeToggle(1000);
            aux++;
        }
        else if (aux==1) {
            $("#main-text").fadeToggle(1000, function () {
                $("#main-text").css('display','none'); 
            });
            setTimeout(function(){
                $("#banner").css('background-image', 'url("img/images/museo2018.jpg")');
                $("#text").html('Ven al <span>Museo</span> ¡Visitanos!');
                $("#main-text").css('display','block'); 
            }, 1000);
            $("#main-text").fadeToggle(1000);
            aux++;
        }
        else if (aux==2) {
            $("#main-text").fadeToggle(1000, function () {
                $("#main-text").css('display','none'); 
            });
            setTimeout(function(){
                $("#banner").css('background-image', 'url("img/images/35.jpg")');
                $("#text").html('¡Admira Nuestro <span>Cátalogo</span> Virtual!');
                $("#main-text").css('display','block'); 
            }, 1000);
            $("#main-text").fadeToggle(1000);
            aux=0;
        }
    }, 7000);

});