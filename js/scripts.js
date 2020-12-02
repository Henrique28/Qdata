
    (function ($) {
    "use strict"; 

    
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    
    $("body").scrollspy({
        target: "#cabecalho",
        offset: 74,
    });

    
    var navbarCollapse = function () {
        if ($("#cabecalho").offset().top > 100) {
            $("#cabecalho").addClass("navbar-shrink");
        } else {
            $("#cabecalho").removeClass("navbar-shrink");
        }
    };
    
    navbarCollapse();
    
    $(window).scroll(navbarCollapse);
})(jQuery); 
