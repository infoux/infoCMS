
    function viewMode() {
    
        if($(window).width() < 1200) {
            $("body").removeClass("pc");
            $("body").addClass("mobile");
        } else {

            $("body").addClass("pc");
            $("body").removeClass("mobile");
        }

    }
    $(window).resize(function(){
        viewMode();
    });


$(document).ready(function () {

    viewMode();




    $("nav#main-menu h3").each(function () {
        if ($(this).parent().find("ul").length) {
            $(this)
                .find("a")
                .attr("href", "#");
            console.log("sdf");
        }
    })

    $("#header button.menu").on("click", function () {
        $("body").toggleClass("menuToggle");
    });

    $("nav#main-menu h3").on("click", function () {
        $("nav#main-menu ul li").removeClass("active");
        $(this).parent().addClass("active");
        $("body.pc").removeClass("menuToggle");
    });

    



});
