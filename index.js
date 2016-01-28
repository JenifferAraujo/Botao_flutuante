# Botao_flutuante
Erro no click do botão

$(document).ready(function() {
    $(".button-floating").click(function() {
        var $wrapper = $("#wrapper");

        if (!$wrapper.hasClass("button-floating-clicked"))
            $wrapper.toggleClass("button-floating-clicked-out");

        $wrapper.toggleClass("button-floating-clicked");

        $(".button-sub").click(function() {
            var color = $(this).data("color");

            $wrapper.attr("class", "button-floating-clicked\
                                    button-floating-clicked-out");
            $wrapper.addClass("button-sub-" + color + "-clicked");
        });
    });
});

