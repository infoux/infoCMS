
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
        // var slickgo = $("div.item.on").next();
        // $('.slick-tabs').slick("slickGoTo", slickgo);
    });


$(document).ready(function () {

    viewMode();




    $('.slick-tabs').slick({
                
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow:".slick-left",
        nextArrow:".slick-right",
        infinite: true,
        focusOnSelect: true,

        responsive: [
            {
            breakpoint: 1199,
                settings: {
                    slidesToShow: 4
                }
            }
            

            
        ]
    });


    $("nav#main-menu h3").each(function () {
        if ($(this).parent().find("ul").length) {
            $(this)
                .find("a")
                .attr("href", "#");
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
