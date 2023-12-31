$(document).ready(function() {
    $('#kid_type').click(function() {
        alert('Режим для детей предусматривает то, чтобы никакой малыш случайно не поцарапался об острые края блоков :)');
        $("#draggable").show();
        $(document).on('mousemove', function(e) {
            $('#draggable').css({'left': event.clientX - $('#draggable').width() / 2 + 'px', 'top': event.clientY - $('#draggable').height() /2 + 'px' });
        });
    });
    $('#icon_yarik').click(function(){
        alert('я - фиолетовый');
    });
    $('#rescue_yarik').click(function() {
        $(this).text('СПАСТИ!');
        var yarik_lvl = 50;
        $(this).unbind();
        $(this).click(function() {
            yarik_lvl += 2;
        });

        function yarik_down() {
          setTimeout(function() {
            console.log(yarik_lvl);
            $('#yarik_before').animate({ 'bottom': yarik_lvl - 50}, 1);
            yarik_lvl -= 1;
            if (yarik_lvl > 50) yarik_lvl = 50;
            if (50 > yarik_lvl && yarik_lvl >= 0) $('#aside_left_top_panel').html('<div style="font-weight:300;font-size:20px;">МЫ ВЫТАЩИМ ЕГО!</div>');
            if (0 > yarik_lvl && yarik_lvl >= -50) $('#aside_left_top_panel').html('<div style="font-weight:400;font-size:24px;">ОН УШЁЛ ГЛУБЖЕ!</div>');
            if (-50 > yarik_lvl && yarik_lvl >= -120) $('#aside_left_top_panel').html('<div style="font-weight:700;font-size:28px;">БЫСТРЕЕЕЕ!</div>');
            if (-120 > yarik_lvl && yarik_lvl >= -190) $('#aside_left_top_panel').html('<div style="font-weight:800;font-size:35px;">НЕЕЕЕЕЕЕЕЕТ!</div>');

            if (yarik_lvl >= -191) yarik_down();

            else {
                $('#rescue_yarik').text('ээ, ну ладно');
                $('#rescue_yarik').unbind();
                $('#aside_left_top_panel').text('мдаааааа, чел... Мжт быть есть способ спасти его?!?!?');
            }
          }, 30)
        }

        yarik_down();
    });
    $('#scary_button').click(function() {

        $('#body').prepend('<div id="all_black" style="background:black;position:fixed;width:110%;height:110vh;z-index:3"></div><img class="center_absolute" style="z-index:4;position:fixed;width:60%;" id="horror_gif" src="img/horror.gif">')
        var sound = document.getElementById("aaaaaaa_krik");
        sound.play();
        $('#all_black').click(function() {
            sound.pause();
            sound.currentTime = 0;
            $('#all_black').remove();
            $('#horror_gif').remove();
        });
    });
    $("#catya").click(function() {
        var sound = document.getElementById("dada");
        sound.play();
    });
});