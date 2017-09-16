var offset = $('.meuMenu').offset().top;
var meuMenu = $('.meuMenu'); // guardar o elemento na memoria para melhorar performance
$(document).on('scroll', function () {
    if (offset <= $(window).scrollTop()) {
        meuMenu.addClass('fixar');
    } else {
        meuMenu.removeClass('fixar');
    }
});

/* EFEITO SCROLL SUAVE */
$(function () {
    var $doc = $('html, body');
    $('.ancora').click(function () {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
})

/* CARREGAMENTO DA PAGINA */

$(window).on('load',function () {
      $("#carregando").fadeOut(1000);
      $("#fullPage").fadeIn(1000);
      $("html,body").css("overflow","initial");
}); 