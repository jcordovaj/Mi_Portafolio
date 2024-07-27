$(document).ready(function() {
    // Efecto de desplazamiento suave al hacer clic en las flechas (opcional)
    $('.badges-container').on('click', '.badge', function() {
        $(this).parent().animate({
            scrollLeft: $(this).offset().left - $(this).parent().offset().left
        }, 500);
    });
});